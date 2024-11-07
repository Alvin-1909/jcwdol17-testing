/** @format */
// function merupakan sebuah reusable code(code yang bisa di pakai terus terusan) , untuk melakukan sebuah tugas

// function declaration
console.log(square);

function square(angka: number){
// code-block/instruksi
    return angka * angka;
}
// square merupakan nama dari function
// angka merupakan parameter 
// parameter adalah sebuah variable yang dimana isi valuenya diisi melalui argument saat function dipanggil
// argument adalah sebuah value yang kita passing ke dalam parameter
// return adalah sebuah hasil yang dihasilkan oleh sebuah function

// call function
let result_5: number = square(5);
console.log("ini hasil perkalian 5 yaitu", result_5);

function tanpaParameter(){
    return "ini adalah sebuah function tanpa parameter";
}

function tanpaParameter2() {
    console.log("ini adalah function tanpa return");
}

console.log(tanpaParameter());

// function expression

// console.log(square2(40)); ini tidak bisa di eksekusi 


const square2 = function (angka: number) {
    const str: string = "saya ada di dalam funtion scope"
    console.log();
    
    return angka * angka;
}

// console.log(str); tidak bisa akses variable str karena str dipanggil diluar function 


console.log(square2(3));

