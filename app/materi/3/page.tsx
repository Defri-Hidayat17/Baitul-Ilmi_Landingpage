// app/materi/hakikat-manusia/page.tsx
import React from "react";
import Link from "next/link";

export default function MateriHakikatManusiaPage() {
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
          Hakikat Manusia dalam Perspektif Islam
        </h1>

        <p className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          Manusia, sebuah mahakarya ciptaan Ilahi, menempati kedudukan yang tak
          tertandingi di antara seluruh makhluk. Keistimewaan ini bukan sekadar
          anugerah fisik yang sempurna, melainkan karena manusia dibekali dengan
          intan permata akal, kompas hati nurani, kebebasan untuk memilih, serta
          beban amanah moral dan spiritual yang agung. Dalam lensa Islam,
          manusia bukanlah entitas yang terombang-ambing tanpa tujuan;
          sebaliknya, ia diciptakan dengan misi yang jelas: mengabdikan diri
          sepenuhnya kepada Allah SWT, menegakkan pilar-pilar kebaikan dan
          keadilan, serta mengemban amanah sebagai khalifah di muka bumi.
          Pemikir kontemporer seperti M. Quraish Shihab, melalui tafsirnya yang
          mendalam, seringkali menekankan relevansi abadi dari konsep-konsep ini
          dalam menghadapi kompleksitas kehidupan modern. Namun, laju peradaban
          modern, dengan segala kemajuan teknologi, derasnya arus informasi, dan
          penetrasi budaya digital, telah melahirkan tantangan eksistensial yang
          masif. Seringkali, manusia modern terperangkap dalam labirin krisis
          makna hidup, tergerus nilai-nilai spiritual, dan terjerumus dalam
          jurang degradasi moral. Pembahasan ini diharapkan mampu menjadi
          lentera bagi manusia untuk kembali menemukan arah hidup yang selaras
          dengan fitrah penciptaannya yang luhur.
        </p>

        {/* 1. Pendahuluan */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            1. Pendahuluan: Menguak Misteri Insan di Tengah Pusaran Zaman
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Pertanyaan abadi tentang "siapakah manusia sesungguhnya?" adalah
            fondasi peradaban, sebuah pencarian makna yang tak pernah usai.
            Manusia bukanlah sekadar gumpalan biologis yang lahir, tumbuh,
            bekerja, lalu sirna ditelan bumi. Jika kita mereduksi eksistensi
            manusia hanya pada dimensi fisik, maka samudra makna hidup akan
            mengering, menyisakan kekosongan yang dangkal dan sempit. Islam,
            dengan kebijaksanaannya yang tak terbatas, memandang manusia sebagai
            entitas multidimensional: perpaduan harmonis antara jasad yang fana,
            akal yang menerangi, hati yang merasakan, jiwa yang bergejolak, dan
            ruh yang menghubungkan dengan Sang Pencipta. Inilah yang membentuk
            identitas utuh seorang insan.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Keunggulan hakiki manusia terletak pada karunia akal yang
            memungkinkannya berpikir kritis, merenung mendalam, membedakan
            antara kebenaran dan kebatilan, serta kesadaran spiritual yang
            membimbingnya mengenal dan mendekat kepada Tuhannya. Namun, setiap
            kelebihan selalu datang dengan konsekuensi, sebuah amanah yang maha
            berat. Semakin tinggi derajat dan potensi seorang manusia, semakin
            besar pula tanggung jawab yang harus ia pikul di pundaknya.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Ironisnya, di era modern yang serba canggih ini, manusia justru
            sering kehilangan kompas orientasi hidupnya. Banyak yang berhasil
            menumpuk kekayaan, meraih puncak karier, dan memetik popularitas,
            namun gagal menemukan oase kedamaian batin. Kita terkoneksi secara
            global melalui jejaring digital, namun terputus secara fundamental
            dari akar spiritual. Kita cerdas secara intelektual, namun
            seringkali miskin kebijaksanaan moral. Kondisi paradoks ini menjadi
            bukti nyata bahwa kemajuan peradaban material tidak serta merta
            berbanding lurus dengan kematangan kemanusiaan; bahkan, seringkali
            ia menjadi bumerang yang melukai fitrah kita sendiri.
          </p>
        </SectionContainer>

        {/* 2. Hakikat Penciptaan Manusia */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            2. Hakikat Penciptaan Manusia: Mengabdi, Bukan Menguasai
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Fondasi eksistensi manusia dalam Islam ditegaskan dalam firman Allah
            SWT:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            “وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ”
            <br />
            “\( Wa mā khalaqtul-jinna wal-insa illā liya'budūn \)”
            <br />
            Artinya:
            <br />
            "Dan Aku tidak menciptakan jin dan manusia melainkan agar mereka
            beribadah kepada-Ku."
            <p className="text-sm mt-3 font-medium text-right text-emerald-600">
              (QS. Adz-Dzariyat: 56)
            </p>
          </blockquote>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-800">
            Ayat agung ini bukan sekadar deklarasi, melainkan sebuah pernyataan
            tujuan penciptaan yang fundamental. Ia menegaskan bahwa esensi hidup
            manusia bukanlah sekadar mengejar fatamorgana kesenangan duniawi,
            melainkan mengabdikan seluruh aspek kehidupannya kepada Allah SWT.
            Konsep "ibadah" dalam Islam jauh melampaui ritual-ritual formal
            seperti shalat, puasa, atau zakat. Ibadah adalah setiap aktivitas
            baik yang dilakukan dengan niat tulus karena Allah: bekerja dengan
            integritas dan kejujuran, menolong sesama yang membutuhkan, gigih
            menuntut ilmu yang bermanfaat, menjaga amanah dan kepercayaan, serta
            menegakkan keadilan di setiap lini kehidupan.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dengan demikian, hakikat manusia adalah sebagai makhluk pengabdi,
            bukan makhluk egois yang hanya hidup untuk memuaskan nafsu dan
            ambisinya semata. Pengabdian ini adalah jalan menuju kemuliaan
            sejati, sebuah jembatan yang menghubungkan eksistensi fana kita
            dengan keabadian Ilahi.
          </p>
        </SectionContainer>

        {/* 3. Manusia sebagai Khalifah di Bumi */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            3. Manusia sebagai Khalifah di Bumi: Penjaga Amanah dan Pembangun
            Peradaban
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Selain sebagai hamba, manusia juga diangkat sebagai duta Ilahi di
            muka bumi, sebuah peran yang diabadikan dalam firman-Nya:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            “وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ
            خَلِيفَةً”
            <br />
            “\( Wa idz qāla rabbuka lil-malāikati innī jā'ilun fil-arḍi khalīfah
            \)”
            <br />
            Artinya:
            <br />
            "Sesungguhnya Aku hendak menjadikan seorang khalifah di muka bumi."
            <p className="text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Al-Baqarah: 30)
            </p>
          </blockquote>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-800">
            Khalifah, sebuah kata yang sarat makna, berarti wakil, penjaga,
            pengelola, dan pemakmur. Manusia diberi amanah agung untuk membangun
            peradaban yang berlandaskan keadilan, dihiasi kasih sayang, dan
            berorientasi pada kemaslahatan seluruh alam. Menjadi khalifah
            bukanlah tentang merebut kekuasaan absolut, melainkan tentang
            memikul tanggung jawab yang tak terhingga. Ini adalah panggilan
            untuk menjadi arsitek kebaikan, bukan perusak.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Konsep kekhalifahan ini juga selaras dengan pemikiran sosiolog
            Muslim terkemuka, **Ibnu Khaldun**. Dalam magnum opusnya,{" "}
            <i className="font-semibold">Muqaddimah</i>, Ibnu Khaldun
            menjelaskan bahwa manusia adalah makhluk sosial (
            <i className="italic">hayawan madani</i>) yang secara inheren
            membutuhkan interaksi dan kerjasama untuk memenuhi kebutuhan hidup
            dan membangun peradaban (<i className="italic">umran</i>). Amanah
            kekhalifahan, menurut perspektif ini, bukan hanya tugas individu,
            tetapi juga tugas kolektif untuk menciptakan tatanan masyarakat yang
            adil, makmur, dan beradab, di mana nilai-nilai Islam dapat
            ditegakkan secara optimal.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Ketika manusia merusak ekosistem alam demi keuntungan sesaat, ketika
            korupsi merajalela merampas hak rakyat, ketika penindasan terhadap
            sesama menjadi tontonan, ketika kebencian disebar luas melalui
            platform digital, atau ketika teknologi disalahgunakan untuk
            kejahatan, pada saat itulah manusia sedang mengkhianati amanah
            kekhalifahan yang dipercayakan kepadanya. Amanah ini menuntut kita
            untuk menjadi agen perubahan positif, pelestari bumi, dan penyebar
            rahmat bagi semesta alam.
          </p>
        </SectionContainer>

        {/* 4. Struktur Batin Manusia */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            4. Struktur Batin Manusia: Harmoni Akal, Qalb, Nafs, dan Ruh
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            Imam Al-Ghazali, sang Hujjatul Islam, dengan cemerlang menguraikan
            bahwa manusia adalah entitas kompleks yang tersusun dari empat unsur
            spiritual utama yang saling berinteraksi:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Akal (Aql): Lentera Pemikiran dan Kebijaksanaan</strong>
              <p className="mt-1">
                Akal adalah cahaya yang menerangi jalan pemikiran. Dengan akal,
                manusia mampu menganalisis, memahami ilmu pengetahuan,
                membedakan antara yang halal dan haram, serta menimbang
                konsekuensi dari setiap perbuatan. Ia adalah instrumen untuk
                mencapai kebenaran rasional, namun tanpa bimbingan hati, akal
                bisa tersesat.
              </p>
            </li>
            <li>
              <strong>Qalb (Hati): Pusat Keimanan dan Kompas Moral</strong>
              <p className="mt-1">
                Hati adalah inti dari keberadaan spiritual manusia, pusat
                keimanan, emosi, dan intuisi. Jika hati bersih dari noda-noda
                dosa, maka perilaku akan terpancar kebaikan. Namun, jika hati
                dikotori oleh iri, dengki, kesombongan, dan kebencian, maka
                lahirlah segala bentuk keburukan. Hati adalah raja bagi seluruh
                anggota tubuh, penentu arah moralitas seorang insan.
              </p>
            </li>
            <li>
              <strong>
                Nafs (Jiwa/Dorongan Diri): Medan Perang Antara Kebaikan dan
                Kejahatan
              </strong>
              <p className="mt-1">
                Nafs adalah dorongan diri, energi psikis yang bisa mengajak pada
                kebaikan (Nafs al-Mutmainnah), menyesali kesalahan (Nafs
                al-Lawwamah), tetapi juga dapat menyeret manusia menuju jurang
                keburukan jika tidak dikendalikan (Nafs al-Ammarah bis-Su').
                Pengendalian nafs adalah jihad terbesar, sebuah perjuangan
                internal untuk menundukkan hawa nafsu demi meraih keridaan
                Ilahi.
              </p>
            </li>
            <li>
              <strong>
                Ruh (Roh): Percikan Ilahi yang Memberi Makna Hidup
              </strong>
              <p className="mt-1">
                Ruh adalah unsur spiritual paling suci, percikan Ilahi yang
                ditiupkan ke dalam diri manusia. Ia adalah sumber kehidupan
                bukan hanya secara biologis, tetapi juga secara maknawi. Ruh
                yang terhubung dengan Tuhannya akan merasakan kedamaian,
                kebahagiaan, dan tujuan hidup yang hakiki. Ketika ruh
                terabaikan, manusia merasa hampa, meskipun segala kenikmatan
                duniawi telah digenggamnya.
              </p>
            </li>
          </ul>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-800">
            Melengkapi pandangan Al-Ghazali, filsuf Muslim terkemuka seperti{" "}
            **Ibnu Sina** (Avicenna) juga memberikan kontribusi signifikan dalam
            memahami jiwa (<i className="italic">nafs</i>) dan akal. Ibnu Sina,
            dalam karyanya seperti{" "}
            <i className="font-semibold">Kitab al-Shifa</i>, menguraikan bahwa
            jiwa memiliki berbagai fakultas, termasuk fakultas rasional (akal)
            yang membedakan manusia dari makhluk lain. Baginya, akal adalah
            instrumen utama untuk mencapai pengetahuan dan kebenaran, serta
            merupakan jembatan penghubung antara manusia dengan alam ilahiah. Ia
            menekankan pentingnya penyucian jiwa dan pengembangan akal untuk
            mencapai kesempurnaan insani.
          </p>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-800">
            Ketika akal tumpul oleh kebodohan, hati mengeras oleh dosa, nafs
            mendominasi tanpa kendali, dan ruh terabaikan dalam kesibukan dunia,
            pada saat itulah manusia kehilangan jati dirinya, teralienasi dari
            fitrahnya yang luhur.
          </p>
        </SectionContainer>

        {/* 5. Landasan Hadits tentang Hakikat Manusia */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            5. Landasan Hadits tentang Hakikat Manusia: Manfaat dan Tanggung
            Jawab Lisan
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            Ajaran Nabi Muhammad SAW, sebagai penjelas Al-Qur'an, memberikan
            panduan praktis tentang bagaimana manusia seharusnya menjalani
            kehidupannya:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Kemanfaatan sebagai Tolok Ukur Kemuliaan:</strong>
              <p className="mt-1">Rasulullah Muhammad SAW bersabda:</p>
              <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ”
                <br />
                “\( Khairunnāsi anfa'uhum linnās \)”
                <br />
                Artinya:
                <br />
                "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia
                lainnya."
                <p className="text-sm mt-2 font-medium text-right text-amber-600">
                  (HR. Ahmad)
                </p>
              </blockquote>
              <p className="mt-2">
                Hadits ini adalah mercusuar yang menegaskan bahwa kemuliaan
                sejati seorang manusia tidak diukur dari tumpukan kekayaan,
                tinggi jabatan, atau gemerlap popularitas, melainkan dari
                seberapa besar kontribusi dan manfaat yang ia berikan kepada
                sesama. Ini adalah panggilan untuk hidup yang altruistik, di
                mana kebahagiaan kita terikat pada kebahagiaan orang lain, dan
                keberhasilan kita diukur dari dampak positif yang kita ciptakan.
              </p>
            </li>
            <li>
              <strong>Tanggung Jawab Lisan di Era Digital:</strong>
              <p className="mt-1">Rasulullah SAW juga bersabda:</p>
              <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ
                خَيْرًا أَوْ لِيَصْمُتْ”
                <br />
                Artinya:
                <br />
                "Barangsiapa beriman kepada Allah dan hari akhir, hendaklah
                berkata baik atau diam."
                <p className="text-sm mt-2 font-medium text-right text-emerald-600">
                  (HR. Bukhari dan Muslim)
                </p>
              </blockquote>
              <p className="mt-2">
                Hadits ini, yang diucapkan berabad-abad lalu, memiliki relevansi
                yang luar biasa di era media sosial saat ini. Di mana setiap
                orang memiliki platform untuk bersuara, setiap kata yang kita
                ketik atau ucapkan memiliki potensi besar untuk membangun atau
                meruntuhkan. Ini adalah pengingat keras bahwa lisan (atau jari
                jemari di keyboard) adalah amanah. Kita dituntut untuk
                berhati-hati, memilih kata-kata yang membawa kebaikan, atau
                lebih baik lagi, menahan diri dari berbicara jika perkataan kita
                berpotensi menimbulkan kerusakan atau fitnah.
              </p>
            </li>
          </ul>
        </SectionContainer>

        {/* 6. Studi Kasus: Cyberbullying dan Hilangnya Empati di Ruang Digital */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            6. Studi Kasus: Cyberbullying dan Hilangnya Empati di Ruang Digital
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Salah satu manifestasi paling nyata dari penyimpangan hakikat
            manusia di era modern adalah fenomena *cyberbullying*. Di balik
            anonimitas layar, banyak individu dengan mudah melancarkan serangan
            verbal, menghina, merendahkan, memfitnah, atau mempermalukan orang
            lain melalui komentar digital yang kejam. Jari jemari yang
            seharusnya menjadi alat produktivitas, kini berubah menjadi senjata
            tajam. Kata-kata yang seharusnya membangun, kini menjadi luka yang
            menganga. Dan layar digital yang seharusnya menjadi jendela
            informasi, kini menjadi arena kekerasan verbal yang tak terkendali.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Fenomena ini adalah cerminan nyata dari hilangnya empati dan
            kesadaran moral. Manusia modern sering merasa aman berbuat buruk di
            balik tabir internet, seolah-olah perbuatan mereka tidak memiliki
            konsekuensi. Padahal, dalam ajaran Islam, setiap ucapan, setiap
            tindakan, bahkan setiap niat, tidak luput dari pengawasan Ilahi.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            “مَا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ”
            <br />
            Artinya:
            <br />
            "Tiada suatu kata pun yang diucapkannya melainkan ada di sisinya
            malaikat pengawas yang selalu siap mencatat."
            <p className="text-sm mt-3 font-medium text-right text-emerald-600">
              (QS. Qaf: 18)
            </p>
          </blockquote>
          <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-800">
            Ayat ini adalah peringatan keras bahwa tidak ada yang tersembunyi
            dari penglihatan dan pencatatan Allah. Bahkan di ruang digital
            sekalipun, setiap ketikan, setiap unggahan, setiap komentar, akan
            dipertanggungjawabkan. Kasus-kasus cyberbullying yang marak di
            Indonesia, seperti yang sering diberitakan oleh Kompas.com,
            Detik.com, dan CNN Indonesia, menunjukkan betapa krusialnya
            pengembalian kesadaran moral dan spiritual dalam berinteraksi di
            dunia maya. Berita-berita ini seringkali mengungkap dampak
            psikologis yang parah pada korban, bahkan hingga kasus bunuh diri,
            yang semuanya berakar pada hilangnya empati dan tanggung jawab
            lisan.
          </p>
        </SectionContainer>

        {/* 7. Opini Pribadi dan Refleksi */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            7. Opini Pribadi dan Refleksi: Mencari Jiwa di Tengah Kemajuan
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Menurut hemat saya, tragedi terbesar yang menimpa manusia modern
            bukanlah ketiadaan teknologi canggih, melainkan hilangnya kesadaran
            fundamental tentang siapa dirinya dan untuk apa ia diciptakan. Kita
            berhasil menciptakan mesin-mesin yang luar biasa cerdas, mampu
            mengolah data triliunan bit per detik, tetapi kita seringkali gagal
            membangun jiwa yang bijaksana, yang mampu membedakan antara
            prioritas dunia dan akhirat. Kita mampu menjelajahi galaksi yang
            jauh di luar angkasa, namun belum tentu mampu menaklukkan hawa nafsu
            kita sendiri yang bergejolak di dalam dada. Kita bisa tampil hebat
            dan sempurna di mata dunia, namun seringkali merasa kosong dan hampa
            di hadapan nurani kita sendiri.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Hakikat manusia sejati bukanlah terletak pada seberapa tinggi ia
            mendaki tangga kesuksesan duniawi, tetapi pada seberapa dalam ia
            memahami tujuan penciptaannya. Bukan pada seberapa keras suaranya
            menggema di panggung-panggung dunia, tetapi pada seberapa lembut
            hatinya terhadap sesama. Bukan pada seberapa luas cakrawala
            pengetahuannya, tetapi pada seberapa lurus ia menggunakan ilmu itu
            sebagai alat untuk kebaikan dan kemaslahatan.
          </p>
        </SectionContainer>

        {/* 8. Kesimpulan */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            8. Kesimpulan: Kembali pada Fitrah, Menemukan Makna Sejati
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Dalam perspektif Islam, manusia adalah makhluk mulia yang diciptakan
            dengan tujuan spiritual yang luhur. Ia dibekali dengan akal untuk
            berpikir kritis, hati untuk merasakan empati dan keimanan, ruh untuk
            mendekat kepada Sang Pencipta, serta amanah agung untuk memakmurkan
            dan menjaga bumi. Namun, kemuliaan ini adalah sebuah pilihan; ia
            dapat jatuh dan terdegradasi apabila manusia kehilangan kendali
            moralnya, tunduk pada bisikan hawa nafsu, dan melupakan Tuhannya.
          </p>
          <p className="text-xl leading-relaxed text-gray-800 mt-4">
            Oleh sebab itu, memahami hakikat manusia bukanlah sekadar perdebatan
            teologis yang abstrak, melainkan fondasi esensial untuk membangun
            kehidupan yang bermakna, berlandaskan moralitas yang kokoh, dan
            bernilai ibadah di setiap langkahnya. Dengan kembali kepada fitrah
            penciptaan, manusia akan menemukan kembali kompasnya, menavigasi
            kompleksitas era modern dengan kebijaksanaan, dan meraih kebahagiaan
            sejati di dunia dan akhirat.
          </p>
        </SectionContainer>

        {/* 9. Daftar Referensi */}
        <SectionContainer index={8}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            9. Daftar Referensi
          </h2>
          <ul className="list-disc ml-8 text-lg space-y-2 text-gray-800">
            <li>Al-Qur'an Surah Adz-Dzariyat ayat 56</li>
            <li>Al-Qur'an Surah Al-Baqarah ayat 30</li>
            <li>Al-Qur'an Surah Qaf ayat 18</li>
            <li>Hadits Riwayat Ahmad</li>
            <li>Shahih Bukhari</li>
            <li>Shahih Muslim</li>
            <li>Al-Ghazali, Pemikiran tentang Hati dan Jiwa</li>
            <li>Ibnu Sina, Pemikiran tentang Jiwa dan Akal</li>
            <li>
              Ibnu Khaldun, <i className="italic">Muqaddimah</i>
            </li>
            <li>
              M. Quraish Shihab, <i className="italic">Tafsir Al-Misbah</i>
            </li>
          </ul>
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
