// app/materi/11/page.tsx
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // Tidak diperlukan karena tidak ada komponen Image yang digunakan di SectionContainer

export default function Materi11Page() {
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
          Materi Pertemuan 11: <br /> Adab 2 (Pakaian)
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p>
            Materi ini membahas secara komprehensif dan mendalam tentang
            standarisasi tata busana syar'i yang merefleksikan kehormatan,
            integritas diri, kesopanan publik, serta kepatuhan penuh terhadap
            ketentuan menutup aurat. Kajian ini mencakup definisi, konteks
            historis, dalil-dalil Al-Qur'an dan Hadits, batasan fikih lintas
            madzhab, dimensi spiritual (tasawuf), analisis kebahasaan
            (nahwu-sharaf), syarat pakaian syar'i, pembatal kesopanan, serta
            dampak sosial dan filosofisnya dalam membangun peradaban.
          </p>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: DEFINISI DAN HAKIKAT ADAB BERPAKAIAN
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Pakaian dalam Islam bukan sekadar pelindung fisik dari cuaca,
            melainkan instrumen spiritual dan etis yang berfungsi sebagai
            penutup aurat (satrul 'aurah) sekaligus perhiasan untuk menampakkan
            martabat manusia sebagai hamba Allah.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Secara terminologi syar'i:
          </p>
          <p className="mb-4 text-lg leading-relaxed italic">
            Tata busana syar'i adalah segala jenis pakaian yang memenuhi
            kriteria minimum yang ditetapkan oleh syariat untuk menyembunyikan
            bagian tubuh tertentu yang tidak boleh ditampakkan di depan publik,
            yang didasari oleh ketakwaan hati.
          </p>
          <p className="mt-4 text-base text-gray-700">
            Dalil utama dari esensi pakaian:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            <p className="font-arabic text-right text-2xl">
              يَا بَنِي آدَمَ قَدْ أَنْزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي
              سَوْآتِكُمْ وَرِيشًا ۖ وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ
            </p>
            <p className="mt-4">
              "Wahai anak cucu Adam! Sesungguhnya Kami telah menyediakan pakaian
              untuk menutupi auratmu dan untuk perhiasan bagimu. Tetapi pakaian
              takwa, itulah yang lebih baik."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-A'raf: 26)
            </span>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: SEJARAH DAN KONTEKS TURUNNYA PERINTAH BERJILBAB & MENUTUP
            AURAT
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            1. Kondisi Arab Pra-Islam (Jahiliyah)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Tradisi Berpakaian:</strong> Pada masa Jahiliyah, wanita
              Arab mengenakan pakaian yang longgar namun membiarkan bagian dada,
              leher, dan perhiasan telinga mereka terlihat terbuka (tabarruj).
            </li>
            <li>
              <strong>Ritual Thawaf Telanjang:</strong> Di Makkah pra-Islam,
              terdapat tradisi melakukan thawaf di sekeliling Ka'bah tanpa
              sehelai benang pun bagi kaum pendatang yang tidak memiliki pakaian
              suci dari kaum Quraisy, karena menganggap pakaian biasa telah
              tercemar dosa.
            </li>
            <li>
              <strong>Ketiadaan Batasan Publik:</strong> Tidak ada pemisah
              visual yang jelas antara budak wanita dan wanita merdeka, sehingga
              sering terjadi pelecehan di ruang publik akibat cara berpakaian.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            2. Fase Turunnya Syariat Pakaian di Madinah
          </h3>
          <p className="mb-4 text-lg leading-relaxed">
            Perintah menutup aurat secara ketat diturunkan secara bertahap pada
            fase Madinah, khususnya melalui dua momen krusial:
          </p>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Khumar (Kerudung):</strong> Turunnya QS. An-Nur ayat 31
              yang memerintahkan wanita mukminah untuk mengulurkan kain kerudung
              hingga menutupi dada mereka, merespons kebiasaan wanita yang
              mengikat kerudung ke belakang leher.
            </li>
            <li>
              <strong>Jilbab (Pakaian Luar):</strong> Turunnya QS. Al-Ahzab ayat
              59 sebagai proteksi sosial bagi wanita merdeka agar mereka mudah
              dikenali, dihormati, dan tidak diganggu oleh kaum munafik di
              jalanan Madinah.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: DALIL-DALIL AL-QUR'AN
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            Dalil Umum dan Kaum Wanita
          </h3>
          <h4 className="text-xl font-medium mb-2 text-gray-700">
            QS. An-Nur: 31
          </h4>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ ۖ وَلَا يُبْدِينَ
              زِينَتَهُنَّ إِلَّا لِبُعُولَتِهِنَّ...
            </p>
            <p className="mt-2 text-base">
              Wa-lyadhribna bikhumurihinna 'ala juyubihinna wa la yubdina
              zinatahunna illa libu'ulatihinna...
            </p>
            <p className="mt-4">
              “Dan hendaklah mereka menutupkan kain kudung ke dadanya, dan
              janganlah menampakkan perhiasannya (auratnya), kecuali kepada
              suami mereka...”
            </p>
          </blockquote>

          <h4 className="text-xl font-medium mb-2 text-gray-700 mt-8">
            QS. Al-Ahzab: 59
          </h4>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
            <p className="font-arabic text-right text-2xl">
              يَا أَيُّهَا النَّبِيُّ قُلْ لِأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ
              الْمُؤْمِنِينَ يُدْنِينَ عَلَيْهِنَّ مِنْ جَلَابِيبِهِنَّ
            </p>
            <p className="mt-2 text-base">
              Ya ayyuhan-nabiyyu qul li-azwajika wa banatika wa
              nisa'il-mu'minina yudnina 'alaihinna min jalabibihinna.
            </p>
            <p className="mt-4">
              “Wahai Nabi! Katakanlah kepada istri-istrimu, anak-anak
              perempuanmu dan istri-istri orang mukmin, ‘Hendaklah mereka
              mengulurkan jilbabnya ke seluruh tubuh mereka’.”
            </p>
          </blockquote>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            Dalil Kaum Pria dan Perhiasan Masjid
          </h3>
          <h4 className="text-xl font-medium mb-2 text-gray-700">
            QS. Al-A'raf: 31
          </h4>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِنْدَ كُلِّ مَسْجِدٍ
            </p>
            <p className="mt-2 text-base">
              Ya bani Adama khudzu zinatakum 'inda kulli masjidin.
            </p>
            <p className="mt-4">
              “Wahai anak cucu Adam! Pakailah pakaianmu yang bagus pada setiap
              (memasuki) masjid.”
            </p>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: STRUKTUR TEOLOGIS DAN BATASAN AURAT
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Konsep menutup aurat berakar langsung pada menjaga kehormatan
            ciptaan Allah (Hifzhun Nafs wal 'Irdh). Batasan aurat dibagi secara
            presisi berdasarkan gender:
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            1. Aurat Laki-laki
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Batas Esensial:</strong> Antara pusar (al-surrah) hingga
              lutut (al-rukbah).
            </li>
            <li>
              <strong>Sifat Batasan:</strong> Pusar dan lutut itu sendiri
              menjadi area pengaman yang harus ikut tertutup sebagian demi
              memastikan area di antaranya tertutupi dengan sempurna berdasarkan
              kaidah fikih: "Sesuatu yang kewajiban tidak sempurna tanpanya,
              maka ia hukumnya wajib."
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            2. Aurat Perempuan
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Di Depan Laki-laki Non-Mahram:</strong> Seluruh tubuh
              kecuali wajah dan kedua telapak tangan (menurut jumhur ulama).
            </li>
            <li>
              <strong>Di Depan Sesama Wanita Muslimah:</strong> Area antara
              pusar hingga lutut, namun demi kesopanan publik, tetap dianjurkan
              menutup area dada dan punggung.
            </li>
            <li>
              <strong>Di Depan Mahram:</strong> Angka perhiasan yang biasa
              tampak saat bekerja di rumah (kepala, leher, lengan, dan kaki
              bawah).
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: PERSPEKTIF 4 MADZHAB FIKIH TERHADAP BUSANA
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            1. Madzhab Hanafi
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Wajah dan Telapak Kaki:</strong> Wajah dan telapak tangan
              bukan aurat karena adanya kebutuhan interaksi sosial (hajah).
              Bahkan telapak kaki wanita juga tidak dianggap aurat dalam shalat
              menurut pendapat terkuat karena kedekatannya dengan tanah saat
              berjalan.
            </li>
            <li>
              <strong>Pria:</strong> Batasan pria tegas dari bawah pusar hingga
              bawah lutut; lutut termasuk dalam bagian aurat yang wajib ditutup.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            2. Madzhab Maliki
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Definisi Aurat Wanita:</strong> Membagi aurat menjadi dua:
              Aurat Mughallazah (berat/vital) dan Aurat Mukhaffafah (ringan). Di
              hadapan non-mahram, seluruh tubuh wanita adalah aurat kecuali
              wajah dan dua telapak tangan, dengan syarat aman dari fitnah
              (godaan). Jika dikhawatirkan menimbulkan fitnah, menutup wajah
              (bercadar) menjadi anjuran kuat atau wajib bagi wanita muda.
            </li>
            <li>
              <strong>Pria:</strong> Lutut dan pusar bukan aurat, melainkan area
              di antara keduanya saja.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            3. Madzhab Syafi'i
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Pandangan Publik:</strong> Di hadapan laki-laki asing
              (non-mahram), seluruh tubuh wanita termasuk wajah dan kedua
              telapak tangan adalah aurat yang wajib ditutup (dasar penggunaan
              cadar/niqab dalam kondisi normal). Namun dalam shalat, wajah dan
              telapak tangan wajib dibuka.
            </li>
            <li>
              <strong>Pria:</strong> Pusar dan lutut bukan aurat, tetapi wajib
              menutup sebagian dari keduanya untuk menyempurnakan penutupan area
              di antara keduanya.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            4. Madzhab Hanbali
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Pandangan Paling Ketat:</strong> Seluruh tubuh wanita
              tanpa pengecualian adalah aurat di depan lelaki non-mahram,
              termasuk wajah, telapak tangan, bahkan hingga kuku jari tangan dan
              kaki.
            </li>
            <li>
              <strong>Pria:</strong> Batasannya sama dengan Madzhab Hanafi,
              yaitu dari pusar hingga lutut, di mana lutut dan pusar itu sendiri
              merupakan bagian dari aurat.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: DIMENSI TASAWUF DAN SPIRITUALITAS PAKAIAN
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dalam tradisi tasawuf (seperti dalam kitab Ihya Ulumuddin karya Imam
            Al-Ghazali), pakaian lahiriah memiliki keterikatan batiniah yang
            kuat dengan kondisi hati hamba.
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Pakaian Lahir vs Pakaian Batin:</strong> Ulama sufi
              menekankan bahwa kesibukan menghiasi fisik dengan pakaian mewah
              tanpa menghiasi batin dengan sifat-sifat terpuji adalah bentuk
              delusi spiritual (ghurur). Pakaian terbaik adalah Libasut Taqwa
              (pakaian takwa).
            </li>
            <li>
              <strong>Bahaya Pakaian Syuhrah:</strong> Mengenakan pakaian yang
              bertujuan untuk mencari popularitas, eksklusivitas, atau
              kesombongan—baik pakaian yang terlalu mewah maupun pakaian yang
              sengaja dibuat tampak compang-camping demi dipuji sebagai orang
              zuhud—sangat dilarang karena merusak keikhlasan.
            </li>
            <li>
              <strong>Fungsi Rasa Malu (Al-Haya’):</strong> Menutup pakaian
              lahiriah didorong oleh rasa malu kepada sesama manusia, sedangkan
              menjaga kesucian batin didorong oleh rasa malu yang mendalam
              kepada Allah SWT.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: KAJIAN NAHWU-SHARAF PADA ISTILAH BUSANA
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            1. Analisis Istilah "Jilbab" (جِلْبَاب)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Analisis Sharaf:</strong> Kata Jilbab (جِلْبَاب) jamaknya
              adalah Jalabib (جَلَابِيب). Secara morfologi, ia merupakan Isim
              Jamid (kata benda konkrit asli) yang berarti pakaian luar yang
              longgar yang menutupi seluruh tubuh di atas baju kurung.
            </li>
            <li>
              <strong>Analisis Linguistik:</strong> Ditinjau dari fungsi
              maknanya dalam QS. Al-Ahzab: 59, frasa yudnina 'alaihinna
              (يُدْنِينَ عَلَيْهِنَّ) menggunakan huruf jer 'ala (عَلَى) yang
              memberikan makna ittisa' wal ihathah (pelonggaran dan pencakupan
              total dari atas ke bawah).
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            2. Analisis Istilah "Khimar" (خِمَار)
          </h3>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Analisis Sharaf:</strong> Kata Khimar (خِمَار) diambil
              dari akar kata Kha-Ma-Ra (خَمَرَ) yang berarti "menutupi" atau
              "menyembunyikan" (akar kata yang sama dengan khamr karena sifatnya
              yang menutupi akal). Maka, khimar secara bahasa adalah alat yang
              digunakan untuk menutupi kepala (kerudung).
            </li>
            <li>
              <strong>Analisis Nahwu:</strong> Pada ayat Walyadhribna
              bikhumurihinna 'ala juyubihinna (وَلْيَضْرِبْنَ بِخُمُرِهِنَّ
              عَلَىٰ جُيُوبِهِنَّ), huruf Lam pada kata walyadhribna adalah Lam
              al-Amr (Lam perintah) yang menjazemkan fi'il mudhari',
              menghasilkan hukum legalitas yang bersifat wajib (wujub). Kata
              Juyub adalah bentuk jamak dari Jaib (جَيْب) yang berarti kerah
              baju atau belahan dada, menegaskan bahwa fungsi kerudung harus
              turun memanjang hingga menutupi area dada, bukan sekadar melilit
              leher.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VIII */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VIII: SYARAT DAN STANDARISASI PAKAIAN SYAR'I (PUBLIK)
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Agar busana dinilai sah memenuhi kriteria syariat di ruang publik,
            terdapat 8 parameter yang harus dipenuhi secara kumulatif:
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Menutup Seluruh Area Aurat:</strong> Sesuai dengan batasan
              gender masing-masing.
            </li>
            <li>
              <strong>Bukan Berfungsi sebagai Perhiasan (Zinah):</strong>{" "}
              Pakaian tidak boleh bermotif terlalu mencolok atau gemerlap yang
              justru menarik perhatian pandangan lawan jenis (tabarruj).
            </li>
            <li>
              <strong>Longgar dan Tidak Ketat:</strong> Tidak membentuk lekuk
              tubuh (la washif).
            </li>
            <li>
              <strong>Tebal dan Tidak Transparan:</strong> Tidak memperlihatkan
              warna kulit di baliknya (la syafaf).
            </li>
            <li>
              <strong>Tidak Diberi Wewangian Mencolok:</strong> Khusus bagi
              wanita ketika keluar rumah, agar tidak menimbulkan fitnah aroma.
            </li>
            <li>
              <strong>Tidak Menyerupai Pakaian Lawan Jenis:</strong> Laki-laki
              dilarang menyerupai gaya pakaian wanita, dan sebaliknya (terkena
              laknat dalam hadits sahih).
            </li>
            <li>
              <strong>Tidak Menyerupai Pakaian Khas Non-Muslim:</strong>
              Menghindari Tasyabbuh pada simbol keagamaan atau moralitas
              spesifik kaum kafir.
            </li>
            <li>
              <strong>
                Bukan Pakaian Ketentaran/Popularitas (Libasus Syuhrah):
              </strong>{" "}
              Bukan busana yang ekstrem agar terlihat berbeda demi kesombongan
              atau status sosial.
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN IX */}
        <SectionContainer index={8}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN IX: PEMBATAL ADAB DAN ETIKA BERPAKAIAN
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Nilai pahala dan keberkahan dalam berpakaian dapat gugur (atau
            berubah menjadi dosa) apabila terdapat unsur-unsur pembatal adab
            berikut:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Isbal (Bagi Paki-laki):</strong> Memanjangkan kain celana,
              jubah, atau sarung hingga berada di bawah mata kaki yang disertai
              dengan sifat khuyala (angkuh/sombong).
            </li>
            <li>
              <strong>Tabarruj (Bagi Perempuan):</strong> Memamerkan kecantikan,
              kosmetik, atau perhiasan tubuh secara berlebihan di ruang publik
              non-mahram.
            </li>
            <li>
              <strong>Kasiyat 'Ariyat (Berpakaian tapi Telanjang):</strong>
              Mengenakan pakaian yang secara fisik ada, namun gagal memenuhi
              fungsi menutup karena terlalu ketat, tipis, atau tidak menutup
              batas minimum aurat.
            </li>
            <li>
              <strong>Mutasabbihath/Mutasabbihin:</strong> Pemaksaan identitas
              gender visual lewat pakaian yang menyalahi fitrah penciptaan
              biologis.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN X */}
        <SectionContainer index={9}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN X: DIMENSI SOSIAL, PERADABAN, DAN KESOPANAN PUBLIK
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Sistem busana yang diatur dalam Islam memiliki dampak sosiologis
            yang besar dalam memitigasi patologi sosial dan membentuk tatanan
            masyarakat yang sehat:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Dekomodifikasi Tubuh:</strong> Mengubah paradigma di mana
              tubuh manusia (khususnya wanita) dihargai karena integritas
              intelektual dan moralnya, bukan dieksploitasi secara visual
              sebagai komoditas ekonomi atau seksual.
            </li>
            <li>
              <strong>Standar Kesopanan Publik:</strong> Menciptakan ruang
              publik yang aman, profesional, dan minim distraksi seksual,
              sehingga interaksi sosial berjalan atas dasar rasa hormat timbal
              balik (mutual respect).
            </li>
            <li>
              <strong>Identitas Komunitas:</strong> Menjadi pembeda visual yang
              jelas (distinction) bagi umat Islam sebagai representasi
              masyarakat yang menjunjung tinggi kebersihan moral dan disiplin
              syariat.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN XI */}
        <SectionContainer index={10}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN XI: DIMENSI FILOSOFIS ADAB BUSANA
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Secara filosofis, hukum-hukum tata busana Islam mengintegrasikan
            beberapa aspek mendasar eksistensi manusia:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Pernyataan Ontologis:</strong> Pakaian adalah pembeda
              mendasar antara peradaban manusia dengan dunia hewani. Hakikat
              manusia ditandai dengan kesadaran moral untuk menutupi rasa malu
              fisiknya.
            </li>
            <li>
              <strong>Pernyataan Epistemologis:</strong> Standar kepantasan
              publik tidak diserahkan kepada relativisme budaya manusia yang
              selalu berubah, melainkan diposisikan di bawah panduan absolut
              wahyu ilahi demi kemaslahatan lintas zaman.
            </li>
            <li>
              <strong>Simbol Ketundukan Egologis:</strong> Menundukkan keinginan
              hawa nafsu (tren fashion destruktif atau dorongan pamer eksistensi
              fisik) demi meraih keridaan Pencipta, yang mencerminkan
              keseimbangan antara keindahan estetika (al-jamal) dan keagungan
              moral (al-jalal).
            </li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN TOTAL */}
        <SectionContainer index={11}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN TOTAL
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Adab berpakaian dan tata busana syar'i adalah:
          </p>
          <ul className="list-disc ml-8 text-xl space-y-3 text-gray-800">
            <li>Fondasi perlindungan kehormatan (Hifzhul 'Irdh).</li>
            <li>
              Manifestasi konkret dari sifat malu yang menjadi cabang keimanan.
            </li>
            <li>
              Benteng moralitas publik di tengah arus sekularisasi budaya busana
              global.
            </li>
            <li>
              Disiplin hukum lintas madzhab yang fleksibel namun memiliki
              prinsip yang kokoh.
            </li>
            <li>
              Refleksi keindahan batin yang memancar melalui kerapian,
              kesopanan, dan kesederhanaan lahiriah.
            </li>
          </ul>
          <p className="mt-4 text-xl leading-relaxed text-gray-800">
            Tata busana syar'i bukan sekadar pilihan gaya hidup, melainkan
            bentuk ibadah harian yang melekat pada tubuh seorang Muslim
            sepanjang hayatnya.
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
