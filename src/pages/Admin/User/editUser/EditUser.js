import React, { useEffect } from 'react'
import { Form, Input, Tabs, Select, Button, Checkbox } from 'antd';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { themNguoiDungAction, layDanhSachNguoiDungAction, capNhatThongTinNguoiDungAction } from './../../../../Redux/action/QuanLyNguoiDungAction';
const { TabPane } = Tabs;

function callback(key) {
    // console.log(key);
}

export default function EditUser(props) {
    const dispatch = useDispatch()
    const danhSachNguoiDung = useSelector(state => state.QuanLyNguoiDungReducer.danhSachNguoiDung)
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction(props.match.params.id))
    }, [])
   const handleChangeMaNhom =(value)=>{
        formik.setFieldValue('maNhom',value)
   }
   const handleChangeMaLoai =(value)=>{
    formik.setFieldValue('maLoaiNguoiDung',value)
}
    const { Option } = Select;
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: danhSachNguoiDung[0]?.taiKhoan,
            matKhau: '',
            email: danhSachNguoiDung[0]?.email,
            soDt: danhSachNguoiDung[0]?.soDt,
            maNhom:danhSachNguoiDung[0]?.maNhom,
            hoTen: danhSachNguoiDung[0]?.hoTen,
            maLoaiNguoiDung: danhSachNguoiDung[0]?.maLoaiNguoiDung
        },
        onSubmit: (values) => {
            dispatch(capNhatThongTinNguoiDungAction(values))
        }
    });
    return (
        <div>
            <h1 className="text-2xl" >Cập nhật thông tin người dùng</h1>
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
                    <Input disabled={true} value={formik.values.taiKhoan} name="taiKhoan" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item

                    className="w-75"
                    label="Mật khẩu"

                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password  name="matKhau" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item
                    className="w-75"
                    label="Email"

                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name="email" value={formik.values.email} onChange={formik.handleChange} />
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
                    <Select defaultValue={formik.values.maLoaiNguoiDung}value={formik.values.maLoaiNguoiDung} name="maLoaiNguoiDung" style={{ width: 150 }} onChange={handleChangeMaLoai}>
                        <Option value="KhachHang">KhachHang</Option>
                        <Option value="QuanTri">QuanTri</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    className="w-75"
                    label="Họ vè tên"

                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Input value={formik.values.hoTen} name="hoTen" onChange={formik.handleChange} />
                </Form.Item>


                <Form.Item
                    className="w-75"
                    label="Mã nhóm"

                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Select defaultValue="GP01" value={formik.values.maNhom} style={{ width: 120 }} onChange={handleChangeMaNhom}>
                        <Option value="GP01">GP01</Option>
                        <Option value="GP02">GP02</Option>
                        <Option value="GP03">GP03</Option>
                        <Option value="GP04">GP04</Option>
                        <Option value="GP05">GP05</Option>
                        <Option value="GP06">GP06</Option>
                    </Select>
                </Form.Item>

                <div className="flex justify-center">
                    <button className="btn btn-outline-success" type="submit">Cập nhật người dùng</button>
                </div>
            </Form>
        </div>
    )
}
