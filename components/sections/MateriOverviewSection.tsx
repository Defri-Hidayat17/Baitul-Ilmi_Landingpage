"use client";

import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image"; // --- DIKEMBALIKAN: Import Image dari next/image ---

const MateriOverviewSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  const materiList = [
    {
      id: 1,
      title: "Pertemuan 1:<br/>Syahadatain",
      description:
        "Mengenal makna Syahadatain sebagai fondasi keimanan dan pintu awal perjalanan seorang muslim.",
      icon: "/buku.png",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollWidth, clientWidth } = scrollContainer;

      const overflows = scrollWidth > clientWidth;
      setIsContentOverflowing(overflows);

      if (overflows) {
        scrollContainer.scrollLeft = (scrollWidth - clientWidth) / 2;
      }
    }
  }, [materiList.length]);

  return (
    <section
      id="materi-overview-section"
      className="bg-white pt-20 pb-12 md:pt-28 md:pb-16"
    >
      <div className="container mx-auto px-4">
        <h3
          className="text-4xl font-extrabold text-dark-green mb-4 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Materi Tiap Pertemuan
        </h3>
        <p
          className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Jelajahi materi Pendidikan Agama Islam kami yang terstruktur per
          pertemuan.
        </p>

        <div
          className={`flex overflow-x-auto snap-x snap-mandatory scroll-smooth custom-scrollbar pb-8 ${
            !isContentOverflowing ? "justify-center" : ""
          }`}
          ref={scrollContainerRef}
        >
          <div className="flex gap-8">
            {materiList.map((materi) => (
              <div
                key={materi.id}
                className="
                  group
                  bg-white
                  rounded-3xl
                  border border-gray-200
                  p-6
                  w-80
                  flex-shrink-0
                  snap-start
                  transition-all duration-300
                  shadow-lg
                  border-b-4 border-r-4 border-gray-300
                  hover:shadow-xl
                  hover:-translate-y-2
                  relative
                  overflow-hidden
                  flex flex-col
                "
                data-aos="zoom-in"
                data-aos-delay={materi.id * 100 + 100}
                data-aos-duration="800"
              >
                {/* subtle gradient hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-green-50 to-transparent"></div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* --- PERUBAHAN DI SINI: Menambahkan ikon buku di samping badge --- */}
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src={materi.icon}
                      alt="Ikon Buku"
                      width={20} // Sesuaikan ukuran ikon sesuai keinginan
                      height={20} // Sesuaikan ukuran ikon sesuai keinginan
                      className="flex-shrink-0"
                    />
                    <span className="text-xs font-semibold text-dark-green bg-green-50 px-3 py-1 rounded-full w-fit">
                      Pertemuan {materi.id}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h4
                    className="
                      text-xl font-bold text-gray-800 leading-snug mb-2
                      group-hover:text-dark-green transition-colors
                    "
                    dangerouslySetInnerHTML={{
                      __html: materi.title.replace(
                        "Pertemuan " + materi.id + ":<br/>",
                        ""
                      ),
                    }}
                  />

                  {/* DESCRIPTION */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {materi.description}
                  </p>

                  {/* CTA - Hanya ini yang bisa diklik */}
                  <Link href={`/materi/${materi.id}`} passHref>
                    <button className="bg-dark-green text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-button-green transition-colors shadow-md hover:shadow-lg mt-auto w-fit">
                      Mulai Belajar <span className="ml-1">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MateriOverviewSection;
