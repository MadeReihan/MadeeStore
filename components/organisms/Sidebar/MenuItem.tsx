import classNames from 'classnames';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import React from 'react';
interface MenuItemMember{
    Gambar: String;
    Title:string;
    Active?:boolean;
    href:string;
    onClick?: ()=>void
}

export default function MenuItem(Props:Partial<MenuItemMember>) {
    const{Gambar, Title, Active=false, href,onClick} = Props;
    const classItem = classNames({
        'item':true,
        'mb-30':true,
        'active': Active
    })
    return (
        <>

        <div className={classItem} onClick={onClick}>
            <div className="me-3">
                <Image src={`/icon/${Gambar}.svg`} width={25} height={25}/>
            </div>
                    <p className="item-title m-0">
                        {onClick ? (
                            <a className="text-lg text-decoration-none">{Title}</a>
                        ):(
                        <Link href={`/${href}`}>
                             <a className="text-lg text-decoration-none">{Title}</a>
                        </Link>
                                
                        )}

                    </p>
        </div>
        
        </>
    )
}
