
function mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}
mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`
}
mahasiswa.prototype.main = function(jam){
this .energi -= jam;
return `Halo ${this.nama}, selamat bermain!`
}
mahasiswa.prototype.tidur = function(jam){
    this .energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`
}

let Nila = new mahasiswa('Nila', 10);

//versi class
// class mahasiswa{
//     construktor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;

//     }
//     makan(porsi){
//         this.energi += porsi; 
//         return `Halo ${this.nama}, selamat makan!`;
//     }
//       main (jam){
//          this.energi -= jam;
//          return `Halo ${this.nama}, selamat bermain!`;
//     }
//     tidur (jam){
//          this.energi += jam * 2;
//          return `Halo ${this.nama}, selamat tidur!`;
//    }
// }
            
//  let Nila = new mahasiswa('Nila', 10);   
//  let Meri = new mahasiswa('Meri', 10); 
  
