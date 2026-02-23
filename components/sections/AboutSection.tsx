"use client";
import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const imageUrls = [
    "/about1.png",
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
  }, []);

  return (
    <section id="about-section" className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* CENTERED GRID LAYOUT */}
        <div className="grid md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto">
          {/* ================= TEXT ================= */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-8">
              Tentang Baitul Ilmi
            </h2>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Baitul Ilmi</strong> merupakan platform pembelajaran
                digital yang dikembangkan sebagai media pendukung Mata Kuliah
                Pendidikan Agama Islam (PAI).
              </p>

              <p>
                Mahasiswa dapat mempelajari materi pertemuan melalui video
                pembelajaran, rangkuman materi, serta sumber belajar interaktif
                yang membantu pemahaman konsep Islam secara sistematis.
              </p>

              <p>
                Platform ini menghadirkan pengalaman belajar modern yang
                mengintegrasikan nilai keislaman dengan teknologi digital agar
                proses pembelajaran menjadi lebih menarik dan relevan di era
                saat ini.
              </p>
            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative w-full h-[420px]">
            {/* FRAME */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-700 via-gray-300 to-yellow-500 p-[3px] shadow-2xl">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                {imageUrls.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Ilustrasi Baitul Ilmi"
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
      </div>
    </section>
  );
};

export default AboutSection;
