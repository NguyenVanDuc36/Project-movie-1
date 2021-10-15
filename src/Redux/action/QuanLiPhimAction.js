import axios from "axios";
import { qlPhimService } from "../../services/QuanLiPhimService";
import { LAYDANHSACHPHIM, LOADING_API, HIDE_API, DISPLAY_LOADING, HIDE_LOADING, SET_THONG_TIN_PHIM, DANH_SACH_PHIM_SEARCH } from './../../utils/settings';
import { displayLoadingAction, hideLoadingAction } from './LoadingAction';
import Swal from 'sweetalert2'
import { history } from './../../App';
import { Redirect } from 'react-router';
export const layDanhSachBannerAction = () => {

    return async (dispatch,getState) => {

        try {
            const result = await qlPhimService.layDanhSachBanner();
            await dispatch({
                type:'LAY_DANH_SACH_BANNER',
                payload:result.data.content
            })       
        }catch(errors) {
            console.log(errors.response?.data);
        }

    }

}

export const layDanhSachPhimAction = (phim='') =>{
    return async (dispatch,getState) =>{

        try {
            await dispatch({
                type : LOADING_API
            })
            const result = await qlPhimService.layDanhSachPhim(phim);
            await dispatch({
                type:LAYDANHSACHPHIM,
                payload:result.data.content
            })      
            await  dispatch({
                type : HIDE_API
            })
        } catch (error) {

            console.log('that bai', error);
        }

    }
}

export const layDanhSachPhimSearchAction = (phim='') =>{
    return async (dispatch,getState) =>{

        try {
            await dispatch({
                type : LOADING_API
            })
            const result = await qlPhimService.layDanhSachPhim(phim);  
            await dispatch({
                type:DANH_SACH_PHIM_SEARCH,
                payload:result.data.content
            })   
            await  dispatch({
                type : HIDE_API
            })
        } catch (error) {

            console.log('that bai', error);
        }

    }
}

export const themPhimUploadHinhAction =(formData)=>{
    return async (dispatch,getState)=>{
        try {

           dispatch(displayLoadingAction)
            let result = await qlPhimService.themPhimUploadHinh(formData);
            await dispatch(hideLoadingAction)
            await Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: "Thêm phim thành công!",
                // footer: '<a href="">Why do I have this issue?</a>'
              })
              dispatch(layDanhSachPhimAction())

        } catch (errors) {
            let mess = errors.response.data.content;
            dispatch(hideLoadingAction)
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${mess}`,
                footer: '<a href="">Why do I have this issue?</a>'
              })
            console.log(errors.response.data.content);
            
        }
    }
}

export const layThongTinPhimAction =(id)=>{
    return async (dispatch)=>{
        try {
            
            const result = await qlPhimService.layThongTinPhim(id);
            await dispatch({
                type:SET_THONG_TIN_PHIM,
                payload:result.data.content
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const capNhatPhimAction =(formData)=>{
    return async (dispatch)=>{
       
        try {
            dispatch(displayLoadingAction)
            const result = await qlPhimService.capNhatPhim(formData);
            dispatch(hideLoadingAction)
            await Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: "Cập nhật phim thành công!",
                // footer: '<a href="">Why do I have this issue?</a>'
              })
            dispatch(layDanhSachPhimAction())
            history.push('/admin/films')
            
        } catch (error) {
            console.log(error);
            dispatch(hideLoadingAction)
        }
    }
}

export const xoaPhimAction = (id)=>{
    return async (dispatch)=>{
        try {
            const result = await qlPhimService.xoaPhim(id);
            await Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: "Xóa phim thành công!",
                // footer: '<a href="">Why do I have this issue?</a>'
              })
            dispatch(layDanhSachPhimAction())
        } catch (error) {
            console.log({error});
        }
    }
}