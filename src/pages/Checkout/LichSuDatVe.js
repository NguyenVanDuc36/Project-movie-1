import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { QuanLyNguoiDungReducer } from './../../Redux/reducers/QuanLyNguoiDungreducer';
import { layDanhSachPhongVeAction } from './../../Redux/action/QuanLyDatVeAction';
import { layThongTinNguoiDungAction } from '../../Redux/action/QuanLyNguoiDungAction';
import moment from 'moment';
import _ from 'lodash'
import LoadingApi from '../../Components/LoadingApi/LoadingApi';
import { LoadingReducer } from './../../Redux/reducers/LoadingReducer';
import './LichSu.scss'
export default function LichSuDatVe() {

    let thongTinNguoiDung = useSelector(state => state.QuanLyNguoiDungReducer.thongTinNguoiDung);
    const userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin)
    const isLoadingApi = useSelector(state => state.LoadingReducer.isLoadingApi)
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(layThongTinNguoiDungAction());
    }, [])

    const renderTicketItem = () => {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {

            const seats = _.first(ticket.danhSachGhe)

            return <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img onError={(e) => {
                        e.target.onError = null; e.target.src = "http://movieapi.cyberlearn.vn/hinhanh/raya-and-the-last-dragon_gp03.png"
                    }} alt="team" className="w-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                    <div className="flex-grow">
                        <h1 className="text-black font-semibold text-base  title-font font-medium">{ticket.tenPhim}</h1>
                        <p className="text-gray-500 m-0">Thời gian : {moment(ticket.ngayDat).format('hh:mm A')}</p>
                        <p className="text-gray-500 m-0">Ngày chiếu : {moment(ticket.ngayDat).format('DD-MM-YYYY')}</p>
                        <p className="text-gray-500 m-0">Địa điểm : {seats.tenHeThongRap} </p>
                        <div className="text-gray-500 m-0">
                            Tên rạp : {seats.tenCumRap}
                        </div>
                        <div className="grid-cols-6 grid" >
                            Ghế :
                            {ticket.danhSachGhe.map((ghe, index) => {
                                return <span style={{ color: 'green' }} key={index} > {ghe.tenGhe}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div style={{width:'90%',margin:'0 auto'}}>
            <section className="text-gray-600 body-font">
                <div className=" px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-900">Lịch sử đặt vé khách hàng</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Dưới đây là toàn bộ lịch sử đặt vé mà bạn đã đặt tại các rạp, vui lòng chú ý thời gian và địa điểm khi phim được chiếu. Chúc bạn có những trải nhiệm vui vẻ nhất !</p>
                    </div>

                    <Fragment>
                        {!isLoadingApi ? <div className="flex lich-su flex-wrap -m-2">
                            {renderTicketItem()}
                        </div> : <LoadingApi/>}

                    </Fragment>

                </div>
            </section>

        </div>
    )
}
