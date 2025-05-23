const locations = [
  {
    name: "Uzay Üssü",
    roles: [
      "Astronot",
      "Mühendis",
      "Bilim İnsanı",
      "Kontrol Subayı",
      "Doktor",
      "Teknisyen",
      "Uzay Turisti",
    ],
  },
  {
    name: "Korsan Gemisi",
    roles: [
      "Kaptan",
      "Topçu",
      "Tayfa",
      "Aşçı",
      "Tutsak",
      "Altın Sayıcı",
      "Harita Uzmanı",
    ],
  },
  {
    name: "Metro İstasyonu",
    roles: [
      "Makinist",
      "Güvenlik",
      "Temizlik Görevlisi",
      "Yolcu",
      "Bilet Kontrolcüsü",
      "Taksici",
      "Bekçi",
    ],
  },
  {
    name: "Film Seti",
    roles: [
      "Yönetmen",
      "Oyuncu",
      "Senarist",
      "Kameraman",
      "Işıkçı",
      "Makyaj Sanatçısı",
      "Figüran",
    ],
  },
  {
    name: "Sirkte",
    roles: [
      "Palyaço",
      "İp Cambazı",
      "Aslan Terbiyecisi",
      "Biletçi",
      "Gösteri Sunucusu",
      "Akrobat",
      "Şapka Satıcısı",
    ],
  },
  {
    name: "Maden Ocağı",
    roles: [
      "Madenci",
      "Jeolog",
      "İş Güvenliği Uzmanı",
      "Yemekhane Görevlisi",
      "Patlayıcı Uzmanı",
      "Şantiye Şefi",
    ],
  },
  {
    name: "Hayvanat Bahçesi",
    roles: [
      "Hayvan Bakıcısı",
      "Veteriner",
      "Ziyaretçi",
      "Kasiyer",
      "Temizlikçi",
      "Fotoğrafçı",
      "Rehber",
    ],
  },
  {
    name: "Otobüs Terminali",
    roles: [
      "Otobüs Şoförü",
      "Yolcu",
      "Yolcu Karşılama Görevlisi",
      "Biletçi",
      "Güvenlik",
      "Lokanta Garsonu",
      "Valiz Taşıyıcı",
    ],
  },
  {
    name: "Tiyatro Salonu",
    roles: [
      "Oyuncu",
      "Yönetmen",
      "Sahne Görevlisi",
      "Işık Uzmanı",
      "Biletçi",
      "Seyirci",
      "Dekor Sorumlusu",
    ],
  },
  {
    name: "Bilim Laboratuvarı",
    roles: [
      "Kimyager",
      "Fizikçi",
      "Asistan",
      "Proje Yöneticisi",
      "Temizlikçi",
      "Veri Analisti",
      "Cihaz Teknisyeni",
    ],
  },
];
locations.push(
  {
    name: "Lunapark",
    roles: [
      "Gondol Operatörü",
      "Palyaço",
      "Biletçi",
      "Ziyaretçi",
      "Dondurmacı",
      "Güvenlik",
      "Fotoğrafçı",
    ],
  },
  {
    name: "Cezaevi",
    roles: [
      "Gardiyan",
      "Mahkum",
      "Müdür",
      "Ziyaretçi",
      "Avukat",
      "Aşçı",
      "Psikolog",
    ],
  },
  {
    name: "Marangoz Atölyesi",
    roles: [
      "Usta",
      "Çırak",
      "Müşteri",
      "Malzeme Tedarikçisi",
      "Tasarımcı",
      "Gözlemci",
      "Temizlikçi",
    ],
  },
  {
    name: "Düğün Salonu",
    roles: [
      "Gelin",
      "Damat",
      "Garson",
      "DJ",
      "Fotoğrafçı",
      "Nikah Memuru",
      "Organizatör",
    ],
  },
  {
    name: "Kütüphane",
    roles: [
      "Kütüphaneci",
      "Okuyucu",
      "Öğrenci",
      "Güvenlik",
      "Temizlikçi",
      "Kitap Bağışçısı",
      "Yönetici",
    ],
  },
  {
    name: "Plaj",
    roles: [
      "Can Kurtaran",
      "Şemsiye Kiralayıcı",
      "Turist",
      "Sehpa Satıcısı",
      "Dondurmacı",
      "Çöpçü",
      "Şezlong Görevlisi",
    ],
  },
  {
    name: "Otobüs",
    roles: [
      "Şoför",
      "Muavin",
      "Yolcu",
      "Kontrolör",
      "Şikayetçi",
      "Valiz Sahibi",
      "Turist",
    ],
  },
  {
    name: "Müze",
    roles: [
      "Rehber",
      "Ziyaretçi",
      "Sanat Tarihçisi",
      "Güvenlik",
      "Küratör",
      "Tasarımcı",
      "Temizlikçi",
    ],
  },
  {
    name: "Fırın",
    roles: [
      "Fırıncı",
      "Kepçeci",
      "Kasiyer",
      "Taşıyıcı",
      "Müşteri",
      "Un Tedarikçisi",
      "Şef",
    ],
  },
  {
    name: "Askeri Karargah",
    roles: [
      "Komutan",
      "Asker",
      "Asteğmen",
      "Hemşire",
      "Teknisyen",
      "Şoför",
      "Ziyaretçi",
    ],
  }
);
locations.push(
  {
    name: "Tren Garı",
    roles: [
      "Makinist",
      "Yolcu",
      "Gişe Görevlisi",
      "İstasyon Müdürü",
      "Temizlikçi",
      "Güvenlik",
      "Bavul Taşıyıcı",
    ],
  },
  {
    name: "Stadyum",
    roles: [
      "Futbolcu",
      "Hakem",
      "Taraftar",
      "Güvenlik",
      "Spiker",
      "Fotoğrafçı",
      "Satıcı",
    ],
  },
  {
    name: "Moda Defilesi",
    roles: [
      "Manken",
      "Stylist",
      "Moda Tasarımcısı",
      "Fotoğrafçı",
      "Basın",
      "Kameraman",
      "Organizatör",
    ],
  },
  {
    name: "Kütük Ev",
    roles: [
      "Ev Sahibi",
      "Ziyaretçi",
      "Aşçı",
      "Oduncu",
      "Kampçı",
      "Temizlikçi",
      "Köpek",
    ],
  },
  {
    name: "Gemi",
    roles: [
      "Kaptan",
      "Yolcu",
      "Aşçı",
      "Güverte Görevlisi",
      "Makineci",
      "Güvenlik",
      "Rehber",
    ],
  },
  {
    name: "AVM",
    roles: [
      "Güvenlik",
      "Mağaza Çalışanı",
      "Müşteri",
      "Temizlik Görevlisi",
      "Sinema Görevlisi",
      "AVM Müdürü",
      "Barista",
    ],
  },
  {
    name: "Dans Stüdyosu",
    roles: [
      "Eğitmen",
      "Öğrenci",
      "Müzisyen",
      "Temizlikçi",
      "Kostümcü",
      "Ziyaretçi",
      "Koreograf",
    ],
  },
  {
    name: "Hastane",
    roles: [
      "Doktor",
      "Hemşire",
      "Hasta",
      "Röntgenci",
      "Temizlikçi",
      "Sekreter",
      "Ziyaretçi",
    ],
  },
  {
    name: "Kütüphane Otobüsü",
    roles: [
      "Sürücü",
      "Kütüphaneci",
      "Öğrenci",
      "Öğretmen",
      "Gönüllü",
      "Yazar",
      "Denetmen",
    ],
  },
  {
    name: "Film Festivali",
    roles: [
      "Yönetmen",
      "Oyuncu",
      "Seyirci",
      "Eleştirmen",
      "Sunucu",
      "Gazeteci",
      "Jüri",
    ],
  }
);
locations.push(
  {
    name: "Sanayi Sitesi",
    roles: [
      "Tornacı",
      "Kaynakçı",
      "Çırak",
      "Usta",
      "Müşteri",
      "Yedek Parça Satıcısı",
      "Temizlikçi",
    ],
  },
  {
    name: "Radyasyon Laboratuvarı",
    roles: [
      "Fizikçi",
      "Araştırmacı",
      "Asistan",
      "Teknisyen",
      "Temizlikçi",
      "Radyasyon Uzmanı",
      "İzolasyon Görevlisi",
    ],
  },
  {
    name: "Trafik Kontrol Merkezi",
    roles: [
      "Operatör",
      "Mühendis",
      "Şoför",
      "Kamera Takipçisi",
      "Polis",
      "Bakım Ekibi",
      "Şikayetçi",
    ],
  },
  {
    name: "Kaplıca",
    roles: [
      "Masör",
      "Müşteri",
      "Resepsiyonist",
      "Temizlikçi",
      "Hamam Görevlisi",
      "Şifacı",
      "Turist",
    ],
  },
  {
    name: "İtfaiye Merkezi",
    roles: [
      "İtfaiyeci",
      "Şoför",
      "Çağrı Operatörü",
      "Ekip Lideri",
      "Teknikçi",
      "Ziyaretçi",
      "Temizlikçi",
    ],
  },
  {
    name: "Yaz Kampı",
    roles: [
      "Kamp Lideri",
      "Katılımcı",
      "Aşçı",
      "Oyun Koordinatörü",
      "Doktor",
      "Rehber",
      "Gönüllü",
    ],
  },
  {
    name: "Arkeolojik Kazı Alanı",
    roles: [
      "Arkeolog",
      "İşçi",
      "Jeolog",
      "Sanat Tarihçisi",
      "Fotografçı",
      "Turist",
      "Güvenlik",
    ],
  },
  {
    name: "Belediye Binası",
    roles: [
      "Başkan",
      "Sekreter",
      "Vatandaş",
      "Zabıta",
      "Mühendis",
      "Halkla İlişkiler",
      "Güvenlik",
    ],
  },
  {
    name: "Kampüs Kütüphanesi",
    roles: [
      "Üniversite Öğrencisi",
      "Kütüphaneci",
      "Akademisyen",
      "Temizlikçi",
      "Ziyaretçi",
      "Bölüm Asistanı",
      "Memur",
    ],
  },
  {
    name: "Gözlemevi",
    roles: [
      "Astronom",
      "Gözlemci",
      "Ziyaretçi",
      "Teleskop Uzmanı",
      "Bilim İnsanı",
      "Veri Analisti",
      "Teknisyen",
    ],
  }
);
locations.push(
  {
    name: "Pazar Yeri",
    roles: [
      "Manav",
      "Kasap",
      "Müşteri",
      "Zabıta",
      "Simitçi",
      "Tezgahçı",
      "Poşetçi",
    ],
  },
  {
    name: "Baraj",
    roles: [
      "Mühendis",
      "İşçi",
      "Tekniker",
      "Güvenlik",
      "Jeolog",
      "Yönetici",
      "Ziyaretçi",
    ],
  },
  {
    name: "Dağ Evi",
    roles: [
      "Ev Sahibi",
      "Kampçı",
      "Avcı",
      "Misafir",
      "Köpek",
      "Odun Taşıyıcı",
      "Rehber",
    ],
  },
  {
    name: "Kreş",
    roles: [
      "Öğretmen",
      "Çocuk",
      "Veli",
      "Temizlikçi",
      "Yemek Görevlisi",
      "Oyun Ablası",
      "Müdür",
    ],
  },
  {
    name: "Tatbikat Alanı",
    roles: [
      "Asker",
      "Komutan",
      "Eğitmen",
      "İzleyici",
      "Sağlıkçı",
      "Koordinatör",
      "Gözlemci",
    ],
  },
  {
    name: "Tersane",
    roles: [
      "Kaynakçı",
      "Gemi Mühendisi",
      "İş Güvenliği Uzmanı",
      "Teknisyen",
      "Malzeme Sorumlusu",
      "Usta",
      "Gemi İşçisi",
    ],
  },
  {
    name: "Robotik Atölyesi",
    roles: [
      "Yazılımcı",
      "Mekanikçi",
      "Lise Öğrencisi",
      "Danışman",
      "Kod Denetleyici",
      "Tasarımcı",
      "Eğitmen",
    ],
  },
  {
    name: "Hayalet Kasaba",
    roles: [
      "Macera Tutkunu",
      "Araştırmacı",
      "Turist",
      "Rehber",
      "Köylü",
      "Hayalet Avcısı",
      "Gizemli Yabancı",
    ],
  },
  {
    name: "Kongre Merkezi",
    roles: [
      "Konuşmacı",
      "Dinleyici",
      "Organizatör",
      "Teknik Sorumlu",
      "Sunucu",
      "Güvenlik",
      "Basın",
    ],
  },
  {
    name: "Sualtı Araştırma Merkezi",
    roles: [
      "Dalgıç",
      "Biyolog",
      "Tekniker",
      "Gözlemci",
      "Veri Toplayıcı",
      "İstasyon Yöneticisi",
      "Kaptan",
    ],
  }
);
locations.push(
  {
    name: "Helikopter Pisti",
    roles: [
      "Pilot",
      "Tekniker",
      "Kule Görevlisi",
      "Yolcu",
      "Yakıt Görevlisi",
      "İlk Yardımcı",
      "Güvenlik",
    ],
  },
  {
    name: "Fotoğraf Stüdyosu",
    roles: [
      "Fotoğrafçı",
      "Makyaj Sanatçısı",
      "Model",
      "Asistan",
      "Müşteri",
      "Retoucher",
      "Işık Görevlisi",
    ],
  },
  {
    name: "Çiftlik",
    roles: [
      "Çiftçi",
      "Süt Sağımcısı",
      "Veteriner",
      "Traktör Sürücüsü",
      "Ziyaretçi",
      "Hayvan Bakıcısı",
      "Tüccar",
    ],
  },
  {
    name: "Sanat Galerisi",
    roles: [
      "Sanatçı",
      "Ziyaretçi",
      "Küratör",
      "Satın Alımcı",
      "Temizlikçi",
      "Rehber",
      "Basın",
    ],
  },
  {
    name: "Karnaval",
    roles: [
      "Palyaço",
      "Satıcı",
      "Ziyaretçi",
      "Gösterici",
      "Oyun Kurucu",
      "Temizlikçi",
      "Güvenlik",
    ],
  },
  {
    name: "Yazlık Sinema",
    roles: [
      "Projeksiyoncu",
      "İzleyici",
      "Biletçi",
      "Mısır Satıcısı",
      "Görevli",
      "Teknikçi",
      "Sunucu",
    ],
  },
  {
    name: "Seramik Atölyesi",
    roles: [
      "Sanatçı",
      "Çırak",
      "Müşteri",
      "Eğitmen",
      "Malzeme Sorumlusu",
      "Dekorcu",
      "Temizlikçi",
    ],
  },
  {
    name: "Kargo Merkezi",
    roles: [
      "Dağıtıcı",
      "Paketleyici",
      "Şoför",
      "Müşteri",
      "Depocu",
      "Barkod Sorumlusu",
      "Güvenlik",
    ],
  },
  {
    name: "Savaş Alanı (Simülasyon)",
    roles: [
      "Komutan",
      "Asker",
      "Gözlemci",
      "Eğitmen",
      "Simülasyon Yöneticisi",
      "Radyo Operatörü",
      "Doktor",
    ],
  },
  {
    name: "Yat Limanı",
    roles: [
      "Kaptan",
      "Yat Sahibi",
      "Misafir",
      "Teknisyen",
      "Yat Temizlikçisi",
      "Güvenlik",
      "Rehber",
    ],
  }
);
locations.push(
  {
    name: "Oyun Stüdyosu",
    roles: [
      "Yazılımcı",
      "Oyun Tasarımcısı",
      "Test Uzmanı",
      "Ses Mühendisi",
      "Grafik Tasarımcı",
      "Pazarlamacı",
      "Yönetici",
    ],
  },
  {
    name: "Balıkçı Barınağı",
    roles: [
      "Balıkçı",
      "Kaptan",
      "Ağ Onarıcısı",
      "Kasiyer",
      "Yem Satıcısı",
      "Turist",
      "Çırak",
    ],
  },
  {
    name: "Yazılım Konferansı",
    roles: [
      "Konuşmacı",
      "Katılımcı",
      "Sponsor",
      "Organizatör",
      "Moderatör",
      "Güvenlik",
      "Stant Görevlisi",
    ],
  },
  {
    name: "Doğa Yürüyüş Parkuru",
    roles: [
      "Yürüyüşçü",
      "Rehber",
      "İlk Yardımcı",
      "Fotoğrafçı",
      "Kampçı",
      "Çevreci",
      "İzci",
    ],
  },
  {
    name: "Kargo Uçağı",
    roles: [
      "Pilot",
      "Yükleme Sorumlusu",
      "Teknisyen",
      "Güvenlik",
      "Navigasyon Uzmanı",
      "Yardımcı Pilot",
      "Yer Personeli",
    ],
  },
  {
    name: "Müzik Festivali",
    roles: [
      "DJ",
      "Seyirci",
      "Sanatçı",
      "Güvenlik",
      "Ses Mühendisi",
      "Satıcı",
      "Organizatör",
    ],
  },
  {
    name: "Ressam Evi",
    roles: [
      "Ressam",
      "Asistan",
      "Ziyaretçi",
      "Koleksiyoner",
      "Sanat Eleştirmeni",
      "Ev Arkadaşı",
      "Malzeme Satıcısı",
    ],
  },
  {
    name: "Hacker Laboratuvarı",
    roles: [
      "Kodlayıcı",
      "Kriptograf",
      "Ağ Uzmanı",
      "Testçi",
      "Sosyal Mühendis",
      "Lider",
      "Güvenlikçi",
    ],
  },
  {
    name: "Trafik Işıkları Kontrol Noktası",
    roles: [
      "Operatör",
      "Bakım Ekibi",
      "Sürücü",
      "Polis",
      "Gözlemci",
      "Planlamacı",
      "Şehir Mühendisi",
    ],
  },
  {
    name: "Dağcı Kampı",
    roles: [
      "Tırmanışçı",
      "Eğitmen",
      "Rehber",
      "Çadır Kurucusu",
      "Yemek Sorumlusu",
      "Harita Uzmanı",
      "İzci",
    ],
  }
);
locations.push(
  {
    name: "Gelişim Koleji",
    roles: [
      "Öğretmen",
      "Öğrenci",
      "Müdür",
      "Hizmetli",
      "Rehber Öğretmen",
      "Kütüphaneci",
      "Velî",
    ],
  },
  {
    name: "Tatlı Dükkanı",
    roles: [
      "Pastacı",
      "Kasiyer",
      "Garson",
      "Müşteri",
      "Dekorcu",
      "Paketçi",
      "Temizlikçi",
    ],
  },
  {
    name: "Yel Değirmeni",
    roles: [
      "Değirmenci",
      "Çırak",
      "Ziyaretçi",
      "Turist",
      "Un Tüccarı",
      "Bakımcı",
      "Rehber",
    ],
  },
  {
    name: "Şarap Bağları",
    roles: [
      "Üzüm Toplayıcı",
      "Şarap Yapımcısı",
      "Rehber",
      "Turist",
      "Tadım Uzmanı",
      "Dağıtıcı",
      "Şoför",
    ],
  },
  {
    name: "Tiyatro Sahnesi Arkası",
    roles: [
      "Dekor Sorumlusu",
      "Işıkçı",
      "Kostümcü",
      "Oyuncu",
      "Yönetmen",
      "Sesçi",
      "Makyajcı",
    ],
  },
  {
    name: "Çamaşırhane",
    roles: [
      "Makine Operatörü",
      "Müşteri",
      "Ütücü",
      "Kasiyer",
      "Taşıyıcı",
      "Temizlikçi",
      "Denetçi",
    ],
  },
  {
    name: "Spor Salonu",
    roles: [
      "Antrenör",
      "Sporcu",
      "Temizlikçi",
      "Kayıt Görevlisi",
      "Beslenme Uzmanı",
      "Üye",
      "Fizyoterapist",
    ],
  },
  {
    name: "Makyaj Stüdyosu",
    roles: [
      "Makyöz",
      "Model",
      "Fotoğrafçı",
      "Malzeme Görevlisi",
      "Stylist",
      "Danışan",
      "Asistan",
    ],
  },
  {
    name: "Bilgisayar Servisi",
    roles: [
      "Teknisyen",
      "Müşteri",
      "Parça Tedarikçisi",
      "Destek Personeli",
      "Yönetici",
      "Kayıt Görevlisi",
      "Testçi",
    ],
  },
  {
    name: "Yatılı Okul",
    roles: [
      "Öğrenci",
      "Müdür",
      "Gece Nöbetçisi",
      "Aşçı",
      "Yurt Görevlisi",
      "Rehber Öğretmen",
      "Temizlikçi",
    ],
  }
);
locations.push(
  {
    name: "Mekanik Atölye",
    roles: [
      "Motor Ustası",
      "Elektrikçi",
      "Müşteri",
      "Stajyer",
      "Yönetici",
      "Parça Temin Eden",
      "Testçi",
    ],
  },
  {
    name: "Yazıcı Üretim Tesisi",
    roles: [
      "Teknisyen",
      "Mühendis",
      "Montajcı",
      "Kalite Kontrolcü",
      "Yönetici",
      "Depocu",
      "Paketleyici",
    ],
  },
  {
    name: "Antikacı",
    roles: [
      "Antikacı",
      "Koleksiyoner",
      "Ziyaretçi",
      "Sanat Tarihçisi",
      "Restoratör",
      "Müşteri",
      "Çırak",
    ],
  },
  {
    name: "Diş Kliniği",
    roles: [
      "Diş Hekimi",
      "Asistan",
      "Hasta",
      "Sekreter",
      "Hijyen Görevlisi",
      "Teknisyen",
      "Yönetici",
    ],
  },
  {
    name: "Mezarlık",
    roles: [
      "İmam",
      "Mezar Kazıcısı",
      "Ziyaretçi",
      "Güvenlik",
      "Belediye Görevlisi",
      "Çiçekçi",
      "Tarihçi",
    ],
  },
  {
    name: "Sirk Okulu",
    roles: [
      "Eğitmen",
      "Palyaço",
      "İp Cambazı",
      "Öğrenci",
      "Hayvan Eğitmeni",
      "Akrobat",
      "Ziyaretçi",
    ],
  },
  {
    name: "Koleksiyon Sergisi",
    roles: [
      "Sergi Sahibi",
      "Ziyaretçi",
      "Basın",
      "Güvenlik",
      "Tercüman",
      "Rehber",
      "Küratör",
    ],
  },
  {
    name: "Reklam Ajansı",
    roles: [
      "Grafiker",
      "Metin Yazarı",
      "Yönetici",
      "Müşteri",
      "Fotoğrafçı",
      "Sosyal Medya Uzmanı",
      "Animatör",
    ],
  },
  {
    name: "Yüzme Havuzu",
    roles: [
      "Can Kurtaran",
      "Antrenör",
      "Yüzücü",
      "Temizlikçi",
      "Görevli",
      "Kayıt Memuru",
      "Ziyaretçi",
    ],
  },
  {
    name: "Çeviri Bürosu",
    roles: [
      "Çevirmen",
      "Editör",
      "Müşteri",
      "Proje Yöneticisi",
      "Dizgici",
      "Sekreter",
      "Dil Koordinatörü",
    ],
  }
);
locations.push(
  {
    name: "Dublaj Stüdyosu",
    roles: [
      "Ses Sanatçısı",
      "Yönetmen",
      "Ses Mühendisi",
      "Senarist",
      "Teknisyen",
      "Editör",
      "Asistan",
    ],
  },
  {
    name: "Tiyatro Kursu",
    roles: [
      "Eğitmen",
      "Oyuncu",
      "Kursiyer",
      "Yönetici",
      "Makyajcı",
      "Kostümcü",
      "Işık Sorumlusu",
    ],
  },
  {
    name: "Animasyon Stüdyosu",
    roles: [
      "Çizimci",
      "Seslendirmen",
      "Yönetmen",
      "Storyboard Tasarımcısı",
      "Yazılımcı",
      "Render Uzmanı",
      "Prodüktör",
    ],
  },
  {
    name: "Çocuk Gelişim Merkezi",
    roles: [
      "Psikolog",
      "Öğretmen",
      "Aile",
      "Oyun Ablası",
      "Temizlikçi",
      "Müdür",
      "Doktor",
    ],
  },
  {
    name: "Moda Evi",
    roles: [
      "Terzi",
      "Model",
      "Tasarımcı",
      "Stilist",
      "Müşteri",
      "Dikişçi",
      "Editör",
    ],
  },
  {
    name: "Drone Yarış Alanı",
    roles: [
      "Pilot",
      "Yarışmacı",
      "Hakem",
      "Teknik Destek",
      "Yayıncı",
      "Seyirci",
      "Organizatör",
    ],
  },
  {
    name: "Tasarım Ofisi",
    roles: [
      "Grafiker",
      "Yazılımcı",
      "Proje Yöneticisi",
      "UX Uzmanı",
      "Müşteri",
      "Editör",
      "Geliştirici",
    ],
  },
  {
    name: "Bit Pazarı",
    roles: [
      "Satıcı",
      "Antikacı",
      "Gezici",
      "Müşteri",
      "Pazarlıkçı",
      "Görevli",
      "Tasarımcı",
    ],
  },
  {
    name: "Yemek Yarışması",
    roles: [
      "Şef",
      "Yarışmacı",
      "Sunucu",
      "Jüri",
      "Garson",
      "İzleyici",
      "Kameraman",
    ],
  },
  {
    name: "Psikiyatri Kliniği",
    roles: [
      "Psikiyatrist",
      "Hemşire",
      "Hasta",
      "Danışan",
      "Güvenlik",
      "Sekreter",
      "Sosyal Hizmet Uzmanı",
    ],
  }
);
