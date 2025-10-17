//Fungsi untuk menjumlahkan dua angka
function add(a, b) {
    return a + b;
}

//Fungsi untuk mengurangi dua angka
function subtract(a, b) {
    return a - b;
}

//Fungsi untuk mengalikan dua angka
function multiply(a, b) {
    return a * b;
}

//Fungsi untuk membagi dua angka
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};