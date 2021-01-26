let pilihanStatus = true;
do {
  let pilihan = +prompt(
    "Pilih program : [(1)hari esok, (2) deret genap, (3)deret ganjil, atau (4)deret prima] :"
  );
  console.log(`pilihan anda adalah ${pilihan}`);
  let status = true;
  while (status) {
    console.clear();
    if (pilihan == 1) {
      console.log(pilihan);
      let hari = +prompt("pilih antara : if-Else [1] atau switch case [2]");
      if (hari) {
        if (hari == 1) {
          hariIfElse();
        } else if (hari == 2) {
          hariSwitch();
        } else {
          alert("inputan tidak benar");
        }
      } else {
        alert("inputan bukan angka");
      }
      status = confirm("ingin menentukan hari lagi?");
    } else if (pilihan == 2) {
      let angka = prompt("Masukkan angka maximal untuk deret genap");
      genap(angka);
      status = confirm("ingin melihat deret genap lagi?");
    } else if (pilihan == 3) {
      let angka = prompt("Masukkan angka maximal untuk deret ganjil");
      ganjil(angka);
      status = confirm("ingin melihat deret ganjil lagi?");
    } else if (pilihan == 4) {
      let angka = prompt("Masukkan angka maximal untuk deret prima");
      prima(angka);
      status = confirm("ingin melihat deret prima lagi?");
    } else {
      alert(
        "pilihan anda salah, mohon masukkan ulang sesuai format (angka 1-4)"
      );
      status = false;
    }
  }
  console.clear();
  console.log("Terima Kasih telah menggunakan program");
  pilihanStatus = confirm("masih ingin melanjutkan program?");
} while (pilihanStatus);

function hariIfElse() {
  const dataHari = [
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jumat",
    "sabtu",
    "minggu",
  ];
  let hariNama = prompt("Masukkan nama Hari :");
  let hariLower = hariNama.toLowerCase();

  let today = dataHari.indexOf(hariLower);
  if (today >= 0) {
    if (today < dataHari.length - 1) {
      alert(dataHari[today + 1]);
    } else {
      alert(dataHari[0]);
    }
  } else {
    alert("inputan Salah, silahkan masukkan nama hari yang sesuai");
  }
}

function hariSwitch() {
  let hariNama = prompt("Masukkan nama Hari :");
  let hariLower = hariNama.toLowerCase();

  switch (hariLower) {
    case "senin":
      alert("selasa");
      break;
    case "selasa":
      alert("rabu");
      break;
    case "rabu":
      alert("kamis");
      break;
    case "kamis":
      alert("jumat");
      break;
    case "jumat":
      alert("sabtu");
      break;
    case "sabtu":
      alert("minggu");
      break;
    case "minggu":
      alert("senin");
      break;
    default:
      alert("inputan hari salah, mohon periksa kembali");
      break;
  }
}

function genap(number) {
  let angka = parseInt(number);
  if (angka) {
    for (let index = 0; index <= angka; index++) {
      index % 2 == 0 ? console.log(index) : index;
    }
  } else {
    console.log("Inputan bukan angka");
  }
}

function ganjil(number) {
  let angka = parseInt(number);
  if (angka) {
    for (let index = 0; index <= angka; index++) {
      index % 2 != 0 ? console.log(index) : index;
    }
  } else {
    console.log("Inputan bukan angka");
  }
}

function prima(number) {
  let angka = parseInt(number);
  let cek;
  if (angka && angka >= 0) {
    for (let i = 2; i <= angka; i++) {
      cek = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) cek = false;
      }
      cek == true ? console.log(i) : i;
    }
  } else {
    console.log("Inputan bukan angka");
  }
}
