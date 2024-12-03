console.log("[BARATIE RESTAURANT]")
console.log('_'.repeat(50));

function processPayment(hargaTotal, bayar) {
    if (typeof hargaTotal !== "number" || typeof bayar !== "number" ) {
        throw "Both total price and amount given must be numbers"
    }
}

const testCases = [
    { label: "[1]", total: 50, bayar: "fifty" },
    { label: "[2]", total: 50, bayar: 35 },
    { label: "[3]", total: 50, bayar: 550, "int" },
];

testCases.forEach(({ label, total, bayar }) => {

});