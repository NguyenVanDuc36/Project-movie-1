import axios from "axios"
import { GROUPID, http } from "../utils/settings";
import { baseService } from "./baseService";
import { https } from './../utils/settings';

export class QuanLyRapService extends baseService { 

    constructor(){
        super();
    }
    LayThongTinLichChieuHeThongRap =()=>{
        return this.get(`${http}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }


    layThongTinHeThongRap=()=>{
        return this.get(`${http}/api/QuanLyRap/LayThongTinHeThongRap`)
    }

    layThongTinLichChieuPhim =(maPhim)=>{
        return this.get(`${http}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }

    layThongTinCumRapTheoHeThong =(mht)=>{
        return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${mht}`)
    }

    

}


export const qlRapService = new QuanLyRapService();
