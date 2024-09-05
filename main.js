// Berkenalan dengan Object
const person = {
    name: 'John',
    age: 30,
    eyeColor: 'blue'
};

console.log(person.name); // Mengakses properti 'name'
console.log(person.age);  // Mengakses properti 'age'

// Berkenalan dengan Array
const fruits = ['banana', 'apple', 'orange', 'grape'];

console.log(fruits[0]); // Mengakses elemen pertama dari array

// Berkenalan dengan Map
const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);

console.log(myMap.get('name')); // Mengakses nilai dari kunci 'name'

// Berkenalan dengan Set
const mySet = new Set([1, 2, 3, 3, 2, 2]);

console.log(mySet); // Menampilkan elemen-elemen unik dari set

// Destructuring Object
const user = {
    name: "Hidayat",
    city: "Delhi",
    type: "Admin"
};

const { name, city, type } = user;

console.log(name); // Mengakses nilai 'name' dari objek
console.log(city); // Mengakses nilai 'city' dari objek
console.log(type); // Mengakses nilai 'type' dari objek

// Destructuring Array
const breakfast = ["Coffee", "Croissant", "Sunny side up", "8:38", "Sally", 9.15, 7];

const [drink, bread, eggs, ...meta] = breakfast;

console.log(drink); // Mengakses elemen pertama dari array
console.log(bread); // Mengakses elemen kedua dari array
console.log(meta);  // Mengakses sisa elemen sebagai array baru
