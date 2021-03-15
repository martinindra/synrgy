let b = async (a, b) => {
  let hasil = await (a * b);
  return hasil;
};

console.log(b(2, 3));
