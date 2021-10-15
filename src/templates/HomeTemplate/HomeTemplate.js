
import { Fragment, useEffect } from "react";
import { Route } from 'react-router';
import Header from "./layout/Header/Header";
import HomeCourasel from "./layout/HomeCourasel/HomeCourasel";
import Footer from "./layout/Footer/Footer";
export const HomeTempalte = (props) => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    const {Component,...restProps} = props;

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <Header/>
            <HomeCourasel/>
            <Component {...propsRoute} />
            {/* <Footer/> */}
            <Footer/>

        </Fragment>
    }}/>
}