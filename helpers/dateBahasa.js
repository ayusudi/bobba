function dateBahasa(date){
    let bahasa = [
        'Januari', 'Februari', 'Maret', 'April' , 'Mei', 'Juni', 
        'July', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]
    let tahun = date.getFullYear()
    let bulan = bahasa[date.getMonth()]
    let tanggal = date.getDate()
    return `${tanggal} ${bulan} ${tahun}`
}

module.exports = dateBahasa