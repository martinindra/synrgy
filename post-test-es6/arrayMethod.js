var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return index > 4;
}
console.log(first);

var nomor = [4, 9, 16, 25, 29];
var second = nomor.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(second);
