// components/sections/SupportSection.tsx
"use client";

import React from "react";

const SupportSection = () => {
  const handleOpenDonationModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("openDonationModal"));
    }
  };

  return (
    <section
      id="support-section"
      className="bg-primary-green py-20 md:py-28 text-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Heading */}
        <h3
          className="text-4xl md:text-5xl font-bold text-dark-green mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Dukung Pengembangan Baitul Ilmi
        </h3>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-text-light leading-relaxed mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Baitul Ilmi hadir sebagai media pembelajaran digital untuk mendukung
          Mata Kuliah Pendidikan Agama Islam (PAI). Dukungan Anda membantu kami
          terus mengembangkan materi pembelajaran, video edukasi, serta sumber
          ilmu yang dapat diakses mahasiswa secara gratis dan berkelanjutan.
        </p>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          <button
            onClick={handleOpenDonationModal}
            className="
              bg-button-green
              text-white
              px-10 py-4
              rounded-full
              font-semibold
              text-lg
              tracking-wide
              shadow-md
              hover:bg-dark-green
              hover:scale-105
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            🤍 Dukung Sekarang
          </button>
        </div>

        {/* Small note */}
        <p
          className="text-sm text-text-light/80 mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Setiap dukungan Anda menjadi bagian dari penyebaran ilmu yang
          bermanfaat.
        </p>
      </div>
    </section>
  );
};

export default SupportSection;
