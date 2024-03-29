// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=6958ca19&s=Avengers',
//     success: movies => console.log(movies),
// });
//////////////////

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.readyState ===4){
//             console.log(JSON.parse(xhr.response));
//         }
//     }else{
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=6958ca19&s=Avengers');
// xhr.send();

/////////////////////
// fetch('http://www.omdbapi.com/?apikey=6958ca19&s=Avengers')
// .then(response => response.json()) 
// .then(response => console.log(response));


//promise
//object yang merepresentasikan keberhasilan atau kegagalan dari asyncronous di masa yang akan datang
//janji(terpenuhi/ingkar)
//state(fulfilled/rejected/pending)
//callback (resolve/reject/finally)
//aksi (then/catch)


//contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject)=>{
//     if(ditepati){
//         resolve('Janji telah ditepati!');
//     }else{
//         reject('Ingkar janji..');
//     }
// });
// janji1
// .then(response => console.log('OK! : ' + response))
// .catch(response => console.log('NOT OK! : ' + response));

//contoh ke 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject)=>{
//     if(ditepati){
//         setTimeout(()=>{
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000)
//     }else{
//         setTimeout(()=>{
//             resolve('Tidak ditepati setelah beberapa waktu!');
//         }, 2000)
//     }

// });
// console.log('Mulai');
//console.log(janji2.then(()=>console.log(janji2)));
// janji2
// .finally(()=> console.log('selesai menunggu!'))
// .then(response => console.log('OK! : ' + response))
// .catch(response => console.log('NOT OK! : ' + response));


// console.log('selesai');
///////////////////////

//promise.all()
const film = new Promise(resolve =>{
    setTimeout(()=>{
        resolve([{
            judul: 'Avengers',
            sutradara:'Nila Enjeli',
            pemeran: 'Doddy, Erik'
        }])
    },1000);

    });
    const cuaca = new Promise(resolve => {
        setTimeout(()=> {
            resolve([{
                kota:'Bandung',
                temp: 26,
                kondisi: 'Cerah Berawan'
            }])
        },500)
    });
    // film.then (response => console.log(response));
    // cuaca.then (response => console.log(response));

Promise.all([film,cuaca])
//.then(response => console.log(response));
.then(response =>{
    const[film, cuaca]= response;
    console.log(film);
    console.log(cuaca);
});