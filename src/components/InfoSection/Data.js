import svgOne from '../../images/train.svg';
import svgTwo from '../../images/team.svg';
import whiteLotus from '../../images/white.png';
import orginalLotus from '../../images/blackGreen.png';
import green from '../../images/greenLotus.png';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Welcome to',
    headline: 'The healthiest app on the internet!',
    description: 'About our mission.',
    buttonLink: '/about',
    buttonLabel: 'Read more',
    imgStart: false,
    img: whiteLotus,
    alt: 'white lotus',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Workouts',
    headline: 'Workouts and diets from around the world!',
    description: 'Browse through different workouts and diets from famous athletes.',
    buttonLink: '/workouts',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: svgOne,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Join us, sign up',
    description: 'Create your account and get access to our products. From top to bottom!',
    buttonLink: '/signup',
    buttonLabel: 'Start Now',
    imgStart: true,
    img: orginalLotus,
    alt: 'black and green lotus',
    dark: false,
    primary: false,
    darkText: true
};

export const aboutObj = {
    id: 'mission',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About us',
    headline: 'The mission!',
    description: `Our mission is to build a first-class health and care app. In this app users can read about
    workouts and diets of successful athletes, they can use the healthy store and change their lifestyle!`,
    buttonLink: '/devs',
    buttonLabel: 'Dev team',
    imgStart: false,
    img: green,
    alt: 'lotus',
    dark: true,
    primary: true,
    darkText: false
};

export const aboutObjTwo = {
    id: 'team',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About us',
    headline: 'Join our dev team!',
    description: 'You can be a part of this innovative project. You can use the "Contact Us" page to send your CV!',
    buttonLink: '/contactUs',
    buttonLabel: 'Apply',
    imgStart: true,
    img: svgTwo,
    alt: 'Team',
    dark: false,
    primary: false,
    darkText: true
};