// components/sections/HeroSection.tsx
"use client";

import Image from "next/image"; // Tetap import jika masih ada Image lain di komponen ini
import Link from "next/link";
import React, { useState, useEffect } from "react"; // Import useState dan useEffect

const HeroSection = () => {
  // Ganti dengan kode warna hex asli Anda dari tailwind.config.js
  const primaryGreenColor = "#E8F5E9"; // Pastikan ini sesuai dengan primary-green Anda
  const whiteBgColor = "#FFFFFF"; // Pastikan ini sesuai dengan white-bg Anda

  // Anda bisa mengatur persentase ini
  const whiteStartPercentage = "60%"; // Sesuaikan nilai ini untuk menggeser gradasi

  // --- START: Logika Slide Gambar, PERSIS SAMA DENGAN ABOUTSECTION ---
  const imageUrls = [
    "/about1.png", // Menggunakan gambar yang sama dengan AboutSection
    "/about2.png",
    "/about3.png",
    "/about4.png",
  ];

  const [index, setIndex] = useState(0);

  // Ganti gambar tiap 4 detik (smooth natural)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageUrls.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imageUrls.length]); // Tambahkan imageUrls.length sebagai dependency
  // --- END: Logika Slide Gambar ---

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
          data-aos="fade-right"
          data-aos-duration="1000"
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
              <button className="bg-button-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-dark-green transition-colors duration-200 shadow-lg">
                Mulai Jelajahi Materi
              </button>
            </Link>

            {/* Tombol 2: Video Referensi (Stroke/Border) */}
            <Link href="/#referensi-video-section" passHref>
              <button className="bg-transparent text-dark-green border border-dark-green px-8 py-3 rounded-full text-lg font-semibold hover:bg-dark-green hover:text-white transition-colors duration-200 shadow-lg">
                Video Referensi
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Slider - MENGGANTIKAN gambar.png DENGAN SLIDE DARI ABOUTSECTION */}
        <div
          className="md:w-1/2 flex justify-center md:justify-end relative w-full h-[420px]" // Tinggi disesuaikan dengan AboutSection
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* FRAME GRADASI PERSIS DENGAN ABOUTSECTION */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-700 via-gray-300 to-yellow-500 p-[3px] shadow-2xl">
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              {imageUrls.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Ilustrasi Baitul Ilmi ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover
                    transition-opacity duration-[1800ms] ease-in-out
                    ${i === index ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
