import React from "react";
import "./Loading.scss";
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
export default function Loading(props) {

    const isLoading = useSelector(state => state.LoadingReducer.isLoading)


    return (
       <Fragment>
           {isLoading ? <div className="loading ">
            <div>
                <div className="body">
                    <span>
                        <span />
                        <span />
                        <span />
                        <span />
                    </span>
                    <div className="base">
                        <span />
                        <div className="face" />
                    </div>
                </div>

                <div className="longfazers">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            </div> : ''}
       </Fragment>
    )
}




