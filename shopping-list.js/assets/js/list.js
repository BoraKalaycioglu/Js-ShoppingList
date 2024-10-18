// Kullanıcıya kaç adet ürün eklemek istediğini soralım
// Kullanıcıdan aldığı cevaba göre ürünleri yazdığında diziye eklesin.
// Console'a tüm ürünleri yazdıralım ve dizi içinde kaç eleman olduğunu yazdıralım.


let urunler = []

function istenenUrunler () {
  let istenenUrunler = prompt ('Kaç adet ürün girmek istersiniz?');
  
  for(let i = 0; i < istenenUrunler; i++) {
    let urun = prompt(`${i + 1}. Ürünlerin İsmini Yazınız`);
    urunler.push(urun);
  }
  console.log(`Eklenen Ürünler : ${urunler} \nÜrün Sayısı: ${istenenUrunler}`);
}

istenenUrunler();

