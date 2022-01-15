// function init() {
//   let nama = "riza";
//   function t() {
//     console.log(nama);
//   }

//   return t;
// }

// //jalankan fungsi init
// let p = init(); //hasil p -> f t()

// //jalankan f t()
// p(); //hasilnya output riza

// langsung dijalankan f init dan t
// init()();

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     return function () {
//       console.log(`Halo ${nama} Selamat ${waktu}`);
//     };
//   };
// }
// ucapkanSalam("pagi")("riza")();

//Arraw Function

// let t = function (nama) {
//   return `Hallo ${nama}`;
// };
//console.log(t("riza"));

// let t = (nama) => {
//   return `Hallo ${nama}`;
// };
// console.log(t("Alvin"));

// let t = (nama, waktu) => {
//   return `Hallo ${nama}, selamat ${waktu}`;
// };
// console.log(t("Alvin", "siang"));

//implicit return
// const t = () => `Halla`;
// console.log(t());

// let mhs = ["Riza Syaihikma Rifa'i", "Alvin Qurta'ain Firdaus", "Hadisti Romadona"];
//Dengan function Declaration
// console.table(
//   mhs.map(function (nama) {

//     //mengembalikan objek
//     return { nama, jh: nama.length };
//   })
// );

//dengan arrow function
// console.table(mhs.map((nama) => ({ nama, jh: nama.length })));
