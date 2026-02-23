// app/materi/1/page.tsx
import React from "react";
import Link from "next/link";

export default function Materi1Page() {
  // Helper function to apply alternating background and shadow
  const SectionContainer = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    // Alternating colors: white with subtle gold border, or light emerald with subtle silver border
    const bgColorClass =
      index % 2 === 0
        ? "bg-white border-b border-amber-100"
        : "bg-emerald-50 border-b border-gray-200";
    return (
      <div
        className={`max-w-4xl mx-auto ${bgColorClass} p-8 md:p-12 rounded-lg shadow-lg mb-12 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out`}
      >
        {children}
      </div>
    );
  };

  return (
    <div
      className="relative min-h-screen font-sans 
                 bg-[url('/madinah.jpg')] bg-cover bg-center bg-fixed bg-no-repeat"
    >
      {/* Kode untuk overlay yang membuat background redup */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      {/* Wrapper untuk semua konten agar berada di atas overlay */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center drop-shadow-md">
          Materi Pertemuan 1: Syahadatain
        </h1>
        <p className="text-lg text-white text-center max-w-4xl mx-auto mb-12">
          Materi ini membahas secara mendalam tentang Syahadatain, fondasi utama
          dalam ajaran Islam, mencakup definisi, sejarah, dalil, struktur
          teologis, perspektif madzhab, dimensi tasawuf, kajian nahwu-sharaf,
          syarat, pembatal, serta dimensi sosial dan filosofisnya.
        </p>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-700 mb-6 text-center md:text-left border-b-2 border-amber-200 pb-3">
            BAGIAN I: DEFINISI DAN HAKIKAT SYAHADATAIN
          </h2>
          <p className="text-lg text-text-light mb-4">
            Syahadatain (الشهادتان) adalah dua kalimat persaksian:
          </p>
          <div className="bg-amber-50 border border-amber-300 p-6 rounded-lg mb-6 shadow-inner">
            <p className="text-3xl md:text-4xl font-arabic text-amber-800 text-center mb-4 leading-relaxed">
              أشهد أن لا إله إلا الله
            </p>
            <p className="text-3xl md:text-4xl font-arabic text-amber-800 text-center leading-relaxed">
              وأشهد أن محمدًا رسول الله
            </p>
          </div>
          <p className="text-lg text-text-light mb-4">Artinya:</p>
          <p className="text-lg text-text-light italic mb-6">
            “Aku bersaksi bahwa tidak ada sesembahan yang berhak disembah selain
            Allah, dan aku bersaksi bahwa Muhammad adalah utusan Allah.”
          </p>
          <p className="text-lg text-text-light mb-4">Secara syar’i:</p>
          <p className="text-lg text-text-light mb-6">
            Syahadat adalah ikrar lisan yang dibenarkan hati dan diwujudkan
            dalam amal, yang dengannya seseorang sah menjadi Muslim.
          </p>
          <p className="text-lg text-text-light font-medium">Dalil utama:</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-text-light mt-2 bg-gray-50 p-3 rounded-r-md">
            “Islam dibangun atas lima perkara…”
            <p className="text-sm mt-1 text-gray-600">
              (HR. Sahih Bukhari dan Sahih Muslim)
            </p>
          </blockquote>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-green mb-6 text-center md:text-left border-b-2 border-emerald-200 pb-3">
            BAGIAN II: SEJARAH DAN KONTEKS TURUNNYA KONSEP SYAHADAT
          </h2>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            1. Kondisi Arab Pra-Islam
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Di Makkah sebelum kenabian: Ka’bah dipenuhi 360 berhala.</li>
            <li>
              Masyarakat mengakui Allah sebagai pencipta (QS. Az-Zumar: 38),
              tetapi menyekutukan-Nya dalam ibadah.
            </li>
            <li>Tauhid Rububiyah diakui, Tauhid Uluhiyah ditolak.</li>
            <li>Masalah utama bukan ateisme, tetapi syirik dalam ibadah.</li>
          </ul>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            2. Dakwah Awal Nabi ﷺ
          </h3>
          <p className="text-lg text-text-light mb-4">
            Nabi Muhammad ﷺ memulai dakwah dengan:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-text-light mb-6 bg-emerald-100 p-3 rounded-r-md">
            “Qūlū lā ilāha illallāh tufliḥū”
            <p className="text-sm mt-1 text-gray-600">
              (Katakanlah La ilaha illallah, niscaya kalian beruntung)
            </p>
          </blockquote>
          <p className="text-lg text-text-light mb-4">
            Selama 13 tahun periode Makkah, fokusnya adalah:
          </p>
          <ul className="list-disc list-inside text-lg text-text-light ml-4">
            <li>Penguatan tauhid</li>
            <li>Penghancuran syirik</li>
            <li>Penanaman iman</li>
          </ul>
          <p className="text-lg text-text-light mt-4">
            Setelah hijrah ke Madinah, syariat diturunkan secara bertahap.
          </p>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-700 mb-6 text-center md:text-left border-b-2 border-amber-200 pb-3">
            BAGIAN III: DALIL-DALIL AL-QUR’AN
          </h2>

          <p className="text-lg text-text-light mb-8">
            Sumber utama:{" "}
            <Link
              href="https://quran.nu.or.id/"
              className="text-amber-600 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://quran.nu.or.id/
            </Link>
          </p>

          {/* ================= TAUHID ================= */}
          <h3 className="text-2xl font-medium text-amber-600 mb-4 border-b border-gray-200 pb-2">
            Dalil Syahadat Tauhid
          </h3>

          <div className="space-y-8">
            {/* QS Muhammad 19 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-semibold mb-2 text-dark-green">
                QS. Muhammad: 19
              </p>

              <p className="text-2xl text-right leading-loose font-arabic text-amber-800 mb-4">
                فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ
              </p>

              <p className="italic mb-2 text-gray-700">
                Fa'lam annahu lā ilāha illallāh
              </p>

              <p className="text-text-light">
                “Maka ketahuilah bahwa tidak ada Tuhan selain Allah.”
              </p>
            </div>

            {/* QS Al Ikhlas */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-semibold mb-2 text-dark-green">
                QS. Al-Ikhlas: 1–4
              </p>

              <p className="text-2xl text-right leading-loose font-arabic text-amber-800 mb-4">
                قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ
                وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾
              </p>

              <p className="italic mb-2 text-gray-700">
                Qul huwallāhu aḥad. Allāhuṣ-ṣamad. Lam yalid wa lam yūlad. Wa
                lam yakun lahū kufuwan aḥad.
              </p>

              <p className="text-text-light">
                “Katakanlah: Dialah Allah Yang Maha Esa. Allah tempat bergantung
                segala sesuatu. Dia tidak beranak dan tidak pula diperanakkan.
                Dan tidak ada sesuatu yang setara dengan-Nya.”
              </p>
            </div>

            {/* QS Al Anbiya 25 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-semibold mb-2 text-dark-green">
                QS. Al-Anbiya: 25
              </p>

              <p className="text-2xl text-right leading-loose font-arabic text-amber-800 mb-4">
                وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي
                إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ
              </p>

              <p className="italic mb-2 text-gray-700">
                Wa mā arsalnā min qablika mir rasūlin illā nūḥī ilaihi annahū lā
                ilāha illā anā fa‘budūn.
              </p>

              <p className="text-text-light">
                “Kami tidak mengutus seorang rasul pun sebelum engkau melainkan
                Kami wahyukan kepadanya: Tidak ada Tuhan selain Aku, maka
                sembahlah Aku.”
              </p>
            </div>

            {/* QS Al Baqarah 163 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-semibold mb-2 text-dark-green">
                QS. Al-Baqarah: 163
              </p>

              <p className="text-2xl text-right leading-loose font-arabic text-amber-800 mb-4">
                وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ ۖ لَا إِلَٰهَ إِلَّا هُوَ
                الرَّحْمَٰنُ الرَّحِيمُ
              </p>

              <p className="italic mb-2 text-gray-700">
                Wa ilāhukum ilāhun wāḥid, lā ilāha illā huwar-raḥmānur-raḥīm.
              </p>

              <p className="text-text-light">
                “Tuhanmu adalah Tuhan Yang Maha Esa; tidak ada Tuhan selain Dia
                Yang Maha Pengasih lagi Maha Penyayang.”
              </p>
            </div>
          </div>

          {/* ================= RASUL ================= */}
          <h3 className="text-2xl font-medium text-amber-600 mt-12 mb-4 border-b border-gray-200 pb-2">
            Dalil Syahadat Rasul
          </h3>

          <div className="space-y-8">
            {/* Al Ahzab 40 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-semibold mb-2 text-dark-green">
                QS. Al-Ahzab: 40
              </p>

              <p className="text-2xl text-right leading-loose font-arabic text-amber-800 mb-4">
                مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن
                رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ
              </p>

              <p className="italic mb-2 text-gray-700">
                Mā kāna Muḥammadun abā aḥadim mir rijālikum walākin rasūlallāhi
                wa khātaman-nabiyyīn.
              </p>

              <p className="text-text-light">
                “Muhammad bukanlah bapak dari seorang laki-laki di antara kamu,
                tetapi dia adalah Rasul Allah dan penutup para nabi.”
              </p>
            </div>

            {/* An Nisa 80 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="font-semibold mb-2 text-dark-green">
                QS. An-Nisa: 80
              </p>

              <p className="text-2xl text-right leading-loose font-arabic text-amber-800 mb-4">
                مَّن يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ
              </p>

              <p className="italic mb-2 text-gray-700">
                Man yuṭi‘ir-rasūla faqad aṭā‘allāh.
              </p>

              <p className="text-text-light">
                “Barang siapa menaati Rasul, maka sungguh ia telah menaati
                Allah.”
              </p>
            </div>

            {/* Al Hasyr 7 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
              {/* BARIS INI YANG DIPERBAIKI: HANYA SATU className */}
              <p className="font-semibold mb-2 text-dark-green">
                QS. Al-Hasyr: 7
              </p>

              <p className="text-2xl text-right leading-loose font-arabic text-amber-800 mb-4">
                وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ
                فَانتَهُوا
              </p>

              <p className="italic mb-2 text-gray-700">
                Wa mā ātakumur-rasūlu fakhudhūhu wa mā nahākum ‘anhu fantahū.
              </p>

              <p className="text-text-light">
                “Apa yang diberikan Rasul kepadamu maka ambillah, dan apa yang
                dilarangnya bagimu maka tinggalkanlah.”
              </p>
            </div>
          </div>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-green mb-6 text-center md:text-left border-b-2 border-emerald-200 pb-3">
            BAGIAN IV: STRUKTUR TEOLOGIS SYAHADAT PERTAMA
          </h2>
          <p className="text-lg text-text-light mb-4">
            Kalimat:{" "}
            <strong className="font-semibold text-amber-700">
              La ilaha illallah
            </strong>
          </p>
          <p className="text-lg text-text-light mb-4">
            Terdiri dari dua unsur:
          </p>
          <ol className="list-decimal list-inside text-lg text-text-light mb-6 ml-4">
            <li>
              <strong className="font-semibold text-amber-600">An-Nafyu</strong>{" "}
              (penafian total)
              <ul className="list-disc list-inside text-lg text-text-light ml-6 mt-1">
                <li>
                  <strong className="font-semibold text-amber-500">
                    Lā ilāha
                  </strong>{" "}
                  → Menolak seluruh sesembahan.
                </li>
              </ul>
            </li>
            <li>
              <strong className="font-semibold text-amber-600">
                Al-Itsbat
              </strong>{" "}
              (penetapan eksklusif)
              <ul className="list-disc list-inside text-lg text-text-light ml-6 mt-1">
                <li>
                  <strong className="font-semibold text-amber-500">
                    Illallah
                  </strong>{" "}
                  → Menetapkan hanya Allah yang berhak disembah.
                </li>
              </ul>
            </li>
          </ol>
          <p className="text-lg text-text-light mb-6">
            Ini disebut metode{" "}
            <strong className="font-semibold text-amber-700">
              nafy wal itsbat
            </strong>
            .
          </p>
          <h3 className="text-2xl font-medium text-amber-600 mb-3 border-b border-gray-200 pb-2">
            Tauhid dalam Perspektif Ahlus Sunnah
          </h3>
          <ol className="list-decimal list-inside text-lg text-text-light ml-4">
            <li>
              <strong className="font-semibold text-dark-green">
                Tauhid Rububiyah
              </strong>
              <ul className="list-disc list-inside text-lg text-text-light ml-6 mt-1">
                <li>Allah satu-satunya pencipta dan pengatur.</li>
              </ul>
            </li>
            <li>
              <strong className="font-semibold text-dark-green">
                Tauhid Uluhiyah
              </strong>
              <ul className="list-disc list-inside text-lg text-text-light ml-6 mt-1">
                <li>Hanya Allah yang berhak menerima ibadah.</li>
              </ul>
            </li>
            <li>
              <strong className="font-semibold text-dark-green">
                Tauhid Asma wa Sifat
              </strong>
              <ul className="list-disc list-inside text-lg text-text-light ml-6 mt-1">
                <li>
                  Menetapkan nama dan sifat Allah tanpa:
                  <ul className="list-circle list-inside text-lg text-text-light ml-6 mt-1">
                    <li>Tahrif</li>
                    <li>Ta’thil</li>
                    <li>Takyif</li>
                    <li>Tamtsil</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-700 mb-6 text-center md:text-left border-b-2 border-amber-200 pb-3">
            BAGIAN V: PERSPEKTIF 4 MADZHAB FIKIH
          </h2>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            1. Mazhab Hanafi
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Pendiri: Abu Hanifah</li>
            <li>Iman: pembenaran hati.</li>
            <li>Amal bukan bagian hakikat iman.</li>
            <li>Ucapan syahadat syarat penerapan hukum dunia.</li>
          </ul>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            2. Mazhab Maliki
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Pendiri: Malik ibn Anas</li>
            <li>Iman: ucapan + hati + amal.</li>
            <li>Menolak kewajiban pasti = batal syahadat.</li>
          </ul>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            3. Mazhab Syafi’i
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Pendiri: Muhammad ibn Idris al-Shafi'i</li>
            <li>Iman bertambah dan berkurang.</li>
            <li>Dua syahadat harus jelas.</li>
          </ul>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            4. Mazhab Hanbali
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light ml-4">
            <li>Pendiri: Ahmad ibn Hanbal</li>
            <li>Amal bagian iman.</li>
            <li>Tauhid uluhiyah sangat ditekankan.</li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-green mb-6 text-center md:text-left border-b-2 border-emerald-200 pb-3">
            BAGIAN VI: DIMENSI TASAWUF
          </h2>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">Tokoh:</h3>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Al-Ghazali</li>
            <li>Junayd al-Baghdadi</li>
          </ul>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            Tingkatan Tauhid
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Tauhid Awam</li>
            <li>Tauhid Khawas</li>
            <li>Tauhid Khawasul Khawas (Fana’)</li>
          </ul>
          <p className="text-lg text-text-light mb-4">Syahadat membersihkan:</p>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Syirik jali</li>
            <li>Syirik khafi (riya, ujub)</li>
          </ul>
          <p className="text-lg text-text-light">
            Tasawuf menekankan bahwa realisasi syahadat adalah{" "}
            <strong className="font-semibold text-amber-700">
              tazkiyatun nafs
            </strong>
            .
          </p>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-700 mb-6 text-center md:text-left border-b-2 border-amber-200 pb-3">
            BAGIAN VII: KAJIAN NAHWU–SHARAF
          </h2>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            1. La ilaha illallah
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>
              <strong className="font-semibold text-dark-green">Lā</strong> →
              النافية للجنس
            </li>
            <li>
              <strong className="font-semibold text-dark-green">Ilāha</strong> →
              isim Lā manshub
            </li>
            <li>
              <strong className="font-semibold text-dark-green">
                Khabar Lā
              </strong>{" "}
              → mahzuf (haqqun)
            </li>
            <li>
              <strong className="font-semibold text-dark-green">Illā</strong> →
              huruf istitsna’
            </li>
            <li>
              <strong className="font-semibold text-dark-green">Allah</strong> →
              badal marfu’
            </li>
          </ul>
          <p className="text-lg text-text-light font-medium mb-4">
            Makna lengkap:
          </p>
          <p className="text-lg text-text-light italic mb-6">
            Tidak ada sesembahan yang benar kecuali Allah.
          </p>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            2. Asyhadu anna Muhammadan Rasulullah
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>
              <strong className="font-semibold text-dark-green">Asyhadu</strong>{" "}
              → fi’il mudhari’
            </li>
            <li>
              <strong className="font-semibold text-dark-green">Anna</strong> →
              huruf nasb
            </li>
            <li>
              <strong className="font-semibold text-dark-green">
                Muhammadan
              </strong>{" "}
              → isim anna
            </li>
            <li>
              <strong className="font-semibold text-dark-green">
                Rasulullah
              </strong>{" "}
              → khabar anna
            </li>
          </ul>
          <h3 className="text-2xl font-medium text-amber-600 mb-3">
            Analisis Sharaf
          </h3>
          <ul className="list-disc list-inside text-lg text-text-light ml-4">
            <li>
              <strong className="font-semibold text-dark-green">Ilāh</strong> →
              akar أ ل ه
            </li>
            <li>
              <strong className="font-semibold text-dark-green">
                Muhammad
              </strong>{" "}
              → wazan مُفَعَّل
            </li>
            <li>
              <strong className="font-semibold text-dark-green">Rasul</strong> →
              wazan فعول
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VIII */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-green mb-6 text-center md:text-left border-b-2 border-emerald-200 pb-3">
            BAGIAN VIII: SYARAT SYAHADAT
          </h2>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Ilmu</li>
            <li>Yakin</li>
            <li>Ikhlas</li>
            <li>Jujur</li>
            <li>Cinta</li>
            <li>Tunduk</li>
            <li>Menerima</li>
          </ul>
          <p className="text-lg text-text-light">
            Tanpa syarat ini, syahadat tidak sah secara hakikat.
          </p>
        </SectionContainer>

        {/* BAGIAN IX */}
        <SectionContainer index={8}>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-700 mb-6 text-center md:text-left border-b-2 border-amber-200 pb-3">
            BAGIAN IX: SYAHADAT DAN PEMBATALNYA
          </h2>
          <p className="text-lg text-text-light mb-4">Yang membatalkan:</p>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Syirik besar</li>
            <li>Mengingkari kewajiban pasti</li>
            <li>Menghina Rasul</li>
            <li>Meyakini adanya nabi setelah beliau</li>
          </ul>
          <p className="text-lg text-text-light">Dalil: QS. Al-Ahzab: 40</p>
        </SectionContainer>

        {/* BAGIAN X */}
        <SectionContainer index={9}>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-green mb-6 text-center md:text-left border-b-2 border-emerald-200 pb-3">
            BAGIAN X: DIMENSI SOSIAL & PERADABAN
          </h2>
          <p className="text-lg text-text-light mb-4">Syahadat melahirkan:</p>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Sistem hukum</li>
            <li>Identitas umat</li>
            <li>Loyalitas aqidah</li>
            <li>Struktur masyarakat Madinah</li>
          </ul>
          <p className="text-lg text-text-light">
            Di Madinah, syahadat menjadi fondasi negara Islam pertama.
          </p>
        </SectionContainer>

        {/* BAGIAN XI */}
        <SectionContainer index={10}>
          <h2 className="text-3xl md:text-4xl font-semibold text-amber-700 mb-6 text-center md:text-left border-b-2 border-amber-200 pb-3">
            BAGIAN XI: DIMENSI FILOSOFIS
          </h2>
          <p className="text-lg text-text-light mb-4">Syahadat pertama:</p>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>→ Pernyataan ontologis tentang eksistensi tunggal.</li>
          </ul>
          <p className="text-lg text-text-light mb-4">Syahadat kedua:</p>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>→ Pernyataan epistemologis tentang sumber wahyu.</li>
          </ul>
          <p className="text-lg text-text-light mb-4">Gabungan keduanya:</p>
          <ul className="list-disc list-inside text-lg text-text-light ml-4">
            <li>→ Fondasi teologi dan hukum Islam.</li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN TOTAL */}
        <SectionContainer index={11}>
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-green mb-6 text-center md:text-left border-b-2 border-emerald-200 pb-3">
            KESIMPULAN TOTAL
          </h2>
          <p className="text-lg text-text-light mb-4">Syahadatain adalah:</p>
          <ul className="list-disc list-inside text-lg text-text-light mb-6 ml-4">
            <li>Fondasi aqidah</li>
            <li>Kontrak spiritual</li>
            <li>Pintu masuk Islam</li>
            <li>Kerangka hukum</li>
            <li>Sistem sosial</li>
            <li>Jalan tazkiyah</li>
            <li>Struktur linguistik presisi</li>
            <li>Inti dakwah para nabi</li>
          </ul>
          <p className="text-lg text-text-light font-medium italic">
            Ia bukan sekadar kalimat, tetapi kerangka hidup total seorang
            Muslim.
          </p>
        </SectionContainer>

        <div className="mt-20 text-center">
          <Link
            href="/#materi-overview-section"
            className="bg-button-green text-white px-8 py-3 rounded-full font-medium hover:bg-dark-green transition-colors inline-block border-2 border-amber-400 shadow-lg"
          >
            Kembali ke Daftar Materi
          </Link>
        </div>
      </div>{" "}
      {/* Akhir dari wrapper konten */}
    </div>
  );
}
