let ktp = {
    nama: `Martin`,
    tempatLahir: `Batu`,
    tanggalLahir: `03 Maret 1998`,
    alamat:{
        jalan:`Jl. Imam Bonjol Gg.3 No 45`,
        rtRw: `02/01`,
        kelurahan: `sisir`,
        kecamatan: `batu`,
        kota: `Batu`
    },
    status: `Belum Menikah`,
    pekerjaan: `freelance`,
    Kewarganegaraan: `WNI`
};
console.log("\n")
console.log(`Program object`)
console.log(`Data diri di dalam KTP :`)
console.log(`Nama ` + ktp.nama)
console.log(`Tanggal Lahir ` + ktp.tanggalLahir)
console.log(`Tempat Lahir ` + ktp.tempatLahir)
console.log(`Alamat : ` + ktp.alamat.jalan +` RT/RW `+ ktp.alamat.rtRw + ` Kelurahan `+ ktp.alamat.kelurahan + ` kecamatan ` + ktp.alamat.kecamatan + ` Kota ` + ktp.alamat.kota)
console.log(`Status ` + ktp.status)
console.log(`Pekerjaan ` + ktp.tempatLahir)
console.log(`Kewarganegaraan ` + ktp.Kewarganegaraan)