function karakterSay() {
  const mesaj = document.getElementById('mesaj');
  const sayac = document.getElementById('karakter-sayac');
  if (sayac) sayac.textContent = mesaj.value.length;
}
function hataGoster(id, goster) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('goster', goster);
}
function inputDurumu(id, durum) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('hata', 'basarili');
  if (durum) el.classList.add(durum);
}
function formuDogrula() {
  let gecerli = true;
  const ad = document.getElementById('ad-soyad').value.trim();
  const ep = document.getElementById('eposta').value.trim();
  const kn = document.getElementById('konu').value;
  const ms = document.getElementById('mesaj').value.trim();
  const on = document.getElementById('gizlilik-onay').checked;
  const epReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (ad.length < 2) { hataGoster('hata-ad', true); inputDurumu('ad-soyad', 'hata'); gecerli = false; } else { hataGoster('hata-ad', false); inputDurumu('ad-soyad', 'basarili'); }
  if (!epReg.test(ep)) { hataGoster('hata-eposta', true); inputDurumu('eposta', 'hata'); gecerli = false; } else { hataGoster('hata-eposta', false); inputDurumu('eposta', 'basarili'); }
  if (!kn) { hataGoster('hata-konu', true); inputDurumu('konu', 'hata'); gecerli = false; } else { hataGoster('hata-konu', false); inputDurumu('konu', 'basarili'); }
  if (ms.length < 10) { hataGoster('hata-mesaj', true); inputDurumu('mesaj', 'hata'); gecerli = false; } else { hataGoster('hata-mesaj', false); inputDurumu('mesaj', 'basarili'); }
  if (!on) { hataGoster('hata-onay', true); gecerli = false; } else { hataGoster('hata-onay', false); }
  return gecerli;
}
function formuGonder() {
  if (!formuDogrula()) return;
  const btn = document.getElementById('gonder-btn');
  btn.textContent = 'Gönderiliyor...'; btn.disabled = true;
  setTimeout(() => {
    document.getElementById('form-kart').style.display = 'none';
    document.getElementById('basari-kutu').classList.add('goster');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1000);
}
