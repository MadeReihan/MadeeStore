import React from 'react'
import TransactionContentDetail from '../../../components/organisms/TransactionContentDetail'
import { HistoryTransactionTypes, JWTPayloadTypes,UserTypes } from '../../../services/data-types'
import jwt_decode from 'jwt-decode'
import { getTransactionDetail } from '../../../services/member'

interface transactionDetailProps{
    transactionDetail:HistoryTransactionTypes
}
export default function detail(props:transactionDetailProps) {
    const {transactionDetail} = props
    return (
    <section className="transactions-detail overflow-auto">
        
        <TransactionContentDetail data={transactionDetail}/>
       
    </section>
    )
}
interface GetServerSideProps{
    req:{
        cookies:{
            token:string
        }
    },
    params:{
        idTrx:string
    }
}

export async function getServerSideProps({req,params}:GetServerSideProps) {
    const {idTrx} = params
    const {token} = req.cookies
    if(!token){
        return {
            redirect:{
                destination:'/signIn',
                permanent:false,
            }
        }
    }
    const jwtToken = Buffer.from(token,'base64').toString('ascii')
    const payload: JWTPayloadTypes = jwt_decode(jwtToken)
    const userFromPayload:UserTypes = payload.player
    const IMG = process.env.NEXT_PUBLIC_IMG
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
    const response = await getTransactionDetail(idTrx,jwtToken)
    return{
        props:{
            transactionDetail:response.data
        }
    }
}

