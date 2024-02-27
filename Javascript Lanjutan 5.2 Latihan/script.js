// HTML Fragments
// const mhs = {
//     nama: 'Nila Enjeli',
//     umur: 33,
//     nim : '2101092012',
//     email: 'nilaanjeli@gmail.com'

// };

// const el = `<div class ="mhs">
// <h2>${mhs.nama}</h2>
// <span class ="nim"> ${mhs.nim}</span>
// </div>`;

// console.log(el);
// document.body.innerHTML = el;

//2. Looping
// const mhs =[
// {
//     nama: 'Nila Enjeli',
//     email: 'nilaanjeli@gmail.com',

// },

// {
//     nama: 'Meri Yusnanda',
//     email: 'meriii@gmail.com',

// },
// {
//     nama: 'Anggun Faza',
//     email: 'anggun@gmail.com',

// },
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')}
// </div>`;
// document.body.innerHTML = el;

///////////////////////////
//3. Conditionals

//ternary
// const lagu = {
//     judul : 'Tetap Dalam Jiwa',
//     penyanyi : 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat? `(feat.${lagu.feat})` : ''}</li>
// </ul>
// </div>`;

// document.body.innerHTML = el;

//////////////////////
//4. Nested
//HTML Frogments bersarang

const mhs = {
    nama: 'Nila Enjeli',
    semester : 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object',
    ]

};

function cetakMataKuliah(mataKuliah){
    return`
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}




const el = `<div class ="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;




