console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH")
console.log('_'.repeat(50));

function validdateData(studentData) {
    if (typeof studentData.nama || typeof studentData.umur || studentData !== "Nomor KTP" || studentData === 0 ) {
        throw new Error("Invalid Data");
    }

    return studentData / studentData;
}

try {
    const result = validdateData("10", 2);
    console.log("Result:", result);
}   catch (error) {
    console.error("An error occurred:", error.message);
}

async function processData(studentData) {
    
}

processData({ nama: "", umur: 22, ktp: "1234567890123456 "});
processData({ nama: "Fahmy", umur: 16, ktp: "1234567890123456 "});
processData({ nama: "Kevin", umur: 20, ktp: "1234567890123456 "});
processData({ nama: "Robin", umur: 19, ktp: "231712550123456 "});
processData({ nama: "Kay", umur: 22, ktp: "1234567890123456 "});