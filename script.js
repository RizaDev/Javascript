//tebakan yang dipilih oleh komputer dari 1 - 10
var tebakanKomp = Math.floor(Math.random() * 10 + 1);

console.log(tebakanKomp);

alert("Tebak angka dari 1 - 10 \n kamu punya 3 kesempatan");

//jumlah kesempatan ada 3 kali
var jml = 2;
//Aturan main
while (jml >= 1) {
  var tebakanAnda = prompt("Masukkan angka tebakan : ");
  if (tebakanAnda == tebakanKomp) {
    alert("Anda benar !! \nAngka yang dicari adalah : " + tebakanKomp);

    break;
  } else if (tebakanAnda < tebakanKomp) {
    alert("Tebakan Anda terlalu rendah!! \nAyo masih ada " + jml + " Kesempatan");
  } else {
    alert("Tebakan Anda terlalu tinggi !! \nAyo masih ada " + jml + " Kesempatan");
  }

  jml--;
}
if (jml == 0) {
  var tebakanAnda = prompt("Masukkan angka tebakan : ");

  if (tebakanAnda == tebakanKomp) {
    alert("Anda benar !! \nAngka yang dicari adalah : " + tebakanKomp);
  } else if (tebakanAnda < tebakanKomp) {
    alert("Tebakan Anda terlalu rendah!! \nKesempatan Anda sudah habis");
    alert("Anda Gagal \nAngka yang dicari adalah : " + tebakanKomp);
  } else {
    alert("Tebakan Anda terlalu tinggi!! \nKesempatan Anda sudah habis");
    alert("Anda Gagal \nAngka yang dicari adalah : " + tebakanKomp);
  }
}

alert("Terimakasih");

// alert("Tebakan anda terlalu rendah!! \n Ayo masih ada 2 kesempatan");
// alert("Anda benar!! \n Angka yang dicari adalah 9");
// alert("Terimakasih");
// alert("Tebakan anda terlalu rendah!! \n Kesempatan anda sudah habis");
// alert("Anda Gagal \n Angka yang dicari adalah : 9");
