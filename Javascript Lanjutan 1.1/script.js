//1. object Literal (tidak efektif untuk object yang banyak)
//properti berisi nilai
// let mahasiswa1= {
//     nama: 'Nila',
//     energi: 10,

//     //method --> function yng ada didalam object
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log (`Hallo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2= {
//     nama: 'Meri',
//     energi: 10,

//     //method --> function yng ada didalam object
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log (`Hallo ${this.nama}, selamat makan!`);
//     }
// }

//2. function Deklaration
// function mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa. energi = energi;

//     mahasiswa.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi-= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     }
//     return mahasiswa;
// }
// let Nila = mahasiswa('Nila', 10);
// let Meri = mahasiswa('Meri', 10);

// cara 2 deklarasi
// const methodMahasiswa = {
//     makan: function (porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main : function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama},selamat bermain!`);
//     },

//     tidur : function (jam) {
//         this.tidur += jam;
//         console.log(`Hallo ${this.nama},selamat tidur!`);
//     }

// };
// function mahasiswa(nama, energi) {
//         let mahasiswa = {};
//         mahasiswa.nama = nama;
//         mahasiswa. energi = energi;
//         mahasiswa.makan = methodMahasiswa.makan;
//         mahasiswa.main = methodMahasiswa.main;
//         mahasiswa.tidur = methodMahasiswa.tidur;
//         return mahasiswa;
// }
//     let Nila = mahasiswa('Nila', 10);
//     let Meri = mahasiswa('Meri', 10);
    

//3. Constraktor function
function mahasiswa(nama, energi) {
        
        this.nama = nama;
        this. energi = energi;
    
        this.makan = function (porsi){
            this.energi += porsi;
            console.log(`Hallo ${this.nama}, selamat makan!`);
        }
        this.main = function(jam) {
            this.energi-= jam;
            console.log(`Hallo ${this.nama}, selamat bermain!`);
        }   
    }
    let Nila = new mahasiswa ('nila',10);

    