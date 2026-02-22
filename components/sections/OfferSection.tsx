// components/sections/OfferSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const OfferSection = () => {
  return (
    <section id="offer-section" className="bg-primary-green py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h3
          className="text-4xl font-bold text-dark-green mb-4 text-center"
          data-aos="fade-up" // <--- AOS untuk judul
          data-aos-duration="800"
        >
          Apa yang Baitul Ilmi Tawarkan?
        </h3>
        <p
          className="text-lg text-text-light mb-12 text-center max-w-full mx-auto" // <--- max-w-2xl DIUBAH MENJADI max-w-full
          data-aos="fade-up" // <--- AOS untuk paragraf
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Kami menyediakan berbagai fitur untuk mendukung perjalanan belajar
          agama Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Materi Interaktif */}
          <div
            className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between"
            data-aos="fade-right" // <--- AOS untuk card ini
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h4 className="text-2xl font-semibold text-dark-green mb-4">
                Materi Interaktif & Mudah Dipahami
              </h4>
              <p className="text-text-light mb-6">
                Jelajahi koleksi materi PAI 6 yang dirancang secara ahli untuk
                memudahkan pemahaman Anda.
              </p>
              <Link href="/#materi-overview-section" passHref>
                <button className="bg-button-green text-white px-6 py-2 rounded-full font-medium hover:bg-dark-green transition-colors">
                  Lihat Materi
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <Image
                src="/gambar2.png"
                alt="Materi Interaktif"
                width={260}
                height={260}
                // className="w-full max-w-xs" <--- CLASS INI DIHAPUS AGAR UKURAN 230x230 BERLAKU
              />
            </div>
          </div>

          {/* Card 2: Pengajar & Sumber Terpercaya & Diskusi Interaktif */}
          <div className="grid grid-cols-1 gap-8">
            {/* Sub-Card: Siapa Pengajar Kami? */}
            <div
              className="bg-white p-8 rounded-lg shadow-md flex items-start space-x-4"
              data-aos="fade-left" // <--- AOS untuk card pengajar
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <Image
                src="/pengajar.png"
                alt="Pengajar"
                width={50}
                height={50}
                className="rounded-full w-12 h-12 object-cover"
              />
              <div>
                <h4 className="text-xl font-semibold text-dark-green mb-2">
                  Ir. M. Zubair Abdurrohman, S.T., M.T.
                </h4>
                <p className="text-text-light text-sm leading-relaxed">
                  Para pengajar kami adalah individu yang berdedikasi dengan
                  pemahaman mendalam tentang ilmu agama.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Sub-Card: Sumber Terpercaya (NU) */}
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between items-center"
                data-aos="zoom-in" // <--- AOS untuk card NU
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <Image
                  src="/logoNU.png"
                  alt="Sumber Terpercaya NU"
                  width={60}
                  height={60}
                  className="mx-auto mb-2"
                />
                <p className="font-semibold text-dark-green">
                  Sumber Terpercaya
                </p>
                <p className="text-sm text-text-light mb-2">
                  Dari Kitab & Sunnah
                </p>
                <Link
                  href="https://www.nu.or.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <button className="bg-button-green text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-dark-green transition-colors">
                    Kunjungi NU
                  </button>
                </Link>
              </div>

              {/* Sub-Card: Diskusi Interaktif (Edlink) */}
              <div
                className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between items-center"
                data-aos="zoom-in" // <--- AOS untuk card Edlink
                data-aos-delay="500"
                data-aos-duration="800"
              >
                <Image
                  src="/edlinklogo.png"
                  alt="Diskusi Interaktif Edlink"
                  width={60}
                  height={60}
                  className="mx-auto mb-2"
                />
                <p className="font-semibold text-dark-green">
                  Diskusi Interaktif
                </p>
                <p className="text-sm text-text-light mb-2">
                  Tanya Jawab Aktif
                </p>
                <Link
                  href="https://edlink.id/classes"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  <button className="bg-button-green text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-dark-green transition-colors">
                    Navigasi ke Edlink
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
