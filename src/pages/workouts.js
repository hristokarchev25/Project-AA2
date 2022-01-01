import React from 'react';
import Workouts from '../components/Workouts';
import { tomObj } from '../components/Workouts/Data';
import ScrollToTop from '../components/ScrollToTop';


function workoutsPage() {
    return (
        <>
            <ScrollToTop />
            <Workouts {...tomObj} />
        </>
    )
}

export default workoutsPage;
