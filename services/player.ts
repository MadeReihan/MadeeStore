import axios from 'axios'
import { checkoutTypes } from './data-types';
const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'
import callApi from '../config/api';
export async function getFeaturedGame(){
    const URL = 'players/landingPage'

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    
    return axiosResponse.data;
}

export async function getDetailVoucher(id:string) {
    const URL = `players/${id}/detail`

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    
    return axiosResponse.data;
}

export async function getGameCategory() {
    const URL = `players/category`

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    
    return axiosResponse.data;
}
export async function setCheckout(data:checkoutTypes) {
    const URL = `${ROOT_API}/${API_VERSION}/players/checkout`

    return callApi({
        url:URL,
        method:'POST',
        data:data,
        token:true
    })
}
