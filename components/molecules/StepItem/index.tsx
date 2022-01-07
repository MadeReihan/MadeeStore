import React from 'react';
export interface StepItemProps{
    icon: 'step1' | 'step2' | 'step3';
    judul:string;
    kalimat_atas:string;
    kalimat_bawah:string;
}

export default function StepItem(Props:StepItemProps) {
    const {icon,judul,kalimat_atas,kalimat_bawah} = Props;
    return (
        <div className="col-lg-4">
        <div className="card feature-card border-0">
            <img src={`/icon/${icon}.svg`} alt='Icon Step' className='mb-30' width={80} height={80}/>
            <p className="fw-semibold text-2xl mb-2 color-palette-1">{judul}</p>
            <p className="text-lg color-palette-1 mb-0">{kalimat_atas}<br/>
                {kalimat_bawah}</p>
        </div>
    </div>
    )
}
