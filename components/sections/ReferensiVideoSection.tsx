// components/sections/ReferensiVideoSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

// Helper function untuk mendapatkan ID video YouTube dari URL
const getYouTubeVideoId = (url: string): string | null => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper function untuk mendapatkan URL thumbnail YouTube
const getYouTubeThumbnail = (videoId: string | null): string => {
  if (!videoId) return "/placeholder-video.jpg"; // Fallback thumbnail jika ID tidak ditemukan
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Kualitas tinggi default
};

const ReferensiVideoSection = () => {
  // Contoh data video dengan informasi pertemuan
  const videos = [
    {
      id: 1,
      pertemuan: 1,
      title: "Syahadatain: Rukun Islam Pertama",
      youtubeLink: "https://youtu.be/JS3N6WMik7Q?si=IBHpzl4JQcPyQBl-",
      // Deskripsi dihapus
    },
    {
      id: 2,
      pertemuan: 1,
      title: "Memahami Makna Syahadat",
      youtubeLink: "https://youtu.be/vARtTdZMAbo?si=cFH-PyKf7gZ5TzDz",
      // Deskripsi dihapus
    },
    {
      id: 3,
      pertemuan: 1,
      title: "Keutamaan Syahadat",
      youtubeLink: "https://youtu.be/qCddmfYjMpI?si=bFeD6fhL_J0ivHXL",
      // Deskripsi dihapus
    },
    // Anda bisa menambahkan video untuk pertemuan lain di sini
  ];

  return (
    <section
      id="referensi-video-section"
      className="bg-white py-16 md:py-24 relative overflow-hidden"
    >
      <Image
        src="/lantern-left.png"
        alt="Lantern"
        width={200}
        height={100}
        className="absolute top-0 left-0 opacity-30 hidden md:block"
      />
      <Image
        src="/lantern-right.png"
        alt="Lantern"
        width={200}
        height={100}
        className="absolute top-0 right-0 opacity-30 hidden md:block"
      />
      <div
        className="absolute inset-0 bg-repeat opacity-5"
        style={{ backgroundImage: "url('/mosque-pattern.svg')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h3
          className="text-4xl font-bold text-dark-green mb-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Referensi Video Pembelajaran
        </h3>
        <p
          className="text-lg text-text-light mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          (Belajar Lebih Mudah dengan Visual Interaktif)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => {
            const videoId = getYouTubeVideoId(video.youtubeLink);
            const thumbnailUrl = getYouTubeThumbnail(videoId);

            return (
              <div
                key={video.id}
                className="
                  group
                  bg-white
                  rounded-3xl
                  border border-gray-200
                  p-6
                  shadow-lg
                  border-b-4 border-r-4 border-gray-300
                  hover:shadow-xl hover:-translate-y-2
                  transition-all duration-300
                  relative overflow-hidden
                  flex flex-col // Tetap flex-col untuk struktur internal
                "
                data-aos="zoom-in"
                data-aos-delay={video.id * 100 + 100}
                data-aos-duration="800"
              >
                {/* subtle gradient hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-green-50 to-transparent"></div>

                {/* Thumbnail yang bisa diklik */}
                <Link
                  href={video.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 block"
                >
                  <div className="relative w-full h-48 bg-gray-300 flex items-center justify-center rounded-t-2xl overflow-hidden">
                    <Image
                      src={thumbnailUrl}
                      alt={video.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>

                <div className="p-4 text-left relative z-10 flex flex-col">
                  {" "}
                  {/* flex-grow dihapus dari sini */}
                  {/* Badge Pertemuan */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-dark-green bg-green-50 px-3 py-1 rounded-full w-fit">
                      Pertemuan {video.pertemuan}
                    </span>
                  </div>
                  {/* TITLE */}
                  <h4 className="text-xl font-bold text-gray-800 leading-snug mb-4 group-hover:text-dark-green transition-colors">
                    {" "}
                    {/* Margin bottom disesuaikan */}
                    {video.title}
                  </h4>
                  {/* Tombol "Tonton Sekarang" */}
                  <Link
                    href={video.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-dark-green text-white px-5 py-2 rounded-full text-sm font-semibold
                      hover:bg-button-green transition-colors shadow-md hover:shadow-lg mt-auto w-fit
                      inline-flex items-center justify-center
                    "
                  >
                    Tonton Sekarang <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        ></div>
      </div>
    </section>
  );
};

export default ReferensiVideoSection;
