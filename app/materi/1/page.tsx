// app/materi/1/page.tsx
import React from "react";
import Link from "next/link";

export default function Materi1Page() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-6 text-center">
        Detail Materi Pertemuan 1: Pengantar PAI
      </h1>
      <p className="text-lg text-text-light text-center max-w-3xl mx-auto">
        Ini adalah konten spesifik untuk Pertemuan 1. Di sini Anda bisa
        menempatkan semua teks, gambar, dan video yang relevan dengan materi
        "Pengantar PAI".
      </p>
      {/* Pindahkan <br> dan <ul> keluar dari <p> */}
      <br />
      <br />
      <p className="text-lg text-text-light text-center max-w-3xl mx-auto">
        Misalnya:
      </p>
      <ul className="list-disc list-inside text-left mx-auto max-w-md mt-4">
        <li>Pengertian dan Ruang Lingkup PAI</li>
        <li>Tujuan Pembelajaran PAI</li>
        <li>Pentingnya PAI di Era Digital</li>
      </ul>

      <div className="mt-12 text-center">
        <Link
          href="/#materi-overview-section"
          className="bg-button-green text-white px-8 py-3 rounded-full font-medium hover:bg-dark-green transition-colors"
        >
          Kembali ke Daftar Materi
        </Link>
      </div>
    </div>
  );
}
