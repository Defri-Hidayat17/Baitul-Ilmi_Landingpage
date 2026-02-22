// components/sections/ReferensiVideoSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const ReferensiVideoSection = () => {
  // Contoh data video (Anda bisa menggantinya dengan data asli)
  const videos = [
    {
      id: 1,
      title: "Video 1: Konsep Tauhid",
      thumbnail: "/video-thumb-1.jpg",
      link: "https://www.youtube.com/watch?v=video1",
    },
    {
      id: 2,
      title: "Video 2: Tata Cara Shalat",
      thumbnail: "/video-thumb-2.jpg",
      link: "https://www.youtube.com/watch?v=video2",
    },
    {
      id: 3,
      title: "Video 3: Kisah Nabi Muhammad SAW",
      thumbnail: "/video-thumb-3.jpg",
      link: "https://www.youtube.com/watch?v=video3",
    },
  ];

  return (
    <section
      id="referensi-video-section"
      className="bg-white py-16 md:py-24 relative overflow-hidden"
    >
      <Image
        src="/lantern-left.png"
        alt="Lantern"
        width={100}
        height={100}
        className="absolute top-0 left-0 opacity-30 hidden md:block"
      />
      <Image
        src="/lantern-right.png"
        alt="Lantern"
        width={100}
        height={100}
        className="absolute top-0 right-0 opacity-30 hidden md:block"
      />
      <div
        className="absolute inset-0 bg-repeat opacity-5"
        style={{ backgroundImage: "url('/mosque-pattern.svg')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h3 className="text-4xl font-bold text-dark-green mb-4">
          Referensi Video Pembelajaran
        </h3>
        <p className="text-lg text-text-light mb-12">
          (Belajar Lebih Mudah dengan Visual Interaktif)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-primary-green rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <Link href={video.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-48 bg-gray-300 flex items-center justify-center">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-20 transition-opacity">
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
              <div className="p-5 text-left">
                <h4 className="text-xl font-semibold text-dark-green mb-2">
                  {video.title}
                </h4>
                <Link
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-button-green hover:underline font-medium"
                >
                  Tonton Sekarang &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/referensi-video" passHref>
            {" "}
            {/* Link ke halaman semua video (jika ada) */}
            <button className="bg-button-green text-white px-8 py-3 rounded-full font-medium hover:bg-dark-green transition-colors">
              Lihat Semua Video
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReferensiVideoSection;
