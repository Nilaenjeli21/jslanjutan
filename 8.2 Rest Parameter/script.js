//Rest Parameter

// function myfunc(a,...myargs){
//     // return `a = ${a}, b={b}, myargs = ${myargs}`;
//     // return myargs;
//     //return Array.from(arguments);
//     return[...arguments];
// }

// console.log(myfunc(1, 2, 3, 4, 5));

 //function jumlahkan(...angka){
// let total = 0;
// for(const a of angka){
//     total += a;
// }
// return total;
// }
//////////////
//return total;
// return angka.reduce((a, b )=> a + b);

//  }
//  console.log(jumlahkan(1, 2, 3, 4, 5));

//array Destructuring
// const kelompok1 = ['Satria', 'Ihsan', 'Iqbal', 'Farrel', 'Danil'];
// const[ketua, wakil,...anggota] = kelompok1;
// console.log(anggota);

//object destructuring
// const team = {
//     pm:'Nila',
//     frondEnd1: 'Putra',
//     frondend2 : 'Satria',
//     bacEnd: 'Buyung',
//     ux :'Cantika',
//     devOps:'Gibral'
// }
// const {pm,...myteam} = team;
//     console.log(pm);

//filtering
function filterBy(type, ...values){
return values.filter (v => typeof v===type);
}
console.log(filterBy('boolean',1, 2, 'Nila', false, 10, true, 'Enjeli'));