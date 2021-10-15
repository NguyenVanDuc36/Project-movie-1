import axios from "axios";
import { qlRapService } from "../../services/QuanLiRapService";
import { LAYDANHSACHRAP } from "../../utils/settings";
import { SETCHITIETPHIM } from './../../utils/settings';
export const layThongTinLichChieuHeThongRapAction = () => {

    return async (dispatch,getState) => {

        try {
            const result = await qlRapService.LayThongTinLichChieuHeThongRap();
            await dispatch({
                type:LAYDANHSACHRAP,
                payload:result.data.content
            })       
        }catch(errors) {
            console.log(errors.response?.data);
        }

    }

}


export const latThongTinChiTietPhimAction =(maPhim)=>{


    return async (dispatch,getstate) =>{

        try {
            const result = await qlRapService.layThongTinLichChieuPhim(maPhim);
            await dispatch({
                type:SETCHITIETPHIM,
                payload:result.data.content
            })
        } catch (error) {
            console.log({error});
        }

    }

}




