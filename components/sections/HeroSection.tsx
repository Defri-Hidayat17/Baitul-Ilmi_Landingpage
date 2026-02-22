// components/sections/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  // Ganti dengan kode warna hex asli Anda dari tailwind.config.js
  // Saya menggunakan nilai yang Anda berikan di pesan sebelumnya
  const primaryGreenColor = "#E8F5E9"; // Pastikan ini sesuai dengan primary-green Anda
  const whiteBgColor = "#FFFFFF"; // Pastikan ini sesuai dengan white-bg Anda

  // Anda bisa mengatur persentase ini
  const whiteStartPercentage = "70%"; // Sesuaikan nilai ini untuk menggeser gradasi

  return (
    <section
      id="hero-section"
      style={{
        backgroundImage: `linear-gradient(to right, ${primaryGreenColor}, ${whiteBgColor} ${whiteStartPercentage}, ${whiteBgColor} 100%)`,
      }}
      className="py-16 md:py-24 relative overflow-hidden w-full
                 min-h-[calc(100vh-64px)] flex items-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content - Teks Baitul Ilmi */}
        <div
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 pr-0 md:pr-8 md:pl-8"
          data-aos="fade-right" // <--- TAMBAHKAN data-aos
          data-aos-duration="1000" // Opsional: Atur durasi animasi
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-dark-green mb-2 leading-tight">
            Baitul Ilmi
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-6 leading-snug">
            Membangun Pemahaman Islam di Era Digital
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Platform pembelajaran Pendidikan Agama Islam yang interaktif,
            terstruktur, dan dirancang untuk membantu mahasiswa memahami materi
            secara lebih mendalam.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            {/* Tombol 1: Mulai Jelajahi Materi (Solid Green) */}
            <Link href="/#materi-overview-section" passHref>
              {" "}
              {/* <--- DIUBAH UNTUK NAVIGASI YANG LEBIH STABIL */}
              <button className="bg-button-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-dark-green transition-colors duration-200 shadow-lg">
                Mulai Jelajahi Materi
              </button>
            </Link>

            {/* Tombol 2: Video Referensi (Stroke/Border) */}
            <Link href="/#referensi-video-section" passHref>
              {" "}
              {/* <--- DIUBAH UNTUK NAVIGASI YANG LEBIH STABIL */}
              <button className="bg-transparent text-dark-green border border-dark-green px-8 py-3 rounded-full text-lg font-semibold hover:bg-dark-green hover:text-white transition-colors duration-200 shadow-lg">
                Video Referensi
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image - Quran Stand (gambar1.png Anda) */}
        <div
          className="md:w-1/2 flex justify-center md:justify-end"
          data-aos="fade-left" // <--- TAMBAHKAN data-aos
          data-aos-duration="1000" // Opsional: Atur durasi animasi
        >
          <Image
            src="/gambar1.png"
            alt="Quran on Stand"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
