import React, { Fragment, useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HistoryOutlined, HomeOutlined, SelectOutlined, UserOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, Space, Modal } from 'antd';
import { USER_LOGIN, ACCESSTOKEN } from './../../utils/settings';
import { history } from './../../App';
import ThongTinCaNhan from './ThongTinCaNhan/ThongTinCaNhan';
import LichSu from './LichSuDatVe/LichSuDatVe';
const { TabPane } = Tabs;

export default function Profile(props) {

    useEffect(() => {
        
    }, [])

    let userLogin = null;
    if (localStorage.getItem(USER_LOGIN)) {
        userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <NavLink to="/profile" >
                    <div className="flex border-b-2 p-3" >
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style={{ width: '20%' }} />
                        <div className="ml-4" >
                            <p className="m-0 text-xl font-medium text-black" >{userLogin.hoTen}</p>
                            <p className="text-base text-gray-500" >Xem thông tin cá nhân</p>
                        </div>
                    </div>
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/admin" >
                    <div className="flex border-b-2 p-3" >
                        <i style={{ height: '50px', width: '50px', fontSize: '25px', borderRadius: '50%', backgroundColor: '#e4e6eb', lineHeight: '50px' }} class="fas mr-2 text-center item-i fa-photo-video"></i >
                        <div>
                            <span className="text-lg font-medium" >Quản lí phim</span><br />
                            <span className="text-base text-gray-500 font-medium" >Các tác vụ quản lí danh sách phim</span>
                        </div>
                    </div>
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/admin" >
                    <div className="flex border-b-2 p-3" >
                        <i style={{ height: '50px', fontSize: '25px', width: '50px', borderRadius: '50%', backgroundColor: '#e4e6eb', lineHeight: '50px' }} class="fas mr-2 text-center item-i fa-users-cog"></i >
                        <div>
                            <span className="text-lg font-medium" >Quản lí người dùng</span><br />
                            <span className="text-base text-gray-500 font-medium" >Các tác vụ quản lí danh sách người dùng</span>
                        </div>
                    </div>
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <a onClick={() => {
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(ACCESSTOKEN);
                    history.push('/login')
                }}>
                    <div className="flex border-b-2 p-3" >
                        <i style={{ height: '50px', fontSize: '25px', width: '50px', borderRadius: '50%', backgroundColor: '#e4e6eb', lineHeight: '50px' }} class="fas mr-2 text-center item-i fa-sign-out-alt"></i ><span className="text-lg font-medium" >Đăng xuất</span>
                    </div>
                </a>
            </Menu.Item>
            <p className="text-center text-gray-500 px-4 mt-2">Quyền riêng tư  · Điều khoản  · Quảng cáo  · Lựa chọn quảng cáo   · Cookie  ·   · DucNguyen © 2021</p>
        </Menu>

    );

    const operations = <Fragment >
        <div className="flex" >
            <div className="items-center mr-5 justify-end flex-shrink-0 hidden lg:flex">
                <div className="flex flex-row items-center" onClick={() => {
                    history.push("/profile")
                }} ><img style={{ width: '35px', height: '35px' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" /><span className="ml-2 text-base text-black" >{userLogin.hoTen}</span></div>
            </div>

            <Space direction="vertical mr-5">
                <Space wrap>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Button><i class="fas fa-sort-down"></i></Button>
                    </Dropdown>
                </Space>
            </Space>
        </div>
       

    </Fragment>;



    return (
        <div  >
            <Tabs tabBarExtraContent={operations} defaultActiveKey="1">
                <TabPane tab={<div className="p-3 flex items-center" ><UserOutlined /> 01 Thông tin người dùng</div>} key="1">
                    <ThongTinCaNhan/>
                </TabPane>
                <TabPane tab={<div className="p-3 flex items-center"><HistoryOutlined />Lịch sử đặt vé</div>} key="2">
                    <LichSu/>
                </TabPane>
                <TabPane tab={<NavLink className="text-black flex items-center" to="/home"> <HomeOutlined />Trang chủ</NavLink>} key="3">
                </TabPane>
            </Tabs>
        </div>
    )
}
