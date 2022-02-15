import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import GymDetails from '../components/Details/gymDetails';

function gymDetailsPage() {
    return (
        <>
            <ScrollToTop />
            <GymDetails />
            <Footer />
        </>
    )
}

export default gymDetailsPage;