// app/materi/2/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi2Page() {
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
          Materi Pertemuan 2: Konsep Manusia Dalam Islam
        </h1>

        {/* BAGIAN PENDAHULUAN - Diperbaiki struktur p dan blockquote */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Islam memandang manusia sebagai makhluk yang memiliki kedudukan
            istimewa dibandingkan makhluk lainnya. Allah SWT menciptakan manusia
            dengan bentuk yang sempurna, membekalinya akal, hati, serta
            kemampuan untuk membedakan antara yang benar dan yang salah.
          </p>
          <p className="mt-4">
            Manusia tidak diciptakan tanpa tujuan. Kehadirannya di dunia
            memiliki misi yang sangat penting, yaitu untuk beribadah kepada
            Allah SWT serta mengelola dan memakmurkan bumi sesuai petunjuk-Nya.
          </p>
          <p className="mt-4">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            "Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka
            beribadah kepada-Ku."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Az-Zariyat: 56)
            </span>
          </blockquote>
          <p className="mt-4">
            Ayat tersebut menjelaskan bahwa tujuan utama penciptaan manusia
            adalah untuk beribadah kepada Allah SWT.
          </p>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: Hakikat Manusia dalam Islam
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Dalam perspektif Islam, manusia merupakan makhluk ciptaan Allah yang
            terdiri atas unsur jasmani dan rohani.
            <br />
            <br />
            Jasmani manusia berasal dari tanah, sedangkan rohaninya berasal dari
            ruh yang ditiupkan oleh Allah SWT.
            <br />
            <br />
            Allah SWT berfirman:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            "Kemudian Dia menyempurnakannya dan meniupkan ke dalamnya ruh
            ciptaan-Nya."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. As-Sajdah: 9)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Dengan perpaduan jasad dan ruh tersebut, manusia memiliki kemampuan
            berpikir, merasakan, mengambil keputusan, dan bertanggung jawab atas
            setiap perbuatannya.
          </p>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: Manusia sebagai Abdullah (Hamba Allah)
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            Pengertian Abdullah
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Abdullah berarti hamba Allah.
            <br />
            <br />
            Sebagai hamba, manusia wajib tunduk dan patuh terhadap seluruh
            perintah Allah serta menjauhi segala larangan-Nya.
            <br />
            <br />
            Hubungan manusia dengan Allah dikenal sebagai hubungan vertikal
            (hablum minallah).
            <br />
            <br />
            Tugas utama manusia sebagai Abdullah meliputi:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Melaksanakan shalat</li>
            <li>Berpuasa</li>
            <li>Membayar zakat</li>
            <li>Menunaikan haji bagi yang mampu</li>
            <li>Berdoa dan berdzikir</li>
            <li>Menjalankan seluruh perintah Allah</li>
          </ul>

          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Sembahlah Allah dan janganlah kamu mempersekutukan-Nya dengan
            sesuatu apa pun."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. An-Nisa: 36)
            </span>
          </blockquote>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Ciri-Ciri Hamba yang Baik
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Beriman kepada Allah SWT</li>
            <li>Bertakwa kepada Allah</li>
            <li>Menjalankan ibadah dengan ikhlas</li>
            <li>Bersyukur atas nikmat Allah</li>
            <li>Bersabar dalam menghadapi ujian</li>
          </ul>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: Manusia sebagai Khalifah fi al-Ardh
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            Pengertian Khalifah
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Khalifah berarti wakil, pemimpin, atau pengelola yang diberi amanah
            oleh Allah SWT untuk memakmurkan bumi.
            <br />
            <br />
            Allah SWT berfirman:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            "Sesungguhnya Aku hendak menjadikan seorang khalifah di bumi."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-Baqarah: 30)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Sebagai khalifah, manusia memiliki tanggung jawab besar dalam
            mengelola kehidupan di dunia.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Tugas Manusia sebagai Khalifah
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menjaga lingkungan hidup</li>
            <li>Memanfaatkan sumber daya alam secara bijaksana</li>
            <li>Menegakkan keadilan</li>
            <li>Membangun peradaban</li>
            <li>Menjaga keamanan dan ketertiban</li>
            <li>Membantu sesama manusia</li>
          </ul>

          <p className="mt-4 text-base text-gray-700">
            Manusia tidak diperbolehkan merusak bumi.
            <br />
            <br />
            Allah SWT berfirman:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Dan janganlah kamu membuat kerusakan di muka bumi setelah Allah
            memperbaikinya."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-A'raf: 56)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: Keistimewaan Manusia
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Allah memberikan berbagai kelebihan kepada manusia yang tidak
            dimiliki makhluk lain.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Memiliki Akal</strong>
              <p className="mt-1">
                Akal memungkinkan manusia berpikir, belajar, dan mengembangkan
                ilmu pengetahuan.
              </p>
            </li>
            <li>
              <strong>Memiliki Hati Nurani</strong>
              <p className="mt-1">
                Hati membantu manusia membedakan kebaikan dan keburukan.
              </p>
            </li>
            <li>
              <strong>Memiliki Kebebasan Memilih</strong>
              <p className="mt-1">
                Manusia diberi kebebasan untuk memilih jalan hidupnya, namun
                tetap harus mempertanggungjawabkannya di hadapan Allah.
              </p>
            </li>
            <li>
              <strong>Diberi Ilmu Pengetahuan</strong>
              <p className="mt-1">
                Allah mengajarkan berbagai pengetahuan kepada manusia.
              </p>
            </li>
          </ol>

          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Dan Dia mengajarkan kepada Adam nama-nama segala sesuatu."
            <span className="block text-sm mt-2 font-medium text-right text-amber-600">
              (QS. Al-Baqarah: 31)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: Tanggung Jawab Manusia
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Kebebasan yang dimiliki manusia selalu disertai dengan tanggung
            jawab.
            <br />
            <br />
            Tanggung jawab manusia meliputi:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Tanggung Jawab kepada Allah
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menjalankan ibadah</li>
            <li>Mentaati perintah-Nya</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Tanggung Jawab kepada Sesama Manusia
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menghormati orang tua</li>
            <li>Menolong sesama</li>
            <li>Menjaga persaudaraan</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Tanggung Jawab kepada Lingkungan
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menjaga kebersihan</li>
            <li>Tidak merusak alam</li>
            <li>Melestarikan sumber daya alam</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Tanggung Jawab kepada Diri Sendiri
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menjaga kesehatan</li>
            <li>Menuntut ilmu</li>
            <li>Mengembangkan potensi diri</li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: Tantangan Manusia dalam Menjalankan Perannya
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dalam menjalankan tugas sebagai Abdullah dan Khalifah, manusia
            menghadapi berbagai tantangan:
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Hawa Nafsu</strong>
              <p className="mt-1">
                Keinginan yang berlebihan dapat menjerumuskan manusia pada
                kemaksiatan.
              </p>
            </li>
            <li>
              <strong>Godaan Setan</strong>
              <p className="mt-1">
                Setan selalu berusaha menyesatkan manusia dari jalan yang benar.
              </p>
            </li>
            <li>
              <strong>Pengaruh Lingkungan</strong>
              <p className="mt-1">
                Lingkungan yang buruk dapat memengaruhi perilaku manusia.
              </p>
            </li>
            <li>
              <strong>Kemajuan Teknologi yang Tidak Terkontrol</strong>
              <p className="mt-1">
                Teknologi dapat menjadi sarana kebaikan maupun keburukan
                tergantung penggunaannya.
              </p>
            </li>
          </ol>

          <p className="mt-4 text-base text-gray-700 italic">
            Karena itu manusia harus selalu berpedoman kepada Al-Qur'an dan
            Sunnah.
          </p>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: Hikmah Memahami Konsep Manusia
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Dengan memahami konsep manusia dalam Islam, seseorang akan:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menyadari tujuan hidupnya.</li>
            <li>Lebih dekat kepada Allah SWT.</li>
            <li>Menjadi pribadi yang bertanggung jawab.</li>
            <li>Peduli terhadap sesama manusia.</li>
            <li>Menjaga kelestarian lingkungan.</li>
            <li>Mengembangkan ilmu pengetahuan untuk kemaslahatan umat.</li>
          </ul>

          <p className="mt-4 text-base text-gray-700 italic">
            Pemahaman ini akan membentuk manusia yang seimbang antara urusan
            dunia dan akhirat.
          </p>
        </SectionContainer>

        {/* KESIMPULAN - Diperbaiki struktur blockquote */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Manusia merupakan makhluk ciptaan Allah yang memiliki kedudukan
            mulia. Dalam Islam, manusia memegang dua peran utama, yaitu sebagai
            Abdullah (hamba Allah) yang bertugas beribadah kepada-Nya dan
            sebagai Khalifah fi al-Ardh (pemimpin di bumi) yang bertanggung
            jawab memakmurkan serta menjaga bumi.
            <br />
            <br />
            Kedua peran tersebut harus dijalankan secara seimbang. Kesuksesan
            manusia tidak hanya diukur dari keberhasilannya dalam kehidupan
            dunia, tetapi juga dari ketaatannya kepada Allah SWT dan manfaat
            yang diberikannya kepada sesama makhluk.
            <br />
            <br />
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia
            lainnya."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (HR. Ahmad)
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
