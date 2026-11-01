# AQUASENSE — Brawijaya Team (WYIE 2026 Gold Medal)

Website profil inovasi **AQUASENSE** (*Dual-Brain Edge AI for Aquaponics Monitoring*) karya tim mahasiswa Universitas Brawijaya, peraih **Gold Medal** pada ajang **World Young Inventors Exhibition (WYIE / ITEX) 2026** di Kuala Lumpur, Malaysia.

---

## 📁 Struktur Folder yang Sudah Dirapikan

```text
WYIE/
├── website/                         # 🚀 Folder produksi siap deploy ke Vercel / hosting
│   ├── index.html                   # Halaman utama (SEO & OpenGraph lengkap)
│   ├── vercel.json                  # Konfigurasi caching, static headers & clean URLs
│   └── assets/
│       ├── css/
│       │   └── style.css            # Styling responsif, dark mode, animasi, typography
│       ├── js/
│       │   └── app.js               # Router SPA, 3D model loader, galeri, lightbox
│       ├── models/
│       │   └── aquasense.glb        # Model 3D interaktif rig akuaponik (Three.js)
│       └── img/
│           ├── *.jpg, *.png         # Foto resolusi tinggi teroptimasi
│           └── thumb/               # Thumbnail ringan untuk galeri & mobile (srcset)
│
├── arsip/                           # 🔒 Arsip internal & dokumen asli (aman, tidak dideploy)
│   ├── AQUASENSE-original.html      # Backup file HTML monolitik asli
│   ├── dokumen/
│   │   └── Certificate of Merit.pdf # Sertifikat resmi WYIE
│   ├── foto-asli/                   # Semua foto kamera asli resolusi penuh (2K-4K)
│   └── pribadi/                     # Dokumen privat (KTM anggota, nota transfer, tiket pesawat, hotel, invoice)
│
├── vercel.json                      # Konfigurasi Vercel root level
├── .vercelignore                    # Mencegah folder arsip/ terupload ke Vercel
├── .gitignore                       # Mencegah dokumen privat terupload ke Git
└── README.md                        # Panduan ini
```

---

## ✨ Poin Perbaikan & Peningkatan yang Dilakukan

1. **Pemisahan Arsitektur Kode (Decoupling):**
   - Sebelumnya, seluruh website (CSS, JS, 3D GLB model 760 KB base64, dan gambar) digabung menjadi satu file HTML monolitik 1,5 MB.
   - Sekarang dipecah secara modular menjadi `index.html`, `style.css`, `app.js`, dan file aset individual. Lebih mudah dimaintain dan cepat di-load browser.

2. **Kurasi & Penambahan Foto Berkualitas:**
   - **Difilter:** Dokumen privat/sensitif seperti nota pembayaran (`Nota USD.jpeg`), tiket pesawat, booking hotel, invoice pompa, dan KTM mahasiswa diamankan ke `arsip/pribadi/`.
   - **Ditambahkan:** Foto-foto dokumentasi terbaik diintegrasikan ke galeri interaktif (20 foto) dengan kategori (*Exhibition*, *Award ceremony*, *Prototype*, *Medal*, *Dashboard*), lengkap dengan fitur Lightbox perbesaran dan keyboard navigation (`Esc`, `←`, `→`).
   - Ditambahkan showcase foto Medali Emas (*front & back*) dan panggung penghargaan di halaman *Achievement*.

3. **Optimasi Performa & Responsiveness (Web Vitals):**
   - Foto asli resolusi tinggi (3000–4000px, 2–4 MB) dikompresi dengan kualitas web visual lossless dan dibuatkan versi `thumb/` untuk *responsive images* (`srcset` + `sizes`).
   - Hero banner utama diberikan `fetchpriority="high"` untuk LCP maksimal, sementara foto lainnya menggunakan `loading="lazy"` dan `decoding="async"`.
   - Model 3D `aquasense.glb` kini dimuat secara asinkron (*lazy-load on intersection*) melalui URL terpisah dengan caching browser 1 tahun.

4. **Pembersihan Konten & Copywriting:**
   - Halaman placeholder *ZapIn* yang kosong telah dirapikan dari navigasi agar tampilan profil tampak solid dan terverifikasi.
   - Placeholder profil tim `"Contribution: to be added"` dirapikan menjadi kartu anggota tim yang rapi dengan afiliasi fakultas masing-masing.
   - Halaman *Contact* kini dilengkapi kartu sosial media / email yang rapi.

5. **Keamanan & Privasi:**
   - Menambahkan `.vercelignore` dan `.gitignore` agar folder `arsip/` dan dokumen pribadi tidak bocor ke publik atau repositori publik.

---

## 🛠️ Cara Mengubah Kontak Tim

Buka file [website/assets/js/app.js](file:///c:/Users/LEN0V0/Documents/WYIE/website/assets/js/app.js) pada baris ke-9:
```javascript
const CONTACT = {
  email: "team@aquasense.id",        // Masukkan email publik tim
  instagram: "aquasense.ub",         // Username Instagram (opsional)
  linkedin: "https://linkedin.com/...", // Link LinkedIn tim / ketua (opsional)
  whatsapp: "6281234567890"          // Nomor WhatsApp (opsional)
};
```
Jika diisi, tombol kontak dan tautan akan otomatis aktif di halaman **Contact**.

---

## 🌐 Cara Deploy ke Vercel

### Opsi A: Melalui Dashboard Vercel (GitHub / GitLab / Bitbucket)
1. Buat repository baru di GitHub (misalnya: `aquasense-profile`).
2. Push seluruh folder project ini ke repository GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit AQUASENSE profile website"
   git branch -M main
   git remote add origin <URL_REPO_GITHUB_ANDA>
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com) dan login.
4. Klik **"Add New"** > **"Project"** > Import repository GitHub Anda.
5. Pada bagian **Root Directory**, Anda bisa membiarkannya default (`./`) karena sudah ada `vercel.json` di root yang otomatis me-route ke `website/`, ATAU pilih folder `website`.
6. Klik **Deploy**! Website Anda akan langsung online dengan domain gratis seperti `aquasense.vercel.app` (dan bisa dihubungkan ke custom domain).

### Opsi B: Menggunakan Vercel CLI
1. Pastikan Vercel CLI sudah terinstal:
   ```bash
   npm i -g vercel
   ```
2. Jalankan perintah deploy dari folder `website/`:
   ```bash
   cd website
   vercel
   ```
3. Ikuti panduan interaktif di terminal untuk login dan deploy.
4. Untuk deploy ke production:
   ```bash
   vercel --prod
   ```

---

## 💻 Cara Menjalankan & Preview di Komputer Lokal

Cukup buka file [website/index.html](file:///c:/Users/LEN0V0/Documents/WYIE/website/index.html) langsung di browser (Chrome / Edge / Firefox), atau jalankan server lokal:

```bash
# Menggunakan Node.js npx serve
npx serve website

# Atau menggunakan Python
python -m http.server --directory website 8000
```
Buka browser di `http://localhost:8000`.

