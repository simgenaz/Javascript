function selamlama(msg){
    console.log(msg);
}

selamlama("selam");
selamlama("hello");

function yasHesapla(dogumYili){
    return new Date().getFullYear() - dogumYili;
}
let yasSimge = yasHesapla(1998);
let yasCagri = yasHesapla(1990);

console.log(yasCagri,yasSimge);

function emekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let kalanSene = 65 - yas;

    if(kalanSene > 0){
        console.log(`${isim}, emekli olmaniza ${kalanSene} yil kaldi.`);

    }else{
        console.log("Emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1998,"Simge");
emekliligeKacYilKaldi(1990,"Cagri");
emekliligeKacYilKaldi(2004,"Berc");



