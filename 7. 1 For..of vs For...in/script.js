//For ...of
// const mhs = ['Nila','Meri', 'Dian'];

// for(let i = 0; i<mhs.length; i++){
//     console.log(mhs[i]);
// }
//////////////////////
// mhs.forEach(m => console.loog(m));

// for(const m of mhs){
//     console.log(m);
// }

//String
// const nama ='Sandika';
// for (const n of nama){
//     console.log(n);
// }

//const mhs = ['Nila', 'Meri', 'Dian'];
// mhs.forEach((m, i) =>{
// console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

//Nodelist
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));

// for(n of liNama){
// console.log(n.innerHTML);
// }

//arguments

// function jumlahkanAngka(){
//    // return arguments.reduce((a, i) => a + i);
//    let jumlah = 0;
//    for(a of arguments){
//     jumlah += a;
//    }
//    return jumlah;
//   // arguments.forEach(a  => jumlah += a); 
    
//    };

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));
 //for .. in
 const mhs ={
    nama: 'Nila Enjeli',
    umur:20,
    email: 'nilaanjeli@gmail.com'
 };

 for(m in mhs){
    console.log(mhs[m]);
 }







