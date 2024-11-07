/* @format **/
// array merupakan sebuah tipe data yang menyimpan banyak data dengan memiliki tipe data yang seragam

// const arr = [1, 2, 3]; //array
// const arr2 = new Array (4, 5, 6); //array
const arr3 = ["jhonny", "dea"];

// const arr4: number =

for (const element of arr3) {
  console.log(element);
}

for (const index in arr3) {
  console.log(index, arr3[index]);
}

const names: string[] = ["ronald", "john", "andrew"];
const names2: string[] = ["ronaldowati", "naruto"];
console.log(names);

// built-in method yang tidak merubah origin value
console.log(names.toString()); //utk menkonversi array ke string
console.log(names.join("_"));
const gabunganNames: string[] = names.concat(names2);
gabunganNames.push("john");
console.log(gabunganNames);
console.log(names.slice(2, 3), "ini slice");
console.log(gabunganNames.indexOf("john"), "lokasi index john");
console.log(
  gabunganNames.lastIndexOf("john"),
  "lokasi index john yang paling terakhir"
);

// built-in method yang merubah origin value
names.push("rooney"); // menambahkan index di akhir array
names.unshift("messi"); // menambahkan index di awal array
names.pop(); // menghapus index di paling akhir array
names.shift(); // menghapus index di paling awal array
names.splice(0, 1);
names.sort();
names.reverse();

// property dari array
console.log(names.length, "banyak element dari array names");

// value dari array
console.log(names);

// looping dengan built-in method
// map = retur array sebanyak length
// filter = return array sebanyak length yang memenuhi kondisi
// for each = tidak memiliki return hanya looping sebanyak length
// findIndex = return number of index

// apabila sebuah parameter atau argument merupakan function maka disebut dengan callback function

gabunganNames.forEach((name, i, arr) => {
  console.log(name, "index ke", i, arr);
});
