# Tiba-Tiba Sah — Landing Page Jasa Undangan Digital

Landing page untuk **Tiba-Tiba Sah**, jasa pembuatan website undangan digital.
Dibuat dengan HTML, CSS, dan JavaScript murni (tanpa framework/library).

## ✨ Fitur
- Desain elegan & responsif (desktop + mobile)
- Menu navigasi mobile (hamburger) dengan animasi
- Animasi *scroll-reveal* halus tiap section
- Galeri **77 tema** dengan sistem tab kategori (Floral, Minimalist, Traditional & Daerah, Luxury & Parallax, dll.)
- Harga tampil di tiap tema; tombol langsung ke WhatsApp menyebut nama tema
- Section "Meet The Builder"
- Daftar harga (paket Basic & Premium)
- Accordion FAQ
- Tombol CTA terhubung langsung ke WhatsApp dengan pesan otomatis

## 📁 Struktur Project
```
tibatiba-sah/
│
├── index.html              # Halaman utama
│
├── css/
│   ├── style.css           # Style utama
│   └── responsive.css      # Media query (mobile/tablet)
│
├── js/
│   └── script.js           # Menu mobile, tab, FAQ, scroll-reveal
│
├── assets/
│   ├── images/             # Semua gambar lokal (logo, hero, avatar, dll.)
│   ├── icons/
│   │   ├── whatsapp.svg
│   │   └── instagram.svg
│   └── videos/             # Video demo (opsional)
│
└── README.md
```

## 🚀 Cara Menjalankan
Cukup buka `index.html` di browser, atau gunakan ekstensi **Live Server** di VS Code.

## ⚙️ Konfigurasi
| Item            | Lokasi                                       | Status        |
|-----------------|----------------------------------------------|---------------|
| Nomor WhatsApp  | `index.html` (`wa.me/6285602316285`)         | ✅ Terisi      |
| Instagram       | `index.html` (`instagram.com/tibatiba.sah`)  | ✅ Terisi      |
| Logo & favicon  | `assets/images/logo.png`                     | ✅ Terpasang   |
| Gambar konten   | `assets/images/` (lokal, HTTPS-safe)         | ✅ Lengkap     |
| Preview tema    | CDN invee (`https://sgp1.vultrobjects.com`)  | ✅ HTTPS, aman |

## 🌐 Deploy ke GitHub Pages
1. Push repo ini ke GitHub.
2. Buka **Settings → Pages**, pilih branch `main` folder `/ (root)`.
3. Situs akan tersedia di `https://<username>.github.io/<nama-repo>/`.

Semua aset utama sudah lokal/HTTPS sehingga aman dari mixed-content saat dibuka via HTTPS.

---
© 2026 Tiba-Tiba Sah. All rights reserved.
