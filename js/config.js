function pad(line) {
  return line;
}

const config = {
  letters: "01",
  fontSize: 14,
  matrixInterval: 33,     // ms
  asciiSpeed: 2,          // çizim hızı (ASCII grafikler)
  textSpeed: 40,          // normal metin yazma hızı
  postLineDelay: 300,     // satır sonrası bekleme süresi (ms)
  countdownStart: 5,      // geri sayım başlangıcı
  messages: [
    pad(`▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n█░░░░░░░░░░░░ SİSTEMİN ░░░░░░░░░░░░░░█\n█░░░░░░░░░░ ELE GEÇİRİLDİ ░░░░░░░░░░░█\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`),
    "→ Bağlantı kuruldu: DÜZCE ÜNİVERSİTESİ - AKADEMİK AĞ",
    "→ Hedef: akademik.duzce.edu.tr >> erişim alındı",
    "→ Profil: Dr. T. T.",
    "→ Veriler çekiliyor... [tamamlandı]",
    "• Uzmanlık Alanları: Nesne Tabanlı Programlama, Yazılım Geliştirme, SQL, Yapay Zeka",
    "• Yayınlar: 'Initial Seed Value Effectiveness on Performances of Data Mining Algorithms', 'THE EVOLUTION OF SMART CONTRACT PLATFORMS'",
    "• E-posta: t.t@duzce.edu.tr",
    "• Kullanıcı IP: 10.16.0.88",
    "• Kamera: erişim sağlandı (arka plan izleniyor)",
    "• Mikrofon: kapalı, son 5 saniye dinlendi",
    "• SSH bağlantısı doğrulandı...", 
    "• Yetkisiz işlem tespit edildi: analiz devam ediyor...",
    "🚨 SİSTEM UYARISI: Yetkisiz erişim algılandı!",
    "⚠️  TEHDİT ALGILANDI – Koruma duvarı devre dışı!",
    "🛑 GÜVENLİK DUVARI AŞILDI – Sistem tehlikede!",
    "🔥 KIRMIZI ALARM – Kod bütünlüğü bozuldu!",

    "Tarayıcı: " + navigator.userAgent,
    "İşletim Sistemi: " + navigator.platform,
    "Dosyalar .enc formatında şifrelendi.",
    "Görevleri tamamlaman gerekiyor..."
  ]
};
