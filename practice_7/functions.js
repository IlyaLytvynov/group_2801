export function toString(stringArray) {
  let resultStr = '';
  for (let i = 0; i < stringArray.length; i++) {
    resultStr += '-' + stringArray[i];
  }
  return resultStr;
}

export function totalSum(numberArray) {
  let total = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (typeof numberArray[i] !== 'number') {
      continue;
    }
    total += numberArray[i];
  }
  return total;
}

export function mapArray(stringArray) {
  const numberArray = [];
  for (let item of stringArray) {
    numberArray.push(item.length); // вернет колличество символов в строке
  }
  return numberArray;
}

export function findMax(numberArray) {
  let maxValue = numberArray[0];
  for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] > maxValue) {
      maxValue = numberArray[i];
    }
  }
  return maxValue;
}

export function getTotalPrice(arrayProducts) {
  let total = 0;
  for (let i = 0; i < arrayProducts.length; i++) {
    total += arrayProducts[i].price;
  }
  return total;
}

export function filterMaxValues(arrayToFilter, maxValue) {
  const filteredValues = [];
  for (let someValue of arrayToFilter) {
    console.log(someValue);
    if (someValue < maxValue) {
      filteredValues.push(someValue);
    }
  }

  return filteredValues;
}
