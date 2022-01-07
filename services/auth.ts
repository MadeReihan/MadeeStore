import axios from 'axios'
import callApi from '../config/api';
import { loginTypes } from './data-types/index';
const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'
export async function setSignUp(data:FormData){
    const URL = `${ROOT_API}/${API_VERSION}/auth/signup`

    return callApi({
        url:URL,
        method:'POST',
        data:data
    })
}
export async function setLogin(data:loginTypes){
    const URL = `${ROOT_API}/${API_VERSION}/auth/signin`
    
    return callApi({
        url:URL,
        method:'POST',
        data:data

    })
}
