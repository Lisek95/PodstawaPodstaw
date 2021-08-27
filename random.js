function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(Math.random(), Math.random());
if (min > 0.5) { min = 1 }
if (min < 0.5) { min = 0 }
console.log(Math.random(), Math.random());