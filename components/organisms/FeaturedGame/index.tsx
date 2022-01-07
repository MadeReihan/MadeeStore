import React, { useCallback, useEffect, useState } from 'react';
import { GameItemTypes } from '../../../services/data-types';
import { getFeaturedGame } from '../../../services/player';
import PieceFeaturedGame from '../../molecules/PieceFeaturedGame';

export default function FeaturedGame() {
    const [gamelist,setgamelist] = useState([]);

    const getFeatureGameList = useCallback(async()=>{
        const data = await getFeaturedGame();

        setgamelist(data);
    },[getFeaturedGame])

    useEffect(() => {
        getFeatureGameList();
    },[]);
    const API_IMG = process.env.NEXT_PUBLIC_IMG
    return (
        <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured Games This Year <br />
            </h2>
            <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                data-aos="fade-up">
                {gamelist.map((item: GameItemTypes) => {
                    return (
                        <PieceFeaturedGame key={item._id} Gambar={`${API_IMG}/${item.thumbnail}`} title={item.name} category={item.category.name} id={item._id}/>

                    )
                })}
            </div>
        </div>
    </section>
    )
}
