// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet warna baru dari gambar referensi
        "primary-green": "#E8F5E9", // Hijau muda background utama
        "secondary-green": "#A5D6A7", // Hijau sedang untuk aksen (seperti slider dot)
        "dark-green": "#388E3C", // Hijau gelap untuk teks/ikon penting
        "text-dark": "#333333", // Teks sangat gelap
        "text-light": "#666666", // Teks abu-abu terang
        "white-bg": "#FFFFFF", // Latar belakang putih
        "card-bg-light": "#F5F5F5", // Latar belakang kartu yang lebih terang
        "border-light": "#E0E0E0", // Border abu-abu terang
        "button-green": "#4CAF50", // Hijau untuk tombol
      },
      // Tambahkan font Arabic di sini jika Anda sudah punya font file-nya
      // font-family: {
      //   arabic: ['var(--font-lateef)', 'Noto Naskh Arabic', 'serif'],
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Pastikan ini ada untuk styling konten HTML
  ],
};
