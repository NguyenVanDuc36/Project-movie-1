import React, { Fragment, useEffect, useState } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/styles/layout/Detail.scss'
import { Tabs, Radio, Space, Collapse, Tooltip ,Modal} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { latThongTinChiTietPhimAction } from '../../Redux/action/QuanLiRapAction';
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { ADD_CMT } from '../../utils/settings';
import Swal from 'sweetalert2'
import { LIKE, XOA_CMT, USER_LOGIN } from './../../utils/settings';
import { Redirect } from 'react-router';
const { TabPane } = Tabs;
const { Panel } = Collapse;

export default function Detail(props) {
    const [visible, setVisible] = useState(false);
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin)
    const dispatch = useDispatch();
    const { filmDetail } = useSelector(state => state.danhSachPhimReducer)
    console.log(filmDetail);
    let danhGia = filmDetail.danhGia * 10;
    let comment = useSelector(state => state.quanLyDatVeReducer.binhLuan)
    let star;
    useEffect(() => {
        star = filmDetail.danhGia / 2
        let { id } = props.match.params;
        dispatch(latThongTinChiTietPhimAction(id));
    }, [])
    let [cmt, setCmt] = useState('')
    const handleText = (e) => {
        let value = e.target.value;
        setCmt({ value });
    }


    function callback(key) {
        console.log(key);
    }

    const text = `
        ${filmDetail.moTa}
        `;

    const renderBinhLuan = () => {

        return comment.map((item, index) => {
            let likeCss = '';
            if (item.isLike) {
                likeCss = 'text-blue-900'
            }
            return <Fragment>
                {userLogin?.hoTen !== item.taKhoan ? <div className="mt-1 ml-5">
                    <div className="flex mb-3" >
                        <img style={{ width: '50px', height: '50px' }} src="https://cdn-icons-png.flaticon.com/128/5857/5857199.png" />
                        <div className="text-white flex items-end mt-2 ml-3" ><p className="m-0">{item.taKhoan}</p></div>
                    </div>
                    <span style={{ marginLeft: '4rem' }} className="p-2 rounded-lg bg-gray-300" >{item.content}  <span className={`mr-1 ml-3 text-red-700`}>{item.like}</span><Tooltip title="Like"><span> <i onClick={() => {
                        dispatch({
                            type: LIKE,
                            payload: item.id
                        })
                    }} class={`fas ${likeCss} fa-thumbs-up`}></i></span>

                    </Tooltip></span>
                </div> : <div className="pt-5 mb-4 mr-5">
                    <div style={{ marginRight: '35px' }} className="flex justify-end mb-3" >
                        <div className="text-white flex items-end " ><p className="m-0">{item.taKhoan}</p></div>
                        <img className="ml-2" style={{ width: '50px', height: '50px' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                    </div>
                    <div style={{ marginRight: '6rem', float: 'right' }} className="p-2 text-right   rounded-lg bg-green-600" ><span className={` text-red-700`}>{item.like}</span><Tooltip title="Like"><span> <i onClick={() => {
                        dispatch({
                            type: LIKE,
                            payload: item.id
                        })
                    }} class={`fas ${likeCss} mr-3 fa-thumbs-up`}></i></span>

                    </Tooltip>{item.content}<br />
                        <span onClick={() => {
                            dispatch({
                                type: XOA_CMT,
                                payload: item.id
                            })
                        }} style={{ fontSize: '10px', borderBottom: '1px solid white', margin: '0' }} className="text-white  hover:text-red-900 cursor-pointer ">Xóa bình luận</span>
                    </div><br />

                </div>}
            </Fragment>

        })
    }


    return (
        <div className="detail  relative" >

            <div className="overlay pb-20" >

                <div className="chi-tiet z-10 mb-10" >
                    <div style={{ width: '80%', margin: '0 auto' }} >
                        <div className="row pt-40" >
                            <div className="col-4 col-md-4"  >
                                <img className="object-cover md:w-full w-75" style={{ borderRadius: '20px' }} src={filmDetail.hinhAnh} />
                                <button  onClick={() => setVisible(true)} className="btn button mt-5" >Trailer</button>
                                <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
        footer={null}
      >
        <iframe width="700" height="391" src={filmDetail.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </Modal>
                            </div>
                            <div className="col-8 col-md-4" >
                                <h1 className="text-green-100 md:text-3xl text-xl">{filmDetail.tenPhim}</h1>
                                {/* <p className="text-gray-300" >Mô tả : <span>{filmDetail.moTa}</span></p> */}
                                <p className="text-green-100 text-base md:text-xl">Trạng thái : <span className="text-md:base text-sm text-red-800" >{filmDetail.dangChieu ? 'Đang chiếu' : ''}</span ><span className="text-base text-black">{filmDetail.sapChieu ? 'Sắp chiếu' : ''}</span></p>
                                <p className="text-green-100 text-base md:text-xl">Đánh giá :<span className="text-md:base text-sm text-red-800"> {filmDetail.danhGia}/10</span></p>
                                <p className="text-green-100 text-base md:text-xl">Ngày khởi chiếu :<span className="text-base text-red-800"> {filmDetail.ngayKhoiChieu}</span></p>
                                {/* <p className="text-green-100 text-xl">Mô tả : <span span style={{height:'100px'}} className="text-base text-white">{filmDetail.moTa}</span></p> */}
                                <Collapse defaultActiveKey={['3']} onChange={callback}>
                                    <Panel showArrow={false} header="Mô tả" key="1">
                                        <p>{text}</p>
                                    </Panel>
                                </Collapse>
                            </div>
                            <div className=" col-12 mt-3 col-md-4 flex flex-col items-center" >
                                <div class={`c100 p${danhGia} green`} >
                                    <span>{`${danhGia}`}%</span>
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>
                                <div>
                                    <Rate disabled defaultValue={star} />
                                </div>
                                <p className="md:text-xl text-sm text-center" >Đánh giá</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div style={{ width: '60%', margin: '0 auto' }} className="z-10 bg-white" >
                    <Tabs defaultActiveKey="1" centered style={{ background: 'rgb(15, 33, 51)' }}  >
                        <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
                            <div >
                                <Tabs tabPosition={'left'} >
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane
                                            tab={<div className="flex flex-row items-center justify-center">
                                                <img src={htr.logo} className="rounded-full mb-2 w-full" style={{ width: 50 }} alt="..." />
                                                <div className="text-center text-green-600 ml-2">
                                                    {htr.tenHeThongRap}
                                                </div>
                                            </div>}
                                            key={index}>
                                            {htr.cumRapChieu?.slice(0, 2).map((cumRap, index) => {
                                                return <div className="mt-5" key={index}>
                                                    <div className="flex flex-row">
                                                        <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} alt="..." />
                                                        <div className="ml-2">
                                                            <p className="text-gray-100" style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                                                            <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className="thong-tin-lich-chieu grid gap-5 grid-cols-4">
                                                        {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                            return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-600 ">
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            })}



                                        </TabPane>
                                    })}


                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
                            <div className="text-white mt-3 flex justify-center" >
                                <div className="text-center">
                                    <img style={{ width: '20%', margin: '0 auto' }} src="https://cdn-icons-png.flaticon.com/512/5717/5717201.png" />
                                    <p className="text-white text-xl font-mono" >Xin lỗi, tạm thời chưa có thông tin</p>
                                    <h1 className="text-red-500 font-mono text-4xl" >“no data” isn't here!</h1>

                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
                            <div style={{ paddingBottom: '4rem' }} >
                                <div className="mt-1 mb-3">

                                    <div className="flex items-end mb-2" >
                                        <img className="ml-5 mr-3" style={{ width: '50px', height: '50px' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                                        <input style={{ width: '65%' }} onChange={handleText} placeholder="Bình luận công khai..." className="mr-3  form-control" />
                                        <button onClick={() => {
                                            var today = new Date();
                                            let idD = today.getTime();
                                            let thongTin = { id: idD, taKhoan: userLogin.hoTen, content: cmt.value, like: 0, isLike: false }
                                            if(!localStorage.getItem(USER_LOGIN)){
                                                Swal.fire({
                                                 icon: 'error',
                                                 title: 'Đăng nhập đi nè :))',
                                                 text: 'Bạn cần đăng nhập để tiếp tục duy trì!',
                                                 footer: '<a href="/register">Đăng kí nếu bạn chưa có tài khoản?</a>'
                                               })
                                               return <Redirect to="/login"/>
                                           }
                                            dispatch({
                                                type: ADD_CMT,
                                                payload: thongTin
                                            })
                                        }} className="btn btn-light">Bình luận</button>
                                    </div>

                                </div>
                                {renderBinhLuan()}

                            </div>
                        </TabPane>
                    </Tabs>
                </div>

            </div>
        </div>

    )
}