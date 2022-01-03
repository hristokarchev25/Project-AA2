import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import ScrollToTop from '../components/ScrollToTop';

import { auth } from '../utils/firebase';

const Home = () => {
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
            <Sidebar isOpen={isOpen} toggle={toggle} email={user?.email} isAuth={Boolean(user)} />
            <Navbar toggle={toggle} email={user?.email} isAuth={Boolean(user)} />
            <HeroSection email={user?.email} isAuth={Boolean(user)} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} isAuth={Boolean(user)} />
            <Footer />
        </>
    )
}

export default Home;
