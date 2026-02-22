// components/sections/SupportSection.tsx
"use client";

import Link from "next/link";

const SupportSection = () => {
  return (
    <section
      id="support-section"
      className="bg-white py-16 md:py-24 text-center"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-dark-green mb-4">
          Dukung Misi Kami
        </h3>
        <p className="text-lg text-text-light max-w-3xl mx-auto mb-12">
          Baitul Ilmi berkomitmen untuk menyediakan sumber daya Islami
          berkualitas tinggi secara gratis. Dukungan Anda membantu kami terus
          mengembangkan platform ini dan menyebarkan ilmu yang bermanfaat.
        </p>
        <button className="bg-button-green text-white px-8 py-3 rounded-full font-medium hover:bg-dark-green transition-colors">
          Donasi Sekarang
        </button>
      </div>
    </section>
  );
};

export default SupportSection;
