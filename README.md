# Struktur Data JavaScript

Proyek ini membahas berbagai struktur data yang ada di JavaScript, termasuk objek, array, map, set, dan juga fitur destructuring yang memudahkan pengelolaan data. Berikut adalah penjelasan dari setiap konsep yang dicontohkan dalam kode ini.

## Berkenalan dengan Object

**Object** adalah kumpulan pasangan kunci-nilai yang merepresentasikan sebuah entitas. Kunci dalam objek biasanya berupa string atau simbol, sedangkan nilainya bisa berupa tipe data apa pun termasuk array, objek lain, atau nilai primitif.

Contoh penggunaan objek:

```javascript
const person = {
  name: "John",
  age: 30,
  eyeColor: "blue",
};
```

- `person.name`: Mengakses nilai dari properti name.
- `person.age`: Mengakses nilai dari properti age.

## Berkenalan dengan Array

Array adalah struktur data yang digunakan untuk menyimpan kumpulan nilai dalam urutan tertentu. Elemen-elemen dalam array diakses menggunakan indeks numerik yang dimulai dari 0.
Contoh penggunaan array:

```javascript
const fruits = ["banana", "apple", "orange", "grape"];
```

- `fruits[0]`: Mengakses elemen pertama dari array `('banana')`.

## Berkenalan dengan Map

Map adalah koleksi objek yang memetakan kunci ke nilai. Tidak seperti objek biasa, Map dapat menggunakan kunci apa pun, baik itu objek, array, fungsi, atau nilai primitif.
Contoh penggunaan map:

```javascript
const myMap = new Map();

myMap.set("name", "John");
myMap.set("age", 30);
```

- `myMap.get('name'):` Mengakses nilai dari kunci `'name'`.

## Berkenalan dengan Set

Set adalah koleksi nilai unik dari tipe data apa pun, baik itu primitif maupun objek. Set memastikan bahwa tidak ada duplikasi nilai dalam koleksi tersebut.
Contoh penggunaan set:

```javascript
const mySet = new Set([1, 2, 3, 3, 2, 2]);
```

- `mySet`: Menampilkan elemen-elemen unik dari set `(1, 2, 3)`.

## Destructuring Object & Array

Destructuring adalah fitur dalam JavaScript yang memungkinkan untuk "mendekomposisi" nilai dari array atau objek ke dalam variabel terpisah dengan cara yang lebih kompak. Ini memudahkan ekstraksi nilai dari struktur data kompleks menjadi variabel yang dapat langsung digunakan.

### Destructuring Object

Destructuring objek memungkinkan untuk mengekstrak nilai dari properti-properti objek ke dalam variabel terpisah.
Contoh destructuring objek:

```javascript
const user = {
  name: "Hidayat",
  city: "Delhi",
  type: "Admin",
};

const { name, city, type } = user;
```

- `name`: Mengakses nilai `name` dari objek `user`.
- `city`: Mengakses nilai `city` dari objek `user`.
- `type`: Mengakses nilai `type` dari objek `user`.

### Destructuring Array

Destructuring array memungkinkan untuk mengekstrak nilai dari elemen-elemen array ke dalam variabel terpisah. Urutan nilai yang diekstrak berdasarkan posisi mereka dalam array.
Contoh destructuring array:

```javascript
const breakfast = [
  "Coffee",
  "Croissant",
  "Sunny side up",
  "8:38",
  "Sally",
  9.15,
  7,
];

const [drink, bread, eggs, ...meta] = breakfast;
```

- `drink`: Mengakses elemen pertama dari array `("Coffee")`.
- `bread`: Mengakses elemen kedua dari array `("Croissant")`.
- `meta`: Mengakses sisa elemen sebagai array baru.

## Kesimpulan

Pemahaman tentang struktur data di JavaScript sangat penting untuk memanipulasi dan mengelola data secara efisien. Dengan menguasai objek, array, map, set, dan fitur destructuring, Anda dapat menulis kode yang lebih bersih, efisien, dan mudah dibaca.
