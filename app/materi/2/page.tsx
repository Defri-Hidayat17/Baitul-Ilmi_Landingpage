// app/materi/2/page.tsx
import React from "react";
import Link from "next/link";

export default function Materi2Page() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-6 text-center">
        Detail Materi Pertemuan 2: Aqidah Islamiyah
      </h1>
      <p className="text-lg text-text-light text-center max-w-3xl mx-auto">
        Ini adalah konten spesifik untuk Pertemuan 2, membahas Aqidah Islamiyah.
        <br />
        <br />
        Misalnya:
        <ul className="list-disc list-inside text-left mx-auto max-w-md mt-4">
          <li>Pengertian dan Sumber Aqidah</li>
          <li>Rukun Iman</li>
          <li>Konsep Tauhid</li>
        </ul>
      </p>
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
