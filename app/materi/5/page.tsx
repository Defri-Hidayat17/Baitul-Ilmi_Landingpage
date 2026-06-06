// app/materi/5/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi5Page() {
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
          Materi Pertemuan 5: <br /> Ghozwatul Fikri (Perang Pemikiran)
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Perkembangan teknologi informasi dan globalisasi menyebabkan
            pertukaran budaya dan pemikiran terjadi dengan sangat cepat. Di satu
            sisi hal ini memberikan manfaat bagi kemajuan ilmu pengetahuan,
            namun di sisi lain dapat membawa berbagai pemikiran yang
            bertentangan dengan nilai-nilai Islam.
          </p>
          <p className="mt-4">
            Salah satu tantangan yang dihadapi umat Islam saat ini adalah
            Ghozwatul Fikri atau perang pemikiran. Perang ini tidak menggunakan
            senjata fisik, tetapi menggunakan ide, informasi, budaya, media, dan
            propaganda untuk memengaruhi cara berpikir masyarakat.
          </p>
          <p className="mt-4">
            Oleh karena itu, umat Islam harus memiliki pemahaman yang kuat
            terhadap ajaran Islam agar mampu menyaring berbagai pengaruh yang
            masuk.
          </p>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: Pengertian Ghozwatul Fikri
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Ghozwatul Fikri berasal dari bahasa Arab:
          </p>
          <ul className="list-disc ml-8 text-lg space-y-1 text-gray-800 mb-4">
            <li>Ghozwah berarti serangan atau peperangan.</li>
            <li>Fikr berarti pemikiran.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed">
            Secara istilah, Ghozwatul Fikri adalah upaya memengaruhi cara
            berpikir seseorang atau kelompok untuk menjauhkan mereka dari
            nilai-nilai Islam melalui berbagai media dan metode.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Perang pemikiran dilakukan secara halus dan sering kali tidak
            disadari oleh masyarakat.
          </p>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: Tujuan Ghozwatul Fikri
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Tujuan utama perang pemikiran adalah:
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Melemahkan Akidah Umat</strong>
              <p className="mt-1">
                Membuat umat Islam ragu terhadap keyakinannya sendiri.
              </p>
            </li>
            <li>
              <strong>Menghilangkan Identitas Islam</strong>
              <p className="mt-1">
                Mendorong umat Islam meninggalkan nilai-nilai yang menjadi ciri
                khas agamanya.
              </p>
            </li>
            <li>
              <strong>Menjauhkan dari Al-Qur'an dan Sunnah</strong>
              <p className="mt-1">
                Menganggap ajaran Islam tidak relevan dengan perkembangan zaman.
              </p>
            </li>
            <li>
              <strong>Menanamkan Gaya Hidup Negatif</strong>
              <p className="mt-1">
                Mengubah pola hidup masyarakat menjadi materialistis dan
                individualistis.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: Bentuk-Bentuk Ghozwatul Fikri
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Perang pemikiran dapat muncul dalam berbagai bentuk.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Melalui Media Massa</strong>
              <p className="mt-1">
                Informasi yang disebarkan dapat memengaruhi opini dan pola pikir
                masyarakat.
              </p>
            </li>
            <li>
              <strong>Melalui Media Sosial</strong>
              <p className="mt-1">
                Konten yang tidak sesuai dengan nilai Islam dapat dengan mudah
                menyebar.
              </p>
            </li>
            <li>
              <strong>Melalui Budaya</strong>
              <p className="mt-1">
                Masuknya budaya asing yang bertentangan dengan ajaran Islam.
              </p>
            </li>
            <li>
              <strong>Melalui Pendidikan</strong>
              <p className="mt-1">
                Penyebaran pemikiran yang menjauhkan manusia dari nilai-nilai
                agama.
              </p>
            </li>
            <li>
              <strong>Melalui Hiburan</strong>
              <p className="mt-1">
                Film, musik, dan konten digital yang dapat memengaruhi perilaku
                dan pola hidup.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: Dampak Ghozwatul Fikri
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Apabila tidak disikapi dengan bijak, perang pemikiran dapat
            menimbulkan berbagai dampak.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Dampak terhadap Individu
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Lemahnya keimanan.</li>
            <li>Krisis identitas.</li>
            <li>Menurunnya akhlak.</li>
            <li>Kurangnya kepedulian terhadap agama.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Dampak terhadap Masyarakat
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menurunnya moral sosial.</li>
            <li>Meningkatnya konflik nilai.</li>
            <li>Pudarnya budaya Islami.</li>
            <li>Meningkatnya perilaku menyimpang.</li>
          </ul>

          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Dan janganlah kamu mengikuti apa yang kamu tidak mempunyai
            pengetahuan tentangnya."
            <span className="block text-sm mt-2 font-medium text-right text-amber-600">
              (QS. Al-Isra': 36)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: Cara Menghadapi Ghozwatul Fikri
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Sebagai seorang muslim, terdapat beberapa langkah yang dapat
            dilakukan untuk menghadapi perang pemikiran.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Memperkuat Akidah</strong>
              <p className="mt-1">
                Menjadikan Al-Qur'an dan Sunnah sebagai pedoman hidup.
              </p>
            </li>
            <li>
              <strong>Menuntut Ilmu</strong>
              <p className="mt-1">
                Memahami ajaran Islam secara benar dan mendalam.
              </p>
            </li>
          </ol>

          <p className="mt-4 text-base text-gray-700">
            Rasulullah SAW bersabda:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Menuntut ilmu itu wajib bagi setiap muslim."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Ibnu Majah)
            </span>
          </blockquote>

          <ol
            className="list-decimal ml-8 text-lg space-y-3 text-gray-800"
            start={3}
          >
            <li>
              <strong>Bersikap Kritis terhadap Informasi</strong>
              <p className="mt-1">
                Tidak mudah percaya terhadap berita atau informasi yang belum
                jelas kebenarannya.
              </p>
            </li>
            <li>
              <strong>Memilih Lingkungan yang Baik</strong>
              <p className="mt-1">
                Bergaul dengan orang-orang yang dapat memberikan pengaruh
                positif.
              </p>
            </li>
            <li>
              <strong>Memanfaatkan Teknologi Secara Bijak</strong>
              <p className="mt-1">
                Menggunakan internet dan media sosial untuk hal-hal yang
                bermanfaat.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: Peran Mahasiswa dalam Menghadapi Ghozwatul Fikri
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Mahasiswa memiliki peran penting dalam menghadapi perang pemikiran.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Sebagai Agen Perubahan</strong>
              <p className="mt-1">
                Mahasiswa harus menjadi pelopor perubahan yang positif.
              </p>
            </li>
            <li>
              <strong>Sebagai Kaum Intelektual</strong>
              <p className="mt-1">
                Mahasiswa dituntut berpikir kritis tanpa meninggalkan
                nilai-nilai agama.
              </p>
            </li>
            <li>
              <strong>Sebagai Teladan</strong>
              <p className="mt-1">
                Mahasiswa harus menunjukkan perilaku yang mencerminkan akhlak
                Islam.
              </p>
            </li>
            <li>
              <strong>Sebagai Penyebar Kebaikan</strong>
              <p className="mt-1">
                Memanfaatkan teknologi dan media sosial untuk menyebarkan ilmu
                dan nilai positif.
              </p>
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: Hikmah Memahami Ghozwatul Fikri
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Dengan memahami Ghozwatul Fikri, seseorang akan:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Lebih waspada terhadap pengaruh negatif.</li>
            <li>Memiliki akidah yang lebih kuat.</li>
            <li>Mampu menyaring informasi dengan baik.</li>
            <li>Menjaga identitas keislaman.</li>
            <li>Menggunakan teknologi secara bijak.</li>
            <li>Menjadi pribadi yang kritis dan berakhlak.</li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Ghozwatul Fikri merupakan perang pemikiran yang bertujuan
            memengaruhi cara pandang dan perilaku manusia melalui berbagai media
            serta sarana modern. Tantangan ini harus dihadapi dengan memperkuat
            keimanan, memperdalam ilmu agama, serta meningkatkan kemampuan
            berpikir kritis.
            <br />
            <br />
            Sebagai generasi penerus, mahasiswa memiliki tanggung jawab untuk
            menjaga nilai-nilai Islam di tengah perkembangan zaman. Dengan
            menjadikan Al-Qur'an dan Sunnah sebagai pedoman, umat Islam dapat
            menghadapi berbagai pengaruh negatif tanpa kehilangan identitas dan
            akidahnya.
            <br />
            <br />
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            "Hai orang-orang yang beriman, jika kamu menolong (agama) Allah,
            niscaya Dia akan menolongmu dan meneguhkan kedudukanmu."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Muhammad: 7)
            </span>
          </blockquote>
        </SectionContainer>

        <div className="mt-20 text-center">
          <Link
            href="/#materi-overview-section"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-300"
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
