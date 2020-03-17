(function() {
  const someOtherVar = 55555;
  doCoolStuff();
  function add(a, b) {
    if (!a || !b) {
      throw Error('Params error: please provide valid values');
    }
    return Number(a) + Number(b);
  }

  function sqr(a) {
    return Number(a) * Number(a);
  }

  window.calculations = {
    add: add,
    sqr: sqr
  };
})();

const sum = calculations.add(20, 30);
const sqrSum = calculations.sqr(sum);
