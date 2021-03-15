let x = {
  nama: "saya",
  tempat: "disini",
  dimana: {
    kapan: "sekarang",
  },
};
// show x
console.log(x);
// show x.nama
console.log(x.nama);
// show x.tempat
console.log(x.tempat);
// show x.dimana.kapan
console.log(x.dimana.kapan);
console.log("\n");

let y = [
  {
    nama: "martin",
    alamat: "disini",
  },
  {
    nama: "indra",
    alamat: "disana",
  },
];

y.forEach((element) => {
  // show array.name
  console.log(element.nama);
  //   show array.alamat
  console.log(element.alamat);
});
