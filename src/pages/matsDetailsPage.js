import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import MatsDetails from '../components/Details/matsDetails';

function matsDetailsPage() {
    return (
        <>
            <ScrollToTop />
            <MatsDetails />
            <Footer />
        </>
    )
}

export default matsDetailsPage;