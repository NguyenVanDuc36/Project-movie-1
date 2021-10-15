import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import style from './Checkout.module.css'
import './Checkout.scss'
import {IssuesCloseOutlined, UserAddOutlined } from '@ant-design/icons'
import { Tabs } from 'antd';
import { layDanhSachPhongVeAction, datGheAction, datVeAction } from './../../Redux/action/QuanLyDatVeAction';
import { ThongTinDatVe } from './../../_Core/Models/ThongTinDatVe';
import { LoadingReducer } from './../../Redux/reducers/LoadingReducer';
import LoadingApi from './../../Components/LoadingApi/LoadingApi';
import { quanLyDatVeReducer } from './../../Redux/reducers/QuanLyDatVeReducer';
import {connection} from '../../index'
export default function Checkout(props) {

    const chiTietDatVe = useSelector(state => state.quanLyDatVeReducer.chiTietDatVe);
    const danhSachGheDangDat = useSelector(state => state.quanLyDatVeReducer.danhSachGheDangDat);
    const danhSachGheKhachDangDat = useSelector(state => state.quanLyDatVeReducer.danhSachGheKhachDangDat);
    const isLoadingApi = useSelector(state => state.LoadingReducer.isLoadingApi)
    const {thongTinPhim}  = chiTietDatVe;
    const {danhSachGhe}  = chiTietDatVe;

    
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin)
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(layDanhSachPhongVeAction(id));
        
        connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
            console.log('dsGheKhachDat',dsGheKhachDat);
        })

        


    }, [])


    const renderGhe =()=>{
        return danhSachGhe.map((ghe,index)=>{

            let gheDuocChon ='';
            let gheDangChon = ''
            let gheBanDat = ''
            let gheKhachChon = ''
            let disable = false;

            // nếu ghe có trong danhSachGheDaDat  thì add class gheDangChon
            let indexDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            if(indexDD!=-1){
                gheDangChon = 'gheDangChon';
            }

            if(ghe.daDat === true){
                gheDuocChon = 'gheDuocChon';
                disable=true;
            }

            // Kiểm tra xem ghế đó phải củaThongTinDatVebạn đặt ko
            if(userLogin.taiKhoan === ghe.taiKhoanNguoiDat){
                gheBanDat = 'gheBanDat'
            }

            // Kiểm tra xem ghế đó đã được khách khác đặt chưa
            let indexKD = danhSachGheKhachDangDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe)
            if(indexKD!=-1){
                gheKhachChon = 'gheKhachChon';
                disable=true;
            }
            let id = props.match.params.id;
            return <Fragment key={index}>
                {ghe.loaiGhe === "Vip" ?<button onClick={()=>{
                    dispatch(datGheAction(ghe,id));

                }} disabled={disable} className={`gheVip m-2 ${gheKhachChon} ${gheDangChon} ${gheBanDat}  ${gheDuocChon}`}  key={index} >{ghe.daDat ? gheBanDat ||  gheKhachChon!='' ? <UserAddOutlined />:<IssuesCloseOutlined style={{marginBottom:7.5}} /> : gheKhachChon!='' ? <UserAddOutlined /> :  ghe.tenGhe}</button> 
                :<button onClick={()=>{
                    dispatch(datGheAction(ghe,id));
                }} disabled={disable} className={`ghe m-2 ${gheKhachChon} ${gheDangChon} ${gheBanDat}  ${gheDuocChon}`} key={index} >{ghe.daDat ? gheBanDat ||  gheKhachChon!='' ? <UserAddOutlined />:<IssuesCloseOutlined style={{marginBottom:7.5}} /> :  gheKhachChon!='' ? <UserAddOutlined /> :   ghe.tenGhe}</button>}
            </Fragment>
        })
    }

    const renderGheDangDat =()=>{
        return danhSachGheDangDat.map((ghe,index)=>{
            return <span key={index} style={{padding:'3px',backgroundColor:'green'}} className="text-center rounded text-sm  m-1 text-white" >S{ghe.stt}</span>
        })
    }
    
    return (
        <div className=" booking   text-white bg-cover " >
            <div className="overlay-booking" ></div>
            <div style={{width:'90%',margin:'0 auto'}} className="row ghes" >
                <div className="col-7 col-lg-9  " >
                    <div className="flex flex-col items-center mt-5">
                        
                        <div>
                            <h3 className="text-white text-2xl">{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</h3>
                        </div>
                        <div className={`${style['trapezoid']} text-center`}>
                        <h3 className="mt-3 text-2xl font-semibold text-white">Màn hình</h3>
                        </div>
                    
                        <div className="mt-16" >
                            <Fragment>
                                {isLoadingApi ? <LoadingApi/>  : <div className="ds-ghe">{renderGhe()}</div>  }
                            </Fragment>
                        </div>
                    </div>
                    
                        <div className="grid grid-cols-6 mt-5 text-center detail-1 text-xl" >
                            <div>
                                <p>Ghế trống</p>
                                <button className="ghe" ></button>
                            </div>
                            <div>
                                <p>Ghế Vip</p>
                                <button className="gheVip" ></button>
                            </div>
                            <div>
                                <p>Ghế đã đặt</p>
                                <button className="gheDuocChon" ><IssuesCloseOutlined style={{marginBottom:7.5}} /></button>
                            </div>
                            <div>
                                <p>Ghế đang đặt</p>
                                <button className="gheDangChon" ></button>
                            </div>
                            <div>
                                <p>Ghế bạn đặt</p>
                                <button className="gheBanDat" ><UserAddOutlined style={{marginBottom:7.5}} /></button>
                            </div>
                            <div>
                                <p>Ghế khách đang đặt</p>
                                <button className="gheKhachChon" ><UserAddOutlined style={{marginBottom:'7.5px'}} /></button>
                            </div>
                        </div>

                        <div className=" mt-5 text-center detail-2 text-xl" >
                            <div className="flex items-center" >
                                
                                <button className="ghe mt-2 mr-2" ></button>
                                <span>Ghế trống </span>
                            </div  >
                            <div className="flex items-center" >
                                
                                <button className="gheVip mt-2 mr-2" ></button>
                                <span>Ghế Vip</span>
                            </div>
                            <div className="flex items-center">
                                
                                <button className="gheDuocChon mt-2 mr-2" ><IssuesCloseOutlined style={{marginBottom:7.5}} /></button>
                                <span>Ghế đã đặt</span>
                            </div>
                            <div className="flex items-center">
                                
                                <button className="gheDangChon mt-2 mr-2" ></button>
                                <span>Ghế đang đặt</span>
                            </div>
                            <div className="flex items-center">
                                
                                <button className="gheBanDat mt-2 mr-2" ><UserAddOutlined style={{marginBottom:7.5}} /></button>
                                <span>Ghế bạn đặt</span>
                            </div>
                            <div className="flex items-center">
                                
                                <button className="gheKhachChon mt-2 mr-2" ><UserAddOutlined style={{marginBottom:'7.5px'}} /></button>
                                <span>Ghế khách đang đặt</span>
                            </div>
                        </div>
                        
                </div>
                <div style={{backgroundColor:'#0000008f'}} className="col-5 mb-5 md:text-xl col-lg-3 ketqua mt-16 text-base" >
                    <h3 className="text-center mt-3 text-green-500 text-2xl" >{danhSachGheDangDat.reduce((tongTien,ghe,index)=>{
                                    return tongTien+= ghe.giaVe;
                                },0).toLocaleString()} VNĐ</h3>
                    <hr style={{background:'white'}} />
                    <h3 className="text-2xl mt-3 font-semibold text-green-600" >{thongTinPhim.tenPhim}</h3>
                    <p>Địa chỉ : {thongTinPhim.tenCumRap}</p> 
                    <p>Ngày chiếu : {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
                    <hr style={{background:'white'}} />
                    <div className=" my-3">
                        <p className="text-red-600 m-0" >Ghế : </p>
                        <div className="grid grid-cols-7" >{renderGheDangDat()}</div>
                    </div>
                    <div className="my-3" >
                        <p className="text-red-600" >Tổng tiền :  
                            <span className=" ml-2 text-green-500">
                                {danhSachGheDangDat.reduce((tongTien,ghe,index)=>{
                                    return tongTien+= ghe.giaVe;
                                },0).toLocaleString()} VNĐ
                            </span> 
                        </p>
                    </div>
                    <hr style={{background:'white'}}/>
                    <div className="my-4">
                        <i className="text-base" >E-Mail</i><br />
                        {userLogin.email}
                    </div>
                    <hr />
                    <hr style={{background:'white'}} />
                    <div className="my-4">
                        <i className="text-base" >Mã giảm giá</i><br />
                            <input className="form-control mr-3 mt-2" style={{width:'60%'}} placeholder="Nhập tại đây..." ></input>
                            <button className="btn btn-secondary mt-4" >Áp dụng</button>
                    </div>
                    <hr style={{background:'white'}} />
                    <div className="my-4">
                        <p>Hình thức thanh toán</p>
                    </div>
                    <hr style={{background:'white'}} />
                    <div style={{ height: '150px' }} className="flex justify-center items-end">
                        <button onClick={()=>{
                            const thongTinDatVe = new ThongTinDatVe;
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;
                            dispatch(datVeAction(thongTinDatVe));
                        }} className="mb-0 w-72 btn btn-success" >Đặt vé</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
