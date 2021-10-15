import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../.././assets/styles/layout/HeaderTemplate.scss'
import { history } from './../../../../App';
import { useSelector } from 'react-redux';
import { QuanLyNguoiDungReducer } from './../../../../Redux/reducers/QuanLyNguoiDungreducer';
import { Fragment } from 'react';
import { USER_LOGIN, ACCESSTOKEN } from './../../../../utils/settings';
import { useTranslation } from 'react-i18next';
import { Menu, Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function Header(props) {



    const headerRef = useRef();
    useEffect(() => {
        if(headerRef.current!==null){
            window.onscroll = () => {
                if (window.scrollY <= 30 && headerRef.current!==null) {
                    headerRef.current.className = 'border-b-white header  z-20 border-b-2  animate-pulse  bg-coolGray-100  fixed w-full z-10 border-b-1 text-lg text-light';
                }else  if (window.scrollY >30 && headerRef.current!==null) {
                    headerRef.current.className = 'border-b-white header z-20  border-b-2 hd  animate-pulse  bg-coolGray-100  fixed w-full z-10 border-b-1 text-lg text-dark ';
                }
            };
        }
        
    }, [])
    


    let userLogin = '';
    if(localStorage.getItem(USER_LOGIN)){
        userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
    }
    
    const menu1 = (
        <Menu>
          <Menu.Item>
          <NavLink to="/home" activeClassName="text-danger " className="flex nav-item  hover:text-red-700 items-center -mb-0.5 border-b-2 px-4 border-transparent">Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink activeClassName="text-danger " className="flex nav-item  hover:text-red-700 items-center -mb-0.5 border-b-2 px-4 border-transparent" to="/news"  >News
            </NavLink>
          </Menu.Item>
          <Menu.Item>
          <NavLink activeClassName="text-danger " className="flex nav-item  hover:text-red-700 items-center -mb-0.5 border-b-2 px-4 border-transparent" to="/contact"  >Contact
            </NavLink>
          </Menu.Item>
        </Menu>
      );
    
    const menu = (
        <Menu>
            <Menu.Item>
                <NavLink to="/profile" >
                    <div className="flex border-b-2 p-2" >
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style={{ width: '20%' }} />
                        <div className="ml-4" >
                            <p className="m-0 text-xl font-medium text-black" >{userLogin.hoTen}</p>
                            <p className="text-base text-gray-500" >Xem thông tin cá nhân</p>
                        </div>
                    </div>
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/admin/users" >
                    <div className="flex border-b-2 p-3" >
                        <i style={{ height: '50px', width: '50px', fontSize:'25px', borderRadius: '50%', backgroundColor: '#e4e6eb', lineHeight: '50px' }} class="fas mr-2 text-center item-i fa-photo-video"></i >
                        <div>
                            <span className="text-lg font-medium" >Quản lí phim</span><br/>
                            <span className="text-base text-gray-500 font-medium" >Các tác vụ quản lí danh sách phim</span>
                        </div>
                    </div>
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/admin/films" >
                    <div className="flex border-b-2 p-3" >
                        <i style={{ height: '50px',fontSize:'25px', width: '50px', borderRadius: '50%', backgroundColor: '#e4e6eb', lineHeight: '50px' }} class="fas mr-2 text-center item-i fa-users-cog"></i >
                        <div>
                            <span className="text-lg font-medium" >Quản lí người dùng</span><br/>
                            <span className="text-base text-gray-500 font-medium" >Các tác vụ quản lí danh sách người dùng</span>
                        </div>
                    </div>
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                {localStorage.getItem(USER_LOGIN) ? <a onClick={()=>{
                        localStorage.removeItem(USER_LOGIN);
                        localStorage.removeItem(ACCESSTOKEN);
                        history.push('/login')
                    }}>
                        <div className="flex border-b-2 p-3" >
                            <i style={{ height: '50px',fontSize:'25px', width: '50px', borderRadius: '50%', backgroundColor: '#e4e6eb', lineHeight: '50px' }} class="fas mr-2 text-center item-i fa-sign-out-alt"></i ><span className="text-lg font-medium" >Đăng xuất</span>
                        </div>
                    </a> :<a onClick={()=>{
                        history.push('/login')
                    }}>Đăng ký</a> }
               
            </Menu.Item>
            <p className="text-center text-gray-500 px-4 mt-2">Quyền riêng tư  · Điều khoản  · Quảng cáo  · Lựa chọn quảng cáo   · Cookie  ·   · DucNguyen © 2021</p>
        </Menu>

    );

    const { t, i18n } = useTranslation();
    
    return (

        <header ref={headerRef}  className="header delay-20 border-b-white border-b-2  animate-pulse p-2 bg-coolGray-100  fixed w-full z-10 border-b-1 text-lg text-light">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img style={{ width: '60%' }} className="loggo" src="https://themes.themewild.com/vidstream/assets/images/logo.png" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 m-0 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" activeClassName="text-danger " className="flex nav-item  hover:text-red-700 items-center -mb-0.5 border-b-2 px-4 border-transparent">{t('Home')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" activeClassName="text-danger" className="flex nav-item items-center -mb-0.5 border-b-2 px-4 border-transparent">{t('Contact')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" activeClassName="text-danger" className="flex nav-item items-center -mb-0.5 border-b-2 px-4 border-transparent">{t('News')}</NavLink>
                    </li>


                </ul>
                <div className="items-center menu-1 flex-shrink-0 hidden lg:flex">
                    {userLogin ?
                        <Fragment>
                            <div className="items-center mr-5 justify-end flex-shrink-0 hidden lg:flex">
                                <div className="flex flex-row items-center" onClick={() => {
                                    history.push("/profile")
                                }} ><img style={{ width: '35px', height: '35px' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" /><span className="ml-2 text-base text-white" >{userLogin.hoTen}</span></div>
                            </div>
                            

                            <Space className="" direction="vertical">
                                <Space wrap>
                                    <Dropdown overlay={menu} placement="bottomRight">
                                        <Button><i class="fas fa-sort-down"></i></Button>
                                    </Dropdown>
                                </Space>
                            </Space>

                        </Fragment>
                        :
                        <Fragment>
                            <div className="items-center flex-shrink-0 mr-5 hidden lg:flex">
                                <button onClick={() => {
                                    history.push("/Register")
                                }} className="btn  button" >{t('Register')}</button>
                            </div>
                            <div className="items-center flex-shrink-0 mr-5 hidden lg:flex">
                                <button onClick={() => {
                                    history.push("/login")
                                }} className="btn  button" >{t('Sign in')}</button>
                            </div>
                        </Fragment>

                    }

                </div>

                <div className="p-4 lg:hidden">
                    <Space direction="vertical">
    <Space wrap className="menu-2">
      <Dropdown overlay={menu1} placement="bottomCenter">
        <Button>Menu</Button>
      </Dropdown>
    </Space>
  </Space>
                </div>
            </div>
        </header>

    )
}

