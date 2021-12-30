import svgOne from '../../images/train.svg';
import whiteLotus from '../../images/white.png';
import orginalLotus from '../../images/blackGreen.png';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Welcome!',
    headline: 'Unlimited Trans with zero fees',
    description: 'Get access ..... text.',
    buttonLink: '/signup',
    buttonLabel: 'Get started',
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
    topLine: 'Unlimited Access',
    headline: 'Unlimited Trans with zero fees',
    description: 'Get access ..... text.',
    buttonLink: '/signin',
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
