//Template Literal/ Template String
// const nama = 'Nila';
// const umur = 33;
// console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun.`)

//console.log('Hello, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');


//Embedded Expressions
// console.log(`${1 + 1}`);
//console.log(`${alert ('Hallo!')}`);
// const x = 10;
// console.log(`${(x % 2 ==0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
    const mhs = {
        nama: 'Nila Enjeli',
        umur: 33,
        nim : '2101092012',
        email: 'nilaanjeli@gmail.com'

    };

    const el = `<div class ="mhs">
    <h2>${ mhs.nama}</h2>
    <span class ="nim"> ${mhs.nim}</span>
    </div>`;

    console.log(el);