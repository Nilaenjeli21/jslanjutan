//Distructuring Object
// const mhs ={
//     nama : 'Nila Enjeli',
//     umur : 20
// }

// const {nama, umur} = mhs;
// console.log(nama);

//Assigment tanpa deklarasi object

// ({nama, umur} ={ nama : 'Nila Enjeli', umur : 20
//     });
//     console.log(nama);

//Assignment ke variabel baru
// const mhs = {
//     nama: 'Nila Enjeli',
//     umur: 20
// }

// const { nama:n, umur:u } = mhs;
// console.log(nama);


//Memberikan default value

// const mhs = {
//     nama: 'Nila Enjeli',
//     umur: 20
// }

// const { nama, umur } = mhs;
// console.log(nama);

//Mengambil field pada onject, setelah dikirim sebagai parameter untuk function
const mhs ={
    id :123,
    nama : 'Nila Enjeli',
    umur : 20,
    email : 'nila@gmail.com'

}
function getIdMhs({id, nama}){
    return id;
}
console.log(getIdMhs(mhs));

