
import { Fragment, useEffect } from "react";
import { Route } from 'react-router';
import Footer from './Footer/Footer';
import Header from "./Header/Header";


export const DetailTempalte = (props) => {
    const {Component,...restProps} = props;

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>

            <Header/>
            <Component {...propsRoute} />
            <Footer />

        </Fragment>
    }}/>
}