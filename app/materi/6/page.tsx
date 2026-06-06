// app/materi/6/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi6Page() {
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
          Materi Pertemuan 6: <br /> Syaithan dan Iblis
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Dalam kehidupan manusia terdapat dua jalan yang selalu saling
            berlawanan, yaitu jalan kebenaran dan jalan kesesatan. Allah SWT
            memberikan petunjuk melalui para nabi dan kitab-kitab-Nya agar
            manusia dapat menempuh jalan yang benar. Namun di sisi lain,
            terdapat musuh yang senantiasa berusaha menyesatkan manusia, yaitu
            Iblis dan setan.
          </p>
          <p className="mt-4">
            Iblis dan setan merupakan musuh nyata bagi manusia yang selalu
            berusaha menggoda, membisikkan keburukan, dan menjauhkan manusia
            dari ketaatan kepada Allah SWT. Oleh karena itu, setiap muslim harus
            memahami hakikat Iblis dan setan agar mampu melindungi diri dari
            tipu dayanya.
          </p>
          <p className="mt-4">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            "Sesungguhnya setan itu adalah musuh bagimu, maka jadikanlah ia
            musuh(mu)."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Fatir: 6)
            </span>
          </blockquote>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: Pengertian Iblis dan Setan
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            Pengertian Iblis
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Iblis adalah makhluk yang diciptakan Allah dari api dan menjadi
            makhluk pertama yang membangkang terhadap perintah Allah untuk
            bersujud kepada Nabi Adam AS.
          </p>
          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            "Ia (Iblis) berkata: Aku lebih baik daripadanya. Engkau ciptakan aku
            dari api sedangkan dia Engkau ciptakan dari tanah."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-A'raf: 12)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Kesombongan inilah yang menyebabkan Iblis diusir dari rahmat Allah.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Pengertian Setan
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Setan adalah setiap makhluk yang membangkang kepada Allah dan
            mengajak kepada keburukan.
            <br />
            <br />
            Setan tidak hanya berasal dari golongan jin, tetapi juga dapat
            berasal dari manusia yang mengajak kepada kesesatan.
          </p>
          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Demikianlah Kami jadikan bagi tiap-tiap nabi itu musuh, yaitu
            setan-setan dari jenis manusia dan jin."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-An'am: 112)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: Asal Mula Permusuhan Iblis terhadap Manusia
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Ketika Allah menciptakan Nabi Adam AS dan memerintahkan para
            malaikat untuk bersujud sebagai bentuk penghormatan, seluruh
            malaikat patuh kecuali Iblis.
            <br />
            <br />
            Kesombongan membuat Iblis menolak perintah Allah.
            <br />
            <br />
            Karena pembangkangannya, Iblis dikutuk dan berjanji akan menyesatkan
            manusia hingga hari kiamat.
          </p>
          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            "Aku benar-benar akan menyesatkan mereka semuanya."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-Hijr: 39)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Sejak saat itu Iblis menjadi musuh abadi manusia.
          </p>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: Cara Setan Menggoda Manusia
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Setan memiliki berbagai cara untuk menyesatkan manusia.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Membisikkan Kejahatan</strong>
              <p className="mt-1">
                Setan menanamkan pikiran negatif dan dorongan untuk melakukan
                dosa.
              </p>
            </li>
            <li>
              <strong>Menghiasi Kemaksiatan</strong>
              <p className="mt-1">
                Perbuatan buruk dibuat terlihat indah dan menarik.
              </p>
            </li>
            <li>
              <strong>Menunda Kebaikan</strong>
              <p className="mt-1">
                Setan membuat manusia malas beribadah dan menunda amal saleh.
              </p>
            </li>
            <li>
              <strong>Menumbuhkan Kesombongan</strong>
              <p className="mt-1">
                Kesombongan merupakan sifat pertama yang menyebabkan Iblis
                celaka.
              </p>
            </li>
            <li>
              <strong>Menimbulkan Keraguan</strong>
              <p className="mt-1">
                Setan berusaha menanamkan keraguan terhadap agama dan kebenaran.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: Bentuk Tipu Daya Setan di Era Modern
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Di zaman modern, godaan setan dapat muncul melalui berbagai sarana.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Media Sosial</strong>
              <p className="mt-1">
                Penyebaran fitnah, hoaks, ujaran kebencian, dan konten negatif.
              </p>
            </li>
            <li>
              <strong>Pergaulan Bebas</strong>
              <p className="mt-1">
                Lingkungan yang menjauhkan manusia dari nilai-nilai agama.
              </p>
            </li>
            <li>
              <strong>Gaya Hidup Hedonis</strong>
              <p className="mt-1">
                Mementingkan kesenangan dunia secara berlebihan.
              </p>
            </li>
            <li>
              <strong>Kemalasan Beribadah</strong>
              <p className="mt-1">
                Terlalu sibuk dengan urusan dunia hingga melupakan kewajiban
                kepada Allah.
              </p>
            </li>
            <li>
              <strong>Penyalahgunaan Teknologi</strong>
              <p className="mt-1">
                Menggunakan teknologi untuk hal-hal yang merugikan diri sendiri
                dan orang lain.
              </p>
            </li>
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
            BAGIAN V: Cara Melindungi Diri dari Godaan Setan
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam mengajarkan berbagai cara untuk melindungi diri dari godaan
            setan.
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Memperkuat Iman</strong>
              <p className="mt-1">
                Iman yang kuat akan menjadi benteng utama menghadapi godaan.
              </p>
            </li>
            <li>
              <strong>Membaca Al-Qur'an</strong>
              <p className="mt-1">
                Al-Qur'an merupakan petunjuk dan pelindung bagi orang beriman.
              </p>
            </li>
            <li>
              <strong>Berdzikir kepada Allah</strong>
              <p className="mt-1">
                Dzikir dapat menjauhkan manusia dari bisikan setan.
              </p>
            </li>
          </ol>

          <p className="mt-4 text-base text-gray-700">Allah SWT berfirman:</p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            "Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram."
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Ar-Ra'd: 28)
            </span>
          </blockquote>

          <ol
            className="list-decimal ml-8 text-lg space-y-3 text-gray-800"
            start={4}
          >
            <li>
              <strong>Memohon Perlindungan kepada Allah</strong>
              <p className="mt-1">
                Membaca ta'awudz:
                <br />
                `A'udzu billahi minasy-syaithanir rajim`
                <br />
                "Aku berlindung kepada Allah dari setan yang terkutuk."
              </p>
            </li>
            <li>
              <strong>Memilih Lingkungan yang Baik</strong>
              <p className="mt-1">
                Bergaul dengan orang-orang saleh dapat membantu menjaga
                keimanan.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: Pelajaran dari Kisah Iblis
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Kisah Iblis memberikan banyak pelajaran berharga.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Bahaya Kesombongan</strong>
              <p className="mt-1">Kesombongan dapat menghancurkan seseorang.</p>
            </li>
            <li>
              <strong>Pentingnya Ketaatan</strong>
              <p className="mt-1">
                Perintah Allah harus dilaksanakan tanpa membangkang.
              </p>
            </li>
            <li>
              <strong>Bahaya Mengikuti Hawa Nafsu</strong>
              <p className="mt-1">
                Hawa nafsu yang tidak terkendali dapat menjerumuskan manusia.
              </p>
            </li>
            <li>
              <strong>Pentingnya Kerendahan Hati</strong>
              <p className="mt-1">
                Manusia harus selalu bersikap rendah hati dan bersyukur kepada
                Allah.
              </p>
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: Hikmah Memahami Syaithan dan Iblis
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Dengan memahami hakikat Iblis dan setan, seorang muslim akan:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Lebih waspada terhadap godaan.</li>
            <li>Memiliki keimanan yang lebih kuat.</li>
            <li>Menjaga diri dari perbuatan maksiat.</li>
            <li>Lebih rajin beribadah.</li>
            <li>Meningkatkan kedekatan kepada Allah SWT.</li>
            <li>Memiliki akhlak yang lebih baik.</li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Iblis dan setan merupakan musuh nyata manusia yang selalu berusaha
            menyesatkan dan menjauhkan manusia dari jalan Allah. Berbagai tipu
            daya dilakukan melalui bisikan, godaan, dan pengaruh lingkungan yang
            buruk.
            <br />
            <br />
            Sebagai seorang muslim, kita harus memperkuat iman, memperbanyak
            ibadah, membaca Al-Qur'an, berdzikir, serta senantiasa memohon
            perlindungan kepada Allah SWT agar terhindar dari godaan setan.
            <br />
            <br />
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            "Sesungguhnya hamba-hamba-Ku, engkau (setan) tidak akan dapat
            berkuasa atas mereka."
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-Hijr: 42)
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
