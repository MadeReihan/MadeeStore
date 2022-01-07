import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react';
import MenuItem from './MenuItem';
import Profile from './Profile';
import SidebarFooter from './SidebarFooter';

interface SideBarProps{
    ActiveMenu: 'overview'| 'transaction'| 'setting'
}
export default function index(props:SideBarProps) {
    const router = useRouter()
    const onLogOut =()=>{
        Cookies.remove("token")
        router.push('/signIn')
    }
    const {ActiveMenu} = props;
    return (
    <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile/>
            <div className="menus">
                <MenuItem Gambar={'menuitemOverview'} Title='Overview' Active={ActiveMenu === 'overview'} href='/member/'/>
                <MenuItem Gambar={'menuitemTransacsion'} Title='Transacsion' Active={ActiveMenu === 'transaction'} href='/member/transaction'/>
                <MenuItem Gambar={'menuitemCard'} Title='Card' href='/' />
                <MenuItem Gambar={'menuitemmessages'} Title='Messages'  href='/'/>
                <MenuItem Gambar={'menuitemRewards'} Title='Rewards'  href='/'/>
                <MenuItem Gambar={'menuitemSetting'} Title='Setting' Active={ActiveMenu === 'setting'} href='/member/editProfile' />
                <MenuItem Gambar={'menuitemLogout'} Title='Logout' onClick={onLogOut} />
            </div>
            <SidebarFooter/>
        </div>
    </section>
    )
}
