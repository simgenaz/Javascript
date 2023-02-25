// 1-Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonuz yapınız.

function words(word, num) {
  for (let i = 0; i < num; i++) {
    console.log(word);
  }
}
words("hello", 5);

// 2- Dikdortgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function alanCevreHesapla(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = (kisa + uzun) * 2;
  return `alan: ${alan} çevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(7, 10);
console.log(sonuc);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTuraAt() {
  let random = Math.random();
  console.log(random);
  if (random < 0.5) {
    console.log("yazi");
  } else {
    console.log("tura");
  }
  console.log(random);
}
yaziTuraAt();
yaziTuraAt();
yaziTuraAt();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonuz yazınız.

function sayiDondur(num) {
  let nums = [];

  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      nums.push(i);
    }
  }

  return nums;
}
console.log(sayiDondur(10));
console.log(sayiDondur(15));



// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
function toplam(a,b){
    let sonuc = 0;

    for(let i = 0; i < arguments.length; i++){
        sonuc += arguments[i];
    }

    return sonuc;
}

console.log(toplam(2,5));


