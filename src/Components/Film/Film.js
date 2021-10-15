import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import '../../assets/styles/layout/Home.scss'
import { NavLink } from 'react-router-dom';
export default function Film(props) {
    const [visible, setVisible] = useState(false);
    const phim = props.phim;
  return (
      <div className="item mt-10">
          <div className="flex justify-center relative" >
             <img className="object-cover slider-img" style={{borderRadius:'12px',width:'310px',height:'180px',border:'3px solid white'}} src={phim.hinhAnh} />
          </div>
          <div style={{border:'3px solid white'}} className="overlay px-3  flex justify-between absolute" >
              <div className="mt-4 flex flex-col ">
                  <p className="text-white text-lg" >{phim.tenPhim}</p>
                  <p className="text-white text-lg" >Đánh giá : <span className="bg-red-600 p-1 rounded-sm text-xs" >{phim.danhGia}/10</span> </p>
                  
              </div>
            <div className="mt-4" >
                <i  onClick={() => setVisible(true)} class="fas icon fa-play"></i><br />
                <NavLink to={`/detail/${phim.maPhim}`}><i class="fas icon fa-plus "></i><br /></NavLink>
                <i class="fas icon fa-heart"></i>
                
            </div>
          </div>

      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
        footer={null}
      >
        <iframe width="700" height="391" src={phim.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </Modal>
      </div>   
  )
}
