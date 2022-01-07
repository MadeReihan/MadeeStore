import Image from 'next/dist/client/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { setSignUp } from '../services/auth';
import { CategoryTypes } from '../services/data-types';
import { getGameCategory } from '../services/player';

export default function signUpPhoto() {
    const[categories,setCategories] = useState([]);
    const [favorite,setFavorite] = useState('')
    const [image,setImage] = useState<any>('')
    const [imagePreview, setImagePreview] = useState<any>(null)
    const [localForm,setLocalForm] = useState({
        name:'',
        email:''
    })
    const router = useRouter()


    const getGameCategoryAPI = useCallback(async ()=> {
        const data = await getGameCategory()
        setCategories(data)
        setFavorite(data[0]._id)
    },[getGameCategory])

    useEffect(()=>{
        getGameCategoryAPI();
    },[])

    useEffect(() =>{
        const getLocalForm = localStorage.getItem('user-form')
        setLocalForm(JSON.parse(getLocalForm!))
    },[])
    
    const onSubmit = async() =>{

        const getLocalForm = await localStorage.getItem('user-form')
        const form = JSON.parse(getLocalForm!)
        const data = new FormData();

        data.append('image',image)
        data.append('email',form.email)
        data.append('username',form.name)
        data.append('name',form.name)
        data.append('username',form.name)
        data.append('password',form.password)
        data.append('phoneNumber','123')
        data.append('role','user')
        data.append('status','Y')
        data.append('favorite',favorite)

        const result = await setSignUp(data);

        if(result.error){
            toast.error(result.message)
        }else{
            toast.success('Register Berhasil')
            router.push('/signUpSuccess')
            localStorage.removeItem('user-form')
        }

    }
    return (
        <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
            <form action="" encType='multipart/form-data'>
                <div className="form-input d-md-block d-flex flex-column">
                    <div>
                        <div className="mb-20">
                            <div className="image-upload text-center">
                                <label htmlFor="avatar">
                                    {imagePreview ? <img src={imagePreview} className='img-upload' alt='upload' /> : <Image src='/icon/upload.svg' width={120} height={120} alt='upload' />}
                                    
                                    
                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" onChange={
                                    (event) => {
                                        setImage(event.target.files![0])
                                        setImagePreview(URL.createObjectURL(event.target.files![0]))
                                        }} />
                            </div>
                        </div>
                        <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                        <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                        <div className="pt-50 pb-50">
                            <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
                                Game</label>
                            <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg" aria-label="Favorite Game" value={favorite}
                            onChange={(event) => setFavorite(event.target.value)}
                            >
                                {categories.map((category:CategoryTypes) =>(
                                    <option key={category._id} value={category._id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="button-group d-flex flex-column mx-auto">
                        
                            <button className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                                 role="button" type="button" onClick={onSubmit}>Create My Account</button>

                        <Link href={'/'}>
                            <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" 
                                role="button">Terms &
                                Conditions</a>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
        
    </section>
    )
}
