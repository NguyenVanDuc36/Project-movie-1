import { DANH_SACH_PHIM_SEARCH, LAYDANHSACHPHIM, SETCHITIETPHIM, SET_THONG_TIN_PHIM, ISSEARCH } from './../../utils/settings';

const stateDefault = {
    danhSachPhim : [],
    filmDetail:[],
    thongTinPhim : {},
    danhSachSearchPhim : [],
    isSearch : false
}

export const danhSachPhimReducer = (state = stateDefault, action) =>{
        switch (action.type) {

            case DANH_SACH_PHIM_SEARCH : {
                state.danhSachSearchPhim = action.payload;
                return {...state}
            }

            case ISSEARCH : {
                state.isSearch = true;
                return {...state}
            }

            case LAYDANHSACHPHIM : {
                state.danhSachPhim = action.payload;
                return {...state}
            }

            case SETCHITIETPHIM : {
                state.filmDetail = {...action.payload}
                return {...state}
            }

            case SET_THONG_TIN_PHIM : {
                state.thongTinPhim = {...action.payload}
                return {...state}
            }




            default:
                return {...state};
        }
}