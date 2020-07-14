// functions for random numbers

getRandom = () => Math.random();

const getRandomInt = (max) => Math.floor(Math.random() * max);

const getRandomBetween = (min, max) => Math.random() * (max - min) + min;

const getRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min)) + min;

console.log(getRandom);
