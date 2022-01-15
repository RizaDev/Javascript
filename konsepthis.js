//Refactory adalah proses mengubah kode agar lebih baik tanpa mengubah fungsionalitasnya

//Konsep keyword this

//1. Konsep this pada pembuatan objek secara function deklarasi

// var a = 10;
// console.log(this.a);
// function halo() {
//   console.log(this);
//   console.log("halo");
// }

// this.halo();

//this mengembalikan objek global

//2. Konsep this pada pembuatan objek secara literal
// var obj = { nama: "Riza", no: 10 };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
//   console.log(this.nama);
// };

// console.log(obj);
// obj.halo();
//this mengembalikan objek itu sendiri dalam hal ini abjek obj

//3. Konsep this pada pembuatan objek secara konstruktor

// function Halo(nama, ttl, tahun) {
//   this.aran = nama;
//   this.tanggal = ttl;
//   this.sasi = tahun;
//   console.log(this);
//   console.log("Halo");
// }

//this mengembalikan objek yang dibuat dalam hal ini obj1

//instansiasi obj obj1 dengan konstruktor Halo()
//var obj1 = new Halo("Riza", "Pemalang", 1994);
//menampilkan objek obj1
//console.log(obj1);
//menampilkan  nilai dari obj1 dengan property sasi
//console.log(obj1.sasi);

//this ini mengembalikan objek global, sehingga var tanggal typenya undefined
//console.log(this.tanggal);

//4. konsep this pada array function

//Constructor Function

// const Mhs = function () {
//   this.nama = "riza";
//   this.umur = "26";
//   //console.log(this); //this mengembalikan objek Mhs

//   this.sayhello = () => {
//     //console.log(this); //this mengembalikan obj Mhs
//     console.log(`Hallo saya ${this.nama}, umur ${this.umur} tahun.`);
//   };

//   setInterval(() => {
//     console.log(this); //mengembalikan objek Mhs
//   }, 500);
// };

// let mhs = new Mhs();
// //console.log(mhs);
// mhs.sayhello();

const box = document.querySelector(".box");

// box.addEventListener("click", () => {
//   console.log(this);//this mengembalikan objek global
// });

box.addEventListener("click", function () {
  //console.log(this); //this mengembalikan objek box

  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 5000);
});

//buat objek dengan constructor
// function Angkot(sopir, trayek, penumpang, kas) {
//   //property
//   this.driver = sopir;
//   this.trayek = trayek;
//   this.penumpang = penumpang;
//   this.kas = kas;

//   //method
//   this.penumpangNaik = function (namapenumpang) {
//     this.penumpang.push(namapenumpang);
//     return this.penumpang;
//   };

//   this.penumpangTurun = function (namapenumpang, bayar) {
//     if (this.penumpang == 0) {
//       alert("Angkot masih kosong!!!");
//     } else {
//       for (i = 0; i < this.penumpang.length; i++)
//         if (this.penumpang[i] == namapenumpang) {
//           //hapus elemet array ke-i dengan splice
//           //Splice(i,1) artinya hapus 1 elemen yaitu elemen ke - i
//           this.penumpang.splice(i, 1);

//           this.kas += bayar;
//         }
//     }

//     return this.penumpang;
//   };
// }

// //instansiasi objek
// var angkot1 = new Angkot("Reno", ["serang", "Sitemu"], [], 0);
