
let pnilai = 100;
var data_array = [];
var genap = [];
var ganjil = [];

// fungsi untuk membuat nilai random array dengan panjang index 100
function nilaiRandom(pnilai) {
    for (let a = 0; a <pnilai; a++) {
        let ran_data = Math.floor(Math.random() * (pnilai - 1 + 1) ) + 1;

        if (data_array.includes(ran_data)) {
            a -= 1
            continue;
        } else {
            data_array.push(ran_data);
        }

        if (data_array.length >= pnilai) {
            break;
        }
    }
}

// fungsi untuk memisahkan nilai ganjil dan genap dari index pada array yang sudah dibuat
function interest(data_array) {
    for (let a = 0; a < data_array.length; a++) {
        if (data_array[a] % 2 == 0) {
            genap.push(data_array[a])
        } else {
            ganjil.push(data_array[a])
        }
    }
}

// fungsi mencari nilai terkecil pada suatu array (min)
function min_value(nilai) {
    data = nilai[0]
    for (let a = 0; a < nilai.length; a++) {
        if (nilai[a] < data) {
            var data = nilai[a];
        } else {
            continue
        }
    }
    console.log(data)
}


// fungsi mencari nilai terbesar pada suatu array (max)
function max_value(nilai) {
    data = nilai[0]
    for (let a = 0; a < nilai.length; a++) {
        if (nilai[a] > data) {
            var data = nilai[a];
        } else {
            continue
        }
    }
    console.log(data)
}


// fungsi mencari nilai total pada suatu array (avarage)
function ave_value(nilai) {
    var data = 0;
    for (let i = 0; i < nilai.length; i++) {
        data += nilai[i];
    }
    console.log(data);
}


// fungsi mencari nilai rata-rata pada suatu array (sum)
function sum_value(nilai) {
    var data = 0;
    for (let i = 0; i < nilai.length; i++) {
        data += nilai[i];
    }
    data /= nilai.length
    console.log(data);
}


nilaiRandom(pnilai);
console.log(data_array);

interest(data_array);
console.log("nilai genap = "+genap);
console.log("nilai ganjil = "+ganjil);

min_value(ganjil);
max_value(ganjil);

ave_value(ganjil); 
ave_value(genap); 

sum_value(genap); 
sum_value(ganjil); 
