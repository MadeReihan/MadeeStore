import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos';
import NavBar from '../components/organisms/NavBar'
import MainBanner from '../components/organisms/MainBanner'
import TransacsionStep from '../components/organisms/TransacsionStep'
import FeaturedGame from '../components/organisms/FeaturedGame'
import Reached from '../components/organisms/Reached'
import Story from '../components/organisms/Story'
import Footer from '../components/organisms/Footer'
import Head from 'next/head'

const Home: NextPage = () => {
    useEffect(() => {
        AOS.init();
    },[])
  return (
   <>
    <Head>
      <title>Madee Store - topup voucher game mu disini</title>
      <meta name="description" content="kami menyediakan voucher top up game yang terbaik dan termurah" />
      <meta property='og:title' content="Madee Store - topup voucher game mu disini" />
      <meta property='og:description' content="kami menyediakan voucher top up game yang terbaik dan termurah" />
      <meta property='og:image' content="https://image"/>
      <meta property='og:url' content="https://madeeStore.com"/>
    </Head>
    <NavBar/>
    <MainBanner/>
    <TransacsionStep/>
    <FeaturedGame />
    <Reached/>
    <Story/>
    <Footer/>
  </>
  )
}

export default Home
