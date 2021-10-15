import { qlDatVeService } from "../../services/QuanLyDatVeService";
import { DAT_VE_HOAN_TAT, DISPLAY_LOADING, GET_CHI_TIET_PHONG_VE, HIDE_API } from "../../utils/settings";
import { DAT_GHE, HIDE_LOADING, CHUYEN_TAB, LOADING_API } from './../../utils/settings';
import { ThongTinDatVe } from './../../_Core/Models/ThongTinDatVe';
import { displayLoadingAction, hideLoadingAction } from './LoadingAction';
import Swal from 'sweetalert2'
import { quanLyDatVeReducer } from './../reducers/QuanLyDatVeReducer';
import { QuanLyNguoiDungReducer } from './../reducers/QuanLyNguoiDungreducer';
import { connection } from "../../index";

export const layDanhSachPhongVeAction =(id)=>{
    return async (dispatch)=>{
        try {
                await dispatch({
                    type : LOADING_API
                })
            const result = await qlDatVeService.layDanhSachPhongVe(id);
            
            if(result.data.statusCode === 200){
                dispatch({
                    type:GET_CHI_TIET_PHONG_VE,
                    payload :result.data.content
                })
            }

            await  dispatch({
                type : HIDE_API
            })

            
        } catch (error) {
            await  dispatch({
                type : HIDE_API
            })
            console.log({error});
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe)=>{
    return async dispatch =>{
        try {

            dispatch(displayLoadingAction)

            const result = await qlDatVeService.datVe(thongTinDatVe);
            console.log(result);
            await dispatch(layDanhSachPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({
                type:DAT_VE_HOAN_TAT
            })

           
            await dispatch(hideLoadingAction)
            await Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: 'Bạn đã đặt vé thành công',
                footer: '<a href="">Why do I have this issue?</a>'
              })
            await dispatch({
                type:CHUYEN_TAB
            })
        } catch (error) {
            dispatch(hideLoadingAction)
            console.log(error.response);
        }
    }
}

export const datGheAction = (ghe,maLichChieu) => {
    return async (dispatch,getState) => {
        await dispatch({
            type:DAT_GHE,
            payload : ghe
        })

        //call api về backend
        let danhSachGheDangDat = getState().quanLyDatVeReducer.danhSachGheDangDat;
        let userLogin = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
        // connection.invoke('datGhe',userLogin,danhSachGheDangDat,maLichChieu);
    }
}

export const taoLichChieuAction = (form)=>{
    return async (dispatch)=>{
        try {
            const result = await qlDatVeService.taoLichChieu(form);
            await Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: 'Bạn đã tạo lịch chiếu thành công',
              })
        } catch (error) {
            console.log({error});
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.response?.data.content}`,
              })
        }
    }
}

