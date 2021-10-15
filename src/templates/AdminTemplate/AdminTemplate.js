import { Fragment, useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { USER_LOGIN } from './../../utils/settings';
import { QuanLyNguoiDungReducer } from './../../Redux/reducers/QuanLyNguoiDungreducer';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const AdminTemplate = (props) => { //path, exact, Component
    const { Component, ...restProps } = props;
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        // console.log(collapsed);
        setCollapsed(collapsed);
    };
    useEffect( () =>  {
        window.scrollTo(0, 0);
        
    })
    
    if(!localStorage.getItem(USER_LOGIN)){
         Swal.fire({
          icon: 'error',
          title: 'Đăng nhập đi nè :))',
          text: 'Bạn cần đăng nhập để tiếp tục duy trì!',
          footer: '<a href="/register">Đăng kí nếu bạn chưa có tài khoản?</a>'
        })
        return <Redirect to="/login"/>
    }

    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        Swal.fire({
            icon: 'error',
            title: 'Bạn không phải là quản trị viên',
            text: 'Bạn không có quyền truy cập vào trang này!',
          })
        return <Redirect to='/' />

    }

   


    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo p-5">
                        <img src="https://themes.themewild.com/vidstream/assets/images/logo.png" alt="..." />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">


                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="1" icon={<FileOutlined />}>
                                <NavLink to="/admin/users">User</NavLink>
                            </Menu.Item>

                            <Menu.Item key="2" icon={<FileOutlined />}>
                            <NavLink to="/admin/users/adduser">Add user</NavLink>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<FileOutlined />} title="Films">
                            <Menu.Item key="10" icon={<FileOutlined />}>
                                <NavLink to="/admin/films">Films</NavLink>
                               
                            </Menu.Item>
                            <Menu.Item key="11" icon={<FileOutlined />}>
                            <NavLink to="/admin/films/addnew">Add new</NavLink>

                               
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3" icon={<HomeOutlined />}>
                            <NavLink to="/">Home</NavLink>

                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <div className="text-right pr-10 pt-1"></div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />

}


export default AdminTemplate;