const makaleler = [
  { baslik: "Fatiha Suresi Tefsiri ve Derin Manası", ozet: "Her namazda okuduğumuz Fatiha Suresi'nin kelime kelime açıklaması.", kategori: "tefsir",  tarih: "2025-03-15", tarihGoster: "15 Mart 2025",  okumaSuresi: "5 dk",  ikon: "📖", onemli: true,  link: "makaleler/fatiha-tefsiri.html" },
  { baslik: "40 Hadis — İmam Nevevî Şerhi",          ozet: "İslam'ın temel prensiplerini anlatan kırk hadisin detaylı açıklaması.",kategori: "hadis",   tarih: "2025-03-10", tarihGoster: "10 Mart 2025", okumaSuresi: "12 dk", ikon: "🌙", onemli: false, link: "makaleler/kirk-hadis.html" },
  { baslik: "Namaz Vakitleri ve Farzları",            ozet: "Beş vakit namazın şartları, farzları ve nasıl doğru kılınacağı.",   kategori: "fikih",   tarih: "2025-03-05", tarihGoster: "5 Mart 2025",  okumaSuresi: "8 dk",  ikon: "⚖️", onemli: true,  link: "makaleler/namaz.html" },
  { baslik: "Hz. Muhammed'in Hayatı — Tam Siyer",    ozet: "Peygamberimizin doğumundan vefatına kadar hayatı ve önemli olaylar.",kategori: "siyer",   tarih: "2025-03-01", tarihGoster: "1 Mart 2025",  okumaSuresi: "20 dk", ikon: "🕌", onemli: true,  link: "makaleler/hz-muhammed.html" },
  { baslik: "Hz. Yusuf'un Kıssası",                  ozet: "Kur'an'da en güzel kıssa olarak anlatılan Hz. Yusuf'un hayatı.",    kategori: "kissalar",tarih: "2025-02-25", tarihGoster: "25 Şubat 2025",okumaSuresi: "10 dk", ikon: "📜", onemli: false, link: "makaleler/hz-yusuf.html" },
  { baslik: "Sabah ve Akşam Duaları",                ozet: "Her Müslümanın bilmesi gereken sabah ve akşam duaları ve mealleri.", kategori: "dualar",  tarih: "2025-02-20", tarihGoster: "20 Şubat 2025",okumaSuresi: "6 dk",  ikon: "🤲", onemli: false, link: "makaleler/sabah-aksam-dualari.html" },
  { baslik: "Bakara Suresi İlk 5 Ayet Tefsiri",      ozet: "Kur'an'ın en uzun suresinin ilk ayetlerinin anlam ve yorumu.",       kategori: "tefsir",  tarih: "2025-02-15", tarihGoster: "15 Şubat 2025",okumaSuresi: "7 dk",  ikon: "📖", onemli: false, link: "makaleler/bakara-tefsiri.html" },
  { baslik: "Kütüb-i Sitte — Altı Temel Hadis Kitabı",ozet: "İslam'ın en güvenilir altı hadis kitabının tanıtımı ve önemi.",    kategori: "hadis",   tarih: "2025-02-10", tarihGoster: "10 Şubat 2025",okumaSuresi: "9 dk",  ikon: "🌙", onemli: false, link: "makaleler/kutubi-sitte.html" },
  { baslik: "İslam'da Zekâtın Önemi",                ozet: "Zekat ibadeti, kimlere farz olduğu ve nasıl hesaplandığı.",          kategori: "fikih",   tarih: "2025-02-05", tarihGoster: "5 Şubat 2025", okumaSuresi: "8 dk",  ikon: "⚖️", onemli: false, link: "makaleler/zekat.html" },
  { baslik: "Günlük Okunacak Dualar",                ozet: "Sabahtan akşama günlük hayatımızda okunması tavsiye edilen dualar.", kategori: "dualar",  tarih: "2025-01-28", tarihGoster: "28 Ocak 2025",  okumaSuresi: "5 dk",  ikon: "🤲", onemli: false, link: "makaleler/gunluk-dualar.html" }
];

const SAYFA_BASI = 6;
let mevcutFiltre = 'tumu', mevcutSiralama = 'yeni', mevcutSayfa = 1;

function kartOlustur(makale) {
  const a = document.createElement('a');
  a.href = makale.link;
  a.className = 'makale-satir' + (makale.onemli ? ' one-cikan' : '');
  const ikon = document.createElement('div');
  ikon.className = 'ms-ikon ikon-' + makale.kategori;
  ikon.textContent = makale.ikon;
  const ic = document.createElement('div');
  ic.className = 'ms-icerik';
  const ust = document.createElement('div');
  ust.className = 'ms-ust';
  const rozet = document.createElement('span');
  rozet.className = 'rozet ' + makale.kategori;
  rozet.textContent = makale.kategori.charAt(0).toUpperCase() + makale.kategori.slice(1);
  const tarih = document.createElement('span');
  tarih.className = 'ms-tarih'; tarih.textContent = makale.tarihGoster;
  ust.appendChild(rozet); ust.appendChild(tarih);
  if (makale.onemli) {
    const et = document.createElement('span');
    et.className = 'ms-onemli-etiket'; et.textContent = '⭐ Önemli';
    ust.appendChild(et);
  }
  const baslik = document.createElement('div');
  baslik.className = 'ms-baslik'; baslik.textContent = makale.baslik;
  const ozet = document.createElement('div');
  ozet.className = 'ms-ozet'; ozet.textContent = makale.ozet;
  const alt = document.createElement('div');
  alt.className = 'ms-alt';
  const sure = document.createElement('span');
  sure.className = 'ms-sure'; sure.textContent = '⏱ ' + makale.okumaSuresi + ' okuma';
  const devami = document.createElement('span');
  devami.className = 'ms-devami'; devami.textContent = 'Devamını oku →';
  alt.appendChild(sure); alt.appendChild(devami);
  ic.appendChild(ust); ic.appendChild(baslik); ic.appendChild(ozet); ic.appendChild(alt);
  a.appendChild(ikon); a.appendChild(ic);
  return a;
}

function render() {
  const liste = document.getElementById('makale-listesi');
  const bilgi = document.getElementById('sonuc-bilgi');
  if (!liste) return;
  let sonuc = mevcutFiltre === 'tumu' ? [...makaleler] : makaleler.filter(m => m.kategori === mevcutFiltre);
  if (mevcutSiralama === 'yeni')   sonuc.sort((a,b) => b.tarih.localeCompare(a.tarih));
  if (mevcutSiralama === 'eski')   sonuc.sort((a,b) => a.tarih.localeCompare(b.tarih));
  if (mevcutSiralama === 'onemli') sonuc.sort((a,b) => b.onemli - a.onemli);
  if (bilgi) bilgi.textContent = sonuc.length + ' makale bulundu';
  const toplamSayfa = Math.ceil(sonuc.length / SAYFA_BASI);
  if (mevcutSayfa > toplamSayfa) mevcutSayfa = 1;
  const sayfadaki = sonuc.slice((mevcutSayfa-1)*SAYFA_BASI, mevcutSayfa*SAYFA_BASI);
  liste.innerHTML = '';
  sayfadaki.forEach(m => liste.appendChild(kartOlustur(m)));
  sayfalamaGuncelle(toplamSayfa);
}
function sayfalamaGuncelle(toplam) {
  const kutu = document.getElementById('sayfalama');
  if (!kutu) return;
  kutu.innerHTML = '';
  for (let i = 1; i <= toplam; i++) {
    const btn = document.createElement('button');
    btn.className = 'sayfa-btn' + (i === mevcutSayfa ? ' aktif' : '');
    btn.textContent = i;
    btn.onclick = function() { mevcutSayfa = i; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
    kutu.appendChild(btn);
  }
}
function filtrele(kategori, btn) {
  document.querySelectorAll('.sekme').forEach(b => b.classList.remove('aktif'));
  btn.classList.add('aktif'); mevcutFiltre = kategori; mevcutSayfa = 1; render();
}
function sirala(deger) { mevcutSiralama = deger; mevcutSayfa = 1; render(); }
function aramaYap() {
  const kelime = document.getElementById('arama-input').value.trim();
  if (kelime.length < 2) return;
  window.location.href = 'makaleler.html?ara=' + encodeURIComponent(kelime);
}
function urldenOku() {
  const p = new URLSearchParams(window.location.search);
  const kat = p.get('kategori');
  if (kat) {
    mevcutFiltre = kat;
    document.querySelectorAll('.sekme').forEach(btn => {
      btn.classList.toggle('aktif', btn.textContent.toLowerCase() === kat || (kat === 'tumu' && btn.textContent === 'Tümü'));
    });
  }
}
document.addEventListener('DOMContentLoaded', function() { urldenOku(); render(); });
