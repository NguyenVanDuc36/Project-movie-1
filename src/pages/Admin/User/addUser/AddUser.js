import React from 'react'
import { Form, Input, Tabs, Select, Button, Checkbox } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { themNguoiDungAction } from './../../../../Redux/action/QuanLyNguoiDungAction';
import * as Yup from 'yup';
const { TabPane } = Tabs;

function callback(key) {
}

export default function AddUser(props) {
    const dispatch = useDispatch()
   const handleChangeMaNhom =(value)=>{
        formik.setFieldValue('maNhom',value)
   }
   const handleChangeMaLoai =(value)=>{
    formik.setFieldValue('maLoaiNguoiDung',value)
}
    const { Option } = Select;
    const onFinish = (values: any) => {
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: "GP03",
            hoTen: '',
            maLoaiNguoiDung: ''
        },
        onSubmit: (values) => {
            dispatch(themNguoiDungAction(values))
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('(*) Tài khoản Không được bỏ trống'),
            email: Yup.string().required(' (*)Email không được bỏ trống!').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Email không hợp lệ'),
            matKhau: Yup.string().required('(*)Mật khẩu không được bỏ trống!').min(6,'Mật khẩu từ 6 - 32 ký tự !').max(32,'Mật khẩu từ 6 - 32 ký tự !'),
            soDt: Yup.string().required('(*)Số điện thoại Không được bỏ trống').matches(/^[0-9]+$/,'Chỉ phép điền số'),
            hoTen: Yup.string().required('(*)Họ tên không được bỏ trống'),
        })
    });
    return (
        <div>
            <h1 className="text-2xl" >Thêm người dùng</h1>
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
                <Form.Item
                    className="w-75"
                    label="Tài khoản"

                    rules={[{ required: true, message: 'Please input your account!' }]}
                >
                    <Input onBlur={formik.handleBlur} value={formik.values.taiKhoan} name="taiKhoan" onChange={formik.handleChange} />
                    <div className="text text-danger">{formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div>{formik.errors.taiKhoan}</div>) : null} </div>
                </Form.Item>

                <Form.Item

                    className="w-75"
                    label="Mật khẩu"

                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onBlur={formik.handleBlur}  value={formik.values.matKhau} name="matKhau" onChange={formik.handleChange} />
                    <div className="text text-danger">{formik.errors.matKhau && formik.touched.matKhau ? (<div>{formik.errors.matKhau}</div>) : null} </div>
                </Form.Item>

                <Form.Item
                    className="w-75"
                    label="Email"

                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} />
                    <div className="text text-danger">{formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : null} </div>
                </Form.Item>
                <Form.Item
                    className="w-75"
                    label="Số điện thoại"

                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    
                >
                    <Input onBlur={formik.handleBlur} value={formik.values.soDt} onChange={formik.handleChange} name="soDt" />
                    <div className="text text-danger">{formik.errors.soDt && formik.touched.soDt ? (<div>{formik.errors.soDt}</div>) : null} </div>
                </Form.Item>

                <Form.Item

                    className="w-75"
                    label="Mã loại người dùng"

                    rules={[{ required: true, message: 'Please input your type of user!' }]}
                >
                    <Select defaultValue="KhachHang" name="maLoaiNguoiDung" style={{ width: 150 }} onChange={handleChangeMaLoai}>
                        <Option value="KhachHang">KhachHang</Option>
                        <Option value="QuanTri">QuanTri</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    className="w-75"
                    label="Họ vè tên"

                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Input onBlur={formik.handleBlur} value={formik.values.hoTen} name="hoTen" onChange={formik.handleChange} />
                    <div className="text text-danger">{formik.errors.hoTen && formik.touched.hoTen ? (<div>{formik.errors.hoTen}</div>) : null} </div>
                </Form.Item>


                <Form.Item
                    className="w-75"
                    label="Mã nhóm"

                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Select defaultValue="GP01" style={{ width: 120 }} onChange={handleChangeMaNhom}>
                        <Option value="GP01">GP01</Option>
                        <Option value="GP02">GP02</Option>
                        <Option value="GP03">GP03</Option>
                        <Option value="GP04">GP04</Option>
                        <Option value="GP05">GP05</Option>
                        <Option value="GP06">GP06</Option>
                    </Select>
                </Form.Item>

                <div className="flex justify-center">
                    <button className="btn btn-outline-success" type="submit">Thêm người dùng</button>
                </div>
            </Form>
        </div>
    )
}
