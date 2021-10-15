
import { Fragment, useEffect } from "react";
import { Redirect, Route } from 'react-router';
import { USER_LOGIN } from './../../utils/settings';
import Swal from 'sweetalert2'
import Footer from './../HomeTemplate/layout/Footer/Footer';

const CheckoutTempalte = (props) => {
    const {Component,...restProps} = props;
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    if(!localStorage.getItem(USER_LOGIN)){
        Swal.fire({
            icon: 'error',
            title: 'Đăng nhập đi nè :))',
            text: 'Bạn cần đăng nhập để tiếp tục duy trì!',
            footer: '<a href="/register">Đăng kí nếu bạn chưa có tài khoản?</a>'
          })
        return <Redirect to="/login"/>
    }

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <Component {...propsRoute} />
            <Footer/>
        </Fragment>
    }}/>
}

export default CheckoutTempalte
