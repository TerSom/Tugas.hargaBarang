const hargaBarang = Math.floor(Math.random() * 10 + 1 );
console.log(hargaBarang)

let barang = -1;
while (hargaBarang !== barang) {
    barang = parseInt(prompt("Tebak harga barang! \nHarga mulai dari 1 sampai 10 "));
	if (isNaN(barang)) {
		alert("Harga Barang harus angka!");
	}else if (hargaBarang === barang) {
        alert("Selamat tebakan harga barang kamu benar!");
	}else if (hargaBarang > barang) {
		alert(`Harga Barang lebih tinggi dari ${barang}`);
    }else{
		alert(`Harga Barang lebih rendah dari ${barang}`);
	}
}

const MainLagi = confirm("Main lagi?");
    if (MainLagi) {
        location.reload();
}