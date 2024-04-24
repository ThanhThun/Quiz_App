const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


let refreshTokens = [];

const authController = {
    //register
    registerUser: async(req, res) => {
        //code logic tai day
        try {
            //ma hoa password
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);

            //creater new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email, // bày đặt đổi cái email chi v =)) 2 ngày đó
                password: hashed, //khuc nay goi ham ma hoa
            });

            //Save to DB
            const user = await newUser.save();
            res.status(200).json(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },


    //Generate Access token
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user.id,
            admin: user.admin
        },
        process.env.JWT_ACCESS_KEY, //access token la ngan han thoi
        { expiresIn: "30s" }
        );
    },

    //Gnerate Refresh token
    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user.id,
            admin: user.admin
        },
        process.env.JWT_REFRESH_TOKEN, //refreshToken mới là lưu dài hạn
        { expiresIn: "365d" }
        );
    },

    //Login
    loginUser: async(req, res) => {
        try {
            const user = await User.findOne({username: req.body.username})
            if(!user){ 
                return res.status(404).json("Wrong Username or Password");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if(!validPassword){
                return res.status(404).json("Wrong Password or Username");
            }
            if(user && validPassword){ 
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                
                //refreshtoken
                refreshTokens.push(refreshToken);

                //cookie
                res.cookie("refreshToken", refreshToken, {
                    httpOnly: true,
                    secure:false,
                    path: "/",
                    sameSite: "strict", //ngăn chặn tấn công
                  });

                //khúc này giấu pass nè
                const {password, ...others} = user._doc; 
                res.status(200).json({...others, accessToken});
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    //Refresh
    requesRefreshToken: async(req, res) => {

        //Lấy refreshtoken từ user
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.status(401).json("You Are Not authenticated");

        //Đặt điều kiện
        if(!refreshTokens.includes(refreshToken)){
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
            if(err){
                console.log(err);
            }

            //Lọc token
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

            // create new access token
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken); //refreshtoken
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                secure:false,
                path: "/",
                sameSite: "strict",
            });
            res.status(200).json({accessToken: newAccessToken});
        })
    },
    
    //Logout
    userLogout: async(req, res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("Log Out !")
    }
};

module.exports = authController;