//Destructuring
// function penjumlahanPerkalian(a, b){
//     return[a + b, a * b];
// }
// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

///////////////////////////////////
// function kalkulasi(a, b){
//     return [a+b, a-b, a*b,a/b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi (2,3);
// console.log(bagi);
///////////////////////
// function kalkulasi(a, b){
//     return{
//         tambah : a + b,
//         kurang : a-b,
//         kali: a *b,
//         bagi: a/b
//     }
// }
// const{bagi,tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang);

//Distructuring function arguments

const mhs1 ={
    nama: 'Nila Enjeli',
    umur : 20,
    email : 'nilaanjli@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75

    }
}
//deklarasi
function cetakMhs({nama, umur, nilai:{tugas, uts, uas}}){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, 
    dan nila uas saya adalah ${uas}.`;
}
console.log(cetakMhs(mhs1));