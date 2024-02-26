const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
const hasil = angka.filter(a=> a > 5) //8,9,9
.map(a => a * 3) //24,27,27
.reduce((acc, cur) => acc + cur) // Menambahkan nilai awal 0 pada reduce
console.log(hasil);