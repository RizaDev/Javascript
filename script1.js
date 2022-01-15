//deklarasi fungsi tambah tanpa parameter
function tambah() {
  var hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }

  return hasil;
}

//pemanggilan fungsi
//semua argument pada pemanggilan fungsi tambah disimpan ke dalam var arguments
//var arguments tipenya adalah array sehingga isi dari var argument adalah
// var arguments = [1,4,6]
console.log(tambah(1, 4, 6));
