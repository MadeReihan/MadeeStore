import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import ToggleMenu from './ToggleMenu';


export default function Auth() {
    const [isLogin,setIsLogin] = useState(false)
    const [user,setUser] = useState({
        avatar: "",
        email: "",
        id: "",
        phoneNumber: "",
        username: ""
    })
    const router = useRouter()
    useEffect(()=>{
        const token = Cookies.get('token')
        if(token){
            const jwtToken = atob(token)
            const payload:JWTPayloadTypes = jwt_decode(jwtToken)
            const userFromPayload:UserTypes = payload.player
            const IMG = process.env.NEXT_PUBLIC_IMG
            user.avatar = `${IMG}/${userFromPayload.avatar}`
            setIsLogin(true)
            setUser(user)
        }
    },[]);

    const onLogOut =()=>{
        Cookies.remove("token")
        router.push('/')
        setIsLogin(false)
    }

    if(isLogin){
        return(
            <li className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none"></div>
                <div>
                    <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user.avatar} className="rounded-circle" width="40" height="40"
                            alt=""/>
                    </a>
                    <ToggleMenu/>
                    <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                        <li>
                            <Link href={"/member/"}>
                                <a className="dropdown-item text-lg color-palette-2">My Profile</a>
                            </Link>
                        </li>
                        <li><Link href={'/'}><a className="dropdown-item text-lg color-palette-2" >Wallet</a></Link></li>
                        <li><Link href={"member/editProfile"}><a className="dropdown-item text-lg color-palette-2" >Account Settings</a></Link>
                        </li>
                        <li>
                            <button className="dropdown-item text-lg color-palette-2" onClick={onLogOut} >Log Out</button>
                        </li>
                    </ul>
                </div>
            </li>
        )
    }
    return (
        <>
            <li className="nav-item my-auto">
                <Link href={"/signIn"}>
                    <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                         role="button">Sign
                        In</a>
                </Link>
            </li>
            
        </>
    )
}
