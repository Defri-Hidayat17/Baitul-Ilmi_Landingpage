// app/materi/10/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi10Page() {
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
          Materi Pertemuan 10: <br /> Adab Safar dan Makan dalam Islam
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Islam merupakan agama yang mengatur seluruh aspek kehidupan manusia,
            termasuk tata cara bepergian (safar) dan makan. Adab-adab tersebut
            diajarkan oleh Rasulullah SAW sebagai bentuk penyempurnaan akhlak
            dan wujud rasa syukur kepada Allah SWT.
          </p>
          <p className="mt-4">
            Melalui penerapan adab safar dan makan, seorang muslim tidak hanya
            memperoleh manfaat jasmani, tetapi juga mendapatkan nilai ibadah
            dalam setiap aktivitas sehari-hari.
          </p>
          <p className="mt-4">Rasulullah SAW bersabda:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            "Sesungguhnya aku diutus untuk menyempurnakan akhlak yang mulia."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Ahmad)
            </span>
          </blockquote>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: Pengertian Adab dalam Islam
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Adab adalah tata krama, sopan santun, atau perilaku yang baik sesuai
            tuntunan syariat Islam.
            <br />
            <br />
            Adab bertujuan membentuk pribadi muslim yang berakhlak mulia dalam
            hubungan dengan Allah, sesama manusia, maupun lingkungan sekitar.
            <br />
            <br />
            Penerapan adab menunjukkan kualitas iman seseorang.
          </p>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: Adab Safar (Perjalanan)
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            Pengertian Safar
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Safar adalah perjalanan yang dilakukan seseorang menuju tempat
            tertentu dengan tujuan yang baik dan dibenarkan oleh syariat.
            <br />
            <br />
            Islam mengajarkan berbagai adab sebelum, selama, dan setelah
            melakukan perjalanan.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Adab Sebelum Safar
          </h3>
          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Meluruskan Niat</strong>
              <p className="mt-1">
                Perjalanan hendaknya dilakukan untuk tujuan yang baik dan
                bermanfaat.
              </p>
            </li>
            <li>
              <strong>Memohon Perlindungan kepada Allah</strong>
              <p className="mt-1">
                Berdoa sebelum berangkat agar diberikan keselamatan.
              </p>
            </li>
            <li>
              <strong>Menyiapkan Bekal Secukupnya</strong>
              <p className="mt-1">
                Bekal yang cukup membantu kelancaran perjalanan.
              </p>
            </li>
            <li>
              <strong>Berpamitan kepada Keluarga</strong>
              <p className="mt-1">Memohon doa dan restu dari keluarga.</p>
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Adab Saat Safar
          </h3>
          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Membaca Doa Perjalanan</strong>
              <p className="mt-1 italic">
                "Subhanalladzi sakhkhara lana hadza wa ma kunna lahu muqrinin wa
                inna ila rabbina lamunqalibun."
              </p>
            </li>
            <li>
              <strong>Menjaga Akhlak</strong>
              <p className="mt-1">
                Bersikap sopan, sabar, dan menghormati orang lain selama
                perjalanan.
              </p>
            </li>
            <li>
              <strong>Menjaga Waktu Shalat</strong>
              <p className="mt-1">
                Tidak meninggalkan kewajiban ibadah meskipun sedang bepergian.
              </p>
            </li>
            <li>
              <strong>Menjaga Keselamatan</strong>
              <p className="mt-1">
                Mematuhi aturan lalu lintas dan menghindari tindakan yang
                membahayakan diri maupun orang lain.
              </p>
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Adab Setelah Safar
          </h3>
          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Bersyukur kepada Allah</strong>
              <p className="mt-1">
                Mengucapkan hamdalah atas keselamatan selama perjalanan.
              </p>
            </li>
            <li>
              <strong>Menyapa Keluarga dengan Baik</strong>
              <p className="mt-1">
                Menunjukkan rasa syukur dengan mempererat silaturahmi.
              </p>
            </li>
            <li>
              <strong>Beristirahat Secukupnya</strong>
              <p className="mt-1">
                Memulihkan kondisi fisik setelah perjalanan.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: Adab Makan dalam Islam
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Makan merupakan kebutuhan manusia yang juga bernilai ibadah apabila
            dilakukan sesuai tuntunan Islam.
          </p>
          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            "Makanlah dari rezeki yang baik yang telah Kami berikan kepadamu."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-Baqarah: 172)
            </span>
          </blockquote>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Adab Sebelum Makan
          </h3>
          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Memastikan Makanan Halal dan Baik</strong>
              <p className="mt-1">
                Makanan harus halal serta tidak membahayakan kesehatan.
              </p>
            </li>
            <li>
              <strong>Mencuci Tangan</strong>
              <p className="mt-1">Menjaga kebersihan sebelum makan.</p>
            </li>
            <li>
              <strong>Membaca Basmalah</strong>
              <p className="mt-1 italic">
                "Bismillahirrahmanirrahim"
                <br />
                Sebagai bentuk mengingat Allah sebelum makan.
              </p>
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Adab Saat Makan
          </h3>
          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Menggunakan Tangan Kanan</strong>
              <p className="mt-1">
                Rasulullah SAW menganjurkan makan dengan tangan kanan.
              </p>
            </li>
            <li>
              <strong>Makan dari Bagian yang Terdekat</strong>
              <p className="mt-1">Menunjukkan kesopanan saat makan bersama.</p>
            </li>
            <li>
              <strong>Tidak Berlebihan</strong>
              <p className="mt-1">Allah SWT berfirman:</p>
              <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
                "Makan dan minumlah, tetapi jangan berlebihan."
                <span className="block text-sm mt-2 font-medium text-right text-amber-600">
                  (QS. Al-A'raf: 31)
                </span>
              </blockquote>
            </li>
            <li>
              <strong>Tidak Mencela Makanan</strong>
              <p className="mt-1">Menghargai rezeki yang diberikan Allah.</p>
            </li>
            <li>
              <strong>Duduk dengan Sopan</strong>
              <p className="mt-1">
                Menunjukkan sikap hormat terhadap makanan dan orang lain.
              </p>
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Adab Setelah Makan
          </h3>
          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Mengucapkan Hamdalah</strong>
              <p className="mt-1 italic">
                "Alhamdulillahil ladzi ath'amana wa saqana..."
              </p>
            </li>
            <li>
              <strong>Membersihkan Tempat Makan</strong>
              <p className="mt-1">Menjaga kebersihan lingkungan.</p>
            </li>
            <li>
              <strong>Bersyukur atas Nikmat Allah</strong>
              <p className="mt-1">
                Menyadari bahwa makanan merupakan karunia Allah SWT.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: Hikmah Adab Safar dan Makan
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Penerapan adab safar dan makan memberikan berbagai manfaat:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Hikmah Adab Safar
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Mendapat perlindungan Allah.</li>
            <li>Menjaga keselamatan perjalanan.</li>
            <li>Membiasakan disiplin dan tanggung jawab.</li>
            <li>Menumbuhkan rasa syukur.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Hikmah Adab Makan
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menjaga kesehatan.</li>
            <li>Menumbuhkan rasa syukur.</li>
            <li>Menghargai rezeki yang diperoleh.</li>
            <li>Menjadikan aktivitas makan bernilai ibadah.</li>
          </ul>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: Penerapan dalam Kehidupan Mahasiswa
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Sebagai mahasiswa, adab safar dan makan dapat diterapkan melalui:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Mematuhi aturan saat berkendara ke kampus.</li>
            <li>Menjaga keselamatan selama perjalanan.</li>
            <li>Tidak membuang makanan secara sia-sia.</li>
            <li>Membiasakan berdoa sebelum dan sesudah makan.</li>
            <li>Mengonsumsi makanan yang halal dan sehat.</li>
            <li>Menjaga kebersihan lingkungan kampus.</li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Adab safar dan makan merupakan bagian dari ajaran Islam yang
            menunjukkan kesempurnaan syariat dalam mengatur kehidupan manusia.
            Dengan menerapkan adab-adab tersebut, seorang muslim dapat
            menjalankan aktivitas sehari-hari secara lebih baik, tertib, sehat,
            dan bernilai ibadah.
            <br />
            <br />
            Rasulullah SAW memberikan teladan terbaik dalam setiap aspek
            kehidupan, termasuk dalam perjalanan dan makan. Oleh karena itu,
            umat Islam hendaknya meneladani sunnah beliau agar memperoleh
            keberkahan dalam kehidupan.
            <br />
            <br />
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            "Dan apa yang diberikan Rasul kepadamu maka terimalah dia."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-Hasyr: 7)
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
