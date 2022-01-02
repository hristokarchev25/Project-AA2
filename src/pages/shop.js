import React, { useState } from 'react';
import Footer from '../components/Footer';
import ShopNav from '../components/Navbar/shopNav';
import ShopSidebar from '../components/Sidebar/ShopSidebar';
import ScrollToTop from '../components/ScrollToTop';
import Proteins from '../components/Services/proteins';
import Mats from '../components/Services/mats';

import Services from '../components/Services';

function Shop() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <ScrollToTop />
            <ShopSidebar isOpen={isOpen} toggle={toggle} />
            <ShopNav toggle={toggle} />
            <Proteins />
            <Mats />
            <Services />
            <Footer />
        </>
    )
}

export default Shop;
