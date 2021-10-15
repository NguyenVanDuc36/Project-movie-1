import HomeMenu from './HomeMenu/HomeMenu'
import '../../assets/styles/layout/Home.scss'
import React, { useState, useEffect, Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimAction } from '../../Redux/action/QuanLiPhimAction';
import Film from '../../Components/Film/Film';
import { layThongTinLichChieuHeThongRapAction } from './../../Redux/action/QuanLiRapAction';
import HomeCourasel from './../../templates/HomeTemplate/layout/HomeCourasel/HomeCourasel';
import PhimDangChieu from './../../Components/OwlCarousel/phimDangChieu';
import PhimSapChieu from './../../Components/OwlCarousel/PhimSapChieu';
import HomeTool from './HomeTool/HomeTool';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import SearchFilm from './SearchFilm/SearchFilm';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

export default function Home(props) {


    const danhSachPhim = useSelector(state => state.danhSachPhimReducer.danhSachPhim);
    const heThongRapChieu = useSelector(state => state.HeThongRapReducer.heThongRap);
    
    let isSearch = useSelector(state => state.danhSachPhimReducer.isSearch);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(layDanhSachPhimAction());
        dispatch(layThongTinLichChieuHeThongRapAction());
    }, [])

    const renderPhim = () => {
        return danhSachPhim.map((phim, index) => {
            return <Film key={index} />
        })
    }

    return (
        <div className="home  body-font " style={{ backgroundColor: 'rgb(6, 18, 30)' }}  >
          
            

            
            
            <div style={{ bottom: '0', right: '0', left: '0', zIndex: '1' }} className="absolute">
                <HomeTool />
            </div>

            <Fragment>
                {isSearch?<div className="search-film container" >
                <SearchFilm/>
            </div>:''}
            </Fragment>
            
            <div  style={{ width: '50%', margin: '0 auto', top: '-2%', right: '0', left: '0', zIndex: '1' }} className="absolute flex py-4 text-center items-center rounded-xl justify-center search-1">
            <Search className="w-50" placeholder="Search for movie" onSearch={onSearch} />
            </div>
            <div className="pt-36" ><PhimDangChieu /></div>

            <PhimSapChieu  />

            <div className="home-menu" style={{ width: '70%', margin: '0 auto', backgroundColor: '#0f2133' }}>
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>

            <div style={{ backgroundAttachment: 'fixed', backgroundImage: 'url(./img/banner-8.jpg)' }} className="w-100  row avenger bg-no-repeat  bg-cover object-cover bg-center w-full m-0  py-5" >

                <div className="col-12 col-md-6 flex items-center" >
                    <div className="text-white px-24"  >
                        <h1 style={{ color: 'white', fontSize: '45px', fontWeight: '500' }} >Avengers: Endgame</h1>
                        <div>
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                            <i className="fas mr-3  fa-star" style={{ color: '#e41a1a', fontSize: '20px' }} />
                        </div><br />
                        <p>Rating 9.6 ((lmdb)</p>
                        <p>Time 2h 50 min</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <button className="btn mb-3 button px-4 text-light mr-5" >Watch</button>
                        <button className="btn btn-outline-light" ><i className="fas fa-plus" /> Add to watchlist</button>
                    </div>
                </div>
                <div className="col-12 mt-5 col-md-6 play flex justify-center items-center " >
                    <img src="./img/banner-9.jpg" width="600px" className="object-cover relative" />
                    <a href="https://www.youtube.com/embed/TcMBFSGVi1c" className="video-popup" ><i style={{ borderRadius: '50%', height: '80px', width: '80px', fontSize: '30px', lineHeight: '80px', backgroundColor: '#e41a1a', left: '45%' }} className="fas text-center w-14 text-white fa-play absolute " /></a>
                </div>
            </div>



        </div>
    )
}


