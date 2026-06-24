# Tiba-Tiba Sah — Landing Page Jasa Undangan Digital

Landing page untuk **Tiba-Tiba Sah**, jasa pembuatan website undangan digital.
Dibangun dengan HTML, CSS, dan JavaScript murni, dengan motion premium memakai
**GSAP + Lenis** (via CDN). Desain: **editorial butik undangan** — kertas ivory hangat,
tipografi serif, aksen kuningan & dusty rose (light theme, satu mode).

## ✨ Fitur
- Hero wordmark serif dengan ornamen stationery + glow hangat halus
- **Smooth scroll** (Lenis) + animasi *scroll-reveal* (GSAP / IntersectionObserver)
- Ikon garis (SVG) kustom, kartu solid berbayang lembut, tekstur kertas halus
- Pita *showcase* berisi cuplikan tema undangan asli (marquee)
- Galeri **77 tema** yang **data-driven** (di-render dari `js/themes-data.js`) dengan tab kategori
- Counter statistik, scroll progress bar, preloader ringan
- Pricing (Basic & Premium), accordion FAQ, testimonial, Meet The Builder
- Semua CTA terhubung ke WhatsApp dengan pesan otomatis (menyebut nama tema/paket)
- **Progressive enhancement**: konten tetap tampil walau JS/CDN gagal; menghormati `prefers-reduced-motion`

## 📁 Struktur Project
```
tibatiba-sah/
│
├── index.html              # Halaman utama (markup semantik; galeri di-render JS)
│
├── css/
│   ├── tokens.css          # Design tokens: palet ivory/brass/rose, font (light)
│   ├── animations.css      # Keyframes & utilitas motion (+ reduced-motion guard)
│   ├── style.css           # Komponen seluruh section
│   └── responsive.css      # Media query (tablet / mobile / hp kecil)
│
├── js/
│   ├── themes-data.js      # Data 77 tema (kategori, harga, slug demo/gambar)
│   └── main.js             # Lenis/GSAP, render galeri, tab, FAQ, tema, cursor, dll.
│
├── assets/
│   ├── images/             # Gambar lokal (logo, hero, avatar, dll.)
│   ├── icons/              # whatsapp.svg, instagram.svg
│   └── videos/             # (opsional)
│
└── README.md
```

## 🚀 Cara Menjalankan
Karena memuat library via CDN dan me-render galeri via `fetch` modul lokal,
jalankan lewat server statis (bukan `file://`):

```bash
python -m http.server 5500
# lalu buka http://localhost:5500
```
Atau gunakan ekstensi **Live Server** di VS Code.

## ⚙️ Konfigurasi
| Item            | Lokasi                                              |
|-----------------|-----------------------------------------------------|
| Nomor WhatsApp  | `js/main.js` (const `WA`) & link di `index.html`    |
| Instagram       | `index.html` (`instagram.com/tibatiba.sah`)         |
| Daftar tema     | `js/themes-data.js` (tambah/edit di array `TT_THEMES`) |
| Preview tema    | CDN invee (`https://sgp1.vultrobjects.com`)         |
| Live demo tema  | `https://demo.invee.net/?template=<slug>`           |

### Menambah / mengubah tema
Cukup edit `js/themes-data.js` — tambahkan objek ke `TT_THEMES`:
```js
{ cat:'floral', name:'Floral 10', img:'floral-10', demo:'floral-10', price:80000, premium:false }
```
Galeri & tombol WhatsApp akan otomatis ter-generate.

## 🌐 Deploy ke GitHub Pages
1. Push repo ke GitHub.
2. **Settings → Pages**, pilih branch `main` folder `/ (root)`.
3. Situs tersedia di `https://<username>.github.io/<nama-repo>/`.

Semua aset utama lokal/HTTPS sehingga aman dari mixed-content saat dibuka via HTTPS.

## 🧩 Dependency (CDN)
- [GSAP 3.12.5 + ScrollTrigger](https://greensock.com/gsap/) — animasi scroll
- [Lenis 1.1.14](https://github.com/darkroomengineering/lenis) — smooth scroll
- Google Fonts: **Fraunces** (serif) + **Space Grotesk** (sans)

> Bila CDN tidak dapat diakses, halaman tetap berfungsi & terbaca — animasi hanya menjadi statis.

---
© 2026 Tiba-Tiba Sah. All rights reserved.
