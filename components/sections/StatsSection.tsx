// components/sections/StatsSection.tsx
"use client";

const StatsSection = () => {
  return (
    <section id="stats-section" className="bg-white py-12 md:py-16">
      {" "}
      {/* <--- PADDING DIKECILKAN */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Stat 1: Modul Spesial */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800" // Menambahkan durasi AOS
          >
            <span className="text-4xl font-bold text-dark-green mb-2">
              {" "}
              {/* <--- UKURAN & KETEBALAN ANGKA DIUBAH */}
              1+
            </span>
            <p className="text-lg text-text-light italic">Modul Spesial</p>{" "}
            {/* <--- DESKRIPSI ITALIC */}
          </div>
          {/* Stat 2: Pelajar Aktif */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <span className="text-4xl font-bold text-dark-green mb-2">
              {" "}
              {/* <--- UKURAN & KETEBALAN ANGKA DIUBAH */}
              40
            </span>
            <p className="text-lg text-text-light italic">Pelajar Aktif</p>{" "}
            {/* <--- DESKRIPSI ITALIC */}
          </div>
          {/* Stat 3: Akses Gratis */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <span className="text-4xl font-bold text-dark-green mb-2">
              {" "}
              {/* <--- UKURAN & KETEBALAN ANGKA DIUBAH */}
              100%
            </span>
            <p className="text-lg text-text-light italic">Akses Gratis</p>{" "}
            {/* <--- DESKRIPSI ITALIC */}
          </div>
          {/* Stat 4: Rating Puas */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <span className="text-4xl font-bold text-dark-green mb-2">
              {" "}
              {/* <--- UKURAN & KETEBALAN ANGKA DIUBAH */}
              4.9/5
            </span>
            <p className="text-lg text-text-light italic">Rating Puas</p>{" "}
            {/* <--- DESKRIPSI ITALIC */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
