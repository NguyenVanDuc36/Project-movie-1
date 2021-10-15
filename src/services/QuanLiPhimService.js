import axios from "axios"
import { GROUPID, http } from "../utils/settings";
import { baseService } from "./baseService";
import { https } from './../utils/settings';

export class QuanLyPhimService extends baseService { 


    layDanhSachBanner = () => {
        return this.get('http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner');
    }

    layDanhSachPhim = (tenPhim='') =>{
        if(tenPhim != ''){
            return this.get(`${http}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`)
        }
        return this.get(`${http}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
    themPhimUploadHinh =(formData)=>{
        return this.post(`${http}/api/QuanLyPhim/ThemPhimUploadHinh`,formData)
    }

    layThongTinPhim =(id)=>{
        return this.get(`${http}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    }

    capNhatPhim = (formData)=>{
        return this.post(`${http}/api/QuanLyPhim/CapNhatPhimUpload`,formData)
    }

    xoaPhim = (id)=>{
        return  this.delete(`${http}/api/QuanLyPhim/XoaPhim?MaPhim=${id}`)
    }
   

}


export const qlPhimService = new QuanLyPhimService();
