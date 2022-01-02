import React, { useState } from 'react';
import Footer from '../components/Footer';
import ShopNav from '../components/Navbar/shopNav';

import Services from '../components/Services';
function Shop() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <ShopNav toggle={toggle} />
            <Services />
            <Footer />
        </>
    )
}

export default Shop;
