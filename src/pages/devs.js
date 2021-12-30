import React from 'react';
import Devs from '../components/Devs';
import { icoTheObj, preskoTheObj } from '../components/Devs/Data';
import ScrollToTop from '../components/ScrollToTop';

function devsPage() {
    return (
        <>
            <ScrollToTop />
            <Devs {...icoTheObj} />
            <Devs {...preskoTheObj} />
        </>
    )
}

export default devsPage;
