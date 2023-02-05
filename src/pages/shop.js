import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import ShopNav from '../components/Navbar/shopNav';
import ShopSidebar from '../components/Sidebar/ShopSidebar';
import ScrollToTop from '../components/ScrollToTop';
import Proteins from '../components/Services/Proteins.jsx';
import Mats from '../components/Services/Mats.jsx';
import Gym from '../components/Services/Gym.jsx';

import { auth } from '../utils/firebase';

function Shop() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <ScrollToTop />
            <ShopSidebar isOpen={isOpen} toggle={toggle} email={user?.email} isAuth={Boolean(user)} />
            <ShopNav toggle={toggle} email={user?.email} isAuth={Boolean(user)} />
            <Proteins />
            <Mats />
            <Gym />
            <Footer />
        </>
    )
}

export default Shop;
