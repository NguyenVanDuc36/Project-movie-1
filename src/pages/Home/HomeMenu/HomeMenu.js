import React, { Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {


    state = {
        tabPosition: 'left',
    };

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };
    componentDidMount() {

    }
    
    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = this.state;
            return <TabPane className="p-0 m-0"  tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                <Tabs   className="p-0 m-0"  tabPosition={tabPosition}>
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane key={index} className="p-0 m-0"  tab={
                            <div style={{ width: '300px', display: 'flex' }} >
                                <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" style={{width:'50px',height:'50px'}} /> 
                                <div className="text-left ml-2">
                                    <p className="w-50 m-0 text-green-600" >{cumRap.tenCumRap}</p>
                                    <p style={{width:'80%',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}} className=" m-0 text-gray-400" >{cumRap.diaChi}</p>
                                    <p  style={{fontSize:'12px',fontWeight:'550'}} className="text-red-500 ">[Chi tiết]</p>
                                </div>
                            </div>
                        }
                            key={index}>
                                {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="" >
                                        <div className="mt-2" style={{ display: 'flex' }}>
                                            <img className="object-cover mt-2 ml-2" style={{ height: 60, width: 60 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/60/60" }} />

                                            <div className="ml-2">
                                                <h1 className="text-base  font-medium text-gray-400 m-0" >{phim.tenPhim}</h1>
                                                <p style={{width:'60%',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}  className="m-0 text-gray-400">{cumRap.diaChi}</p>
                                                <div className="grid grid-cols-6 gap-5">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-xs font-normal text-green-600" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>

                    })}
                </Tabs>
            </TabPane>
        })
    }

    render() {

        const { tabPosition } = this.state;
        return (
            <>

                <Tabs type="line" className="mt-5 mb-5"  style={{border:'1px solid #11182733',margin:'3rem 0'}} tabPosition={tabPosition}>
                    {this.renderHeThongRap()}
                </Tabs>
            </>
        );
    }
}

