import React from 'react';

import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import ProteinDetails from '../components/Details/proteinDetails';

function proteinDetailsPage() {
    return (
        <>
            <ScrollToTop />
            <ProteinDetails />
            <Footer />
        </>
    )
}

export default proteinDetailsPage;
