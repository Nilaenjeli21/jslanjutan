// console.log(nama);
// var nama = 'Nila';

//creation phase pada global context
//nama variabel akan diisi dengan undefined
//nama function = fn()
//hoisting
//window = global object
//this = window

// execution phase
// console.log(sayHello());

// var nama ='Nila Enjeli';
// var umur = 33;

// function sayHello(){
//     return `Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// }

//function membuat execution local execution context
//yang didalamnya terdapat creation dan execution phase
//window
//argument
//hoisting

var nama = 'Nila Enjeli';
var username ='@nilaanjeli';

function cetakURL(){
    console.log(arguments);
     var instagramURL = 'https://www.instagram.com/';
    return instagramURL + username;
}
console.log(cetakURL('@danilasri','putra'));

// function a(){
//     console.log('ini a');

// function b(){
//     console.log('ini b');

// function c(){
//     onsole.log('ini c');
// }
// c();

// }
// b();

// }

// a();

