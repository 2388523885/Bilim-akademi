// ===== MOBİL MENÜ =====
function menuAc() {
  document.querySelector('nav ul').classList.toggle('acik');
}

// ===== AKTİF SAYFA LİNKİ =====
(function() {
  const mevcut = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(a => {
    if (a.getAttribute('href') === mevcut) a.classList.add('aktif');
  });
})();

// ===== HİCRİ TAKVİM =====
function hicriHesapla() {
  const bugun = new Date();
  const jd = Math.floor(bugun.getTime() / 86400000 + 2440587.5);
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const ll = l - 10631 * n + 354;
  const j = Math.floor((10985 - ll) / 5316) * Math.floor((50 * ll) / 17719) + Math.floor(ll / 5670) * Math.floor((43 * ll) / 15238);
  const ll2 = ll - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  return { gun: ll2 - Math.floor(709 * Math.floor(24 * ll2 / 709) / 24), ay: Math.floor(24 * ll2 / 709), yil: 30 * n + j - 30 };
}
function hicriTakvimGoster() {
  const aylar = ['Muharrem','Safer','Rebiülevvel','Rebiülahir','Cemaziyelevvel','Cemaziyelahir','Recep','Şaban','Ramazan','Şevval','Zilkade','Zilhicce'];
  const h = hicriHesapla();
  const bugun = new Date();
  const gEl = document.getElementById('hicri-gun'), aEl = document.getElementById('hicri-ay'), yEl = document.getElementById('hicri-yil'), mEl = document.getElementById('miladi-tarih');
  if (gEl) gEl.textContent = h.gun;
  if (aEl) aEl.textContent = aylar[h.ay - 1];
  if (yEl) yEl.textContent = h.yil + ' H';
  if (mEl) mEl.textContent = bugun.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ===== YAN MENÜ VERİLERİ =====
const yanMenuKategoriler = [
  { ad: 'Tefsir',    link: 'makaleler.html?kategori=tefsir',    sayi: 24, renk: 'nokta-tefsir'   },
  { ad: 'Hadis',     link: 'makaleler.html?kategori=hadis',     sayi: 18, renk: 'nokta-hadis'    },
  { ad: 'Fıkıh',    link: 'makaleler.html?kategori=fikih',     sayi: 31, renk: 'nokta-fikih'    },
  { ad: 'Siyer',     link: 'makaleler.html?kategori=siyer',     sayi: 12, renk: 'nokta-siyer'    },
  { ad: 'Kıssalar',  link: 'makaleler.html?kategori=kissalar',  sayi: 9,  renk: 'nokta-kissalar' },
  { ad: 'Dualar',    link: 'makaleler.html?kategori=dualar',    sayi: 50, renk: 'nokta-dualar'   }
];
const sonYazilar = [
  { baslik: 'Fatiha Suresi Tefsiri',       link: 'makaleler/fatiha-tefsiri.html', kategori: 'Tefsir', tarih: '15 Mar' },
  { baslik: '40 Hadis — İmam Nevevî',      link: 'makaleler/kirk-hadis.html',     kategori: 'Hadis',  tarih: '10 Mar' },
  { baslik: 'Namaz Vakitleri ve Farzları', link: 'makaleler/namaz.html',          kategori: 'Fıkıh',  tarih: '5 Mar'  },
  { baslik: 'Hz. Muhammed\'in Hayatı',    link: 'makaleler/hz-muhammed.html',    kategori: 'Siyer',  tarih: '1 Mar'  },
];

function yanKategorileriYukle() {
  const liste = document.getElementById('yan-kategoriler');
  if (!liste) return;
  yanMenuKategoriler.forEach(k => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = k.link;
    const sol = document.createElement('div');
    sol.className = 'kat-sol';
    const nokta = document.createElement('div');
    nokta.className = 'kat-nokta ' + k.renk;
    const ad = document.createElement('span');
    ad.textContent = k.ad;
    sol.appendChild(nokta); sol.appendChild(ad);
    const sayi = document.createElement('span');
    sayi.className = 'kat-sayi';
    sayi.textContent = k.sayi;
    a.appendChild(sol); a.appendChild(sayi);
    li.appendChild(a); liste.appendChild(li);
  });
}
function sonYazilariYukle() {
  const liste = document.getElementById('yan-son-yazilar');
  if (!liste) return;
  sonYazilar.slice(0, 4).forEach((y, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = y.link;
    const no = document.createElement('div');
    no.className = 'sy-numara';
    no.textContent = i + 1;
    const bilgi = document.createElement('div');
    const baslik = document.createElement('div');
    baslik.className = 'sy-baslik';
    baslik.textContent = y.baslik;
    const meta = document.createElement('div');
    meta.className = 'sy-meta';
    meta.textContent = y.kategori + ' · ' + y.tarih;
    bilgi.appendChild(baslik); bilgi.appendChild(meta);
    a.appendChild(no); a.appendChild(bilgi);
    li.appendChild(a); liste.appendChild(li);
  });
}

// ===== FOOTER YILI =====
function footerYilGuncelle() {
  const el = document.getElementById('footer-yil');
  if (el) el.textContent = new Date().getFullYear();
}

// ===== SSS =====
function sssAc(item) {
  const cevap = item.querySelector('.sss-cevap');
  const simge = item.querySelector('.sss-soru span');
  const acikMi = item.classList.contains('acik');
  document.querySelectorAll('.sss-item').forEach(el => {
    el.classList.remove('acik');
    el.querySelector('.sss-cevap').style.maxHeight = '0';
    el.querySelector('.sss-soru span').textContent = '+';
  });
  if (!acikMi) {
    item.classList.add('acik');
    cevap.style.maxHeight = cevap.scrollHeight + 'px';
    simge.textContent = '−';
  }
}

// ===== BAŞLAT =====
document.addEventListener('DOMContentLoaded', function() {
  hicriTakvimGoster();
  yanKategorileriYukle();
  sonYazilariYukle();
  footerYilGuncelle();
});
