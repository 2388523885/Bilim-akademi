const galeriOgeleri = [
  { baslik: "Mescid-i Haram",          aciklama: "Kabe ve Mescid-i Haram'ın havadan görünümü.",               tip: "fotograf", boy: "uzun",  ikon: "🕌", tarih: "Mart 2025" },
  { baslik: "Tecvid Dersleri Bölüm 1", aciklama: "Harflerin doğru telaffuzunu anlatan video ders serisi.",     tip: "video",    boy: "orta",  ikon: "🎬", tarih: "Şubat 2025", youtubeId: "" },
  { baslik: "İslam'ın 5 Şartı",       aciklama: "İslam'ın beş şartını görsel olarak anlatan infografik.",     tip: "infograf", boy: "orta",  ikon: "📊", tarih: "Mart 2025" },
  { baslik: "Medine'de Gün Batımı",   aciklama: "Hz. Peygamberin şehri Medine'den eşsiz bir manzara.",        tip: "fotograf", boy: "kisa",  ikon: "🌅", tarih: "Ocak 2025" },
  { baslik: "Kudüs Belgeseli",         aciklama: "Kudüs'ün tarihi ve İslam mirasını anlatan belgesel film.",   tip: "belgesel", boy: "uzun",  ikon: "📽️", tarih: "Şubat 2025", youtubeId: "" },
  { baslik: "Namaz Vakitleri Tablosu", aciklama: "Türkiye'nin büyük şehirleri için namaz vakitleri tablosu.",  tip: "infograf", boy: "kisa",  ikon: "📋", tarih: "Mart 2025" },
  { baslik: "Mescid-i Nebevi",        aciklama: "Peygamberimizin bizzat inşa ettiği kutsal mescid.",          tip: "fotograf", boy: "orta",  ikon: "🌙", tarih: "Aralık 2024" },
  { baslik: "Siyer Dersleri",         aciklama: "Peygamberimizin hayatını anlatan video ders serisi.",         tip: "video",    boy: "uzun",  ikon: "🎥", tarih: "Ocak 2025",   youtubeId: "" },
  { baslik: "Hac Rehberi İnfografik", aciklama: "Hac ibadetinin nasıl yapılacağını anlatan görsel rehber.",   tip: "infograf", boy: "kisa",  ikon: "🗺️", tarih: "Kasım 2024" }
];
const rozetSinif = { fotograf: 'rozet-fotograf', video: 'rozet-video', infograf: 'rozet-infograf', belgesel: 'rozet-belgesel' };
let mevcutFiltre = 'tumu', acikIndex = 0, filtreliListe = [];

function render() {
  const grid = document.getElementById('galeri-grid');
  const bilgi = document.getElementById('galeri-sonuc');
  if (!grid) return;
  filtreliListe = mevcutFiltre === 'tumu' ? [...galeriOgeleri] : galeriOgeleri.filter(o => o.tip === mevcutFiltre);
  if (bilgi) bilgi.textContent = filtreliListe.length + ' öğe';
  grid.innerHTML = '';
  filtreliListe.forEach((oge, index) => {
    const div = document.createElement('div');
    div.className = 'galeri-item';
    div.onclick = () => lightboxAc(index);
    const gorsel = document.createElement('div');
    gorsel.className = 'galeri-gorsel boy-' + oge.boy;
    gorsel.textContent = oge.ikon;
    const overlay = document.createElement('div');
    overlay.className = 'galeri-overlay';
    overlay.innerHTML = `<div class="overlay-ikon">${oge.tip === 'video' || oge.tip === 'belgesel' ? '▶' : '🔍'}</div><div class="overlay-baslik">${oge.baslik}</div>`;
    const bilgiDiv = document.createElement('div');
    bilgiDiv.className = 'galeri-bilgi';
    const rozet = document.createElement('span');
    rozet.className = 'galeri-rozet ' + (rozetSinif[oge.tip] || '');
    rozet.textContent = oge.tip.charAt(0).toUpperCase() + oge.tip.slice(1);
    const baslik = document.createElement('div');
    baslik.className = 'galeri-baslik'; baslik.textContent = oge.baslik;
    const tarih = document.createElement('div');
    tarih.className = 'galeri-meta'; tarih.textContent = oge.tarih;
    bilgiDiv.appendChild(rozet); bilgiDiv.appendChild(baslik); bilgiDiv.appendChild(tarih);
    if (oge.tip === 'video' || oge.tip === 'belgesel') {
      const badge = document.createElement('div');
      badge.className = 'video-badge';
      div.appendChild(gorsel); div.appendChild(badge);
    } else { div.appendChild(gorsel); }
    div.appendChild(overlay); div.appendChild(bilgiDiv);
    grid.appendChild(div);
  });
}
function filtrele(tip, btn) {
  document.querySelectorAll('.sekme').forEach(b => b.classList.remove('aktif'));
  btn.classList.add('aktif'); mevcutFiltre = tip; render();
}
function lightboxAc(index) {
  acikIndex = index;
  const oge = filtreliListe[index];
  document.getElementById('lb-gorsel').textContent = oge.ikon;
  document.getElementById('lb-rozet').textContent = oge.tip;
  document.getElementById('lb-baslik').textContent = oge.baslik;
  document.getElementById('lb-aciklama').textContent = oge.aciklama;
  document.getElementById('lb-tarih').textContent = oge.tarih;
  document.getElementById('lightbox').classList.add('acik');
}
function lightboxKapat() { document.getElementById('lightbox').classList.remove('acik'); }
function lightboxGec(yon) { acikIndex = (acikIndex + yon + filtreliListe.length) % filtreliListe.length; lightboxAc(acikIndex); }
document.addEventListener('click', e => { if (e.target === document.getElementById('lightbox')) lightboxKapat(); });
document.addEventListener('DOMContentLoaded', render);
