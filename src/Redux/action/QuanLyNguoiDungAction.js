import { qlNguoiDungService } from "../../services/QuanLiNguoiDungService";
import { DANGNHAP, HIDE_API } from "../../utils/settings";
import { history } from './../../App';
import { SET_THONG_TIN_NGUOI_DUNG, LOADING_API, GET_DANH_SACH_NGUOI_DUNG } from './../../utils/settings';
import Swal from 'sweetalert2'
import { displayLoadingAction, hideLoadingAction, loadingApiAction } from "./LoadingAction";

export const DangNhapAction =(user)=>{
    return async (dispatch)=>{
        try {
            const result = await qlNguoiDungService.dangNhap(user);
            if(result.data.statusCode === 200){
                dispatch({
                    type:DANGNHAP,
                    payload :result.data.content
                })
                history.goBack();
            }
            
        } catch (error) {
            console.log({error});
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response?.data.content}`,
                footer : '<img class="w-25" src="https://themes.themewild.com/vidstream/assets/images/logo.png" />'
              })
        }
    }
}


export const layThongTinNguoiDungAction =()=>{
    return async (dispatch)=>{
        try {
            await dispatch({
                type : LOADING_API
            })
            const result = await qlNguoiDungService.layThongTinNguoiDung();
            console.log({result});
            if(result.data.statusCode === 200){
                await dispatch({
                    type:SET_THONG_TIN_NGUOI_DUNG,
                    payload :result.data.content
                })
            }
            await  dispatch({
                type : HIDE_API
            })
        } catch (error) {
            console.log('thonhtin',error);
            await dispatch({
                type : LOADING_API
            })
        }
    }
}

export const dangKyAction =(data)=>{
    return async (dispatch)=>{
        try {
            dispatch(displayLoadingAction)
            const result = await qlNguoiDungService.dangKy(data);
            await dispatch(hideLoadingAction)
            await Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: "Bạn đã đăng ký thành công",
                footer : 'Nhấn ok để tiếp tục'
              })
            
              history.push('/login')
        } catch (error) {
            console.log({error});
            dispatch(hideLoadingAction)
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response?.data.content}`,
              })
        }
    }
}

    export const capNhatThongTinNguoiDungAction =(data)=>{
        return async (dispatch)=>{
            try {
                dispatch(displayLoadingAction)
                const result = await qlNguoiDungService.capNhatThongTinNguoiDung(data);
                await dispatch(hideLoadingAction)
                await Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: "Bạn đã cập nhật thành công",
                    footer : 'Nhấn ok để tiếp tục'
                  })
                
            } catch (error) {
                console.log({error});
                dispatch(hideLoadingAction)
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.response?.data.content}`,
                  })
            }
        }
    }

export const layDanhSachNguoiDungAction =(tuKhoa='')=>{
    return async (dispatch)=>{
        try {
            const result = await qlNguoiDungService.layDanhSachNguoiDung(tuKhoa);
            console.log({result});
            dispatch({
                type:GET_DANH_SACH_NGUOI_DUNG,
                payload: result.data.content
            })
            await  dispatch({
                type : HIDE_API
            })
        } catch (error) {
            console.log({error});
            await  dispatch({
                type : HIDE_API
            })
        }
        }
    }

export const xoaNguoiDungAction =(taiKhoan)=>{
    return async (dispatch)=>{
        try {
            const result = await qlNguoiDungService.xoaNguoiDung(taiKhoan);
            console.log(result);
        } catch (error) {
            console.log({error});
        }
    }
}

export const themNguoiDungAction =(thongTinNguoiDung)=>{
    return async (dispatch)=>{
        try {   
            // dispatch(displayLoadingAction)
            const result = await qlNguoiDungService.themNguoiDung(thongTinNguoiDung);
            console.log({result});
            // await dispatch(hideLoadingAction)
            // await Swal.fire({
            //     icon: 'success',
            //     title: 'Oops...',
           //     text: "Bạn đã thêm người dùng thành công",
            //     footer : 'Nhấn ok để tiếp tục'
            //   })
            
            //   history.push('/admin/users')
            //   dispatch(layDanhSachNguoiDungAction())
        } catch (error) {
            console.log({error});
            // dispatch(hideLoadingAction)
            // await Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: `${error.response?.data.content}`,
            //   })
        }
    }
}