import { ADD_CMT, CHANGE_TAB_ACTIVE, DAT_VE_HOAN_TAT, GET_CHI_TIET_PHONG_VE, LIKE } from "../../utils/settings";
import { ThongTinLichChieu } from './../../_Core/Models/ThongTinPhongVe';
import { DAT_GHE, CHUYEN_TAB, XOA_CMT } from './../../utils/settings';

const stateDefault = {
    chiTietDatVe : new ThongTinLichChieu(),
    danhSachGheDangDat : [],
    danhSachGheKhachDangDat : [{maGhe:95561}],
    tabActive : "1",
    binhLuan : [
        {id:1,taKhoan: 'Đức Tony',content : 'Phim này hay nè ahihi!',like:10,isLike:false},
        {id:2,taKhoan: 'Trọng fake',content : 'Wowww, tuyệt vời lun nè',like:12,isLike:false},
    ]
}

export const quanLyDatVeReducer = (state =stateDefault, action) =>{
    switch (action.type) {
        
        case GET_CHI_TIET_PHONG_VE : {
            state.chiTietDatVe = action.payload;
            return {...state};
        }

        case LIKE : {
            let indexFind = state.binhLuan.findIndex(user => user.id === action.payload);
            state.binhLuan[indexFind].isLike =  !state.binhLuan[indexFind].isLike;
            console.log(state.binhLuan[indexFind].isLike);
            if(state.binhLuan[indexFind].isLike === true){
                state.binhLuan[indexFind].like +=1;
            }else{
                state.binhLuan[indexFind].like -=1;
            }
            return {...state};
        }

        case ADD_CMT : {
            state.binhLuan.push(action.payload);
            console.log(state.binhLuan);
            return {...state}
        }

        case XOA_CMT : {
            let indexFind = state.binhLuan.findIndex(user => user.id === action.payload);
            state.binhLuan.splice(indexFind,1);
            return {...state}
        }
        

        case DAT_GHE : {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheCapNhat.findIndex(ghe => ghe.maGhe === action.payload.maGhe)
            if(index!=-1){
                danhSachGheCapNhat.splice(index,1);
            }else{
                danhSachGheCapNhat.push(action.payload)
            }

            state.danhSachGheDangDat = [...danhSachGheCapNhat];

            return {...state}
        }

        case DAT_VE_HOAN_TAT:{
            state.danhSachGheDangDat = [];
            return {...state}
        }

        case CHUYEN_TAB : {
            state.tabActive = "2";
            return {...state}
        }

        case CHANGE_TAB_ACTIVE : {
            state.tabActive = action.payload.toString();
            return {...state}
        }

        default:
            return {...state};
    }
}