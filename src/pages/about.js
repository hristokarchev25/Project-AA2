import React from 'react';
import InfoSection from '../components/InfoSection';
import { aboutObj, aboutObjTwo } from '../components/InfoSection/Data';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

function aboutPage() {
    return (
        <>
            <ScrollToTop />
            <InfoSection {...aboutObj} />
            <InfoSection {...aboutObjTwo} />
            <Footer />
        </>
    )
}

export default aboutPage;