import React from 'react';
import Devs from '../components/Devs';
import { icoTheObj } from '../components/Devs/Data';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

function devsPage() {
    return (
        <>
            <ScrollToTop />
            <Devs {...icoTheObj} />
            <Footer />
        </>
    )
}

export default devsPage;
