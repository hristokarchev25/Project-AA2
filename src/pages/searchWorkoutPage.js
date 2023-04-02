import React, { useState, useEffect } from 'react';
import SearchWorkoutNav from '../components/Navbar/searchWorkoutNav.jsx';
import SearchWorkoutSidebar from '../components/Sidebar/SearchWorkoutSidebar.jsx';
import SearchWorkoutHeroSection from '../components/HeroSection/SearchWorkoutHeroSection.jsx';
import SearchElement from '../components/SearchElement/SearchElement.jsx';
import Exercises from '../components/Exercises/Exercises.jsx';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import { auth } from '../utils/firebase';

function SearchWorkoutPage() {

    const [user, setUser] = useState(null);
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <SearchWorkoutSidebar isOpen={isOpen} toggle={toggle} email={user?.email} isAuth={Boolean(user)} />
            <SearchWorkoutNav toggle={toggle} email={user?.email} isAuth={Boolean(user)} />
            <SearchWorkoutHeroSection />
            <SearchElement setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
            <Footer />
        </>
    )
}

export default SearchWorkoutPage;