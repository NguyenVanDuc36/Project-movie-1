import React from 'react'
import './ThongTinCaNhan.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinNguoiDungAction, layThongTinNguoiDungAction } from '../../../Redux/action/QuanLyNguoiDungAction';
import { QuanLyNguoiDungReducer } from './../../../Redux/reducers/QuanLyNguoiDungreducer';
import { Form, Input, Tabs, Button, Checkbox } from 'antd';
import { useFormik } from 'formik';
import { USER_LOGIN } from './../../../utils/settings';

const { TabPane } = Tabs;

function callback(key) {
    // console.log(key);
}



export default function ThongTinCaNhan() {
    let thongTinNguoiDung = useSelector(state => state.QuanLyNguoiDungReducer.thongTinNguoiDung);
    useEffect(() => {
        dispatch(layThongTinNguoiDungAction())
    }, [])
    const dispatch = useDispatch();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues:{
            taiKhoan: thongTinNguoiDung?.taiKhoan,
            matKhau: thongTinNguoiDung.matKhau,
            email: thongTinNguoiDung.email,
            soDt: thongTinNguoiDung.soDT,
            maNhom: "GP03",
            hoTen: thongTinNguoiDung.hoTen,
            maLoaiNguoiDung:thongTinNguoiDung.loaiNguoiDung
        },
        onSubmit : (values)=>{
            dispatch(capNhatThongTinNguoiDungAction(values));
        }
    })
    
    const onFinish = (values: any) => {
        // console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <div className="profle">
            <div className="firt-section mt-10 container ">
                <div className="z-0 bg-banner-12 items-end rounded-md bg-cover" style={{ height: '400px', width: '90%', margin: '0 auto' }} >
                </div>
                <div className="text-center flex  justify-center" >
                    <img className="rounded-full bg-gray-400 text-center  z-10" style={{ border: '4px solid white', marginTop: '-185px', width: '15%' }} src="https://cdn-icons-png.flaticon.com/128/863/863782.png" />
                </div>
                <div style={{ borderBottom: '2px solid gray', width: '70%', margin: '0 auto' }} >
                    <h1 className="text-2xl font-semibold text-center" >{thongTinNguoiDung.hoTen} </h1>
                </div>

            </div>

            <div className="pt-20 mt-10" style={{ height: '700px', backgroundColor: '#e4e6eb' }} >
                <div className="bg-white   mt-10" style={{ boxShadow: '10px 10px 5px -6px rgba(196,187,187,0.75)', borderRadius: '10px', height: '500px', width: '80%', margin: '0 auto' }} >
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Thông tin người dùng" key="1">
                            <div className="grid grid-cols-2 pt-10" style={{ width: '70%', margin: '0 auto' }}>
                                <div className="content" >
                                    <h1><i class="far i-item fa-user-circle"></i>Tài Khoản : <span>{thongTinNguoiDung.taiKhoan}</span> </h1>
                                    <h1><i class="fas  i-item fa-at"></i>Email : <span>{thongTinNguoiDung.email}</span> </h1>
                                    <h1><i class="fas  i-item fa-phone-volume"></i>Số điện thoại : <span>{thongTinNguoiDung.soDT}</span>  </h1>
                                </div>
                                <div>
                                    <h1><i class="fas  i-item fa-qrcode"></i>Mã nhóm : <span>{thongTinNguoiDung.maNhom}</span> </h1>
                                    <h1><i class="fas  i-item fa-file-signature"></i>Họ và tên : <span>{thongTinNguoiDung.hoTen}</span>  </h1>
                                    <h1><i class="fas  i-item fa-user-edit"></i>Loại người dùng : <span>{thongTinNguoiDung.maLoaiNguoiDung}</span>  </h1>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Cập nhật tài khoản" key="2">
                            <Form
                                onSubmitCapture={formik.handleSubmit}
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                className="mt-4"
                            >
                                <div className="grid gap-5 grid-cols-2" >
                                <Form.Item
                                    className="w-75"
                                    label="Tài khoản"
                                    
                                    rules={[{ required: true, message: 'Please input your account!' }]}
                                >
                                    <Input disabled={true} value={formik.values.taiKhoan} name="taiKhoan"   onChange={formik.handleChange}/>
                                </Form.Item>

                                <Form.Item
                                
                                className="w-75"
                                    label="Mật khẩu"
                                    
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password value={formik.values.matKhau} name="matKhau"  onChange={formik.handleChange}/>
                                </Form.Item>
                                
                                <Form.Item
                                className="w-75"
                                    label="Email"
                                    
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input name="email" value={formik.values.email}  onChange={formik.handleChange} />
                                </Form.Item>
                                <Form.Item
                                className="w-75"
                                    label="Số điện thoại"
                                    
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input value={formik.values.soDt} onChange={formik.handleChange} name="soDt" />
                                </Form.Item>

                                <Form.Item
                               
                                className="w-75"
                                    label="Mã loại người dùng"
                                
                                    rules={[{ required: true, message: 'Please input your type of user!' }]}
                                >
                                    <Input value={formik.values.maLoaiNguoiDung}  name="maLoaiNguoiDung"  onChange={formik.handleChange}/>
                                </Form.Item>

                                <Form.Item
                                className="w-75"
                                    label="Họ vè tên"
                                   
                                    rules={[{ required: true, message: 'Please input your full name!' }]}
                                >
                                    <Input value={formik.values.hoTen}   name="hoTen"  onChange={formik.handleChange}/>
                                </Form.Item>
                                </div>
                                
                                
                                <div className="flex justify-center">
                                    <button className="btn btn-outline-success" type="submit">Cập nhật</button>
                                </div>
                                    
                            </Form>

                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
