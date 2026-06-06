// app/materi/7/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi7Page() {
  const SectionContainer = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    const bgColorClass =
      index % 2 === 0
        ? "bg-white border-b border-amber-100"
        : "bg-emerald-50 border-b border-gray-200";

    return (
      <div
        className={`max-w-4xl mx-auto ${bgColorClass} p-8 md:p-12 rounded-lg shadow-lg mb-12 transform hover:scale-[1.01] transition duration-300 ease-in-out`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen font-sans bg-[url('/madinah.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/60"></div>{" "}
      {/* Sedikit lebih gelap */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-8 leading-tight drop-shadow-lg">
          Materi Pertemuan 7: <br /> Fiqih Dakwah
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Islam adalah agama dakwah. Sejak diutusnya Nabi Muhammad SAW, ajaran
            Islam disampaikan kepada umat manusia melalui proses dakwah yang
            penuh hikmah, kesabaran, dan keteladanan.
          </p>
          <p className="mt-4">
            Dakwah bukan hanya tugas para ulama atau ustaz, melainkan kewajiban
            setiap muslim sesuai kemampuan masing-masing. Melalui dakwah,
            nilai-nilai Islam dapat tersebar dan menjadi pedoman hidup bagi
            masyarakat.
          </p>
          <p className="mt-4">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            "Serulah (manusia) kepada jalan Tuhanmu dengan hikmah dan pelajaran
            yang baik serta bantahlah mereka dengan cara yang lebih baik."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. An-Nahl: 125)
            </span>
          </blockquote>
          <p className="mt-4">
            Ayat ini menjadi dasar penting dalam pelaksanaan dakwah Islam.
          </p>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: Pengertian Fiqih Dakwah
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            Pengertian Fiqih
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Fiqih berarti pemahaman yang mendalam terhadap hukum dan ajaran
            Islam.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Pengertian Dakwah
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Dakwah berasal dari kata da'a yang berarti mengajak, menyeru, atau
            memanggil.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Pengertian Fiqih Dakwah
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Fiqih Dakwah adalah pemahaman mengenai metode, strategi, prinsip,
            dan etika dalam menyampaikan ajaran Islam kepada masyarakat.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Fiqih Dakwah mengajarkan bagaimana dakwah dilakukan secara tepat
            sesuai kondisi dan karakter mad'u (objek dakwah).
          </p>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: Tujuan Dakwah
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Dakwah memiliki tujuan yang mulia.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Mengajak kepada Tauhid</strong>
              <p className="mt-1">
                Menyeru manusia untuk beriman dan menyembah Allah SWT.
              </p>
            </li>
            <li>
              <strong>Menegakkan Amar Ma'ruf</strong>
              <p className="mt-1">Mengajak kepada kebaikan dan kebajikan.</p>
            </li>
            <li>
              <strong>Mencegah Kemungkaran</strong>
              <p className="mt-1">
                Mengingatkan masyarakat agar menjauhi perbuatan buruk.
              </p>
            </li>
            <li>
              <strong>Membentuk Akhlak Mulia</strong>
              <p className="mt-1">
                Menjadikan manusia berkarakter baik sesuai ajaran Islam.
              </p>
            </li>
            <li>
              <strong>Mewujudkan Masyarakat yang Islami</strong>
              <p className="mt-1">
                Menciptakan kehidupan yang damai, adil, dan bermoral.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: Dasar Hukum Dakwah
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Kewajiban berdakwah dijelaskan dalam Al-Qur'an.
          </p>

          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            "Dan hendaklah ada di antara kamu segolongan umat yang menyeru
            kepada kebajikan, menyuruh kepada yang ma'ruf dan mencegah dari yang
            mungkar."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Ali Imran: 104)
            </span>
          </blockquote>

          <p className="mt-4 text-base text-gray-700">
            Rasulullah SAW juga bersabda:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Sampaikanlah dariku walau hanya satu ayat."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Bukhari)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Hadis ini menunjukkan bahwa setiap muslim memiliki tanggung jawab
            untuk menyampaikan kebaikan.
          </p>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: Metode Dakwah dalam Islam
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Al-Qur'an menjelaskan beberapa metode dakwah.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Bil Hikmah (Dengan Kebijaksanaan)</strong>
              <p className="mt-1">
                Menyampaikan dakwah dengan cara yang bijaksana dan sesuai
                keadaan.
              </p>
            </li>
            <li>
              <strong>Mau'izhah Hasanah (Nasihat yang Baik)</strong>
              <p className="mt-1">
                Memberikan nasihat yang lembut dan menyentuh hati.
              </p>
            </li>
            <li>
              <strong>Mujadalah Billati Hiya Ahsan</strong>
              <p className="mt-1">
                Berdiskusi atau berdialog dengan cara yang santun dan menghargai
                lawan bicara.
              </p>
            </li>
          </ol>
          <p className="mt-4 text-base text-gray-700 italic">
            Metode-metode ini menunjukkan bahwa Islam mengedepankan pendekatan
            yang damai dan persuasif.
          </p>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: Keteladanan Rasulullah dalam Berdakwah
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Nabi Muhammad SAW merupakan teladan terbaik dalam dakwah.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Jujur dan Amanah</strong>
              <p className="mt-1">
                Beliau dikenal sebagai Al-Amin sebelum menjadi nabi.
              </p>
            </li>
            <li>
              <strong>Sabar dalam Menghadapi Penolakan</strong>
              <p className="mt-1">
                Rasulullah tetap berdakwah meskipun menghadapi berbagai
                tantangan.
              </p>
            </li>
            <li>
              <strong>Mengutamakan Akhlak</strong>
              <p className="mt-1">
                Beliau berdakwah melalui sikap dan perilaku yang baik.
              </p>
            </li>
          </ul>

          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Sesungguhnya telah ada pada diri Rasulullah itu suri teladan yang
            baik bagimu."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Ahzab: 21)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: Dakwah di Era Digital
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Perkembangan teknologi membuka peluang baru dalam berdakwah.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Media Sosial</strong>
              <p className="mt-1">
                Menyebarkan pesan-pesan positif melalui berbagai platform
                digital.
              </p>
            </li>
            <li>
              <strong>Konten Edukatif</strong>
              <p className="mt-1">
                Membuat artikel, video, podcast, dan infografis Islami.
              </p>
            </li>
            <li>
              <strong>Komunikasi yang Santun</strong>
              <p className="mt-1">
                Menghindari ujaran kebencian dan provokasi.
              </p>
            </li>
            <li>
              <strong>Menyaring Informasi</strong>
              <p className="mt-1">
                Memastikan informasi yang disampaikan benar dan dapat
                dipertanggungjawabkan.
              </p>
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: Etika Seorang Da'i
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Seorang penyampai dakwah harus memiliki karakter yang baik.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Ikhlas</strong>
              <p className="mt-1">Berdakwah semata-mata karena Allah SWT.</p>
            </li>
            <li>
              <strong>Sabar</strong>
              <p className="mt-1">
                Tidak mudah putus asa ketika menghadapi tantangan.
              </p>
            </li>
            <li>
              <strong>Rendah Hati</strong>
              <p className="mt-1">
                Tidak merasa paling benar dan merendahkan orang lain.
              </p>
            </li>
            <li>
              <strong>Berilmu</strong>
              <p className="mt-1">
                Menyampaikan ajaran berdasarkan pengetahuan yang benar.
              </p>
            </li>
            <li>
              <strong>Menjadi Teladan</strong>
              <p className="mt-1">
                Mengamalkan terlebih dahulu apa yang disampaikan kepada orang
                lain.
              </p>
            </li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Fiqih Dakwah adalah pemahaman mengenai cara menyampaikan ajaran
            Islam secara bijaksana, santun, dan sesuai tuntunan Al-Qur'an serta
            Sunnah. Dakwah bukan sekadar menyampaikan nasihat, tetapi juga
            memberikan keteladanan melalui akhlak dan perilaku sehari-hari.
            <br />
            <br />
            Di era digital saat ini, setiap muslim memiliki peluang besar untuk
            berdakwah melalui berbagai media. Oleh karena itu, dakwah harus
            dilakukan dengan hikmah, ilmu, dan akhlak yang mulia agar pesan
            Islam dapat diterima dengan baik oleh masyarakat.
            <br />
            <br />
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            "Barang siapa menunjukkan kepada kebaikan, maka ia akan mendapatkan
            pahala seperti pahala orang yang melakukannya."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (HR. Muslim)
            </span>
          </blockquote>
        </SectionContainer>

        <div className="mt-20 text-center">
          <Link
            href="/#materi-overview-section"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              ></path>
            </svg>
            Kembali ke Daftar Materi
          </Link>
        </div>
      </div>
    </div>
  );
}
