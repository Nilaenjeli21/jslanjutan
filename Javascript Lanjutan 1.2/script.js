const methodMahasiswa = {
    makan: function (porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    },
    main : function (jam) {
        this.energi -= jam;
        console.log(`Hallo ${this.nama},selamat bermain!`);
    },

    tidur : function (jam) {
        this.tidur += jam;
        console.log(`Hallo ${this.nama},selamat tidur!`);
    }

};
function mahasiswa(nama, energi) {
        let mahasiswa = Object.create(methodMahasiswa);
        mahasiswa.nama = nama;
        mahasiswa. energi = energi;

        return mahasiswa;
}
    let Nila = mahasiswa('Nila', 10);
    let Meri = mahasiswa('Meri', 10);
    