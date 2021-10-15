import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';
import Film from '../Film/Film';
import { useTranslation } from 'react-i18next';
export default function PhimSapChieu(props) {
    const options = {
        margin: 30,
        items:4,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
    
            }
        },
    };
    const dsPhim = useSelector(state => state.danhSachPhimReducer.danhSachPhim)
    const { t, i18n } = useTranslation();
    const renderPhim =()=>{
        return dsPhim.map((phim,index)=>{
            if(phim.sapChieu){
                return <Film key={index} phim={phim}/>
            }
        })
    }

    return (
        <div style={{ backgroundColor: '#06121e',height:'300px' }} className="container list-film " >
            <h1 className="text-white ml-4 text-2xl" >{t('The movie is comming')}</h1>
            <OwlCarousel  className='owl-theme' {...options}   autoplay={false} loop >
                {renderPhim()}
            </OwlCarousel>
        </div>
    )
}
