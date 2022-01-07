import jwt_decode from 'jwt-decode'
import React from 'react'
import SideBar from '../../../components/organisms/Sidebar'
import TransactionContent from '../../../components/organisms/TransactionContent'
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types'

export default function index() {
    return (
        <section className="transactions overflow-auto">
        <SideBar ActiveMenu='transaction'/>
        <TransactionContent/>
    </section>
    )
}
interface GetServerSideProps{
    req:{
        cookies:{
            token:string
        }
    }
}

export async function getServerSideProps({req}:GetServerSideProps) {
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
    const payload:JWTPayloadTypes = jwt_decode(jwtToken)
    const userFromPayload:UserTypes = payload.player
    const IMG = process.env.NEXT_PUBLIC_IMG
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
    return{
        props:{
            user:userFromPayload
        }
    }
}
