// ===== AYET & HADİS VERİLERİ =====
const ayetler = [
  { arapca: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", meal: "Şüphesiz güçlükle beraber kolaylık vardır.", kaynak: "İnşirah Suresi, 94:6" },
  { arapca: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", meal: "Kim Allah'a tevekkül ederse O ona yeter.", kaynak: "Talak Suresi, 65:3" },
  { arapca: "فَاذْكُرُونِي أَذْكُرْكُمْ", meal: "Siz beni zikredin, ben de sizi zikredeyim.", kaynak: "Bakara Suresi, 2:152" },
  { arapca: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ", meal: "Allah'ın rahmetinden ümidinizi kesmeyin.", kaynak: "Yusuf Suresi, 12:87" },
  { arapca: "وَقُل رَّبِّ زِدْنِي عِلْمًا", meal: "De ki: Rabbim, ilmimi artır.", kaynak: "Taha Suresi, 20:114" }
];
const hadisler = [
  { metin: "Müslüman, elinden ve dilinden diğer Müslümanların emin olduğu kimsedir.", kaynak: "Buhârî, İman, 4" },
  { metin: "Kolaylaştırınız, zorlaştırmayınız. Müjdeleyiniz, nefret ettirmeyiniz.", kaynak: "Buhârî, İlim, 11" },
  { metin: "Ameller niyetlere göredir.", kaynak: "Buhârî, Bed'ü'l-Vahy, 1" },
  { metin: "Komşusu açken tok yatan bizden değildir.", kaynak: "Hâkim, Müstedrek" },
  { metin: "Güzel ahlak en ağır basan ameldir.", kaynak: "Tirmizî, Birr, 61" }
];

function bugunIndex(liste) {
  const fark = Math.floor((new Date() - new Date('2024-01-01')) / 86400000);
  return fark % liste.length;
}
let mevcutAyet  = bugunIndex(ayetler);
let mevcutHadis = bugunIndex(hadisler);

function ayetleriGoster() {
  const a = ayetler[mevcutAyet], h = hadisler[mevcutHadis];
  document.getElementById('ayet-arapca').textContent = a.arapca;
  document.getElementById('ayet-meal').textContent   = '"' + a.meal + '"';
  document.getElementById('ayet-kaynak').textContent = a.kaynak;
  document.getElementById('hadis-metin').textContent  = '"' + h.metin + '"';
  document.getElementById('hadis-kaynak').textContent = h.kaynak;
}
function yeniAyet() {
  const ak = document.getElementById('ayet-kutu'), hk = document.getElementById('hadis-kutu');
  ak.classList.add('gizle'); hk.classList.add('gizle');
  setTimeout(() => {
    mevcutAyet  = (mevcutAyet  + 1) % ayetler.length;
    mevcutHadis = (mevcutHadis + 1) % hadisler.length;
    ayetleriGoster();
    ak.classList.remove('gizle'); hk.classList.remove('gizle');
  }, 400);
}

// ===== SON MAKALELER =====
const sonMakaleler = [
  { baslik: "40 Hadis — İmam Nevevî Şerhi", ozet: "İslam'ın temel prensiplerini anlatan kırk hadisin detaylı açıklaması.", kategori: "hadis", ikon: "🌙", tarih: "10 Mart 2025", link: "makaleler/kirk-hadis.html" },
  { baslik: "Namaz Vakitleri ve Farzları",   ozet: "Beş vakit namazın şartları, farzları ve nasıl doğru kılınacağı.", kategori: "fikih", ikon: "⚖️", tarih: "5 Mart 2025", link: "makaleler/namaz.html" },
  { baslik: "Hz. Yusuf'un Kıssası",          ozet: "Kur'an'da en güzel kıssa olarak anlatılan Hz. Yusuf'un hayatı.", kategori: "kissalar", ikon: "📜", tarih: "25 Şubat 2025", link: "makaleler/hz-yusuf.html" }
];
function sonMakaleOlustur() {
  const grid = document.getElementById('son-makaleler-grid');
  if (!grid) return;
  sonMakaleler.forEach(m => {
    const kart = document.createElement('article');
    kart.className = 'makale-kart';
    const resim = document.createElement('div');
    resim.className = 'kart-resim ' + m.kategori + '-bg';
    resim.textContent = m.ikon;
    const ic = document.createElement('div');
    ic.className = 'kart-icerik';
    const rozet = document.createElement('span');
    rozet.className = 'rozet ' + m.kategori;
    rozet.textContent = m.kategori.charAt(0).toUpperCase() + m.kategori.slice(1);
    const baslik = document.createElement('h3');
    const link = document.createElement('a');
    link.href = m.link; link.textContent = m.baslik;
    baslik.appendChild(link);
    const ozet = document.createElement('p');
    ozet.textContent = m.ozet;
    const alt = document.createElement('div');
    alt.className = 'kart-alt';
    const tarih = document.createElement('span');
    tarih.className = 'kart-tarih'; tarih.textContent = m.tarih;
    const devami = document.createElement('span');
    devami.className = 'kart-devami'; devami.textContent = 'Devamı →';
    alt.appendChild(tarih); alt.appendChild(devami);
    ic.appendChild(rozet); ic.appendChild(baslik); ic.appendChild(ozet); ic.appendChild(alt);
    kart.appendChild(resim); kart.appendChild(ic);
    grid.appendChild(kart);
  });
}

// ===== KATEGORİLER =====
const kategoriler = [
  { ad: "Tefsir",    ikon: "📖", sayi: 24, aciklama: "Kuran ayetlerinin anlam ve yorumu", link: "makaleler.html?kategori=tefsir", renk: "tefsir"   },
  { ad: "Hadis",     ikon: "🌙", sayi: 18, aciklama: "Peygamberimizin söz ve sünnetleri",  link: "makaleler.html?kategori=hadis",  renk: "hadis"    },
  { ad: "Fıkıh",    ikon: "⚖️", sayi: 31, aciklama: "İslam hukuku ve ibadet esasları",   link: "makaleler.html?kategori=fikih",  renk: "fikih"    },
  { ad: "Siyer",     ikon: "🕌", sayi: 12, aciklama: "Peygamberimizin hayatı ve dönemi",  link: "makaleler.html?kategori=siyer",  renk: "siyer"    },
  { ad: "Kıssalar",  ikon: "📜", sayi: 9,  aciklama: "Peygamberler ve sahabeler kıssaları",link: "makaleler.html?kategori=kissalar",renk:"kissalar"  },
  { ad: "Dualar",    ikon: "🤲", sayi: 50, aciklama: "Günlük dua ve zikirler",            link: "makaleler.html?kategori=dualar", renk: "dualar"   }
];
function kategorileriOlustur() {
  const grid = document.getElementById('kat-grid');
  if (!grid) return;
  kategoriler.forEach(k => {
    const a = document.createElement('a');
    a.href = k.link; a.className = 'kat-kart kat-' + k.renk;
    a.innerHTML = `<div class="kat-ust"><span class="kat-ikon">${k.ikon}</span><span class="kat-sayi">${k.sayi} yazı</span></div><div class="kat-ad">${k.ad}</div><div class="kat-aciklama">${k.aciklama}</div><div class="kat-link">Görüntüle →</div>`;
    grid.appendChild(a);
  });
}

// ===== DUALAR =====
const dualar = [
  { baslik: "Sabah Duası",  arapca: "اللَّهُمَّ بِكَ أَصْبَحْنَا",        turkce: "Allah'ım! Senin izninle sabahladık.",     kaynak: "Ebu Davud",     kategori: "sabah",  zikir: false },
  { baslik: "Yemek Duası",  arapca: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",turkce: "Allah'ın adıyla ve bereketi üzerine.",  kaynak: "Ebu Davud, 3767",kategori: "yemek",  zikir: false },
  { baslik: "Sübhanallah",  arapca: "سُبْحَانَ اللَّهِ",                  turkce: "Allah'ı her eksiklikten tenzih ederim.", kaynak: "Buhârî",         kategori: "zikir",  zikir: true,  hedef: 33 },
  { baslik: "Akşam Duası",  arapca: "اللَّهُمَّ بِكَ أَمْسَيْنَا",         turkce: "Allah'ım! Senin izninle akşamladık.",    kaynak: "Tirmizî",       kategori: "aksam",  zikir: false },
  { baslik: "Uyku Duası",   arapca: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", turkce: "Allah'ım! Senin adınla ölür ve dirilirim.",kaynak: "Buhârî, 6324",kategori: "uyku",   zikir: false },
  { baslik: "Elhamdülillah",arapca: "الْحَمْدُ لِلَّهِ",                  turkce: "Hamd yalnızca Allah'a aittir.",          kaynak: "Müslim",         kategori: "zikir",  zikir: true,  hedef: 33 }
];
const sayaclar = {};
let duaFiltresi = 'tumu';

function duaKartOlustur(dua, index) {
  const div = document.createElement('div');
  div.className = 'dua-kart'; div.dataset.kategori = dua.kategori;
  if (!sayaclar[index]) sayaclar[index] = 0;
  const altKisim = dua.zikir
    ? `<div class="zikir-sayac"><button class="sayac-btn" id="artir-${index}" onclick="sayacArtir(${index},${dua.hedef})">+</button><span class="sayac-goster" id="sayac-${index}">0/${dua.hedef}</span><button class="sifirla-btn" onclick="sayacSifirla(${index},${dua.hedef})">Sıfırla</button></div>`
    : `<span class="dua-kaynak">${dua.kaynak}</span>`;
  div.innerHTML = `<div class="dua-ust"><span class="dua-etiket ${dua.kategori}">${dua.baslik}</span><button class="kopyala-btn" onclick="duaKopyala(this,${index})" title="Kopyala">📋</button></div><p class="dua-arapca">${dua.arapca}</p><p class="dua-turkce">"${dua.turkce}"</p>${altKisim}`;
  return div;
}
function renderDualar(filtre) {
  const grid = document.getElementById('dua-grid');
  if (!grid) return;
  grid.innerHTML = '';
  dualar.forEach((d, i) => { if (filtre === 'tumu' || d.kategori === filtre) grid.appendChild(duaKartOlustur(d, i)); });
}
function duaFiltrele(kategori, btn) {
  document.querySelectorAll('.sekme-btn').forEach(b => b.classList.remove('aktif'));
  btn.classList.add('aktif'); duaFiltresi = kategori; renderDualar(kategori);
}
function sayacArtir(index, hedef) {
  if (sayaclar[index] >= hedef) return;
  sayaclar[index]++;
  const el = document.getElementById('sayac-' + index), btn = document.getElementById('artir-' + index);
  if (el) el.textContent = sayaclar[index] + '/' + hedef;
  if (sayaclar[index] === hedef && btn) { btn.textContent = '✓'; btn.style.background = '#C8860A'; }
}
function sayacSifirla(index, hedef) {
  sayaclar[index] = 0;
  const el = document.getElementById('sayac-' + index), btn = document.getElementById('artir-' + index);
  if (el) el.textContent = '0/' + hedef;
  if (btn) { btn.textContent = '+'; btn.style.background = '#1B6B5A'; }
}
function duaKopyala(btn, index) {
  const d = dualar[index];
  navigator.clipboard.writeText(d.arapca + '\n' + d.turkce + '\n(' + d.kaynak + ')').then(() => {
    btn.textContent = '✓'; btn.classList.add('kopyalandi');
    setTimeout(() => { btn.textContent = '📋'; btn.classList.remove('kopyalandi'); }, 2000);
  });
}

// ===== ARAMA =====
function aramaYap() {
  const kelime = document.getElementById('hero-arama-input').value.trim();
  if (kelime.length < 2) return;
  window.location.href = 'makaleler.html?ara=' + encodeURIComponent(kelime);
}

// ===== BAŞLAT =====
document.addEventListener('DOMContentLoaded', function() {
  ayetleriGoster();
  sonMakaleOlustur();
  kategorileriOlustur();
  renderDualar('tumu');
});
