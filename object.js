// dict , json

let userA = {
    "ad": "Simge",
    "soyad": "Naz",
    "yas": 25,
    "adres":
    {
        "sehir":"istanbul",
        "ilce": "izmit"
    },
    "hobiler": ["sinema","spor"]
}
let userB = {
    "ad": "Çinar",
    "soyad": "Ali",
    "yas": 25,
    "adres":
    {
        "sehir":"istanbul",
        "ilce": "izmit"
    },
    "hobiler": ["sinema","spor"]
}

let sonuc;
sonuc = userA.ad;
sonuc = userA.soyad;
sonuc = userA[yas];
sonuc = userA.adres.sehir;
sonuc = userA.adres.ilce;
sonuc = userA.hobiler[0];
sonuc = userA.hobiler[1];

let users = [
    userA,
    userB
];
sonuc = users[1].ad;

let urunler = [
    {
        "urun_adi":  "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi":  "samsung s22",
        "urun_fiyat": 14000
    }

];

sonuc = urunler[0].urun_adi;

console.log(sonuc);