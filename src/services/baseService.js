import axios from "axios";
import { tokenSyberSoft, USER_LOGIN, ACCESSTOKEN } from './../utils/settings';

export class baseService {

    get = (url) =>{
        return axios({
            url:url,
            method:'GET',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                // 'TokenCybersoft' : `${tokenSyberSoft}`
            }
        })
    }

    post = (url,data) =>{
        return axios({
            url:url,
            data:data,
            method:'POST',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                // 'TokenCybersoft' : `${tokenSyberSoft}`
            }
        })
    }

    put = (url,data) => {
        return axios({
            url:url,
            data:data,
            method:'PUT',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                // 'TokenCybersoft' : `${tokenSyberSoft}`
            }
        })
    }
    delete = (url) => {
        return axios({
            url:url,
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                // 'TokenCybersoft' : `${tokenSyberSoft}`
            }
        })
    }
}