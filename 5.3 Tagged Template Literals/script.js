// //Tagged Template

// const nama = 'Nila Enjeli';
// const umur = 20;

// function coba(strings, ...values){
// //    let result = '';
// //    strings.forEach((str, i) => {
// //     result += `${str}${values[i] || ''}`;
// //    });
// //    return result;
// // }
// return strings.reduce((result, str, i) => `${result}${str}${values[i] ||''}`, '');
// }


// const str = `Hallo, nama saya ${nama}, saya ${umur} tahun.`; // menjadikan template ini menjadi tagged template
// console.log(str);


//////////////////

//Tagged Template


const nama = 'Nila Enjeli';
const umur = 20;
const email = 'nilaanjeli@gmail.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah: ${email}.`; // menjadikan template ini menjadi tagged template
document.body.innerHTML = str;
