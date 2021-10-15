import React from 'react'
import '../../assets/styles/layout/Login.css'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { dangKyAction } from './../../Redux/action/QuanLyNguoiDungAction';
import * as Yup from 'yup';
export default function Register(props) {

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues : {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP003",
      hoTen: ""
    },validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required('(*) Tài khoản Không được bỏ trống'),
      email: Yup.string().required(' (*)Email không được bỏ trống!').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Email không hợp lệ'),
      matKhau: Yup.string().required('(*)Mật khẩu không được bỏ trống!').min(6,'Mật khẩu từ 6 - 32 ký tự !').max(32,'Mật khẩu từ 6 - 32 ký tự !'),
      soDt: Yup.string().required('(*)Số điện thoại Không được bỏ trống').matches(/^[0-9]+$/,'Chỉ phép điền số'),
      hoTen: Yup.string().required('(*)Họ tên không được bỏ trống'),
  }),
    onSubmit : (values) =>{

      dispatch(dangKyAction(values))
    }
  })

  return (
    <div className="" >
      {/* Simple login form */}
      <div style={{backgroundSize:'cover',backgroundImage:'url(https://wallpapercave.com/wp/wp5517221.jpg'}} className=" sm:bg-gray-200 h-screen w-screen flex flex-col justify-center items-end bg-center ">
        <div style={{backgroundColor:'rgb(15, 33, 51)',width:"520px"}}  className="sm:w-full  sm:mr-14 shadow-none sm:shadow-lg z-10 px-8 sm:px-12 xs:w-full sm:w-8/12 md:w-7/12 lg:w-7/12 xl:w-2/6 h-screen sm:h-auto py-8">
          <div  className="text-center w-full font-bold text-3xl twl">
            ĐĂNG KÝ
          </div>
          <div className="w-full bg-gray-200 my-3" />
          <form onSubmit = {formik.handleSubmit}>
            <div className="flex flex-col gap-4 px-0 py-4">

              <div className="flex flex-row gap-4" >
              <div className="form-group">
                <label className="text-green-500">Tài khoản</label>
                {/* <AtSymbolIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input onBlur={formik.handleBlur} className="py-2 pl-10 border  form-control bg-gray-300 w-full" placeholder="Nhập tài khoản" onChange={formik.handleChange} name="taiKhoan" type="type" />
                <div className="text text-danger">{formik.errors.taiKhoan && formik.touched.taiKhoan ? (<div>{formik.errors.taiKhoan}</div>) : null} </div>
              </div>


              <div>
                <label className="text-green-500">Mật khẩu</label>
                {/* <LockClosedIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input onBlur={formik.handleBlur} className="py-2 pl-10 border  form-control bg-gray-300 w-full" placeholder="Nhập mật khẩu"  name="matKhau" onChange={formik.handleChange} type="password" />
                <div className="text text-danger">{formik.errors.matKhau && formik.touched.matKhau ? (<div>{formik.errors.matKhau}</div>) : null} </div>
              </div>

              </div>

              <div className="flex flex-row gap-4" >
              <div className="form-group">
                <label className="text-green-500">Email</label>
                {/* <AtSymbolIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input onBlur={formik.handleBlur} className="py-2 pl-10 border  form-control bg-gray-300 w-full" placeholder="Nhập email" name="email" onChange={formik.handleChange} type="email" />
                <div className="text text-danger">{formik.errors.email && formik.touched.email ? (<div>{formik.errors.email}</div>) : null} </div>
              </div>


              <div>
                <label className="text-green-500">Số điện thoại</label>
                {/* <LockClosedIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input onBlur={formik.handleBlur} className="py-2 pl-10 border  form-control bg-gray-300 w-full" name="soDt" onChange={formik.handleChange} placeholder="Nhập số điện thoại" type="text" />
                <div className="text text-danger">{formik.errors.soDt && formik.touched.soDt ? (<div>{formik.errors.soDt}</div>) : null} </div>
              </div>

              </div>
              

              
              <div >
                <label className="text-green-500">Họ và tên</label>
                {/* <LockClosedIcon class="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="font-medium text-2xl text-gray-600 absolute p-2.5 px-3 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input  onBlur={formik.handleBlur}className="py-2 pl-10 border  form-control bg-gray-300 w-full" name="hoTen" onChange={formik.handleChange} placeholder="Nhập họ tên" type="text" />
                <div className="text text-danger">{formik.errors.hoTen && formik.touched.hoTen ? (<div>{formik.errors.hoTen}</div>) : null} </div>
              </div>



              <div className="w-full mt-5 flex flex-row justify-center gap-2">
                <button  type="submit" className="border border-indigo-500 hover:bg-indigo-500 hover:text-white duration-100 ease-in-out w-6/12 text-green-400 rounded-md p-2 flex flex-row justify-center items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg> Đăng ký
                </button>
              </div>

              


              <div className="w-full flex flex-row justify-between">
                <NavLink className="text-green-600" to="/">Trang chủ</NavLink>
                <NavLink className="text-green-600" to="/login">Đăng nhập</NavLink>
              </div>
            </div>
          </form>
        </div>
        <div className="overlay h-full absolute z-0 w-full ">
        <img className="mt-10 ml-10" src="https://themes.themewild.com/vidstream/assets/images/logo.png" style={{ width: '200px' }} />
        </div>
      </div>

    </div>
  )
}
