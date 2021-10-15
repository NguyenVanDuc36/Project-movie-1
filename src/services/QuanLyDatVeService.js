import axios from "axios"
import { baseService } from "./baseService";
import { ThongTinDatVe } from './../_Core/Models/ThongTinDatVe';
import { http, https } from './../utils/settings';

export class QuanLyDatVeService extends baseService { 


    layDanhSachPhongVe = (id) => {
        return this.get(`${http}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
    }

    datVe = (thongTinDatVe = new ThongTinDatVe) =>{
        return this.post(`${http}/api/QuanLyDatVe/DatVe`,thongTinDatVe);
    }

    taoLichChieu = (form)=>{
        return this.post(`http://movieapi.cyberlearn.vn/api/QuanLyDatVe/TaoLichChieu`,form)
    }

}


export const qlDatVeService = new QuanLyDatVeService();
