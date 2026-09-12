---
version: alpha
name: Tiba-Tiba Sah Apple Adapted
description: Tiba-tiba Sah dipresentasikan seperti galeri produk Apple — full-bleed tile bergantian light dan dark, satu Action Blue (#0066cc) sebagai satu-satunya warna interaktif, headline SF Pro Display dengan negative letter-spacing, dan CTA pill kecil. UI menghilang agar tema undangan yang berbicara — tanpa gradient dekoratif, tanpa shadow pada chrome, hanya satu drop shadow di bawah preview tema yang menempel di permukaan.

colors:
  primary: "#0066cc"
  primary-focus: "#0071e3"
  primary-on-dark: "#2997ff"
  ink: "#1d1d1f"
  body: "#1d1d1f"
  body-on-dark: "#ffffff"
  body-muted: "#cccccc"
  ink-muted-80: "#333333"
  ink-muted-48: "#7a7a7a"
  divider-soft: "#f0f0f0"
  hairline: "#e0e0e0"
  canvas: "#ffffff"
  canvas-parchment: "#f5f5f7"
  surface-pearl: "#fafafc"
  surface-tile-1: "#272729"
  surface-tile-2: "#2a2a2c"
  surface-tile-3: "#252527"
  surface-black: "#000000"
  surface-chip-translucent: "#d2d2d7"
  on-primary: "#ffffff"
  on-dark: "#ffffff"

typography:
  hero-display:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.28px"
  display-lg:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0"
  display-md:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.47
    letterSpacing: "-0.374px"
  lead:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: "0.196px"
  lead-airy:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: "0"
  tagline:
    fontFamily: "SF Pro Display, system-ui, -apple-system, sans-serif"
    fontSize: 21px
    fontWeight: 600
    lineHeight: 1.19
    letterSpacing: "0.231px"
  body-strong:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: "-0.374px"
  body:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: "-0.374px"
  dense-link:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 2.41
    letterSpacing: "0"
  caption:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: "-0.224px"
  caption-strong:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: "-0.224px"
  button-large:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: "0"
  button-utility:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: "-0.224px"
  fine-print:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.12px"
  micro-legal:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.08px"
  nav-link:
    fontFamily: "SF Pro Text, system-ui, -apple-system, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.12px"

rounded:
  none: 0px
  xs: 5px
  sm: 8px
  md: 11px
  lg: 18px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 17px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 11px 22px
  button-primary-focus:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-primary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
  button-secondary-pill:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 11px 22px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 11px 22px
  button-dark-utility:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.button-utility}"
    rounded: "{rounded.sm}"
    padding: 8px 15px
  text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  text-link-on-dark:
    backgroundColor: transparent
    textColor: "{colors.primary-on-dark}"
    typography: "{typography.body}"
  global-nav:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 44px
  hero-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.none}"
    padding: 80px
  hero-tile-parchment:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.hero-display}"
    rounded: "{rounded.none}"
    padding: 80px
  section-tile-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  section-tile-parchment:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  section-tile-dark:
    backgroundColor: "{colors.surface-tile-1}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  keunggulan-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  fitur-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  tema-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.lg}"
    padding: 0px
  tema-tab:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted-80}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  tema-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-strong}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  price-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  price-card-premium:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 32px
  faq-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  footer:
    backgroundColor: "{colors.canvas-parchment}"
    textColor: "{colors.ink-muted-80}"
    typography: "{typography.fine-print}"
    padding: 64px
---

## Overview

Tiba-Tiba Sah adalah jasa undangan digital dengan 77 tema. Dalam adaptasi Apple, situs ini diperlakukan seperti katalog produk Apple — setiap section adalah full-bleed tile yang bergantian antara light dan dark, dengan satu Action Blue sebagai satu-satunya sinyal interaktif. UI menghilang, tema undangan yang berbicara. Tidak ada gradient dekoratif, tidak ada shadow pada chrome, hanya satu drop shadow lembut di bawah preview tema yang menempel di permukaan.

Density sangat rendah bahkan untuk standar SaaS. Setiap tile menempati sekitar satu viewport. Tidak ada border dekoratif atau frame. Elevasi hanya muncul ketika preview tema bertumpu di permukaan tile (satu shadow rgba(0, 0, 0, 0.22) 3px 5px 30px). Hasilnya terasa seperti galeri museum — dinding menghilang, artefak mengambil alih.

Adaptasi untuk Tiba-Tiba Sah mempertahankan chassis yang sama tapi mengganti konten: hero wordmark, showcase marquee preview tema, keunggulan 4 kartu, fitur 8 kartu, galeri tema 77 kartu, pricing 2 kartu, FAQ accordion, dan footer CTA. Di semua permukaan, sistem tipografi, ritme spacing, dan aksen biru tunggal konsisten — satu bahasa desain diekspresikan pada volume berbeda.

Key Characteristics:
- Tema undangan sebagai produk — UI menghilang agar preview tema bisa berbicara.
- Tile full-bleed bergantian: white/parchment ↔ near-black, pergantian warna itu sendiri yang menjadi pembatas section.
- Satu aksen biru ({colors.primary} — #0066cc) mengemban setiap elemen interaktif. Tidak ada warna brand kedua.
- Dua tata bahasa tombol: pill CTA biru kecil ({rounded.pill}) dan rect utilitas kompak ({rounded.sm}).
- SF Pro Display + SF Pro Text — negative letter-spacing di ukuran display untuk nuansa headline Apple yang rapat.
- Elevasi sangat lembut hanya ketika preview tema perlu bernapas — tepat satu drop shadow di seluruh sistem.
- Dua baris nav yang rapat: slim {component.global-nav} hitam 44px dengan CTA pill biru yang persisten di kanan.
- Ritme section yang dapat diprediksi: light hero → dark tile → light utility grid → dark tile → parchment footer.

## Colors

> Sumber: adaptasi langsung dari Apple-design-analysis. Sistem warna identik dengan Apple; hanya mix surface-mode yang disesuaikan untuk konteks undangan.

### Brand & Accent
- Action Blue ({colors.primary} — #0066cc): Satu-satunya warna interaktif level brand. Semua text link, semua pill CTA biru (Pesan Sekarang, Lihat Tema, Pesan Basic/Premium), dan root focus ring. Sinyal universal Apple yang tenang untuk click me. State pressed bergeser melalui transform scale bukan pergantian hex.
- Focus Blue ({colors.primary-focus} — #0071e3): Saudara sedikit lebih terang dari Action Blue, dicadangkan untuk keyboard focus ring pada tombol (outline 2px solid).
- Sky Link Blue ({colors.primary-on-dark} — #2997ff): Biru lebih terang yang digunakan di permukaan dark untuk link inline dan callout, di mana Action Blue akan hilang di atas background tile.

### Surface
- Pure White ({colors.canvas} — #ffffff): Kanvas dominan. Konten, fitur card, tema card, pricing card, FAQ.
- Parchment ({colors.canvas-parchment} — #f5f5f7): Off-white khas Apple. Digunakan untuk tile light bergantian, area footer, dan kanvas default di section utility. Cukup berbeda dari putih untuk menciptakan ritme.
- Pearl Button ({colors.surface-pearl} — #fafafc): Hampir putih yang digunakan sebagai fill untuk tombol ghost sekunder — lebih terang dari kanvas parchment sehingga tombol tetap terbaca sebagai tombol di atas {colors.canvas-parchment}.
- Near-Black Tile 1 ({colors.surface-tile-1} — #272729): Permukaan dark tile utama untuk section gelap (testimonial atau footer CTA).
- Near-Black Tile 2 ({colors.surface-tile-2} — #2a2a2c): Sedikit lebih terang — digunakan ketika dark tile duduk tepat di atas atau di bawah Tile 1 untuk pemisahan paling halus.
- Near-Black Tile 3 ({colors.surface-tile-3} — #252527): Sedikit lebih gelap — digunakan di bawah stack dan pada frame video atau player tertanam.
- Pure Black ({colors.surface-black} — #000000): Dicadangkan untuk void sejati — background video player, overlay fotografi edge-to-edge, background global nav bar.
- Translucent Chip Gray ({colors.surface-chip-translucent} — #d2d2d7): Hex dasar dari chip abu-abu translucent yang digunakan di atas fotografi untuk tombol kontrol circular. Di produksi, diterapkan pada sekitar 64 persen alpha sebagai rgba(210, 210, 215, 0.64).

### Text
- Near-Black Ink ({colors.ink} — #1d1d1f): Suara setiap headline, setiap paragraf body, dan fill tombol utility gelap. Dipilih alih-alih hitam murni agar halaman terasa fotografis bukan tercetak.
- Body ({colors.body} — #1d1d1f): Hex sama dengan ink — satu tone near-black untuk semua teks di permukaan light.
- Body On Dark ({colors.body-on-dark} — #ffffff): Semua teks di dark tile dan di global nav bar.
- Body Muted ({colors.body-muted} — #cccccc): Copy sekunder di dark tile di mana putih murni akan terlalu keras.
- Ink Muted 80 ({colors.ink-muted-80} — #333333): Teks body di permukaan Pearl Button putih — sedikit lebih lembut dari hitam murni.
- Ink Muted 48 ({colors.ink-muted-48} — #7a7a7a): Teks tombol disabled dan fine-print legal.

### Hairlines & Borders
- Divider Soft ({colors.divider-soft} — #f0f0f0): Tone border pada tombol sekunder — berfungsi sebagai ring shadow bukan garis keras. Di produksi, sering diterapkan sebagai rgba(0, 0, 0, 0.04).
- Hairline ({colors.hairline} — #e0e0e0): Border hairline 1px pada utility card, tema card, dan FAQ.

### Brand Gradient
Tidak ada gradient dekoratif. Kedalaman atmosfer pada fotografi tema undangan (bunga, tekstur kertas, venue) melekat pada imagery, bukan overlay gradient CSS. Tiba-Tiba Sah dalam adaptasi ini adalah situs brand mewah langka dengan nol token desain berbasis gradient.

## Typography

### Font Family
- Display: SF Pro Display, system-ui, -apple-system, sans-serif — wajah display proprietary Apple, dioptimalkan untuk ukuran 19px ke atas. Mendefinisikan suara setiap headline.
- Body dan UI: SF Pro Text, system-ui, -apple-system, sans-serif — varian yang dioptimalkan untuk teks yang digunakan untuk body copy, caption, tombol, dan link di bawah 20px.
- Pengganti open-source: Inter (Google Fonts, variable) adalah ekuivalen terdekat. Inter pada weight 600 dengan font-feature-settings "ss03" mendekati karakter a membulat SF Pro.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| {typography.hero-display} | 56px | 600 | 1.07 | -0.28px | Hero wordmark tiba-tiba sah |
| {typography.display-lg} | 40px | 600 | 1.10 | 0 | Headline section utama |
| {typography.display-md} | 34px | 600 | 1.47 | -0.374px | Sub section heads |
| {typography.lead} | 28px | 400 | 1.14 | 0.196px | Subcopy hero dan section |
| {typography.lead-airy} | 24px | 300 | 1.5 | 0 | Lead airy untuk testimonial atau quote |
| {typography.tagline} | 21px | 600 | 1.19 | 0.231px | Tagline sub-tile |
| {typography.body-strong} | 17px | 600 | 1.24 | -0.374px | Penekanan strong inline |
| {typography.body} | 17px | 400 | 1.47 | -0.374px | Paragraf default |
| {typography.dense-link} | 17px | 400 | 2.41 | 0 | Footer link columns |
| {typography.caption} | 14px | 400 | 1.43 | -0.224px | Caption sekunder, tab tema |
| {typography.caption-strong} | 14px | 600 | 1.29 | -0.224px | Caption emphasis, tab aktif |
| {typography.button-large} | 18px | 300 | 1.0 | 0 | CTA hero besar |
| {typography.button-utility} | 14px | 400 | 1.29 | -0.224px | Label tombol utility dan nav |
| {typography.fine-print} | 12px | 400 | 1.0 | -0.12px | Fine-print footer |
| {typography.micro-legal} | 10px | 400 | 1.3 | -0.08px | Disclaimer legal mikro |
| {typography.nav-link} | 12px | 400 | 1.0 | -0.12px | Item menu global nav |

### Principles

- Negative letter-spacing di ukuran display. Setiap headline pada 17px ke atas membawa tracking tighten sedikit (-0.12 sampai -0.374px). Ini menghasilkan cadence headline Apple yang rapat. Jangan pernah digunakan pada 12px atau di bawah.
- Body copy pada 17px, bukan 16px. Apple mematahkan konvensi SaaS dan menjalankan teks paragraf pada 17px. Satu pixel ekstra memberi halaman pace membaca bukan scanning.
- Weight 300 itu nyata dan langka. Digunakan sengaja pada beberapa bacaan ukuran besar ({typography.button-large} pada 18px 300 dan {typography.lead-airy} pada 24px 300). Bukan kebetulan, ini isyarat atmosfer ringan yang dicadangkan untuk momen di mana konten harus terasa airy.
- Weight 600, bukan 700, untuk headline. Headline Apple duduk pada weight 600.
- Line-height kontekstual. Display menggunakan 1.07 sampai 1.19 yang rapat. Body menggunakan 1.47. Stack link utility di footer menggunakan 2.41 yang sangat longgar ({typography.dense-link}).
- Weight 500 sengaja tidak ada. Tangganya adalah 300, 400, 600, 700.

## Layout

### Spacing System
- Base unit 8px. Nilai sub-base (2, 4, 5, 6, 7) digunakan untuk penyesuaian tipografi rapat, layout struktural snap ke 8, 12, 16, 20, 24.
- Tokens: {spacing.xxs} 4px · {spacing.xs} 8px · {spacing.sm} 12px · {spacing.md} 17px · {spacing.lg} 24px · {spacing.xl} 32px · {spacing.xxl} 48px · {spacing.section} 80px.
- Section vertical padding: {spacing.section} (80px) di dalam tile, tile ditumpuk edge-to-edge dengan gap 0 (pergantian warna yang memberi jeda).
- Card padding: {spacing.lg} (24px) di dalam utility grid card dan tema card.
- Button padding: 8 sampai 11px vertikal, 15 sampai 22px horizontal.

### Grid & Container
- Max content width: sekitar 980px pada section text-heavy (FAQ), sekitar 1280 sampai 1440px pada grid tema dan fitur, full-bleed untuk hero tile.
- Pola kolom: 3 kolom fitur grid, 4 kolom keunggulan grid, 3 kolom tema grid, 2 kolom pricing grid dan testimonial grid, single-column centered stack pada hero.
- Gutters: 20 sampai 24px antar card di utility grid.

### Whitespace Philosophy
Whitespace Apple adalah pedestal produk. Setiap tile dimulai dengan setidaknya 64px udara di atas headline dan 48 sampai 64px di bawah. Preview tema tidak pernah sesak, konten terdekat ke preview setidaknya 40px jauhnya. Footer adalah satu-satunya area yang melanggar ini — di sana Apple sengaja padat untuk membuat arsitektur informasi penuh terlihat sekilas.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | Tanpa shadow, tanpa border | Full-bleed tile, global nav, footer, body section |
| Soft hairline | Border 1px rgba(0, 0, 0, 0.08) | Tema card, fitur card, keunggulan card, FAQ |
| Backdrop blur | backdrop-filter blur pada Parchment 80 persen | Nav saat scrolled, modal backdrop |
| Product shadow | rgba(0, 0, 0, 0.22) 3px 5px 30px 0 | Preview tema yang bertumpu di permukaan |

Filosofi shadow: Apple menggunakan tepat satu drop shadow, dan itu diterapkan pada imagery produk fotografis — tidak pernah pada card, tidak pernah pada tombol, tidak pernah pada teks. Elevasi di UI berasal dari pergantian warna surface (light tile ke dark tile) dan backdrop blur pada sticky bar. Satu shadow adalah tentang memberi bobot pada produk, bukan tentang hierarki UI.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| {rounded.none} | 0px | Full-bleed tile (tanpa rounding sudut) |
| {rounded.xs} | 5px | Inline link saat di-style sebagai chip halus (jarang) |
| {rounded.sm} | 8px | Tombol utility dark, imagery inline card |
| {rounded.md} | 11px | Kapsul Pearl Button |
| {rounded.lg} | 18px | Tema card, fitur card, keunggulan card, pricing card, FAQ |
| {rounded.pill} | 9999px | CTA pill biru utama, tab tema, tombol nav, search input |
| {rounded.full} | 9999px | Chip kontrol circular yang mengambang di atas fotografi |

### Photography Geometry
- Hero: full-bleed, 21 banding 9 atau lebih tinggi di homepage. Tema preview adalah fotografis realistis, sering diambil di permukaan tinted yang menjadi background tile.
- Tema card preview: 3 banding 4 portrait crop pada {rounded.lg} (18px) radius, background netral terang, produk di tengah dengan padding internal 20 sampai 40px.
- Tidak ada imagery membulat di hero tile — gambar adalah rectangular full-bleed. Rounding muncul hanya pada imagery card inline.
- Lazy-loading via responsive srcset di semua breakpoint, CDN-optimized WebP.

## Components

### Top Navigation

**global-nav** — Persistent, ultra-thin black nav bar yang dipin ke atas setiap halaman. Background {colors.surface-black}, tinggi 44px, teks {colors.on-dark} di {typography.nav-link} (12px 400 -0.12px tracking). Link tenang, berjarak sekitar 20px, membentang edge-to-edge di atas. Cluster kanan: CTA Pesan Sekarang pill biru yang selalu terlihat. Di mobile, collapse ke hamburger pada sekitar 834px.

### Buttons

**button-primary** — Aksi khas Apple. Background {colors.primary} (Action Blue #0066cc), teks {colors.on-primary} di {typography.body} (SF Pro Text 17px 400), rounded {rounded.pill} (pill penuh berbentuk kapsul), padding 11px kali 22px. Radius pill penuh ADALAH sinyal aksi brand. Active state: {component.button-primary-active} transform scale 0.95. Focus state: {component.button-primary-focus} outline 2px solid {colors.primary-focus}.

**button-secondary-pill** — Digunakan sebagai CTA kedua ketika dua pill biru muncul bersamaan. Background transparent, teks {colors.primary}, border 1px solid {colors.primary}, rounded {rounded.pill}, padding 11px kali 22px. Terbaca sebagai ghost pill.

**button-ghost** — Varian outline netral untuk aksi sekunder di atas kanvas terang. Background transparent, teks {colors.ink}, border 1.5px solid {colors.ink}, rounded {rounded.pill}. Hover mengisi menjadi {colors.ink} dengan teks {colors.on-dark}.

**button-dark-utility** — Aksi global nav. Background {colors.ink} (#1d1d1f), teks {colors.on-dark} di {typography.button-utility} (14px 400 -0.224px tracking), rounded {rounded.sm} (8px), padding 8px kali 15px.

**text-link** — Link body inline di {colors.primary} (Action Blue).

**text-link-on-dark** — Link body inline di dark tile di {colors.primary-on-dark} (Sky Link Blue #2997ff) — Action Blue akan hilang di atas {colors.surface-tile-1}.

### Tiles

**hero-tile** — Full-bleed light tile untuk hero. Background {colors.canvas} (putih), teks {colors.ink}, rounded {rounded.none} (0, tile menyentuh tepi), vertical padding {spacing.section} (80px). Stack terpusat: wordmark di {typography.hero-display} (56px 600) lalu tagline di {typography.lead} (28px 400) lalu dua {component.button-primary} CTA lalu stats grid. Varian parchment {component.hero-tile-parchment} di {colors.canvas-parchment} untuk memecah dua light tile berurutan.

**section-tile-light** — Full-bleed light tile generik. Background {colors.canvas}, teks {colors.ink}, rounded {rounded.none}, vertical padding {spacing.section} (80px). Untuk section fitur atau tema di atas kanvas putih.

**section-tile-parchment** — Sama seperti light tile tapi di {colors.canvas-parchment} (#f5f5f7). Digunakan untuk memecah dua section light yang berurutan, misalnya fitur di parchment lalu tema di putih.

**section-tile-dark** — Full-bleed dark tile. Background {colors.surface-tile-1} (#272729), teks {colors.on-dark}, rounded {rounded.none}, vertical padding {spacing.section} (80px). Digunakan untuk testimonial atau CTA penutup agar pergantian warna menjadi pembatas.

### Cards

**keunggulan-card** — Kartu keunggulan 4 grid. Background {colors.canvas} (putih), border 1px solid {colors.hairline}, rounded {rounded.lg} (18px), padding {spacing.lg} (24px). Top: media 1 banding 1 dengan {rounded.sm} (8px) inner image radius. Di bawah: judul di {typography.body-strong} (17px 600) dan deskripsi di {typography.body} (17px 400). Tidak ada shadow default, preview sendiri membawa product shadow.

**fitur-card** — Kartu fitur 8 grid. Background {colors.canvas}, border 1px solid {colors.hairline}, rounded {rounded.lg} (18px), padding 32px 24px. Icon 50px circular di atas, judul di {typography.body-strong}, deskripsi di {typography.body} dengan {colors.ink-muted-80}.

**tema-card** — Kartu galeri tema. Background {colors.canvas}, border 1px solid {colors.hairline}, rounded {rounded.lg} (18px), padding 0 (gambar yang punya radius). Top: media 3 banding 4 dengan {rounded.lg} radius, overlay gradient gelap di bawah untuk legibilitas nama tema. Body: nama tema di {typography.body-strong} putih di atas overlay, dua tombol kecil (Lihat Preview dan Pesan) berbentuk pill. Preview hover memakai product shadow.

**price-card** — Kartu pricing. Background {colors.canvas}, border 1px solid {colors.hairline}, rounded {rounded.lg} (18px), padding 32px. Varian premium {component.price-card-premium} menambahkan border 2px solid {colors.primary} dan badge Hemat 25 persen pill biru yang mengambang di atas. Harga di {typography.display-lg} atau 40px bold, fitur list dengan check pill.

**faq-item** — Item accordion FAQ. Background {colors.canvas}, border 1.5px solid {colors.hairline}, rounded {rounded.lg} (18px), padding 24px. Pertanyaan di {typography.body-strong}, jawaban di {typography.body} dengan {colors.ink-muted-80}. Toggle plus berputar 135 derajat saat open.

**tema-tab** — Chip tab kategori tema. Background {colors.canvas}, teks {colors.ink-muted-80} di {typography.caption} (14px), border 1.5px solid {colors.hairline}, rounded {rounded.pill}, padding 10px kali 20px. State aktif {component.tema-tab-active} background {colors.primary} teks {colors.on-primary} di {typography.caption-strong}.

**footer** — Background {colors.canvas-parchment} (#f5f5f7), teks {colors.ink-muted-80}. Link columns di {typography.dense-link} (17px 400 2.41 line-height) untuk scanability. Column headings di {typography.caption-strong} (14px 600). Legal row di bawah di {typography.fine-print} (12px 400) dengan {colors.ink-muted-48}. Vertical padding 64px. Pada adaptasi ini footer CTA dark menggunakan {colors.surface-tile-1} dengan teks {colors.on-dark} dan satu {component.button-primary} pill biru, konsisten dengan product-tile-dark.

## Do's and Don'ts

### Do
- Gunakan {colors.primary} (Action Blue #0066cc) untuk setiap elemen interaktif — link, pill CTA, sinyal focus — dan tidak ada yang lain. Satu aksen tidak bisa ditawar.
- Set headline di {typography.hero-display} atau {typography.display-lg} dengan negative letter-spacing (-0.28 sampai -0.374px) untuk mendapatkan cadence Apple yang rapat.
- Jalankan body copy pada {typography.body} (17px 400 1.47 -0.374px) — bukan 16px. Satu pixel ekstra mendefinisikan pace membaca brand.
- Ganti {component.section-tile-light} (atau parchment) dan {component.section-tile-dark} untuk ritme section full-bleed. Pergantian warna ADALAH pembatas.
- Cadangkan {rounded.pill} untuk CTA biru utama dan elemen lain yang harus terbaca sebagai action (tab tema, CTA sticky, pricing badge).
- Terapkan satu product shadow (rgba(0, 0, 0, 0.22) 3px 5px 30px) hanya pada preview tema yang bertumpu di permukaan — jangan pernah pada card, tombol, atau teks.
- Gunakan transform scale 0.95 sebagai state active atau pressed pada setiap tombol — ini micro-interaction system-wide.
- Jaga global nav {colors.surface-black} (hitam murni) — ini satu-satunya tempat hitam murni muncul di sebagian besar halaman.

### Don't
- Jangan memperkenalkan warna aksen kedua, setiap sinyal click me adalah {colors.primary} (Action Blue).
- Jangan menambahkan shadow pada card, tombol, atau teks — shadow dicadangkan untuk imagery tema.
- Jangan gunakan gradient sebagai background dekoratif, atmosfer berasal dari fotografi.
- Jangan set body copy pada weight 500 — tangga Apple adalah 300 400 600 700, dengan 500 sengaja tidak ada. Body selalu 400, strong inline adalah 600, display adalah 600.
- Jangan membulatkan full-bleed tile — tile berbentuk rectangular dan edge-to-edge, pergantian warna adalah pembatas.
- Jangan mengencangkan line-height di bawah 1.47 untuk body copy — leading editorial adalah bagian dari brand.
- Jangan mencampur grammar radii — gunakan {rounded.sm} untuk utility kompak, {rounded.lg} untuk utility card, {rounded.pill} untuk pill, dan tidak ada di antaranya.
- Jangan gunakan {colors.primary-on-dark} (Sky Link Blue) di permukaan light — ini varian khusus dark tile. Action Blue untuk permukaan light.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Small phone | ≤ 419px | Single-column tile, sub-nav collapse ke nama kategori plus CTA utama saja, hero tipografi turun ke 28px |
| Phone | 420–640px | Single-column stack, preview tema skala ke 80 persen lebar tile, hero h1 turun ke 34px |
| Large phone | 641–735px | Tile transisi ke padding lebih rapat (48px vertikal vs 80px), fine-print wrap |
| Tablet portrait | 736–833px | Global nav collapse ke hamburger, sub-nav sembunyikan chip kategori, pertahankan CTA utama |
| Tablet landscape | 834–1023px | Global nav kembali expanded penuh, grid utility 3 kolom menjadi 2 kolom |
| Small desktop | 1024–1068px | Tile produk gunakan 2 per 3 lebar dengan gutter margin, hero h1 tetap pada 40px |
| Desktop | 1069–1440px | Layout penuh, grid tema 3 kolom, fitur 3 kolom, 1440px content max |
| Wide desktop | ≥ 1441px | Konten lock pada 1440px, margin menyerap lebar ekstra |

Breakpoint struktural yang penting untuk agent: 1440px (content lock), 1068px (small-desktop), 833px (tablet landscape switch), 734px (tablet portrait), 640px (phone), 480px (small phone).

### Touch Targets
- Minimum 44 kali 44px. {component.button-primary} mendarat pada sekitar 44 kali 100px (dengan radius pill penuh membuat hit area terlihat lebih generous dari label).
- Global nav utility link lebih kecil (sekitar 32 kali 80px) — sengaja pada target lebih rapat karena ini adalah aksi desktop presisi, dan hamburger mobile menggantikannya pada 833px ke bawah.

### Collapsing Strategy
- Global nav: baris link horizontal penuh di desktop menjadi logo Apple plus hamburger plus icon bag pada 834px ke bawah.
- Hero: wordmark {typography.hero-display} (56px) menjadi {typography.display-lg} (40px) pada 1068px menjadi 34px pada 640px menjadi 28px pada 419px.
- Utility grid (keunggulan 4-col, fitur 3-col, tema 3-col): 4-col menjadi 2-col (1024px) menjadi 1-col (480px), 3-col menjadi 2-col (1024px) menjadi 1-col (480px).
- Pricing grid: 2-col menjadi 1-col pada 768px.
- FAQ grid: 2-col menjadi 1-col pada 768px.

### Image Behavior
- Semua imagery tema menggunakan responsive srcset dengan crop yang cocok breakpoint.
- Hero fotografi dapat mengganti art direction di mobile (crop lebih tinggi).
- Preview tema mempertahankan rasio aspek 3 banding 4 di semua breakpoint, hanya skala yang berubah.
- Lazy-loading adalah default, hero above-the-fold load eager.

## Iteration Guide

1. Fokus pada SATU komponen dalam satu waktu. Referensikan YAML key secara langsung ({component.tema-card}, {component.fitur-card}).
2. Varian dari komponen yang ada (-active, -focus, premium) hidup sebagai entry terpisah di components.
3. Gunakan {token.refs} di mana-mana — jangan pernah inline hex.
4. Jangan pernah dokumentasikan hover. State default dan Active atau Pressed saja.
5. Display headline tetap SF Pro Display 600 dengan negative letter-spacing. Body tetap SF Pro Text 400 pada 17px. Batasnya tidak bisa dilanggar.
6. Satu drop shadow (rgba(0, 0, 0, 0.22) 3px 5px 30px) dicadangkan untuk fotografi produk saja.
7. Ketika ragu tentang penekanan: ganti surface (light ke dark tile) sebelum menambahkan chrome.

## Known Gaps

- State validasi dan error form tidak dimunculkan di halaman yang dianalisis, hanya tema-tab netral yang didokumentasikan.
- Frame video atau player tertanam homepage menggunakan {colors.surface-black}, kontrol interior player tidak didokumentasikan (itu widget platform, bukan token desain web).
- Beberapa imagery komponen bersifat dinamis (rotating showcase marquee) dan copy spesifiknya bervariasi per surface — spec komponen menamai struktur, bukan konten yang berputar.
- Counterpart dark-mode untuk tema dan pricing card tidak dimunculkan di halaman yang dianalisis, sistem yang didokumentasikan adalah varian light dominan yang dikirim Apple secara default.
- Fotografi atmosfer (hero wordmark) adalah aset konten, bukan token desain, yang didokumentasikan {component.hero-tile} hanya menjelaskan permukaan struktural.
- Radius backdrop-filter blur yang tepat pada nav scrolled dan modal backdrop bergantung platform, CSS produksi menggunakan saturate 180 persen blur 20px sebagai baseline tipikal tapi nilainya tidak diformalkan sebagai token.
