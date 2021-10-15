import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { danhSachPhimReducer } from './../../../Redux/reducers/HomeReducer';
import Film from './../../../Components/Film/Film';
import '../../../assets/styles/layout/Home.scss'
import FilmEffect from './../../../Components/Film/FilmEffect';

export default function SearchFilm(props) {
  const danhSachSearchPhim = useSelector(state => state.danhSachPhimReducer.danhSachSearchPhim);

  const renderPhimSearch=()=>{
    return danhSachSearchPhim.map((phim,index)=>{

      return <FilmEffect key={index} phim={phim}/>

    })
  }
    return (
        <div className="h-auto pt-20" >
           <section className="py-6 sm:py-12 bg-coolGray-100 text-coolGray-800">
  <div className="container p-6 mx-auto space-y-8">
    <div className="space-y-2 text-center">
      <h2 className="text-2xl mb-5 text-white font-bold">Danh sách phim liên quan</h2>
    </div>
    <Fragment>

     {danhSachSearchPhim.length !==0 ? <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      {renderPhimSearch()}
    </div> : <div className="text-white flex justify-center" >
      <div className="text-center">
        <img style={{width:'20%',margin:'0 auto'}} src="https://cdn-icons-png.flaticon.com/512/5717/5717201.png" />
        <p className="text-white text-xl font-mono" >We looked high and low, but…</p>
      <h1  className="text-red-500 font-mono text-4xl" >“no data” isn't here!</h1>
      
      </div>
    </div>
}
    </Fragment>
    
  </div>
</section>

        </div>
    )
}
