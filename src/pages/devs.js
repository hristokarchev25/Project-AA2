import React from 'react';
import Devs from '../components/Devs';
import { icoTheObj, preskoTheObj } from '../components/Devs/Data';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

function devsPage() {
    return (
        <>
            <ScrollToTop />
            <Devs {...icoTheObj} />
            <Devs {...preskoTheObj} />
            <Footer />
        </>
    )
}

export default devsPage;
