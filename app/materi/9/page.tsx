// app/materi/9/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi9Page() {
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
          Materi Pertemuan 9: <br /> Kemungkaran Umat
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Islam merupakan agama yang mengajarkan kebaikan dan melarang segala
            bentuk kemungkaran. Kemungkaran adalah segala perbuatan yang
            bertentangan dengan ajaran Allah SWT, norma agama, dan nilai-nilai
            moral yang berlaku dalam masyarakat.
          </p>
          <p className="mt-4">
            Apabila kemungkaran dibiarkan berkembang, maka akan muncul berbagai
            kerusakan sosial seperti kriminalitas, korupsi, pergaulan bebas,
            penyalahgunaan narkoba, fitnah, dan berbagai bentuk pelanggaran
            lainnya.
          </p>
          <p className="mt-4">
            Karena itu Islam memerintahkan umatnya untuk melakukan amar ma'ruf
            nahi munkar, yaitu mengajak kepada kebaikan dan mencegah
            kemungkaran.
          </p>
          <p className="mt-4">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            "Dan hendaklah ada di antara kamu segolongan umat yang menyeru
            kepada kebajikan, menyuruh kepada yang ma'ruf dan mencegah dari yang
            mungkar."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Ali Imran: 104)
            </span>
          </blockquote>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: Pengertian Kemungkaran
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Kemungkaran berasal dari kata munkar yang berarti sesuatu yang
            buruk, tercela, dan ditolak oleh syariat Islam.
            <br />
            <br />
            Secara istilah, kemungkaran adalah segala bentuk perbuatan yang
            melanggar perintah Allah SWT dan bertentangan dengan nilai-nilai
            kebaikan.
            <br />
            <br />
            Kemungkaran dapat dilakukan oleh individu maupun kelompok
            masyarakat.
          </p>
          <p className="mt-4 text-base text-gray-700">Contohnya:</p>
          <ul className="list-disc ml-8 text-lg space-y-1 text-gray-800">
            <li>Berbohong</li>
            <li>Mencuri</li>
            <li>Korupsi</li>
            <li>Fitnah</li>
            <li>Perjudian</li>
            <li>Penyalahgunaan narkoba</li>
            <li>Pergaulan bebas</li>
            <li>Kekerasan dan penindasan</li>
          </ul>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: Penyebab Terjadinya Kemungkaran
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Terdapat berbagai faktor yang dapat menyebabkan munculnya
            kemungkaran.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Lemahnya Iman</strong>
              <p className="mt-1">
                Kurangnya keimanan membuat seseorang mudah melakukan
                pelanggaran.
              </p>
            </li>
            <li>
              <strong>Pengaruh Lingkungan</strong>
              <p className="mt-1">
                Lingkungan yang buruk dapat membentuk kebiasaan buruk.
              </p>
            </li>
            <li>
              <strong>Hawa Nafsu</strong>
              <p className="mt-1">
                Keinginan yang tidak terkendali dapat mendorong seseorang
                melakukan kemaksiatan.
              </p>
            </li>
            <li>
              <strong>Kurangnya Pendidikan Agama</strong>
              <p className="mt-1">
                Minimnya pemahaman agama menyebabkan seseorang tidak memahami
                batasan halal dan haram.
              </p>
            </li>
            <li>
              <strong>Pengaruh Media dan Teknologi</strong>
              <p className="mt-1">
                Konten negatif dapat memengaruhi perilaku masyarakat.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: Bentuk-Bentuk Kemungkaran di Masyarakat
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            Kemungkaran dalam Perilaku
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Berbohong</li>
            <li>Menghina orang lain</li>
            <li>Menipu</li>
            <li>Mengadu domba</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Kemungkaran dalam Ekonomi
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Korupsi</li>
            <li>Riba</li>
            <li>Kecurangan dalam perdagangan</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Kemungkaran dalam Sosial
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Pergaulan bebas</li>
            <li>Penyalahgunaan narkoba</li>
            <li>Kekerasan</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Kemungkaran di Dunia Digital
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Penyebaran hoaks</li>
            <li>Ujaran kebencian</li>
            <li>Penipuan online</li>
            <li>Cyberbullying</li>
          </ul>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: Dampak Kemungkaran
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Kemungkaran membawa dampak buruk bagi individu maupun masyarakat.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Dampak bagi Individu
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Hilangnya ketenangan hidup</li>
            <li>Menurunnya moral</li>
            <li>Jauh dari rahmat Allah</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Dampak bagi Masyarakat
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Meningkatnya konflik sosial</li>
            <li>Menurunnya rasa saling percaya</li>
            <li>Rusaknya tatanan kehidupan</li>
            <li>Hilangnya keamanan dan ketertiban</li>
          </ul>

          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Telah tampak kerusakan di darat dan di laut disebabkan karena
            perbuatan tangan manusia."
            <span className="block text-sm mt-2 font-medium text-right text-amber-600">
              (QS. Ar-Rum: 41)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: Amar Ma'ruf Nahi Munkar
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam mengajarkan agar umatnya aktif dalam mencegah kemungkaran.
          </p>

          <p className="mt-4 text-base text-gray-700">
            Rasulullah SAW bersabda:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Barang siapa di antara kalian melihat kemungkaran maka ubahlah
            dengan tangannya. Jika tidak mampu maka dengan lisannya. Jika tidak
            mampu maka dengan hatinya, dan itulah selemah-lemahnya iman."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Muslim)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Hadis ini menunjukkan bahwa setiap muslim memiliki tanggung jawab
            untuk mencegah kemungkaran sesuai kemampuan.
          </p>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: Cara Mengatasi Kemungkaran
          </h2>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Memperkuat Keimanan</strong>
              <p className="mt-1">
                Iman menjadi benteng utama dalam menghadapi kemaksiatan.
              </p>
            </li>
            <li>
              <strong>Pendidikan dan Pembinaan</strong>
              <p className="mt-1">Menanamkan nilai-nilai agama sejak dini.</p>
            </li>
            <li>
              <strong>Keteladanan</strong>
              <p className="mt-1">
                Menjadi contoh yang baik dalam keluarga dan masyarakat.
              </p>
            </li>
            <li>
              <strong>Menciptakan Lingkungan Positif</strong>
              <p className="mt-1">
                Memilih pergaulan yang baik dan mendukung kebaikan.
              </p>
            </li>
            <li>
              <strong>Memanfaatkan Teknologi secara Bijak</strong>
              <p className="mt-1">
                Menggunakan media sosial untuk hal-hal yang bermanfaat.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: Peran Mahasiswa dalam Mencegah Kemungkaran
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Sebagai generasi intelektual, mahasiswa memiliki peran penting.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Agen Perubahan</strong>
              <p className="mt-1">
                Menjadi pelopor kebaikan di lingkungan kampus dan masyarakat.
              </p>
            </li>
            <li>
              <strong>Penyebar Edukasi</strong>
              <p className="mt-1">
                Memberikan pemahaman yang benar kepada masyarakat.
              </p>
            </li>
            <li>
              <strong>Teladan Akhlak</strong>
              <p className="mt-1">
                Menunjukkan perilaku yang sesuai dengan nilai-nilai Islam.
              </p>
            </li>
            <li>
              <strong>Pengawas Sosial</strong>
              <p className="mt-1">
                Peduli terhadap berbagai masalah sosial yang terjadi di
                masyarakat.
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
            Kemungkaran merupakan segala bentuk perbuatan yang bertentangan
            dengan ajaran Islam dan dapat merusak kehidupan individu maupun
            masyarakat. Oleh karena itu, setiap muslim memiliki tanggung jawab
            untuk melakukan amar ma'ruf nahi munkar sesuai kemampuan yang
            dimiliki.
            <br />
            <br />
            Dengan memperkuat iman, meningkatkan pendidikan agama, serta
            membangun lingkungan yang baik, kemungkaran dapat diminimalkan
            sehingga tercipta masyarakat yang aman, adil, dan sejahtera.
            <br />
            <br />
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            "Kamu adalah umat terbaik yang dilahirkan untuk manusia, menyuruh
            kepada yang ma'ruf dan mencegah dari yang mungkar serta beriman
            kepada Allah."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Ali Imran: 110)
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
