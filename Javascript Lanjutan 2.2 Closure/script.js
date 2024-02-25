// function init(){
//    // let nama = 'Nila';


//     return function(nama){
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Nila');
// panggilNama('Meri');
/////////////////////////////

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`hallo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan!`);
//     }
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// console.dir(selamatMalam('Nila'));


let add = (function(){
    let counter = 0;
    return function(){
       return ++counter;
}
})();
counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());