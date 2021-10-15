import axios from "axios"
import { baseService } from "./baseService";
import { http, https } from './../utils/settings';

export class QuanLyNguoiDungService extends baseService { 


    dangNhap = (user) => {
        return this.post(`${http}/api/QuanLyNguoiDung/DangNhap`,user);
    }

    layThongTinNguoiDung =() =>{
        return this.post(`${http}/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }

    dangKy =(data)=>{
        return this.post(`${http}/api/QuanLyNguoiDung/DangKy`,data)
    }

    capNhatThongTinNguoiDung =(data)=>{
        return this.post(`${http}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,data)
    }

    layDanhSachNguoiDung =(tuKhoa) =>{
        if(tuKhoa !== ''){
            return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`)
        }
        return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`)
    }

    xoaNguoiDung =(taiKhoan)=>{
        this.delete(`${http}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }

    themNguoiDung = (thongTinNguoiDung) =>{
        this.post(`http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThemNguoiDung`,thongTinNguoiDung)
    }

}


export const qlNguoiDungService = new QuanLyNguoiDungService();
