//Konsep this pada arrow finction

//construktor function
// const Mahasiswa = function(){
//     this.nama = 'Nila';
//     this.umur = 33;
//     console.log(this);

//     this.sayHello = function(){
//          console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} thun.`);
//     }
// }
// const Nila = new Mahasiswa();


////////////////
//Arrow function
// const Mahasiswa = function(){
//         this.nama = 'Nila';
//         this.umur = 33;
//         console.log(this);
//     //methode
//         this.sayHello = ()=> {
//              console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} thun.`);
//         }
//     }
//     const Nila = new Mahasiswa();

////////////////////////////
//Arrow function dengan object Literal
// const mhs1a ={
//     nama : 'Nila',
//     umur : 33,
// //methode
//    sayHello : () => {
//         // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} thun.`);
//         console.log(this);
//     }
// }
//////////////////////////////////
// const Mahasiswa = function(){
//     this.nama = 'Nila';
//     this.umur = 33;
//     console.log(this);
// //methode
//     this.sayHello = ()=> {
//          console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} thun.`);
//     }
//     setInterval(()=>{
//         console.log(this.umur++);
//     }, 500)
// }
// const Nila = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle('size');
    let that = this; // Simpan referensi this ke dalam variabel that
    setTimeout(() => {
        console.log(that);
        // that.classList.toggle('caption'); // Jika ingin menambahkan class 'caption'
    }, 600); // Tambahkan waktu (delay) sebagai argumen pertama
});






