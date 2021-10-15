const stateDefault = {
    arrCarousel : [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ]
}

export const CarouselReducer = (state = stateDefault, action) =>{
    switch (action.type) {

        case 'SET_CAROUSEL' :{
            return {...state}
        }


        case 'LAY_DANH_SACH_BANNER' : {
            let arrCarouselUpdate = {...state.arrCarousel};
            arrCarouselUpdate = action.payload;
            state.arrCarousel = {...arrCarouselUpdate}
            return {...state}
        }

        default:
            return {...state};
    }
}