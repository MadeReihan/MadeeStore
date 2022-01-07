import React from 'react'
import StepItem from '../../molecules/StepItem'

export default function index() {
    return (
        <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It's Really That<br/> Easy to Win the Game
            </h2>
            <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                <StepItem icon='step1' judul='1. Start' kalimat_atas='Pilih Salah Satu Game' kalimat_bawah='Yang Ingin Kamu Top Up'/>
                <StepItem icon='step2' judul='2. Fill Up' kalimat_atas='Top Up Seusai Dengan' kalimat_bawah='Nominal Yang Sudah Tersedia'/>
                <StepItem icon='step3'judul='3. Be A Winner' kalimat_atas='Siap Digunakan Untuk' kalimat_bawah='Improve Permainan Kamu' />
            </div>
        </div>
    </section>
    )
}
