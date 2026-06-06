// app/materi/12/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi12Page() {
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
          Materi Pertemuan 12: <br /> Manajemen Kematian 1 (Kesadaran
          Eksistensial)
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Materi ini membahas secara mendalam tentang sistem kesadaran
            eksistensial terhadap akhir kehidupan dunia. Kajian ini tidak
            dirancang untuk melahirkan kepasrahan atau keputusasaan, melainkan
            sebagai instrumen strategis untuk mengoptimalkan bekal kontribusi
            amal shalih, produktivitas, dan warisan kebaikan (legacy) selagi
            manusia masih hidup di dunia. Materi ini mencakup definisi esensial,
            konteks historis, dalil Al-Qur'an dan Hadits, struktur teologis,
            perspektif madzhab fikih, dimensi tasawuf, kajian nahwu-sharaf,
            manajemen prioritas, serta dimensi sosial, peradaban, dan
            filosofisnya.
          </p>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: DEFINISI DAN HAKIKAT MANAJEMEN KEMATIAN
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Dalam ekosistem pemikiran Islam, kematian (al-maut) bukan sekadar
            akhir biologis dari fungsi organ tubuh, melainkan sebuah gerbang
            transisi eksistensial dari alam fana (dunia) menuju alam baqa
            (akhirat).
          </p>
          <p className="mt-4 text-base text-gray-700">
            Secara terminologi syar'i dan strategis:
          </p>
          <p className="mb-4 text-lg leading-relaxed italic">
            Manajemen Kematian 1 adalah sebuah sistem pengelolaan kesadaran
            kognitif dan spiritual secara kontinu mengenai kepastian datangnya
            ajal, yang digunakan sebagai katalisator utama untuk mengendalikan
            hawa nafsu, mendongkrak produktivitas amal shalih, dan mematangkan
            persiapan bekal ukhrawi.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Dalil utama dari hakikat penciptaan hidup dan mati:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            <p className="font-arabic text-right text-2xl">
              الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ
              أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ
            </p>
            <p className="mt-4">
              “Yang menciptakan mati dan hidup, untuk menguji kamu, siapa di
              antara kamu yang lebih baik amalnya. Dan Dia Mahaperkasa, Maha
              Pengampun.”
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Mulk: 2)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: CONTEXT HISTORIS DAN TRADISI MENGINGAT KEMATIAN
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            1. Respons Peradaban Pra-Islam terhadap Kematian
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Tradisi Nihilisme Arab Jahiliyah:</strong> Masyarakat Arab
              pra-Islam memandang kehidupan secara materialistik dan fatalistik.
              Mereka percaya bahwa kematian adalah akhir mutlak yang didorong
              semata-mata oleh faktor waktu/alam (al-dahr). Pandangan ini
              diabadikan dalam Al-Qur'an: "Kehidupan ini tidak lain hanyalah
              kehidupan dunia kita, kita mati dan kita hidup dan tidak ada yang
              membinasakan kita selain masa" (QS. Al-Jasiyah: 24). Dampak dari
              pemikiran ini adalah gaya hidup hedonistik tanpa tanggung jawab
              moral ukhrawi.
            </li>
            <li>
              <strong>Niyahah (Ratapan Ekstrem):</strong> Karena menganggap
              kematian sebagai kerugian total, tradisi Jahiliyah melahirkan
              budaya meratap (niyahah) yang destruktif, menyewa jasa penyanyi
              ratapan, merobek baju, dan memukul wajah sebagai simbol penolakan
              terhadap takdir ajal.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            2. Revolusi Konsep Kematian oleh Rasulullah ﷺ
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Perubahan Paradigma:</strong> Islam datang mengubah
              ketakutan irasional terhadap kematian menjadi sebuah energi
              produktif. Rasulullah ﷺ menggeser fokus umat dari "meratapi
              kehilangan" menjadi "mempersiapkan kepulangan".
            </li>
            <li>
              <strong>Legalisasi Ziarah Kubur:</strong> Pada awal Islam, ziarah
              kubur dilarang karena kedekatan masyarakat dengan memori
              kesyirikan Jahiliyah. Namun setelah akidah umat matang, Rasulullah
              ﷺ bersabda: "Dahulu aku melarang kalian berziarah kubur, maka
              sekarang ziarahilah, karena sesungguhnya ziarah kubur itu dapat
              melunakkan hati, meneteskan air mata, dan mengingatkan pada
              akhirat." (HR. Al-Hakim).
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: DALIL-DALIL AL-QUR'AN
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            Dalil Kepastian dan Keniscayaan Ajal
          </h3>
          <h4 className="text-xl font-medium mb-2 text-gray-700">
            QS. Ali 'Imran: 185
          </h4>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ ۗ وَإِنَّمَا تُوَفَّوْنَ
              أُجُورَكُمْ يَوْمَ الْقِيَامَةِ...
            </p>
            <p className="mt-2 text-base">
              Kullu nafsin dza'iqatul-maut, wa innama tuwaffauna ujurakum
              yaumal-qiyamah...
            </p>
            <p className="mt-4">
              “Setiap yang bernyawa akan merasakan mati. Dan hanya pada hari
              Kiamat sajalah diberikan dengan sempurna balasanmu...”
            </p>
          </blockquote>

          <h4 className="text-xl font-medium mb-2 text-gray-700 mt-8">
            QS. Al-Jumu'ah: 8
          </h4>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            <p className="font-arabic text-right text-2xl">
              قُلْ إِنَّ الْمَوْتَ الَّذِي تَفِرُّونَ مِنْهُ فَإِنَّهُ
              مُلَاقِيكُمْ ۖ ثُمَّ تُرَدُّونَ إِلَىٰ عَالِمِ الْغَيْبِ
              وَالشَّهَادَةِ...
            </p>
            <p className="mt-2 text-base">
              Qul innal-mautal-ladzi tafirruna minhu fa-innahu mulaqikum, tsumma
              turadduna ila 'alimil-ghaibi wasy-syahadah...
            </p>
            <p className="mt-4">
              “Katakanlah, ‘Sesungguhnya kematian yang kamu lari daripadanya, ia
              pasti menemui kamu, kemudian kamu akan dikembalikan kepada
              (Allah), Yang Mengetahui yang gaib dan yang nyata...’”
            </p>
          </blockquote>

          <h4 className="text-xl font-medium mb-2 text-gray-700 mt-8">
            QS. Al-A'raf: 34
          </h4>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              وَلِكُلِّ أُمَّةٍ أَجَلٌ ۖ فَإِذَا جَاءَ أَجَلُهُمْ لَا
              يَسْتَأْخِرُونَ سَاعَةً ۖ وَلَا يَسْتَقْدِمُونَ
            </p>
            <p className="mt-2 text-base">
              Wa likulli ummatin ajalun, fa-idza ja'a ajaluhum la yasta'khiruna
              sa'atan wa la yastaqdimun.
            </p>
            <p className="mt-4">
              “Dan setiap umat mempunyai ajal (batas waktu). Apabila ajalnya
              tiba, mereka tidak dapat meminta penundaan sesaat pun dan tidak
              dapat (pula) meminta percepatan.”
            </p>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: STRUKTUR TEOLOGIS KESADARAN EKSISTENSIAL
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Mengingat kematian (dzikrul maut) diletakkan dalam struktur keimanan
            Islam sebagai pilar penegak rukun iman kelima, yaitu Iman kepada
            Hari Akhir. Kematian diistilahkan sebagai Al-Qiyamatush Shughra
            (Kiamat Kecil) bagi individu yang mengalaminya.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Struktur kesadaran ini dibangun di atas tiga pilar teologis:
          </p>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>As-Sa'ah (Ketidakpastian Waktu):</strong> Manusia
              diyakinkan secara mutlak bahwa kematian akan datang, namun
              waktunya dirahasiakan secara absolut. Ketidakpastian ini secara
              psikologis memaksa seorang mukmin untuk selalu berada dalam
              kondisi siaga spiritual (state of spiritual readiness) di setiap
              detik hidupnya.
            </li>
            <li>
              <strong>Al-Inqitha' (Putusnya Kesempatan):</strong> Kematian
              adalah batas akhir dari ruang ujian (Darul 'Amal). Begitu ajal
              tiba, pintu akumulasi pahala personal secara mandiri tertutup, dan
              manusia memasuki ruang pembalasan (Darul Jaza').
            </li>
            <li>
              <strong>Al-Mas'uliyah (Akuntabilitas Total):</strong> Kesadaran
              bahwa setiap sisa umur, harta, ilmu, dan kesehatan fisik akan
              dipertanggungjawabkan secara mendetail di hadapan Allah tanpa ada
              yang terlewat.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: PERSPEKTIF 4 MADZHAB FIKIH TERHADAP PREPARASI KEMATIAN
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Meskipun fikih kematian secara praktis dibahas dalam bab jenazah
            (Kitabul Janaiz), empat madzhab besar memberikan tuntunan
            preventif-legal terkait apa yang harus dipersiapkan manusia sebelum
            kematian menjemputnya:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            1. Madzhab Hanafi
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Wasiat dan Hutang:</strong> Menekankan kewajiban mutlak
              bagi seseorang yang memiliki tanda-tanda sakit menjelang kematian
              untuk segera melunasi hutang-hutang finansial, mengembalikan
              barang titipan (wadi'ah), serta menuliskan wasiat legal, khususnya
              jika memiliki kewajiban syariat yang tertunda (seperti zakat yang
              belum dibayar atau haji yang belum tertunaikan).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            2. Madzhab Maliki
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Makruh Angan-angan Kematian:</strong> Melarang atau
              memakruhkan seseorang mengharapkan kematian (tamannil maut) hanya
              karena tertimpa bencana duniawi (ekonomi atau fisik). Namun, jika
              ketakutan tersebut berbasis pada kekhawatiran rusaknya agama
              akibat fitnah zaman, maka hal tersebut diperbolehkan.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            3. Madzhab Syafi'i
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Anjuran Menulis Wasiat harian:</strong> Disunnahkan bagi
              setiap muslim yang sehat, dan menjadi wajib bagi yang memiliki
              tanggungan hak kemanusiaan (adami), untuk selalu memiliki catatan
              wasiat yang disimpan dengan rapi. Mengingat kematian dianjurkan
              dilakukan setiap hari, terutama saat hendak tidur malam yang
              diidentifikasi sebagai kembaran kematian (al-mautul-ashghar).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            4. Madzhab Hanbali
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Persiapan Kafan mandiri:</strong> Diperbolehkan dan
              dinilai baik jika seseorang mempersiapkan kain kafan miliknya
              sendiri sejak sehat dari harta yang paling halal, sebagai sarana
              visual untuk terus memupuk dzikrul maut dan menjauhkan diri dari
              kesombongan duniawi.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: DIMENSI TASAWUF: TINGKATAN KESADARAN AKAN MATI
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dalam ilmu thariqah dan tasawuf, manusia dibagi menjadi tiga
            tingkatan dalam merespons memori dan kesadaran akan kematian:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            Tingkat Pertama: Al-Munhamik (Orang yang Tenggelam dalam Dunia)
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Orang pada tingkat ini tidak suka mengingat kematian. Jika ia
            mengingatnya, ia mengingatnya dengan nada penyesalan karena kematian
            akan memisahkan dirinya dari kelezatan materi dunia. Mengingat
            kematian pada level ini belum melahirkan efisiensi amal.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Tingkat Kedua: Al-Muta'abbid (Ahli Ibadah yang Bertaubat)
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Orang pada tingkat ini sering mengingat kematian dengan tujuan
            melahirkan rasa takut (khauf) agar tidak menunda taubat. Ia merasa
            durasi hidupnya terlalu pendek untuk membersihkan dosa-dosanya. Ia
            cemas mati sebelum taubatnya diterima.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            Tingkat Ketiga: Al-'Arif (Orang yang Bijaksana/Makrifat)
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Orang pada tingkat tertinggi ini mengingat kematian sebagai momen
            pertemuan yang dinanti-nantikan dengan Kekasih Agung (Allah SWT).
            Bagi seorang 'arif, kematian adalah pembebasan ruh dari penjara
            fisik duniawi menuju keluasan perjumpaan ilahi. Ia selalu bersiap
            dan ridha kapan pun ajal menjemput.
          </p>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: KAJIAN NAHWU-SHARAF PADA ISTILAH MATI DAN HIDUP
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            1. Analisis Frasa "Dza'iqatul Maut" (ذَائِقَةُ الْمَوْتِ)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Analisis Sharaf:</strong> Kata Dza'iqah (ذَائِقَةُ) adalah
              bentuk Isim Fa'il (pelaku/subjek yang merasakan) dari fi'il
              tsulatsi mujarrad Dza-Qa (ذَاقَ) yang berarti "merasakan".
              Bentuknya menggunakan muannats (ta' marbuthah) karena bersandar
              pada kata Nafs (نَفْس) yang secara gramatikal Arab dihukumi
              muannats.
            </li>
            <li>
              <strong>Analisis Nahwu:</strong> Ditinjau dari susunan kalimat,
              Dza'iqatu berkedudukan sebagai Khabar dari Mubtada' (Kullu), dan
              ia berstatus sebagai Mudhaf, sedangkan Al-Maut berkedudukan
              sebagai Mudhaf Ilaih yang majrur dengan tanda kasrah. Penggunaan
              Isim Fa'il di sini memberikan makna Al-Istiqbal wal-Tsambut
              (kepastian yang kontinu), mengindikasikan bahwa setiap jiwa, tanpa
              terkecuali, sedang berada dalam proses berjalan menuju titik
              "merasakan" kematian tersebut.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            2. Analisis Kata "Al-Maut" (الْمَوْت) dan "Al-Hayah" (الْحَيَاة)
            dalam QS. Al-Mulk: 2
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Analisis Sharaf:</strong> Kata Al-Maut (الْمَوْت) adalah
              bentuk Masdar (kata benda abstrak) dari Mata-Yamutu (مَاتَ -
              يَمُوتُ).
            </li>
            <li>
              <strong>Analisis Retorika & Nahwu:</strong> Di dalam Al-Qur'an
              (seperti pada QS. Al-Mulk: 2), Allah mendahulukan penyebutan kata
              Al-Maut sebelum Al-Hayah (khalaqal-mauta wal-hayah). Secara kaidah
              balaghah, taqdim (mendahulukan penyebutan) berfungsi sebagai
              Al-Ihtimam (penegasan urgensi). Kematian didahulukan karena ia
              memiliki efek pencegahan (al-rad') yang lebih kuat terhadap
              kesombongan manusia daripada kehidupan, serta mengingatkan manusia
              pada kondisi asal mereka yang tiada sebelum dihidupkan.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VIII */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VIII: PARAMETER KECERDASAN EKSISTENSIAL (AL-KAYYIS)
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Rasulullah ﷺ memberikan standarisasi baku mengenai siapa manusia
            yang paling cerdas dalam mengelola kesadaran kematiannya melalui
            sebuah hadits legendaris:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              الْكَيِّسُ مَنْ دَانَ نَفْسَهُ وَعَمِلَ لِمَا بَعْدَ الْمَوْتِ
            </p>
            <p className="mt-4">
              “Orang yang cerdas (al-kayyis) adalah orang yang mampu
              mengendalikan dirinya dan beramal untuk kehidupan setelah
              kematian.”
            </p>
            <span className="block text-sm mt-3 font-medium text-right text-amber-600">
              (HR. Tirmidzi)
            </span>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Berdasarkan hadits ini, terdapat 4 indikator utama Manajemen
            Kematian yang sukses:
          </p>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Muhasabatun Nafsi (Evaluasi Diri Harian):</strong>
              Menghitung dosa dan kelalaian sebelum dihitung di hari kiamat.
            </li>
            <li>
              <strong>Kafsu 'anisy Syahawat (Penahanan Diri):</strong>
              Menggunakan rem darurat spiritual saat berhadapan dengan godaan
              maksiat.
            </li>
            <li>
              <strong>Inversion Thinking (Berpikir Terbalik):</strong>
              Merencanakan masa depan dengan cara menarik garis mundur dari hari
              kematian. "Jika saya mati besok, apa yang harus saya selesaikan
              hari ini?"
            </li>
            <li>
              <strong>Optimasi Amal Jariyah:</strong> Fokus pada investasi amal
              yang tidak terputus energinya meskipun tubuh telah hancur di liang
              lahat (ilmu bermanfaat, sedekah jariyah, anak shalih).
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN IX */}
        <SectionContainer index={8}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN IX: PEMBATAL KESADARAN EKSISTENSIAL (PENYAKIT WAHAAN)
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Kesadaran eksistensial terhadap kematian dapat melemah bahkan hancur
            total apabila manusia terjangkit penyakit spiritual kronis.
            Hambatan-hambatan tersebut meliputi:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Al-Wahan:</strong> Cinta dunia yang berlebihan
              (hubbud-dunya) disertai ketakutan dan kebencian mendalam terhadap
              kematian (karahiyatul-maut). Penyakit ini melumpuhkan imunitas
              mental umat.
            </li>
            <li>
              <strong>Thulul Amal (Panjang Angan-angan):</strong> Sebuah ilusi
              kognitif yang membuat seseorang merasa bahwa ajalnya masih sangat
              jauh di masa depan karena merasa masih muda, sehat, atau sukses,
              sehingga terus menunda taubat dan perbaikan diri.
            </li>
            <li>
              <strong>Qaswatul Qalb (Kerasnya Hati):</strong> Ketidakmampuan
              emosional untuk mengambil pelajaran ('ibrah) saat melihat jenazah,
              menghadiri pemakaman, atau melewati pemakaman, sehingga aktivitas
              tersebut dianggap rutinitas mekanis belaka.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN X */}
        <SectionContainer index={9}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN X: DIMENSI SOSIAL DAN PRODUKTIVITAS PERADABAN
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Sering kali muncul miskonsepsi bahwa mengingat kematian melahirkan
            sikap pasif dan kemunduran sosial. Islam justru membuktikan hal yang
            sebaliknya: Kesadaran kematian adalah mesin penggerak peradaban.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Etos Kerja Eksponensial:</strong> Mengingat kematian
              melahirkan prinsip kesegeran (urgency). Karena waktu hidup
              terbatas, seorang muslim dipacu untuk menyelesaikan proyek
              kebaikan dengan cepat, efisien, dan tanpa penundaan.
            </li>
            <li>
              <strong>Etika Sosial yang Adil:</strong> Kesadaran bahwa semua
              manusia akan kembali ke tanah tanpa membawa jabatan, pangkat, dan
              harta melahirkan masyarakat yang egaliter. Ini memitigasi perilaku
              koruptif, penindasan (zhulm), dan keserakahan sosial, karena
              pelaku sadar harta haram tidak akan muat di dalam kain kafan.
            </li>
            <li>
              <strong>Orientasi Legacy (Warisan Peradaban):</strong> Mengingat
              kematian mendorong para ulama, ilmuwan, dan arsitek muslim
              terdahulu untuk menulis kitab, mendirikan wakaf universitas, dan
              membangun fasilitas publik yang manfaatnya bertahan ratusan tahun,
              agar pahala mereka terus mengalir melintasi batas kematian
              biologis mereka.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN XI */}
        <SectionContainer index={10}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN XI: DIMENSI FILOSOFIS MANAJEMEN KEMATIAN
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Secara filosofis-eksistensial, kematian memegang peranan krusial
            dalam memberikan arti pada kehidupan dunia:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Pemberi Makna pada Waktu:</strong> Sesuatu yang tidak
              terbatas cenderung kehilangan nilainya. Jika kehidupan dunia
              bersifat abadi, maka setiap detik waktu menjadi tidak berharga.
              Kematian memberikan batasan kelangkaan (scarcity) pada waktu
              hidup, sehingga setiap tarikan nafas dan kesempatan berbuat baik
              bernilai tak terhingga.
            </li>
            <li>
              <strong>Solusi Problem Eksistensial Manusia:</strong> Kematian
              adalah penyeimbang ontologis. Ia meruntuhkan kesombongan mutlak
              manusia yang merasa bisa menguasai segalanya (thughyan), sekaligus
              menjadi penghibur bagi jiwa-jiwa yang tertindas di dunia bahwa
              keadilan absolut pasti akan ditegakkan di panggung berikutnya.
            </li>
            <li>
              <strong>Integrasi Kehidupan Kontinu:</strong> Filosofi Islam tidak
              melihat kematian sebagai kehancuran eksistensi (annihilation),
              melainkan sebagai proses metamorfosis ruh. Dunia adalah ladang
              tanam (mazra'atul akhirah), dan kematian hanyalah hari panen raya.
              Seseorang tidak akan bisa memanen tanpa berani melewati gerbang
              kematian.
            </li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN TOTAL */}
        <SectionContainer index={11}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN TOTAL
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Manajemen Kematian 1 (Kesadaran Eksistensial) adalah:
          </p>
          <ul className="list-disc ml-8 text-xl space-y-3 text-gray-800">
            <li>
              Fondasi utama manajemen waktu dan prioritas hidup seorang muslim.
            </li>
            <li>
              Strategi terbaik untuk mematahkan belenggu kesombongan materi dan
              syahwat ego.
            </li>
            <li>
              Alat transformatif yang mengubah ketakutan fatalistik menjadi
              produktivitas amal yang berorientasi masa depan.
            </li>
            <li>
              Sistem berpikir berbasis akuntabilitas tinggi di hadapan Penguasa
              Semesta.
            </li>
          </ul>
          <p className="mt-4 text-xl leading-relaxed text-gray-800">
            Kematian bukan untuk ditakuti secara melumpuhkan, melainkan untuk
            dimanajemeni secara cerdas. Ia adalah garis akhir yang menentukan
            kualitas pelari dalam menempuh lintasan ujian kehidupan dunia.
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
