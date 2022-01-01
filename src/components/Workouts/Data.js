import tomBrady from '../../images/TB.jpg';
import lebronJames from '../../images/LB.jpg';
import andyM from '../../images/AM.jpg';
import venusW from '../../images/VW.jpg';
import usainB from '../../images/UB.jpg';

export const tomObj = {
    id: 'Tom',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Workout by:',
    headline: 'Tom Brady',
    description: `Warm-up: attach resistance bands over the shoulders so that they form an “X” on the chest, then run in place until you feel warmed up
    EXERCISE #1: banded standing row
    EXERCISE #2: banded push-up
    EXERCISE #3: banded core rotations
    EXERCISE #4: deadlift
    EXERCISE #5: bicep curl
    EXERCISE #6: banded tricep extension
    EXERCISE #7: deceleration lunges
    post-workout: pliability session with a TB12 Vibrating Pliability Roller or Sphere to enhance recovery and stimulate the nervous system`,
    imgStart: false,
    img: tomBrady,
    alt: 'Tom Brady',
    darkText: false
};

export const bronObj = {
    id: 'LeBron',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Workout by:',
    headline: 'LeBron James',
    description: `Monday: 
    VersaClimber warm-up: (20-30 mins.)/Incline dumbbell bench press: (4 sets, 12 reps)
    /Seated dumbbell overhead press: (4 sets, 12 reps)
    /Seated overhead tricep extension with dumbbell : (4 sets, 12 reps)
    /Clap push-ups: (3 sets, 20 reps)
    /Triangle push-ups: (3 sets, 20 reps)
    Tuesday/Thursday/Saturday:
    /Plyometrics/spin class: (30-60 mins.)
    /Yoga: (30-60 mins.)
    Wednesday:
    /VersaClimber: (20-30 mins.)
    /Back squat: (4 sets, 12 reps)
    /Leg press: (4 sets, 12 reps)
    /Seated calf raise: (4 sets, 12 reps)
    /Jumping lunges: (3 sets, 20 reps)
    /Box jumps: (3 sets, 15 reps)
    Sunday: Rest Day
    `,
    imgStart: true,
    img: lebronJames,
    alt: 'LeBron J.',
    darkText: true
};

export const andyObj = {
    id: 'AndyM',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Diet by:',
    headline: 'Andy Murray',
    description: `
    On a regular training day, Murray eats muesli or porridge followed by eggs, bacon, and beans for breakfast. 
    A fruit smoothie and protein and vegetables is on the menu for lunch. Dinner involves a soup, seafood, or salad starter,
    followed by chicken, potatoes, and vegetables, according to Men's Health.`,
    imgStart: false,
    img: andyM,
    alt: 'Andy M.',
    darkText: false
};

export const venusObj = {
    id: 'Venus',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Diet by:',
    headline: 'Venus Williams',
    description: `
    According to Self, Williams starts her day with a green juice, protein smoothie, or fruit, or an egg white omelette or granola. 
    She opts for vegan restaurants or rice, beans, and grilled shrimp for lunch, snacks on kale chips, dates, and cashews,
     and typically makes a salad with chicken for dinner.
    `,
    imgStart: true,
    img: venusW,
    alt: 'Venus W.',
    darkText: true
};

export const usainObj = {
    id: 'UsainB',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Diet by:',
    headline: 'Usain Bolt',
    description: `
    According to The Huffington Post, he loves to eat chicken nuggets and wings in the morning before he hits the track — he ate an estimated 1,000 chicken nuggets while competing at the Beijing Olympics in 2012, according to Ladbrokes.
    He maintains a diet made up of 60% protein, 30% carbs, and 10% fat, and often eats ackee and saltfish with dumplings, cooked banana, or sweet potato for breakfast.
    Lunch is often made up of pasta with chicken, while dinner tends to be rice with peas and pork.`,
    imgStart: false,
    img: usainB,
    alt: 'Usain B.',
    darkText: false
};