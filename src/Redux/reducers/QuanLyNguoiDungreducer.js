import { DANGNHAP } from "../../utils/settings";
import { USER_LOGIN, ACCESSTOKEN, SET_THONG_TIN_NGUOI_DUNG, GET_DANH_SACH_NGUOI_DUNG } from './../../utils/settings';
let user = null;
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: user,
    thongTinNguoiDung : {},
    danhSachNguoiDung : []
}

export const QuanLyNguoiDungReducer = (state = stateDefault,action)=>{
    switch (action.type) {

        case DANGNHAP : {
            state.userLogin = action.payload;
            localStorage.setItem(USER_LOGIN,JSON.stringify(action.payload));
            localStorage.setItem(ACCESSTOKEN,action.payload.accessToken)
            return {...state}
        }

        case SET_THONG_TIN_NGUOI_DUNG : {
            state.thongTinNguoiDung = {...action.payload}
            return {...state}
        }

        case GET_DANH_SACH_NGUOI_DUNG : {
            state.danhSachNguoiDung = [...action.payload]
            return {...state}
        }

        default:
            return {...state};
    }
}

