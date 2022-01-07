import Image from 'next/dist/client/image';
import React, { useEffect } from 'react'
// import SidebarFooter from '../../components/organisms/Sidebar/SidebarFooter'
import Index from '../../components/organisms/Sidebar/index';
import Input from '../../components/atoms/input'
import Cookies from 'js-cookie';
import { JWTPayloadTypes,UserTypes } from '../../services/data-types';
import jwt_decode from 'jwt-decode'
import {useState} from 'react';
import { updateProfile } from '../../services/member';
import { useRouter } from 'next/router';
import{toast} from 'react-toastify'


interface UserStateTypes {
    id: string;
    name: string;
    email: string;
    avatar: any;
    username:string;
}

export default function editProfile() {
    const [user,setUser] = useState<UserStateTypes>({
        id:'',
        name:'',
        email:'',
        avatar:'',
        username:'',
    })
    const [imagePreview,setImagePreview] = useState('/')
    const router = useRouter()

    useEffect(()=>{
        const token = Cookies.get('token')
        if(token){
            const jwtToken = atob(token)
            const payload: JWTPayloadTypes = jwt_decode(jwtToken)
            const userFromPayload:UserTypes = payload.player
            setUser(userFromPayload)
        }
    },[])

    const onSubmit =async()=>{

        const data = new FormData()


        data.append('avatar',user.avatar)
        data.append('username',user.username)
        data.append('name',user.username)
        const response = await updateProfile(data)
        

        if(response.error){
            toast.error(response.message)
        }else{
            Cookies.remove('token')
            router.push('/signIn')
        }
    }
    return (
    <section className="edit-profile overflow-auto">
        <Index ActiveMenu='setting'/>
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="image-upload">
                                <label htmlFor="avatar">
                                    {imagePreview  == '/' ? (
                                        <img src={user.avatar} alt="upload" width={90} height={90} style={{ borderRadius:'100' }} />
                                        ):(
                                        <img src={imagePreview} alt="upload" width={90} height={90} style={{ borderRadius:'100' }} />
                                    )}
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" onChange={
                                    (event) => {
                                        const img = event.target.files![0];
                                        setImagePreview(URL.createObjectURL(img));
                                        return setUser({
                                            ...user,
                                            avatar:img
                                        });
                                        }}/>
                            </div>
                        </div>
                        <div className="pt-30">
                            <Input label="full name" disabled
                            value={user.username} 
                            onChange={
                                (event:any) => {
                                    const newName = event.target.value;
                                    setUser({
                                        ...user,
                                        username:newName
                                    })
                                    }}
                            
                            />
                        </div>
                        <div className="pt-30">
                            <Input label="Email" disabled value={user.email}/>
                        </div>
                        <div className="button-group d-flex flex-column pt-50">
                            <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                role="button" onClick={onSubmit} >Save My Profile</button>
                        </div>
                    </form>

                    

                </div>
            </div>
        </main>
    </section>
    )
}

