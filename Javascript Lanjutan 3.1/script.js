// const tampilNama = function(nama){
//     returm`Hallo, ${nama}`;
// }
// console.log(tampilNama('Nila'));
////////////////////////////////////

// const tampilNama = (nama) => {return `Halo, ${nama}`;}
// console.log('Nila Enjeli');

////////////////////////
// const tampilNama = (nama, waktu) =>{
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Nila', 'Malam'));
//////////////////////////////////
//implisit return
// const tampilNama = nama => `Hallo ${nama}`;

//     console.log(tampilNama('Nila Enjeli'));

// const tampilNama = () => 'Hello world!';
// console.log(tampilNama());

let mahasiswa = ['Nila Enjeli', 'Meri Yusnanda', 'Ratna Sari'];
let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jmlhuruf:nama.length}));
console.table(jumlahHuruf);

