//ambil semua elemen
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

//ambil durasi masing masing vidio
.map(item => item.dataset.duration)

// ubah durasi menjadi int, ubah menit menjadi detik
.map(waktu => {
    //durasi (10:25) -> [10,25] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
})

// jumlah semua detik
.reduce((total, detik) => total + detik);

//ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam *3600;
const menit = Math.floor(jsLanjut/60);
const detik = jsLanjut - menit * 60;


//simpan di dom
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');

pJmlVideo.textContent =`${jmlVideo} Video.`

console.log(jmlVideo);