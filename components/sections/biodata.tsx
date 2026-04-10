// components/sections/biodata.tsx
"use client";

import Image from "next/image";

const BiodataSection = () => {
  return (
    <section
      id="biodata-section"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#F8FAF9] via-[#EEF3F0] to-[#E4ECE7]"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="md:pl-12">
            {" "}
            {/* biar agak ke kanan */}
            <p className="text-sm tracking-widest text-[#8FA79D] uppercase mb-3">
              Biodata
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1F2F2B] leading-tight">
              Defri Lugas <br />
              <span className="text-[#7C9A92]">Hidayat</span>
            </h1>
            <div className="w-16 h-1 bg-[#C6A969] mt-6 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Saya adalah seorang Mobile Developer yang memiliki minat dalam
              pengembangan aplikasi modern berbasis Flutter. Saya fokus pada
              pembuatan aplikasi yang efisien, user-friendly, serta memiliki
              tampilan yang elegan dan profesional.
            </p>
            {/* INFO */}
            <div className="mt-8 space-y-2 text-gray-700">
              <p>
                <span className="font-semibold text-[#2F4F4F]">NIM:</span>{" "}
                312310272
              </p>
              <p>
                <span className="font-semibold text-[#2F4F4F]">Prodi:</span>{" "}
                Teknik Informatika
              </p>
              <p className="font-extrabold text-[#2F4F4F]">
                Universitas Pelita Bangsa
              </p>
            </div>
            {/* BUTTON WA */}
            <div className="mt-10">
              <a
                href="https://wa.me/6289509371705"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#7C9A92] text-white rounded-lg shadow-md hover:bg-[#6b8a82] transition"
              >
                <Image src="/wa.svg" alt="WhatsApp" width={20} height={20} />
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 bg-[#7C9A92]/20 blur-3xl rounded-full"></div>

              <Image
                src="/fotodefri.png"
                alt="Foto Defri"
                width={400}
                height={520}
                className="relative z-10 object-cover rounded-2xl shadow-2xl"
              />

              {/* Frame luxury */}
              <div className="absolute inset-0 border border-[#C6A969]/40 rounded-2xl z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiodataSection;
