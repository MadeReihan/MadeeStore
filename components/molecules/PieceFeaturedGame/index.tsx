import Image from 'next/dist/client/image'
import React from 'react'
import Link from 'next/link'

export interface GambarGame{
    title:string;
    category:string;
    Gambar: string;
    id:string;
}

export default function PieceFeaturedGame(Props:GambarGame) {
    const{Gambar,title,category,id} = Props;
    return (
        <div className="featured-game-card position-relative">
            <Link href={`/detail/${id}`}>
                <a>
                    <div className="blur-sharp">
                        <Image className='thumbnail' src={Gambar} width="205" height="270" alt="Game"/>
                    </div>
                    <div className="cover position-absolute bottom-0 m-32">
                        <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                            <div className="game-icon mx-auto">
                                <Image src={'/icon/console.svg'} width={54} height={36} alt='console'/>
                            </div>
                            <div>
                                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                                <p className="fw-light text-white m-0">{category}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>

        </div>
    )
}
