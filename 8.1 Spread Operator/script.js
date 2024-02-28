//Spread Operator
//Memecah iterables menjadi single element

//const mhs = ['Nila', 'Meri', 'Putri'];
//console.log(... mhs[0]);

//menggabungkan 2 array
// const mhs = ['Nila', 'Meri', 'Putri'];
// const dosen = ['Ade', 'Ronal', 'Hadi'];
// const orang = [...mhs,'Nila',...dosen];

// //const orang = mhs.concat(dosen);
// console.log(orang);

//mengcopy array
// const mhs = ['Nila', 'Meri', 'Putri'];
// //const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);
//////////////////
const liMhs = document.querySelectorAll('li');
// const Mhs = [];
// for(let i = 0; i<liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;


