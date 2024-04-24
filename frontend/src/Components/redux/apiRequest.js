import axios from "axios";
import { logOutFailed, logOutStart, logOutSuccess, loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { deleteUserFailed, deleteUserStart, deleteUserSuccess, getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";

export const loginUser = async(user, dishpatch, navigate) => {
    dishpatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/v1/auth/login", user);
        dishpatch(loginSuccess(res.data));
        navigate("/admin"); //đổi url thành cái mình muốn
    } catch (err) {
        dishpatch(loginFailed());
    }
};

export const registerUser = async(user, dishpatch, navigate) => {
    dishpatch(registerStart());
    try {
        await axios.post("http://localhost:8000/v1/auth/register", user);
        dishpatch(registerSuccess());
        navigate("/login")
    } catch (err) {
        dishpatch(registerFailed());
    }
};

export const getAllUsers = async(accessToken, dishpatch, axiosJWT) => {
    dishpatch(getUsersStart());
    try {
        const res = await axiosJWT.get("http://localhost:8000/v1/user",{
        headers: {token: `Bearer ${accessToken}` },
        });
        dishpatch(getUsersSuccess(res.data));
    } catch (err) {
        dishpatch(getUsersFailed());
    }
}

export const deleteUser = async(accessToken, dishpatch, id) => {
    dishpatch(deleteUserStart());
    try {
        const res = await axios.delete("http://localhost:8000/v1/user/"+id,{
            headers: {token: `Bearer ${accessToken}`},
        });
        dishpatch(deleteUserSuccess(res.data));
    } catch (err) {
        dishpatch(deleteUserFailed(err.response.data));
    }
};

export const logOut = async(dishpatch,id, navigate, accessToken,) => {
    dishpatch(logOutStart());
    console.log("Err")
    try {
        await axios.post("http://localhost:8000/v1/auth/logout", id,{
            headers:{token: `Bearer ${accessToken}`}
        })
        dishpatch(logOutSuccess());
        navigate("/");
    } catch (err) {
        dishpatch(logOutFailed());
    };
};