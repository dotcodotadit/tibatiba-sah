/* ============================================================
   Tiba-Tiba Sah — Data Tema (77 tema)
   Sumber gambar : https://sgp1.vultrobjects.com/production-invee/templates/<img>.jpg
   Live demo     : https://demo.invee.net/?template=<demo>
   Catatan: untuk tema parallax, <img> sengaja beda dari <demo>
            (sesuai index.html lama) — keduanya dipertahankan persis.
   ============================================================ */

const TT_CATEGORIES = [
  { key: 'floral',      label: 'Floral',                title: 'Floral' },
  { key: 'minimalist',  label: 'Minimalist',            title: 'Minimalist' },
  { key: 'traditional', label: 'Traditional & Daerah',  title: 'Traditional & Daerah' },
  { key: 'luxury',      label: 'Luxury & Parallax',     title: 'Luxury & Parallax' },
  { key: 'islamic',     label: 'Islamic & Elegant',     title: 'Islamic & Elegant' },
  { key: 'pernikahan',  label: 'Pernikahan',            title: 'Pernikahan & Lamaran' },
  { key: 'keluarga',    label: 'Acara Keluarga',        title: 'Acara Keluarga' },
  { key: 'lainnya',     label: 'Lainnya',               title: 'Lainnya' },
];

/* price: 80000 = Basic · 120000 = Premium (premium:true → badge 👑) */
const TT_THEMES = [
  /* ── Floral ── */
  { cat:'floral', name:'Floral 1', img:'floral-1', demo:'floral-1', price:80000,  premium:false },
  { cat:'floral', name:'Floral 2', img:'floral-2', demo:'floral-2', price:80000,  premium:false },
  { cat:'floral', name:'Floral 3', img:'floral-3', demo:'floral-3', price:80000,  premium:false },
  { cat:'floral', name:'Floral 4', img:'floral-4', demo:'floral-4', price:80000,  premium:false },
  { cat:'floral', name:'Floral 5', img:'floral-5', demo:'floral-5', price:80000,  premium:false },
  { cat:'floral', name:'Floral 6', img:'floral-6', demo:'floral-6', price:80000,  premium:false },
  { cat:'floral', name:'Floral 7', img:'floral-7', demo:'floral-7', price:120000, premium:true  },
  { cat:'floral', name:'Floral 8', img:'floral-8', demo:'floral-8', price:120000, premium:true  },
  { cat:'floral', name:'Floral 9', img:'floral-9', demo:'floral-9', price:120000, premium:true  },

  /* ── Minimalist ── */
  { cat:'minimalist', name:'Minimalist 1',  img:'minimalist-1',  demo:'minimalist-1',  price:80000,  premium:false },
  { cat:'minimalist', name:'Minimalist 2',  img:'minimalist-2',  demo:'minimalist-2',  price:80000,  premium:false },
  { cat:'minimalist', name:'Minimalist 3',  img:'minimalist-3',  demo:'minimalist-3',  price:80000,  premium:false },
  { cat:'minimalist', name:'Minimalist 4',  img:'minimalist-4',  demo:'minimalist-4',  price:80000,  premium:false },
  { cat:'minimalist', name:'Minimalist 5',  img:'minimalist-5',  demo:'minimalist-5',  price:80000,  premium:false },
  { cat:'minimalist', name:'Minimalist 6',  img:'minimalist-6',  demo:'minimalist-6',  price:120000, premium:true  },
  { cat:'minimalist', name:'Minimalist 7',  img:'minimalist-7',  demo:'minimalist-7',  price:120000, premium:true  },
  { cat:'minimalist', name:'Minimalist 8',  img:'minimalist-8',  demo:'minimalist-8',  price:120000, premium:true  },
  { cat:'minimalist', name:'Minimalist 9',  img:'minimalist-9',  demo:'minimalist-9',  price:120000, premium:true  },
  { cat:'minimalist', name:'Minimalist 10', img:'minimalist-10', demo:'minimalist-10', price:120000, premium:true  },
  { cat:'minimalist', name:'Minimalist 11', img:'minimalist-11', demo:'minimalist-11', price:120000, premium:true  },
  { cat:'minimalist', name:'Minimalist 12', img:'minimalist-12', demo:'minimalist-12', price:120000, premium:true  },

  /* ── Traditional & Daerah ── */
  { cat:'traditional', name:'Traditional 1',    img:'traditional-1',    demo:'traditional-1',    price:80000,  premium:false },
  { cat:'traditional', name:'Traditional 2',    img:'traditional-2',    demo:'traditional-2',    price:80000,  premium:false },
  { cat:'traditional', name:'Traditional 3',    img:'traditional-3',    demo:'traditional-3',    price:80000,  premium:false },
  { cat:'traditional', name:'Traditional 4',    img:'traditional-4',    demo:'traditional-4',    price:80000,  premium:false },
  { cat:'traditional', name:'Bali',             img:'bali',             demo:'bali',             price:120000, premium:true  },
  { cat:'traditional', name:'Banjar',           img:'banjar',           demo:'banjar',           price:120000, premium:true  },
  { cat:'traditional', name:'Dayak',            img:'dayak',            demo:'dayak',            price:120000, premium:true  },
  { cat:'traditional', name:'Jakarta',          img:'jakarta',          demo:'jakarta',          price:120000, premium:true  },
  { cat:'traditional', name:'Jawa',             img:'jawa',             demo:'jawa',             price:120000, premium:true  },
  { cat:'traditional', name:'Jawa Barat',       img:'jawa-barat',       demo:'jawa-barat',       price:120000, premium:true  },
  { cat:'traditional', name:'Jawa Tengah',      img:'jawa-tengah',      demo:'jawa-tengah',      price:120000, premium:true  },
  { cat:'traditional', name:'Jawa Timur',       img:'jawa-timur',       demo:'jawa-timur',       price:120000, premium:true  },
  { cat:'traditional', name:'Melayu',           img:'melayu',           demo:'melayu',           price:120000, premium:true  },
  { cat:'traditional', name:'Papua',            img:'papua',            demo:'papua',            price:120000, premium:true  },
  { cat:'traditional', name:'Sulawesi Selatan', img:'sulawesi-selatan', demo:'sulawesi-selatan', price:120000, premium:true  },
  { cat:'traditional', name:'Sumatera Barat',   img:'sumatera-barat',   demo:'sumatera-barat',   price:120000, premium:true  },
  { cat:'traditional', name:'Sumatera Utara',   img:'sumatera-utara',   demo:'sumatera-utara',   price:120000, premium:true  },
  { cat:'traditional', name:'Sunda',            img:'sunda',            demo:'sunda',            price:120000, premium:true  },

  /* ── Luxury & Parallax ── */
  { cat:'luxury', name:'Luxury 1',         img:'luxury-1',             demo:'luxury-1',         price:120000, premium:true },
  { cat:'luxury', name:'Luxury 2',         img:'luxury-2',             demo:'luxury-2',         price:120000, premium:true },
  { cat:'luxury', name:'Overlay Shadow 1', img:'overlay-shadow-1',     demo:'overlay-shadow-1', price:120000, premium:true },
  { cat:'luxury', name:'Overlay Shadow 2', img:'overlay-shadow-2',     demo:'overlay-shadow-2', price:120000, premium:true },
  { cat:'luxury', name:'Overlay Shadow 3', img:'overlay-shadow-3',     demo:'overlay-shadow-3', price:120000, premium:true },
  { cat:'luxury', name:'Galaxy',           img:'minimalist-parallax-2', demo:'galaxy',          price:120000, premium:true },
  { cat:'luxury', name:'The Moon',         img:'minimalist-parallax-1', demo:'the-moon',        price:120000, premium:true },
  { cat:'luxury', name:'Mountain',         img:'minimalist-parallax-5', demo:'mountain',        price:120000, premium:true },
  { cat:'luxury', name:'Underwater',       img:'minimalist-parallax-4', demo:'underwater',      price:120000, premium:true },
  { cat:'luxury', name:'The Sea',          img:'minimalist-parallax-3', demo:'the-sea',         price:120000, premium:true },

  /* ── Islamic & Elegant ── */
  { cat:'islamic', name:'Islamic 1', img:'islamic-1', demo:'islamic-1', price:120000, premium:true  },
  { cat:'islamic', name:'Islamic 2', img:'islamic-2', demo:'islamic-2', price:120000, premium:true  },
  { cat:'islamic', name:'Elegant 1', img:'elegant-1', demo:'elegant-1', price:80000,  premium:false },
  { cat:'islamic', name:'Elegant 2', img:'elegant-2', demo:'elegant-2', price:120000, premium:true  },

  /* ── Pernikahan & Lamaran ── */
  { cat:'pernikahan', name:'Engagement 1',         img:'engagement-1',         demo:'engagement-1',         price:120000, premium:true },
  { cat:'pernikahan', name:'Engagement 2',         img:'engagement-2',         demo:'engagement-2',         price:120000, premium:true },
  { cat:'pernikahan', name:'Post Wedding 1',       img:'post-wedding-1',       demo:'post-wedding-1',       price:120000, premium:true },
  { cat:'pernikahan', name:'Wedding Anniversary 1', img:'wedding-anniversary-1', demo:'wedding-anniversary-1', price:120000, premium:true },
  { cat:'pernikahan', name:'Wedding Shower 1',     img:'wedding-shower-1',     demo:'wedding-shower-1',     price:120000, premium:true },
  { cat:'pernikahan', name:'Rehearsal Dinner 1',   img:'rehearsal-dinner-1',   demo:'rehearsal-dinner-1',   price:120000, premium:true },
  { cat:'pernikahan', name:'Bachelorette 1',       img:'bachelorette-1',       demo:'bachelorette-1',       price:120000, premium:true },

  /* ── Acara Keluarga ── */
  { cat:'keluarga', name:'Birthday 1',          img:'birthday-1',          demo:'birthday-1',          price:80000,  premium:false },
  { cat:'keluarga', name:'Birthday 2',          img:'birthday-2',          demo:'birthday-2',          price:120000, premium:true  },
  { cat:'keluarga', name:'Birthday 3',          img:'birthday-3',          demo:'birthday-3',          price:120000, premium:true  },
  { cat:'keluarga', name:'Aqiqah 1',            img:'aqiqah-1',            demo:'aqiqah-1',            price:80000,  premium:false },
  { cat:'keluarga', name:'Aqiqah 2',            img:'aqiqah-2',            demo:'aqiqah-2',            price:120000, premium:true  },
  { cat:'keluarga', name:'Khitan 1',            img:'khitan-1',            demo:'khitan-1',            price:120000, premium:true  },
  { cat:'keluarga', name:'Baby Shower 1',       img:'baby-shower-1',       demo:'baby-shower-1',       price:120000, premium:true  },
  { cat:'keluarga', name:'Baby Gender Reveal 1', img:'baby-gender-reveal-1', demo:'baby-gender-reveal-1', price:120000, premium:true },
  { cat:'keluarga', name:'Graduation 1',        img:'graduation-1',        demo:'graduation-1',        price:120000, premium:true  },
  { cat:'keluarga', name:'Graduation 2',        img:'graduation-2',        demo:'graduation-2',        price:120000, premium:true  },
  { cat:'keluarga', name:'Graduation 3',        img:'graduation-3',        demo:'graduation-3',        price:120000, premium:true  },

  /* ── Lainnya ── */
  { cat:'lainnya', name:'Holiday 1',            img:'holiday-1',            demo:'holiday-1',            price:120000, premium:true },
  { cat:'lainnya', name:'Holiday 2',            img:'holiday-2',            demo:'holiday-2',            price:120000, premium:true },
  { cat:'lainnya', name:'Holiday 3',            img:'holiday-3',            demo:'holiday-3',            price:120000, premium:true },
  { cat:'lainnya', name:'Holiday 4',            img:'holiday-4',            demo:'holiday-4',            price:120000, premium:true },
  { cat:'lainnya', name:'Meeting Invitation 1', img:'meeting-invitation-1', demo:'meeting-invitation-1', price:120000, premium:true },
  { cat:'lainnya', name:'Meeting Invitation 2', img:'meeting-invitation-2', demo:'meeting-invitation-2', price:120000, premium:true },
];
