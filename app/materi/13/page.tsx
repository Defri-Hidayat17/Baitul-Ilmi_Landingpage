// app/materi/13/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi13Page() {
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
          Materi Pertemuan 13: <br /> Manajemen Kematian 2
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Materi ini membahas secara aplikatif, komprehensif, dan legal-formal
            mengenai tata laksana fikih jenazah. Jika pada materi sebelumnya
            (Manajemen Kematian 1) fokus ditekankan pada kesadaran eksistensial,
            maka pada materi ini fokus diarahkan pada implementasi kewajiban
            hukum kolektif (fardhu kifayah) yang mengikat umat Islam ketika
            terjadi kematian publik. Kajian ini mencakup definisi yuridis,
            konteks historis, dalil-dalil otoritatif, struktur kewajiban,
            komparasi lintas madzhab, dimensi spiritual, analisis kebahasaan,
            parameter teknis pelaksanaan, tindakan terlarang, serta implikasi
            sosiologis dan filosofisnya.
          </p>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: DEFINISI DAN HAK HUKUM PASCA-KEMATIAN
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Dalam sistem hukum Islam (syariat), peristiwa kematian seorang
            Muslim secara otomatis mengaktifkan serangkaian hak hukum yang wajib
            dipenuhi oleh komunitas Muslim yang masih hidup di sekitarnya.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Secara terminologi fikih:
          </p>
          <p className="mb-4 text-lg leading-relaxed italic">
            Tata laksana jenazah adalah serangkaian prosesi perawatan fisik dan
            penghormatan spiritual terhadap jasad seorang Muslim pasca-kematian,
            yang meliputi empat pilar utama: memandikan (al-ghusl), mengkafani
            (at-takfin), menshalati (as-shalah), dan menguburkan (ad-dafn).
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Status hukum dari empat aktivitas ini adalah Fardhu Kifayah.
            Artinya, kewajiban ini dibebankan kepada seluruh komunitas di
            wilayah tersebut; jika ada sebagian orang yang melaksanakannya
            dengan benar, maka gugurlah dosa seluruh komunitas. Namun, jika
            diabaikan sama sekali, maka seluruh Muslim di wilayah tersebut
            menanggung dosa kolektif.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Dalil esensial dari hak seorang Muslim:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            <p className="font-arabic text-right text-2xl">
              حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ خَمْسٌ: رَدُّ السَّلاَمِ،
              وَعِيَادَةُ الْمَرِيضِ، وَاتِّبَاعُ الْجَنَائِزِ، وَإِجَابَةُ
              الدَّعْوَةِ، وَتَشْمِيتُ الْعَاطِسِ
            </p>
            <p className="mt-4">
              “Hak seorang muslim atas muslim lainnya ada lima: menjawab salam,
              menjenguk yang sakit, mengantarkan jenazah (mengurusnya), memenuhi
              undangan, dan mendoakan yang bersin.”
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Sahih Bukhari dan Sahih Muslim)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: KONTEKS HISTORIS DAN REVOLUSI ADAB JENAZAH
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            1. Praktis Pemakaman Pra-Islam (Jahiliyah)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Kultus Individu dan Diskriminasi:</strong> Pada masa Arab
              Jahiliyah, pengurusan mayat sangat bergantung pada status sosial
              dan klan. Jenazah para bangsawan diurus dengan upacara kemewahan
              ekstrem, pembunuhan hewan ternak di atas kuburan, dan pendirian
              monumen megah. Sebaliknya, jenazah orang miskin, budak, atau
              wanita sering kali dikuburkan secara asal tanpa penghormatan
              moral.
            </li>
            <li>
              <strong>Profan dan Tidak Suci:</strong> Tubuh mayat dianggap
              sebagai barang buangan yang menakutkan dan kotor secara mutlak,
              bukan sebagai subjek hukum yang suci dan harus dijaga
              kehormatannya.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            2. Standardisasi Egaliter oleh Rasulullah ﷺ
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Prinsip Kesetaraan Raja dan Budak:</strong> Islam
              merevolusi tata cara ini dengan menetapkan satu standar protokol
              yang sama untuk semua manusia. Kain kafan yang digunakan sama-sama
              putih polos (tanpa melihat status kekayaan sewaktu hidup),
              dishalati dengan saf yang sama, dan dikuburkan di dalam tanah yang
              setara.
            </li>
            <li>
              <strong>Penghormatan Fisik Tetap Berlaku:</strong> Rasulullah ﷺ
              menegaskan bahwa kesucian fisik seorang Muslim tidak hilang karena
              kematian. Beliau bersabda: "Mematahkan tulang mayat seorang mukmin
              sama halnya dengan mematahkan tulangnya ketika ia masih hidup."
              (HR. Abu Dawud).
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: DALIL-DALIL OTORITATIF TATA LAKSANA JENAZAH
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            Dalil Memandikan dan Mengkafani
          </h3>
          <h4 className="text-xl font-medium mb-2 text-gray-700">
            Hadits tentang Kematian Putri Nabi (Zainab/Ummu Kultsum):
          </h4>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              اغْسِلْنَهَا ثَلاَثًا أَوْ خَمْسًا أَوْ أَكْثَرَ مِنْ ذَلِكَ إِنْ
              رَأَيْتُنَّ ذَلِكَ بِمَاءٍ وَسِدْرٍ... وَكَفِّنَّهَا فِي ثَلاَثَةِ
              أَثْوَابٍ
            </p>
            <p className="mt-4">
              “Mandikanlah ia tiga kali, lima kali, atau lebih dari itu jika
              kalian menggapnya perlu, dengan air dan daun bidara... dan
              kafanilah ia dengan tiga helai kain.”
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Sahih Bukhari)
            </span>
          </blockquote>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Dalil Menshalati dan Menguburkan
          </h3>
          <h4 className="text-xl font-medium mb-2 text-gray-700">
            QS. At-Taubah: 84
          </h4>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            <p className="font-arabic text-right text-2xl">
              وَلَا تُصَلِّ عَلَىٰ أَحَدٍ مِنْهُمْ مَاتَ أَبَدًا وَلَا تَقُمْ
              عَلَىٰ قَبْرِهِ ۖ إِنَّهُمْ كَفَرُوا بِاللَّهِ وَرَسُولِهِ...
            </p>
            <p className="mt-2 text-base">
              Wa la tushalli 'ala ahadim minhum mata abadan wa la taqum 'ala
              qabrihi, innahum kafaru billahi wa rasulihi...
            </p>
            <p className="mt-4">
              “Dan janganlah engkau (Muhammad) menshalati seorang pun yang mati
              di antara mereka (orang munafik) selama-lamanya dan janganlah
              engkau berdiri di atas kuburnya. Sesungguhnya mereka telah kafir
              kepada Allah dan Rasul-Nya...”
            </p>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: STRUKTUR TEOLOGIS JIRAN DAN KEWAKILAN KOLEKTIF
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Secara teologis, Fardhu Kifayah dalam pengurusan jenazah memuat
            pesan teologi sosial yang mendalam:
          </p>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>
                Ukhuwah Lintas Hayat (Persaudaraan Melampaui Batas Hidup):
              </strong>{" "}
              Ikatan akidah (habluminallah) mengikat sesama Muslim sedemikian
              rupa sehingga ketika seseorang kehilangan kemampuan fisik akibat
              kematian, komunitasnya wajib mengambil alih hak-hak fisiknya.
            </li>
            <li>
              <strong>As-Satr (Prinsip Menutup Aib):</strong> Prosesi pengurusan
              jenazah dibangun di atas teologi penutupan aib. Orang yang
              memandikan dilarang keras membocorkan cacat fisik mayat yang
              dilihatnya selama proses pemandian kepada publik, sebagai
              manifestasi sifat Allah As-Sittir (Maha Menutup Aib).
            </li>
            <li>
              <strong>Syafa'ah Jama'ah (Syafaat Kolektif):</strong> Shalat
              jenazah secara teologis berfungsi sebagai forum mediasi massal di
              mana orang-orang hidup memohon ampunan kepada Allah untuk
              dosa-dosa orang yang wafat.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: KOMPARASI KETENTUAN 4 MADZHAB FIKIH
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Empat madzhab menyepakati rukun dasar fardhu kifayah, namun memiliki
            perbedaan aksentuasi pada detail teknis aplikasi:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            1. Madzhab Hanafi
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Shalat Jenazah:</strong> Di dalam Madzhab Hanafi, tidak
              ada kewajiban membaca Surat Al-Fatihah di dalam shalat jenazah
              secara khusus sebagai rukun bacaan, melainkan yang dibaca adalah
              sanjungan (tsana') kepada Allah, shalawat, dan doa untuk mayat.
              Al-Fatihah hanya dibaca jika diniatkan sebagai doa/pujian, bukan
              sebagai tilawah.
            </li>
            <li>
              <strong>Memandikan:</strong> Jika seorang suami meninggal, istri
              boleh memandikannya. Namun jika istri meninggal, suami tidak boleh
              memandikan mantan istrinya secara langsung karena menganggap
              ikatan pernikahan telah putus seiring kematian
              (inqitha'ul-zaujiyah).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            2. Madzhab Maliki
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Posisi Imam:</strong> Saat menshalati jenazah laki-laki
              maupun perempuan, posisi imam berdiri tepat di searah bagian
              tengah tubuh jenazah (pusar/dada).
            </li>
            <li>
              <strong>Tata Cara Menguburkan:</strong> Disunnahkan meletakkan
              jenazah di dalam kubur dengan posisi miring ke kanan dan wajah
              menghadap langsung ke arah kiblat, tanpa perlu melepas atau
              membuka simpul tali kafan di bagian wajah di dalam liang lahat.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            3. Madzhab Syafi'i
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Posisi Imam yang Presisi:</strong> Imam berdiri di searah
              kepala jenazah jika jenazahnya laki-laki, dan berdiri di searah
              pinggul/pantat jika jenazahnya perempuan.
            </li>
            <li>
              <strong>Rukun Shalat Jenazah:</strong> Tegas menetapkan 7 rukun,
              termasuk membaca Al-Fatihah setelah takbir pertama sebagai rukun
              wajib mutlak berdasarkan keumuman hadits "Tidak sah shalat bagi
              yang tidak membaca Fatihatul Kitab". Simpul tali kafan di bagian
              wajah wajib dibuka saat di liang lahat agar pipi jenazah menempel
              langsung pada tanah (tadhji').
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            4. Madzhab Hanbali
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Persyaratan Shalat:</strong> Shalat jenazah dinilai batal
              dan tidak sah jika dilakukan di area pemakaman secara sengaja,
              kecuali bagi orang yang tertinggal shalat jenazah sebelum jenazah
              tersebut dikuburkan (shalat di atas kubur).
            </li>
            <li>
              <strong>Memandikan Campuran:</strong> Suami dan istri diizinkan
              secara sah dan saling membolehkan untuk memandikan satu sama lain
              jika salah satunya wafat, karena efek sisa ikatan pernikahan masih
              diakui secara syar'i.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: DIMENSI SPIRITUAL DAN ADAB PETUGAS JENAZAH
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Mengurus jenazah bukan sekadar keterampilan mekanis-biologis,
            melainkan sebuah makam tarbiyah spiritual yang tinggi bagi
            pelaksananya.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Syarat Utama Modulator (Pemandikan):</strong> Petugas yang
              memandikan jenazah disyaratkan merupakan orang yang amanah (amin)
              dan bertaqwa. Rasulullah ﷺ menjanjikan pahala pembersihan dosa
              bagi mereka yang menutupi aib mayat: "Barangsiapa memandikan mayat
              lalu dia menyembunyikan (aibnya), maka Allah akan mengampuninya
              sebanyak empat puluh kali." (HR. Al-Hakim).
            </li>
            <li>
              <strong>Keheningan Spiritual (As-Samt):</strong> Adab saat
              mengiringi jenazah menuju pemakaman adalah menjaga keheningan,
              bertafakur, dan dilarang keras bersuara keras, tertawa, atau
              membicarakan urusan bisnis duniawi (al-laghwu). Kehadiran di
              pemakaman bertujuan untuk menyerap pelajaran akhirat.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: KAJIAN NAHWU-SHARAF PADA TERMINOLOGI JENAZAH
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            1. Analisis Kata "Janazah" (جَنَازَة) vs "Jinazah" (جِنَازَة)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Analisis Sharaf:</strong> Kata ini merupakan bentuk isim
              yang memiliki dua dialek vokal bacaan (lughah). Jika dibaca dengan
              fathah pada huruf jim—Janazah (جَنَازَة)—maka secara bahasa ia
              merujuk kepada mayat/jasad manusia itu sendiri. Jika dibaca dengan
              kasrah—Jinazah (جِنَازَة)—maka secara bahasa ia merujuk kepada
              keranda/peti atau alat pemikul mayat tersebut.
            </li>
            <li>
              <strong>Akar Kata:</strong> Diambil dari akar kata Ja-Na-Za
              (جَنَزَ) yang bermakna menyembunyikan atau mengumpulkan.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            2. Analisis Struktur "Fardhu Kifayah" (فَرْضُ كِفَايَةٍ)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Analisis Nahwu:</strong> Kata Fardhu (فَرْضُ) berkedudukan
              sebagai Mudhaf, dan kata Kifayah (كِفَايَةٍ) berkedudukan sebagai
              Mudhaf Ilaih yang majrur dengan kasrah.
            </li>
            <li>
              <strong>Makna Semantik:</strong> Kata Kifayah diambil dari
              Kafa-Yakfi (كَفَى - يَكْفِي) yang berarti "mencukupi". Struktur
              ini menunjukkan makna sintaksis bahwa kewajiban tersebut
              berorientasi pada ketercapaian hasil/tindakan (kecukupan tindakan
              hingga masalah selesai), bukan pada kuantitas pelaku (setiap
              individu). Jika tindakan perawatan jasad sudah tercukupi oleh
              sebagian orang, tuntutan hukum dari Syari' (Allah) telah
              terpenuhi.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VIII */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VIII: PARAMETER DAN PROTOKOL TEKNIS 4 PILAR FIKIH
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Aplikasi praktis fardhu kifayah wajib mengikuti standar operasional
            syariat sebagai berikut:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            1. Memandikan (Al-Ghusl)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Kondisi Tempat:</strong> Tertutup dari pandangan publik,
              hanya dihadiri petugas dan keluarga terdekat. Aurat mayat wajib
              tetap ditutup dengan kain basahan.
            </li>
            <li>
              <strong>Prosedur:</strong> Mayat didudukan agak condong ke
              belakang, ditekan perutnya dengan lembut untuk mengeluarkan
              kotoran yang tersisa. Bagian-bagian wudhu dibersihkan terlebih
              dahulu (diwudhukan), kemudian seluruh tubuh disiram dengan air
              bersih yang dicampur daun bidara/sabun, diakhiri dengan siraman
              air yang dicampur sedikit kapur barus dari sisi kanan ke kiri.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            2. Mengkafani (At-Takfin)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Laki-laki:</strong> Disunnahkan menggunakan 3 helai kain
              putih polos tanpa jahitan, tanpa baju, dan tanpa sorban.
            </li>
            <li>
              <strong>Perempuan:</strong> Disunnahkan menggunakan 5 bagian kain:
              kain basahan (menutup pusar-lutut), baju kurung, kerudung kepala,
              dan 2 helai kain penutup luar yang membungkus seluruh tubuh.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            3. Menshalati (As-Shalah)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Struktur Rukun:</strong> Dilakukan berdiri (bagi yang
              mampu) dengan 4 kali takbir tanpa ruku' dan sujud.
            </li>
            <li>
              <strong>Takbir 1:</strong> Membaca Al-Fatihah.
            </li>
            <li>
              <strong>Takbir 2:</strong> Membaca Shalawat Nabi.
            </li>
            <li>
              <strong>Takbir 3:</strong> Membaca Doa Khusus untuk Jenazah
              (Allahummaghfir lahu...).
            </li>
            <li>
              <strong>Takbir 4:</strong> Membaca doa untuk keluarga/kaum
              muslimin, diakhiri dengan salam.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            4. Menguburkan (Ad-Dfn)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Kedalaman Lubang:</strong> Setinggi dada orang dewasa
              ditambah lambaian tangan ke atas, guna mencegah bau busuk keluar
              dan mencegah pembongkaran oleh binatang buas.
            </li>
            <li>
              <strong>Bentuk Liang:</strong> Disunnahkan membuat Liang Lahad
              (ceruk di dinding bawah kubur sebelah kiblat) jika tanahnya keras,
              atau Liang Syaq (parit di tengah dasar kubur) jika tanahnya
              gembur/berpasir. Jenazah dimiringkan ke kanan menghadap kiblat,
              diganjal tanah, tali pengikat dibuka, lalu lubang ditutup papan
              dan ditimbun tanah setinggi satu jengkal.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN IX */}
        <SectionContainer index={8}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN IX: PEMBATAL ADAB DAN LARANGAN (TINDAKAN DESTRUKTIF)
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dalam mengurus jenazah, terdapat batasan hukum yang jika dilanggar
            dapat membatalkan adab dan melahirkan dosa syariat:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Niyahah dan Meratap:</strong> Menangis histeris, menjerit,
              memukul dada, atau mengucapkan kalimat yang menggugat takdir Allah
              (batalnya sabar). Menangis yang wajar karena sedih (tanpa suara
              ratapan) diperbolehkan.
            </li>
            <li>
              <strong>Menghias Kuburan Secara Berlebihan (Tajshish):</strong>
              Membangun tembok megah, memasang keramik mewah, atau mendirikan
              bangunan di atas kuburan publik yang dapat mempersempit lahan bagi
              muslim lainnya. Rasulullah ﷺ melarang keras menyemen kuburan (HR.
              Muslim).
            </li>
            <li>
              <strong>Membakar Kemenyan/Sajen Khurafat:</strong> Mengaitkan
              ritual kematian dengan pemberian sesajen untuk ruh atau
              mempercayai sialnya hari kematian tertentu.
            </li>
            <li>
              <strong>Melambatkan Pemakaman Tanpa Uzur:</strong> Sengaja menunda
              pemakaman hingga berhari-hari hanya untuk menunggu seremonial
              kemewahan duniawi, bertentangan dengan perintah Asra'u bil Janazah
              (Segerakanlah urusan jenazah).
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN X */}
        <SectionContainer index={9}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN X: IMPLIKASI SOSIAL DAN KESETARAAN KOMUNITAS
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Aplikasi praktis fikih jenazah merupakan instrumen sosiologis yang
            sangat kuat dalam menjaga stabilitas spiritual dan psikologis
            masyarakat:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Penghancuran Kasta Sosial:</strong> Kain kafan putih tanpa
              saku membuktikan kepada masyarakat awam bahwa kekayaan, jabatan,
              dan status sosial tidak memiliki nilai fungsional di hadapan
              kematian. Hal ini memperkuat solidaritas kemanusiaan.
            </li>
            <li>
              <strong>Kolektivisme Pengurangan Beban:</strong> Ketika sebuah
              keluarga tertimpa musibah kematian, beban pengurusan diambil alih
              oleh tetangga melalui fardhu kifayah, disertai anjuran membuatkan
              makanan untuk keluarga mayat (Tazirah). Ini mempererat kohesi
              sosial masyarakat muslim.
            </li>
            <li>
              <strong>Katarsis Psikologis Publik:</strong> Prosesi melihat jasad
              dimandikan, dishalati bersama, dan dimasukkan ke dalam tanah
              bertindak sebagai terapi kejiwaan kolektif (psychological
              catharsis) yang mengingatkan orang hidup untuk menurunkan tensi
              konflik duniawi, permusuhan, dan keserakahan ekonomi di antara
              mereka.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN XI */}
        <SectionContainer index={10}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN XI: DIMENSI FILOSOFIS TATA LAKSANA JENAZAH
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Secara filosofis, empat tahapan fardhu kifayah mencerminkan siklus
            penghormatan Tuhan terhadap materi fisik manusia:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Filosofi Memandikan (Kesucian Asal):</strong> Manusia
              lahir ke dunia dalam keadaan suci dan bersih secara fisik melalui
              fitrah, maka ketika keluar dari dunia, ia harus dikembalikan dalam
              kondisi suci, wangi, dan bersih melalui proses pemandian syariat.
            </li>
            <li>
              <strong>Filosofi Mengkafani (Kesederhanaan Mutlak):</strong>
              Pelepasan seluruh pakaian berjahit dan atribut duniawi digantikan
              kain putih polos menegaskan filosofi As-Safar (perjalanan).
              Manusia kembali kepada esensi dasarnya sebagai hamba: tidak
              membawa apa pun kecuali selembar kain pembungkus dan iman.
            </li>
            <li>
              <strong>Filosofi Shalat (Solidaritas Eksistensial):</strong>{" "}
              Shalat tanpa ruku' dan sujud memposisikan jenazah bukan sebagai
              objek penyembahan, melainkan sebagai subjek yang sedang diantarkan
              oleh doa-doa kolektif. Ini membuktikan bahwa keselamatan seorang
              individu dalam Islam tidak berdiri sendiri, melainkan bertumpu
              pada syafaat dan ampunan bersama.
            </li>
            <li>
              <strong>Filosofi Mengubur (Kembali ke Asal):</strong> Tubuh
              manusia diciptakan dari tanah (minha khalaqnakum), hidup di atas
              tanah, dan secara filosofis harus didekatkan kembali ke rahim bumi
              (wa fiha nu'idukum) untuk menunggu fase kebangkitan berikutnya (wa
              minha nukhrijukum taratan ukhra). Tanah adalah simbol kerendahan
              hati yang mutlak.
            </li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN TOTAL */}
        <SectionContainer index={11}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN TOTAL
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Aplikasi praktis Fikih Jenazah (Manajemen Kematian 2) adalah:
          </p>
          <ul className="list-disc ml-8 text-xl space-y-3 text-gray-800">
            <li>
              Standardisasi tertinggi penghormatan hak asasi manusia dalam Islam
              dari hulu ke hilir.
            </li>
            <li>
              Manifestasi konkret hukum fardhu kifayah yang menjaga keseimbangan
              dosa dan pahala sebuah komunitas.
            </li>
            <li>
              Protokol egaliter yang menghapus sekat-sekat materi, kasta, dan
              kesombongan duniawi.
            </li>
            <li>
              Jembatan transisi fisik keduniawian menuju pengadilan ukhrawi yang
              dipenuhi doa kesaksian kaum mukminin.
            </li>
          </ul>
          <p className="mt-4 text-xl leading-relaxed text-gray-800">
            Mengurus jenazah bukan sekadar membersihkan jasad yang telah mati,
            melainkan ritual merawat kehidupan moral dan solidaritas sosial bagi
            mereka yang masih hidup.
          </p>
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
