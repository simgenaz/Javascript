// "Elma","Armut","Muz","Çilek" elemanlarına sahip bir dizi oluşturunuz

let meyveler = ["Elma","Armut","Muz","Çilek"];


// Dizi kaç elemanlıdır?
console.log(meyveler.length);

// Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length-1]);


// Elma dizinin bir elemanımıdır?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));


// Kiraz meyvesini listenin sonuna ekleyiniz.
meyveler[meyveler.length] = "Kiraz";
console.log(meyveler);
meyveler.push("Kiraz");

// Dizin son 2 elemanını siliniz.
meyveler.pop();

// Aşağıdaki bilgilieri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
Öğrenci 2: Ada Bilgi 2012 (80,80,90)
Öğrenci 3: Ahmet Turan 2009 (60,60,70)
*/

let ogr1 = [
    "Yiğit",
    "Bilgi",
    2010,
    [70,60,90]
];
let ogr2 = [
    "Ada",
    "Bilgi",
    2012,
    [80,80,90]
];
let og3 = [
    "Ahmet",
    "Turan",
    2009,
    [60,60,70]
];

let ogrenciler = [ogr1 , ogr2 , ogr3];

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yigit_yas,ada_yas,ahmet_yas);
console.log(yigit_not.toFixed(1),ada_not.toFixed(1),ahmet_not.toFixed(1));