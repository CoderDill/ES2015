let objDestructuring1 = {
  "console.log(numPlanets); = ": 8,
  "console.log(yearNeptunedDiscovered); = ": 1846,
};

let objDestructuring2 = {
  "console.log(discoveryYears); = ": {
    yearNeptunedDiscovered: 1846,
    yearMarsDiscovered: 1659,
  },
};

let objDestructuring3 = {
  'getUserData({firstName: "Alejandro", favoriteColor: "purple"}) =':
    "Your name is Alejandro and you like purple",
  'getUserData({firstName: "Melissa"}) =':
    "Your name is Melissa and you like green",
  "getUserData({}) =": "Your name is undefined and you like green",
};

let arrayDestructuring1 = [
  "console.log(first); = Maya",
  "console.log(second); = Marisa",
  "console.log(third); = Chi",
];

let arrayDestructuring2 = [
  'console.log(raindrops) = "Raindrops on roses"',
  'console.log(whiskers) = "whiskers on kittens"',
  'console.log(aFewOfMyFavoriteThings) = ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]',
];

let arrayDestructuring3 = ["[10, 30, 20]"];

//ES2015 Object Destructuring
let obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
let { a, b } = obj.numbers;

//ES2015 One-Line Array Swap with Destructuring
//  [arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
