// components/PosterSection.tsx
"use client";

import React, { useState } from "react"; // Tambahkan useState
import Image from "next/image";

const PosterSection = () => {
  // Data untuk setiap poster
  const posters = [
    {
      id: 1,
      src: "/poster1.png",
      alt: "Poster Utama Baitul Ilmi",
      label: "🌿 Edukasi Islam Modern",
      title: "Inovasi Terbaru dalam Pembelajaran Islam",
      description:
        "Poster ini merangkum berbagai gagasan, penelitian, dan pendekatan pembelajaran Islam yang relevan dengan kebutuhan pendidikan masa kini, disajikan secara visual agar lebih mudah dipahami dan menarik untuk dipelajari.",
      smallText: "Klik poster untuk melihat versi ukuran penuh.",
    },
    {
      id: 2,
      src: "/poster.png", // Poster baru
      alt: "Poster Studi Kasus Ujaran Kebencian di Media Sosial",
      label: "🚨 Analisis Sosial & Agama",
      title: "Studi Kasus: Ujaran Kebencian di Media Sosial",
      description:
        "Poster ini menganalisis fenomena ujaran kebencian di media sosial dari perspektif moral dan agama, serta dampak negatifnya terhadap masyarakat dan solusi yang relevan. Sebuah kajian mendalam untuk meningkatkan kesadaran digital.",
      smallText: "Klik poster untuk melihat versi ukuran penuh.",
    },
    // Anda bisa menambahkan poster lain di sini
  ];

  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);

  const handleNextPoster = () => {
    setCurrentPosterIndex((prevIndex) =>
      prevIndex === posters.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevPoster = () => {
    setCurrentPosterIndex((prevIndex) =>
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    );
  };

  const currentPoster = posters[currentPosterIndex];

  return (
    <section id="poster-section" className="relative overflow-hidden py-28">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Poster Ilmiah
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-dark-green leading-tight">
            Galeri Poster Ilmiah
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Menampilkan hasil kajian, penelitian, dan inovasi pembelajaran Islam
            dalam bentuk visual yang informatif, menarik, serta mudah dipahami
            oleh seluruh kalangan.
          </p>
        </div>

        {/* Poster Card */}
        <div className="flex justify-center">
          <div
            className="
              max-w-5xl
              w-full
              bg-white/80
              backdrop-blur-lg
              border border-white/40
              rounded-[32px]
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              overflow-hidden
              relative // Tambahkan relative untuk posisi tombol
            "
          >
            <div className="grid md:grid-cols-2 gap-0 items-center">
              {/* Text Section */}
              <div className="p-10 md:p-14">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                  {currentPoster.label}
                </span>

                <h3 className="mt-6 text-3xl font-bold text-dark-green leading-snug">
                  {currentPoster.title}
                </h3>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  {currentPoster.description}
                </p>

                <p className="mt-8 text-sm text-gray-500">
                  {currentPoster.smallText}
                </p>
              </div>

              {/* Image Section */}
              <div className="p-6 md:p-8">
                <a
                  href={currentPoster.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lihat poster ukuran penuh"
                  className="group block"
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-3xl
                      shadow-2xl
                      border border-green-100
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                    "
                  >
                    <Image
                      src={currentPoster.src}
                      alt={currentPoster.alt}
                      width={1000}
                      height={750}
                      className="
                        w-full
                        h-auto
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={handlePrevPoster}
                className="bg-white/70 backdrop-blur-sm rounded-full p-3 ml-4 shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Previous poster"
              >
                <svg
                  className="w-6 h-6 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={handleNextPoster}
                className="bg-white/70 backdrop-blur-sm rounded-full p-3 mr-4 shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Next poster"
              >
                <svg
                  className="w-6 h-6 text-green-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
