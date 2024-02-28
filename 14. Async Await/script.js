//fungsi yang berjalan secara asyncronous
//menghasilkan(implisit) promise
//cara penuisannya seperti syncromous function biasa

// const coba = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve('selesai')
//     },2000)
// });
// //console.log(coba);
// coba.then(() => console.log(coba));
/////////////////////////////////////////
function cobaPromise(){
    return new Promise(resolve =>  {
        const waktu = 3000;
        if(waktu < 5000){
            setTimeout(()=>{
                resolve('selesai')
            }, waktu);
        }else{
            PromiseRejectionEvent('kelamaan')
        }
    });
}
// const coba = cobaPromise();
// coba
// .then(()=>console.log(coba))
// .catch(()=> console.log(coba));

//////////////////////////


async function cobaAsync(){
    try{
    const coba = await cobaPromise();
    console.log(coba);
}catch (err){
    console.error(err);
}
}
cobaAsync();