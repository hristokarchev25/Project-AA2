import React from 'react';
import Devs from '../components/Devs';
import { icoTheObj, preskoTheObj } from '../components/Devs/Data';

function devsPage() {
    return (
        <>
            <Devs {...icoTheObj} />
            <Devs {...preskoTheObj} />
        </>
    )
}

export default devsPage;
