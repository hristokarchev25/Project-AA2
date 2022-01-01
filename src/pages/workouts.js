import React from 'react';
import Workouts from '../components/Workouts';
import { tomObj, bronObj, andyObj, venusObj, usainObj } from '../components/Workouts/Data';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';


function workoutsPage() {
    return (
        <>
            <ScrollToTop />
            <Workouts {...tomObj} />
            <Workouts {...bronObj} />
            <Workouts {...andyObj} />
            <Workouts {...venusObj} />
            <Workouts {...usainObj} />
            <Footer />
        </>
    )
}

export default workoutsPage;
