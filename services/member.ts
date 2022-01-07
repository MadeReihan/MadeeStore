
const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'
import callApi from '../config/api';

export async function getMemberOverview() {
    const URL = `${ROOT_API}/${API_VERSION}/players/dashboard`

    return callApi({
        url:URL,
        method:'GET',
        token:true
    })
}

export async function getMemberTransaction(valueParams:any) {
    let params = ''
    if(valueParams === 'all'){
        params=''
    }else{
        params = `?status=${valueParams}`
    }
    const url = `${ROOT_API}/${API_VERSION}/players/history/${params}`

    return callApi({
        url:url,
        method:'GET',
        token:true
    })
}

export async function getTransactionDetail(id:any,token:string) {

    const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`

    return callApi({
        url:url,
        method:'GET',
        serverToken:token
    })
}

export async function updateProfile(data: FormData) {
    const url = `${ROOT_API}/${API_VERSION}/players/profile`;
  
    return callApi({
      url,
      method: 'PUT',
      data,
      token: true,
    });
  }