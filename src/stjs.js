// functions for random numbers

// random number between 0 (included) and 1 (not included)
const getRandom = () => Math.random();

// random integer between 0 (included) and max (not included)
const getRandomInt = (max) => Math.floor(Math.random() * max);

// random number between min (inluded) and max (not included)
const getRandomBetween = (min, max) => Math.random() * (max - min) + min;

// random integer between min (included) and max (not included)
const getRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min)) + min;