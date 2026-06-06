// app/materi/3/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi3Page() {
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
          Materi Pertemuan 3 : <br />
          Paradigma Qur'ani
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Al-Qur'an merupakan pedoman hidup bagi umat Islam yang memberikan
            petunjuk dalam berbagai aspek kehidupan, baik dalam bidang akidah,
            ibadah, akhlak, ilmu pengetahuan, maupun kehidupan sosial. Sebagai
            wahyu Allah SWT, Al-Qur'an tidak hanya menjadi sumber hukum, tetapi
            juga menjadi landasan berpikir bagi seorang muslim dalam memahami
            realitas kehidupan.
          </p>
          <p className="mt-4">
            Di era modern yang ditandai dengan perkembangan ilmu pengetahuan dan
            teknologi yang sangat pesat, umat Islam dituntut untuk memiliki cara
            pandang yang benar dalam menyikapi berbagai fenomena yang terjadi.
            Cara pandang tersebut dikenal sebagai Paradigma Qur'ani.
          </p>
          <p className="mt-4">
            Paradigma Qur'ani menjadikan Al-Qur'an sebagai sumber utama dalam
            berpikir, memahami, menilai, dan mengambil keputusan terhadap
            berbagai persoalan kehidupan.
          </p>
          <p className="mt-4">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            "Sesungguhnya Al-Qur'an ini memberikan petunjuk kepada jalan yang
            paling lurus."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Isra': 9)
            </span>
          </blockquote>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: Pengertian Paradigma Qur'ani
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Kata paradigma berasal dari bahasa Yunani paradeigma yang berarti
            pola, model, atau kerangka berpikir.
            <br />
            <br />
            Paradigma Qur'ani adalah cara pandang yang menjadikan Al-Qur'an
            sebagai landasan utama dalam memahami kehidupan, ilmu pengetahuan,
            serta berbagai fenomena sosial dan alam.
            <br />
            <br />
            Dengan paradigma ini, seorang muslim tidak hanya mengandalkan logika
            dan pengalaman semata, tetapi juga menjadikan wahyu Allah sebagai
            sumber kebenaran tertinggi.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Paradigma Qur'ani membantu manusia melihat segala sesuatu secara
            seimbang antara aspek dunia dan akhirat.
          </p>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: Dasar Paradigma Qur'ani
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Al-Qur'an merupakan petunjuk bagi seluruh umat manusia.
            <br />
            <br />
            Allah SWT berfirman:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            "Kitab (Al-Qur'an) ini tidak ada keraguan padanya; petunjuk bagi
            mereka yang bertakwa."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-Baqarah: 2)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Ayat tersebut menunjukkan bahwa Al-Qur'an adalah sumber petunjuk
            yang dapat dijadikan pedoman dalam berpikir dan bertindak.
            <br />
            <br />
            Selain itu, Allah SWT juga berfirman:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Dan Kami turunkan kepadamu Al-Kitab untuk menjelaskan segala
            sesuatu."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. An-Nahl: 89)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Karena itu, seorang muslim hendaknya menjadikan Al-Qur'an sebagai
            acuan utama dalam menilai benar dan salah.
          </p>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: Karakteristik Paradigma Qur'ani
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Paradigma Qur'ani memiliki beberapa karakteristik utama.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Berbasis Wahyu</strong>
              <p className="mt-1">
                Paradigma Qur'ani berlandaskan wahyu Allah SWT sebagai sumber
                kebenaran mutlak.
              </p>
            </li>
            <li>
              <strong>Seimbang</strong>
              <p className="mt-1">
                Memandang kehidupan secara utuh antara dunia dan akhirat,
                jasmani dan rohani, individu dan masyarakat.
              </p>
            </li>
            <li>
              <strong>Rasional</strong>
              <p className="mt-1">
                Islam mendorong penggunaan akal untuk berpikir dan mencari ilmu.
              </p>
            </li>
          </ol>

          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Apakah kamu tidak berpikir?"
            <span className="block text-sm mt-2 font-medium text-right text-amber-600">
              (QS. Al-Baqarah: 44)
            </span>
          </blockquote>

          <ol
            className="list-decimal ml-8 text-lg space-y-3 text-gray-800"
            start={4}
          >
            <li>
              <strong>Universal</strong>
              <p className="mt-1">
                Ajaran Al-Qur'an berlaku untuk seluruh umat manusia tanpa
                dibatasi ruang dan waktu.
              </p>
            </li>
            <li>
              <strong>Berorientasi Kemaslahatan</strong>
              <p className="mt-1">
                Segala aktivitas diarahkan untuk menciptakan manfaat bagi
                manusia dan lingkungan.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: Paradigma Qur'ani dan Ilmu Pengetahuan
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam sangat menghargai ilmu pengetahuan.
            <br />
            <br />
            Ayat pertama yang turun kepada Nabi Muhammad SAW adalah perintah
            membaca.
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Bacalah dengan nama Tuhanmu yang menciptakan."
            <span className="block text-sm mt-2 font-medium text-right text-amber-600">
              (QS. Al-'Alaq: 1)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Hal ini menunjukkan bahwa Islam mendorong umatnya untuk belajar,
            meneliti, dan mengembangkan ilmu pengetahuan.
            <br />
            <br />
            Paradigma Qur'ani memandang bahwa:
          </p>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Ilmu berasal dari Allah SWT.</li>
            <li>Pengetahuan harus digunakan untuk kebaikan.</li>
            <li>Sains dan agama tidak saling bertentangan.</li>
            <li>Kemajuan teknologi harus membawa manfaat bagi umat manusia.</li>
          </ul>
          <p className="mt-4 text-base text-gray-700 italic">
            Dengan demikian, perkembangan ilmu pengetahuan harus tetap berada
            dalam koridor nilai-nilai Islam.
          </p>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: Implementasi Paradigma Qur'ani dalam Kehidupan
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Paradigma Qur'ani dapat diterapkan dalam berbagai bidang kehidupan.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Dalam Pendidikan
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menuntut ilmu sebagai ibadah.</li>
            <li>Mengembangkan ilmu yang bermanfaat.</li>
            <li>Menanamkan nilai moral dan akhlak.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Dalam Kehidupan Sosial
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menjaga persaudaraan.</li>
            <li>Menghormati perbedaan.</li>
            <li>Menegakkan keadilan.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Dalam Dunia Teknologi
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menggunakan teknologi secara bijak.</li>
            <li>Menghindari penyebaran hoaks.</li>
            <li>Memanfaatkan teknologi untuk kemaslahatan umat.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Dalam Lingkungan Hidup
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menjaga kelestarian alam.</li>
            <li>Tidak melakukan kerusakan.</li>
            <li>Mengelola sumber daya secara bertanggung jawab.</li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: Tantangan Paradigma Qur'ani di Era Modern
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Perkembangan zaman membawa berbagai tantangan yang harus dihadapi
            umat Islam.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Materialisme</strong>
              <p className="mt-1">
                Pandangan yang hanya mementingkan aspek duniawi.
              </p>
            </li>
            <li>
              <strong>Individualisme</strong>
              <p className="mt-1">
                Sikap yang mengutamakan kepentingan pribadi dibanding
                kepentingan bersama.
              </p>
            </li>
            <li>
              <strong>Penyalahgunaan Teknologi</strong>
              <p className="mt-1">
                Teknologi yang seharusnya menjadi sarana kebaikan dapat
                digunakan untuk hal negatif.
              </p>
            </li>
            <li>
              <strong>Krisis Moral</strong>
              <p className="mt-1">
                Menurunnya nilai-nilai akhlak dalam kehidupan masyarakat.
              </p>
            </li>
          </ol>

          <p className="mt-4 text-base text-gray-700 italic">
            Paradigma Qur'ani hadir sebagai solusi agar manusia tetap memiliki
            pedoman hidup yang benar.
          </p>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: Hikmah Menerapkan Paradigma Qur'ani
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Dengan menerapkan Paradigma Qur'ani, seseorang akan memperoleh
            berbagai manfaat:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Memiliki cara berpikir yang benar.</li>
            <li>Mampu membedakan yang hak dan batil.</li>
            <li>Menjadikan Al-Qur'an sebagai pedoman hidup.</li>
            <li>Memanfaatkan ilmu pengetahuan secara bertanggung jawab.</li>
            <li>Menjalani kehidupan yang seimbang antara dunia dan akhirat.</li>
            <li>Memiliki akhlak yang baik dalam kehidupan bermasyarakat.</li>
          </ul>

          <p className="mt-4 text-base text-gray-700 italic">
            Pemahaman ini akan membentuk manusia yang seimbang antara urusan
            dunia dan akhirat.
          </p>
        </SectionContainer>

        {/* KESIMPULAN */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Paradigma Qur'ani adalah cara pandang yang menjadikan Al-Qur'an
            sebagai sumber utama dalam berpikir dan bertindak. Paradigma ini
            mengarahkan manusia untuk memahami berbagai fenomena kehidupan
            berdasarkan petunjuk Allah SWT.
            <br />
            <br />
            Dengan Paradigma Qur'ani, umat Islam mampu menghadapi perkembangan
            ilmu pengetahuan, teknologi, dan perubahan zaman tanpa kehilangan
            nilai-nilai keimanan dan akhlak. Oleh karena itu, setiap muslim
            hendaknya menjadikan Al-Qur'an sebagai pedoman utama dalam membangun
            kehidupan yang berilmu, berakhlak, dan bermanfaat bagi sesama.
            <br />
            <br />
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            "Sesungguhnya telah datang kepadamu cahaya dari Allah dan Kitab yang
            menerangkan."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-Ma'idah: 15)
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
