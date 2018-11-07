const input = 123;

let sum = (input) => {
  return input.split.reduce((x, i) => {
    x+=i;
  })
}

console.log(sum(input));