let ad = "Simge";
let soyad = "Naz";
let yas = 25;
let sehir = "İstanbul";

let mesaj =
  "Benim adim " +
  ad +
  " ve soyadim " +
  soyad +
  ". " +
  sehir +
  "'da yaşiyorum." +
  "Emekliliğe " +
  (65 - yas) +
  " yilim kaldi.";

//backtick `
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir} 'da yaşıyorum.Emekliliğe  ${
  65 - yas
}  yılım kaldı.`;



// ternary operators : bir koşul yazıp iki nokta arasına değer true ysa ilk tırnak değilse ikinci tırnak çalışır.
let emeklilik =
  65 - yas > 0
    ? "Emekliliğe " + (65 - yas) + " yıl kaldı."
    : "Zaten emekli oldunuz.";

    mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir} 'da yaşıyorum.${emeklilik}`;
console.log(mesaj);
