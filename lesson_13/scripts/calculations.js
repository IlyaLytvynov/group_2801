const TEST = 'TEST';

function print(whatToPrint) {
  console.log(whatToPrint);
}

function add(a, b) {
  if (!a || !b) {
    throw Error('Params error: please provide valid values');
  }
  print(TEST);
  return Number(a) + Number(b);
}

function sqr(a) {
  return Number(a) * Number(a);
}

function sumAndSqr(a, b) {
  const sum = add(a, b);
  return sqr(sum);
}

export { add, sqr, sumAndSqr };
