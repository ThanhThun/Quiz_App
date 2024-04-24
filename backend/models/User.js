const mongoose = require("mongoose");


//Khung chua thuoc tinh user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: 4,
        maxlength: 16,
        unique: true, //tao name y chan se loi
    },
    email: { //nen lay email lam phan dang nhap
        type: String,
        require: true,
        minlength: 10,
        maxlength: 30,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 10,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    roomId:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
        }
    ]
}, {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);