// components/sections/MateriOverviewSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const MateriOverviewSection = () => {
  const materiList = [
    {
      id: 1, // Pastikan ID ini cocok dengan nama folder (misal: app/materi/1/page.tsx)
      title: "Pertemuan 1: Pengantar PAI",
      description:
        "Memahami dasar-dasar Pendidikan Agama Islam dan ruang lingkupnya.",
      icon: "/buku.png",
    },
    {
      id: 2, // Pastikan ID ini cocok dengan nama folder (misal: app/materi/2/page.tsx)
      title: "Pertemuan 2: Aqidah Islamiyah",
      description:
        "Mendalami rukun iman sebagai fondasi utama keyakinan seorang Muslim.",
      icon: "/buku.png", // Anda bisa ganti icon jika ada
    },
    {
      id: 3, // Pastikan ID ini cocok dengan nama folder (misal: app/materi/3/page.tsx)
      title: "Pertemuan 3: Akhlak Mahmudah",
      description:
        "Mempelajari akhlak terpuji dan cara mengaplikasikannya dalam kehidupan.",
      icon: "/buku.png", // Anda bisa ganti icon jika ada
    },
    {
      id: 4, // Pastikan ID ini cocok dengan nama folder (misal: app/materi/4/page.tsx)
      title: "Pertemuan 4: Fiqih Ibadah",
      description:
        "Memahami tata cara ibadah sesuai syariat Islam (shalat, puasa, zakat, haji).",
      icon: "/buku.png",
    },
    // --- TAMBAHKAN MATERI LAINNYA DI SINI ---
    // Pastikan ID unik dan cocok dengan nama folder di app/materi/[id]/page.tsx
  ];

  return (
    <section id="materi-overview-section" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h3
          className="text-4xl font-bold text-dark-green mb-4 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Materi Tiap Pertemuan
        </h3>
        <p
          className="text-lg text-text-light mb-12 text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Jelajahi materi Pendidikan Agama Islam kami yang terstruktur per
          pertemuan.
        </p>

        {/* Grid ini akan menyesuaikan jumlah kolom berdasarkan ukuran layar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {materiList.map((materi) => (
            <div
              key={materi.id}
              className="bg-primary-green p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-between transition-transform transform hover:scale-105 duration-300 w-full max-w-sm"
              data-aos="zoom-in" // Efek AOS untuk card
              data-aos-delay={materi.id * 100 + 100} // Menambahkan delay berdasarkan ID untuk efek berurutan
              data-aos-duration="800"
            >
              <Image
                src={materi.icon}
                alt={materi.title}
                width={60}
                height={60}
                className="mb-4"
              />
              <h4 className="text-xl font-semibold text-dark-green mb-2">
                {materi.title}
              </h4>
              <p className="text-text-light text-sm mb-4">
                {materi.description}
              </p>
              {/* Link ke halaman detail materi yang spesifik */}
              <Link href={`/materi/${materi.id}`} passHref>
                <button className="bg-button-green text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-dark-green transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay={materiList.length * 100 + 200} // Delay setelah semua card
          data-aos-duration="800"
        >
          <Link href="/materi" passHref>
            <button className="bg-dark-green text-white px-8 py-3 rounded-full font-medium hover:bg-button-green transition-colors">
              Lihat Semua Materi
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MateriOverviewSection;
