
import { Fragment, useEffect } from "react";
import { Redirect, Route } from 'react-router';

export const UserTempalte = (props) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    const {Component,...restProps} = props;

    return <Route {...restProps} render={(propsRoute)=>{
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }}/>
}
