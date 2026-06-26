// app/materi/nilai-moral-agama/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image"; // <--- Ini diaktifkan kembali

export default function NilaiMoralAgamaPage() {
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
          Menyikapi Perilaku Masyarakat yang Tidak Sesuai dengan Nilai Moral dan
          Nilai Agama di Era Digital
        </h1>

        {/* BAGIAN PENDAHULUAN */}
        <div className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          <p className="mb-4">
            Perkembangan teknologi informasi telah membawa perubahan besar dalam
            kehidupan masyarakat. Kemudahan dalam mengakses internet dan media
            sosial memberikan banyak manfaat, seperti mempercepat komunikasi,
            mempermudah memperoleh informasi, serta mendukung kegiatan
            pendidikan dan ekonomi. Namun, di balik berbagai manfaat tersebut,
            perkembangan teknologi juga menghadirkan tantangan baru berupa
            menurunnya kesadaran sebagian masyarakat terhadap nilai moral dan
            nilai agama. Fenomena seperti penyebaran berita bohong (hoaks),
            ujaran kebencian, perundungan (bullying), penipuan daring, hingga
            penyalahgunaan media sosial menjadi bukti bahwa kemajuan teknologi
            tidak selalu diiringi dengan kemajuan moral.
          </p>
          <p className="mb-4">
            Nilai moral merupakan pedoman yang mengatur perilaku manusia agar
            dapat hidup berdampingan secara harmonis dalam masyarakat. Sementara
            itu, nilai agama menjadi landasan spiritual yang mengarahkan manusia
            untuk menjalankan kehidupan sesuai dengan perintah Allah SWT serta
            menjauhi segala bentuk larangan-Nya. Dalam Islam, moral tidak hanya
            dipandang sebagai hubungan antarmanusia, tetapi juga sebagai bentuk
            tanggung jawab kepada Allah SWT. Oleh karena itu, setiap tindakan
            manusia akan dimintai pertanggungjawaban baik di dunia maupun di
            akhirat.
          </p>
          <p className="mb-4">
            Realitas kehidupan saat ini menunjukkan bahwa berbagai perilaku yang
            bertentangan dengan nilai moral semakin mudah ditemukan, terutama di
            media sosial. Banyak individu yang dengan mudah menghina orang lain,
            menyebarkan fitnah, mencaci maki, bahkan menghasut masyarakat tanpa
            mempertimbangkan dampak yang ditimbulkan. Perilaku tersebut tidak
            hanya merusak hubungan sosial, tetapi juga bertentangan dengan
            ajaran Islam yang menekankan pentingnya menjaga lisan, menghormati
            sesama manusia, serta menebarkan kedamaian.
          </p>
          <p className="mb-4">
            Islam mengajarkan bahwa manusia diciptakan sebagai khalifah di bumi
            yang memiliki tanggung jawab untuk menjaga ketertiban, menegakkan
            kebaikan, dan mencegah kemungkaran. Oleh sebab itu, menyikapi
            masyarakat yang melakukan penyimpangan moral tidak cukup hanya
            dengan memberikan hukuman atau kecaman, melainkan perlu dilakukan
            melalui pendekatan pendidikan, pembinaan, keteladanan, serta dakwah
            yang bijaksana.
          </p>
          <p>
            Artikel ini bertujuan untuk mengkaji penyebab munculnya perilaku
            masyarakat yang tidak sesuai dengan nilai moral dan nilai agama,
            menjelaskan pandangan Islam terhadap fenomena tersebut, serta
            memberikan solusi yang dapat diterapkan dalam kehidupan
            bermasyarakat agar tercipta lingkungan yang lebih berakhlak,
            harmonis, dan sesuai dengan ajaran agama.
          </p>
        </div>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            I. Pengertian Nilai Moral dan Nilai Agama
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
            A. Pengertian Nilai Moral
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Secara umum, moral berasal dari kata mos (bahasa Latin) yang berarti
            adat istiadat atau kebiasaan yang berlaku dalam suatu masyarakat.
            Moral berkaitan dengan ukuran mengenai baik dan buruknya perilaku
            seseorang berdasarkan norma yang berlaku. Menurut Thomas Lickona
            (1991), moral merupakan karakter yang tercermin melalui sikap
            hormat, tanggung jawab, kejujuran, kepedulian, dan keadilan dalam
            kehidupan sehari-hari.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dalam kehidupan bermasyarakat, moral berfungsi sebagai pedoman agar
            setiap individu mampu menjaga hubungan yang baik dengan orang lain.
            Seseorang yang memiliki moral yang baik akan senantiasa menjaga
            ucapan, menghormati hak orang lain, bersikap jujur, serta
            bertanggung jawab terhadap setiap tindakan yang dilakukan.
            Sebaliknya, rendahnya moral akan memunculkan berbagai penyimpangan
            sosial seperti korupsi, kekerasan, pencemaran nama baik, penyebaran
            kebencian, hingga tindakan kriminal lainnya.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Perkembangan zaman tidak mengubah hakikat moral itu sendiri. Justru
            pada era digital saat ini, moral menjadi semakin penting karena
            setiap individu dapat menyampaikan pendapat kepada ribuan bahkan
            jutaan orang hanya melalui sebuah unggahan di media sosial. Oleh
            karena itu, penggunaan teknologi harus diimbangi dengan tanggung
            jawab moral agar tidak merugikan orang lain.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            B. Pengertian Nilai Agama
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Nilai agama merupakan seperangkat aturan yang bersumber dari wahyu
            Allah SWT yang menjadi pedoman hidup manusia dalam menjalankan
            kehidupan di dunia. Dalam Islam, nilai agama tidak hanya mengatur
            hubungan manusia dengan Allah (hablumminallah), tetapi juga hubungan
            manusia dengan sesama (hablumminannas).
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam mengajarkan bahwa akhlak merupakan bagian yang tidak
            terpisahkan dari keimanan seseorang. Rasulullah ﷺ bahkan menegaskan
            bahwa tujuan utama diutusnya beliau adalah untuk menyempurnakan
            akhlak manusia.
          </p>
          <h4 className="text-xl font-medium mb-2 text-gray-700">
            Hadits Rasulullah ﷺ
          </h4>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            <p className="font-arabic text-right text-2xl">
              إِنَّمَا بُعِثْتُ لِأُتَمِّمَ صَالِحَ الْأَخْلَاقِ
            </p>
            <p className="mt-4">
              "Sesungguhnya aku diutus hanyalah untuk menyempurnakan akhlak yang
              mulia."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Ahmad No. 8952)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Hadits tersebut menunjukkan bahwa keberhasilan seseorang dalam
            beragama tidak hanya diukur dari banyaknya ibadah ritual, tetapi
            juga dari bagaimana ia berperilaku terhadap sesama manusia. Orang
            yang rajin beribadah namun masih suka menghina, menyebarkan fitnah,
            atau menyakiti orang lain berarti belum mengamalkan nilai agama
            secara utuh.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            C. Hubungan Moral dengan Nilai Agama
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dalam Islam, moral dan agama merupakan dua hal yang saling
            berkaitan. Moral yang baik akan memperkuat keimanan seseorang,
            sedangkan agama menjadi sumber utama pembentukan moral yang benar.
            Oleh sebab itu, pendidikan moral dalam Islam selalu didasarkan pada
            ajaran Al-Qur'an dan Hadits.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Allah SWT berfirman dalam Surah An-Nahl ayat 90:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي
              الْقُرْبَىٰ وَيَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَالْبَغْيِ
              ۚ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ
            </p>
            <p className="mt-4">
              "Sesungguhnya Allah menyuruh (kamu) berlaku adil, berbuat
              kebajikan, memberi kepada kaum kerabat, dan Allah melarang dari
              perbuatan keji, kemungkaran, dan permusuhan. Dia memberi
              pengajaran kepadamu agar kamu dapat mengambil pelajaran."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. An-Nahl: 90)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Ayat tersebut menjelaskan bahwa Islam tidak hanya memerintahkan
            manusia untuk melaksanakan ibadah, tetapi juga mengajarkan
            pentingnya berlaku adil, berbuat baik, saling membantu, serta
            menjauhi segala bentuk kemungkaran. Dengan demikian, seseorang yang
            benar-benar memahami ajaran agama akan memiliki perilaku yang
            mencerminkan nilai moral dalam kehidupan sehari-hari.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Selain itu, Allah SWT juga berfirman:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا
              سَدِيدًا
            </p>
            <p className="mt-4">
              "Wahai orang-orang yang beriman! Bertakwalah kepada Allah dan
              ucapkanlah perkataan yang benar."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Ahzab: 70)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Ayat ini menjadi pengingat bahwa setiap ucapan memiliki konsekuensi
            moral dan spiritual. Di era media sosial, ayat tersebut sangat
            relevan karena setiap komentar, unggahan, maupun pesan yang
            disampaikan akan dipertanggungjawabkan di hadapan Allah SWT.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 mt-8">
            D. Pentingnya Menjaga Moral di Era Digital
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Kemajuan teknologi seharusnya dimanfaatkan sebagai sarana untuk
            menyebarkan ilmu pengetahuan, dakwah, serta mempererat hubungan
            antarsesama. Namun kenyataannya, sebagian masyarakat justru
            menggunakan media sosial untuk melakukan tindakan yang bertentangan
            dengan nilai moral maupun agama. Fenomena seperti cyberbullying,
            penyebaran hoaks, fitnah, ujaran kebencian, hingga konten yang
            mengandung unsur pornografi menjadi tantangan besar bagi masyarakat
            modern.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam mengajarkan bahwa setiap informasi yang diterima harus
            diperiksa terlebih dahulu sebelum disebarluaskan. Allah SWT
            berfirman:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ
              فَتَبَيَّنُوا
            </p>
            <p className="mt-4">
              "Wahai orang-orang yang beriman! Jika datang kepadamu seorang
              fasik membawa suatu berita, maka telitilah kebenarannya agar kamu
              tidak mencelakakan suatu kaum karena kebodohan yang akhirnya
              membuat kamu menyesal."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Hujurat: 6)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Ayat ini menjadi dasar penting bagi setiap muslim untuk tidak mudah
            mempercayai ataupun menyebarkan informasi yang belum jelas
            kebenarannya. Sikap tabayyun atau melakukan verifikasi merupakan
            bentuk tanggung jawab moral yang harus dimiliki oleh setiap individu
            dalam menghadapi derasnya arus informasi di era digital.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Melalui pemahaman mengenai nilai moral dan nilai agama, masyarakat
            diharapkan mampu membangun karakter yang kuat sehingga tidak mudah
            terpengaruh oleh perilaku negatif yang berkembang di lingkungan
            sekitar maupun di media sosial. Dengan demikian, kehidupan
            bermasyarakat dapat berjalan secara harmonis, saling menghormati,
            serta sesuai dengan nilai-nilai ajaran Islam.
          </p>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            II. Penyebab Menurunnya Nilai Moral di Masyarakat
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Perubahan zaman yang begitu cepat membawa dampak positif maupun
            negatif bagi kehidupan manusia. Kemajuan teknologi, globalisasi, dan
            kemudahan memperoleh informasi seharusnya menjadi sarana untuk
            meningkatkan kualitas hidup. Namun pada kenyataannya, tidak semua
            masyarakat mampu memanfaatkan perkembangan tersebut secara
            bijaksana. Akibatnya, berbagai perilaku yang bertentangan dengan
            nilai moral maupun nilai agama semakin mudah dijumpai dalam
            kehidupan sehari-hari. Menurut Thomas Lickona (1991), pembentukan
            karakter seseorang dipengaruhi oleh lingkungan keluarga, sekolah,
            serta masyarakat. Ketika ketiga lingkungan tersebut gagal memberikan
            teladan yang baik, maka peluang munculnya penyimpangan moral akan
            semakin besar.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            A. Kurangnya Pendidikan Karakter
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Keluarga merupakan tempat pertama bagi seseorang untuk belajar
            mengenai nilai moral, sopan santun, kejujuran, dan tanggung jawab.
            Orang tua memiliki peran penting sebagai teladan dalam membentuk
            kepribadian anak. Apabila sejak kecil anak tidak dibiasakan berkata
            jujur, menghormati orang lain, maupun menjalankan ajaran agama, maka
            ketika dewasa ia akan lebih mudah terpengaruh oleh lingkungan yang
            negatif.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Selain keluarga, sekolah juga memiliki tanggung jawab dalam
            membangun karakter peserta didik. Pendidikan tidak hanya bertujuan
            meningkatkan kemampuan akademik, tetapi juga membentuk pribadi yang
            berakhlak mulia. Sayangnya, masih banyak individu yang lebih
            menekankan prestasi akademik dibandingkan pembentukan karakter
            sehingga nilai moral sering kali diabaikan.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            B. Pengaruh Media Sosial
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Media sosial merupakan salah satu faktor yang paling berpengaruh
            terhadap perilaku masyarakat saat ini. Berbagai platform digital
            memberikan kebebasan kepada setiap orang untuk menyampaikan pendapat
            tanpa batas ruang dan waktu. Kebebasan tersebut sering kali
            disalahgunakan untuk menyebarkan ujaran kebencian, fitnah, berita
            bohong, maupun konten yang mengandung unsur kekerasan.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Tidak sedikit pengguna media sosial yang merasa aman melakukan
            penghinaan karena bersembunyi di balik identitas akun. Padahal,
            setiap ucapan dan tulisan yang dipublikasikan dapat menimbulkan
            dampak psikologis maupun sosial bagi orang lain. Dalam Islam,
            menjaga lisan tidak hanya berlaku ketika berbicara secara langsung,
            tetapi juga ketika menulis di media digital.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            C. Pengaruh Lingkungan Pergaulan
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Lingkungan memiliki peranan besar dalam membentuk perilaku
            seseorang. Individu yang berada di lingkungan positif cenderung
            memiliki perilaku yang baik, sedangkan mereka yang berada dalam
            lingkungan yang penuh kekerasan, narkoba, perjudian, maupun tindakan
            kriminal lebih mudah mengikuti kebiasaan tersebut.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Rasulullah ﷺ bersabda:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            <p className="font-arabic text-right text-2xl">
              الْمَرْءُ عَلَى دِينِ خَلِيلِهِ فَلْيَنْظُرْ أَحَدُكُمْ مَنْ
              يُخَالِلُ
            </p>
            <p className="mt-4">
              "Seseorang akan mengikuti agama atau kebiasaan teman dekatnya,
              maka hendaklah kalian memperhatikan dengan siapa kalian berteman."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Abu Dawud No. 4833 dan Tirmidzi No. 2378)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Hadits tersebut menunjukkan bahwa memilih teman merupakan salah satu
            langkah penting dalam menjaga akhlak dan moral seseorang.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            D. Lemahnya Kesadaran Beragama
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Seseorang yang memahami ajaran agama dengan baik akan lebih mampu
            mengendalikan hawa nafsu serta mempertimbangkan akibat dari setiap
            perbuatannya. Sebaliknya, lemahnya pemahaman agama menyebabkan
            seseorang mudah terjerumus pada tindakan yang melanggar norma.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Allah SWT berfirman:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              وَلَا تَقْرَبُوا الزِّنَى إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا
            </p>
            <p className="mt-4">
              "Dan janganlah kamu mendekati zina. Sesungguhnya zina itu adalah
              suatu perbuatan yang keji dan suatu jalan yang buruk."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Isra': 32)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Ayat tersebut menunjukkan bahwa Islam tidak hanya melarang suatu
            perbuatan dosa, tetapi juga melarang segala sesuatu yang dapat
            mengantarkan manusia kepada perbuatan tersebut.
          </p>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            III. Pandangan Islam terhadap Perilaku yang Tidak Sesuai dengan
            Nilai Moral dan Nilai Agama
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam merupakan agama yang mengatur seluruh aspek kehidupan manusia,
            termasuk hubungan sosial. Oleh karena itu, setiap muslim diwajibkan
            menjaga akhlak, menghormati sesama manusia, serta menghindari
            perilaku yang dapat merugikan orang lain.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Rasulullah ﷺ bersabda:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            <p className="font-arabic text-right text-2xl">
              إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلَاقًا
            </p>
            <p className="mt-4">
              "Sesungguhnya orang yang paling baik di antara kalian adalah orang
              yang paling baik akhlaknya."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Bukhari No. 3559 dan Muslim No. 2321)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Hadits tersebut menegaskan bahwa ukuran kemuliaan seseorang bukan
            hanya berdasarkan harta maupun jabatan, tetapi lebih kepada
            akhlaknya.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam juga melarang umatnya saling menghina, mencela, maupun
            merendahkan orang lain.
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ
              عَسَىٰ أَنْ يَكُونُوا خَيْرًا مِنْهُمْ
            </p>
            <p className="mt-4">
              "Wahai orang-orang yang beriman! Janganlah suatu kaum
              mengolok-olok kaum yang lain, boleh jadi mereka yang diperolok
              lebih baik daripada mereka."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Hujurat: 11)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Selain itu, Islam juga melarang tindakan ghibah (menggunjing),
            fitnah, serta prasangka buruk yang dapat merusak hubungan
            persaudaraan.
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              وَلَا يَغْتَب بَّعْضُكُم بَعْضًا ۚ أَيُحِبُّ أَحَدُكُمْ أَن
              يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ
            </p>
            <p className="mt-4">
              "Janganlah sebagian kamu menggunjing sebagian yang lain. Sukakah
              salah seorang di antara kamu memakan daging saudaranya yang sudah
              mati? Maka tentu kamu merasa jijik kepadanya."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Hujurat: 12)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Ayat tersebut menggambarkan betapa beratnya dosa menggunjing dan
            mencemarkan nama baik orang lain. Dalam konteks media sosial saat
            ini, ghibah tidak hanya dilakukan melalui perkataan, tetapi juga
            melalui komentar, unggahan, maupun penyebaran informasi yang belum
            tentu benar.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam juga mengajarkan konsep amar ma'ruf nahi munkar, yaitu
            mengajak kepada kebaikan dan mencegah kemungkaran.
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              وَلْتَكُنْ مِنْكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ
              وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنْكَرِ ۚ
              وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ
            </p>
            <p className="mt-4">
              "Dan hendaklah ada di antara kamu segolongan umat yang menyeru
              kepada kebajikan, menyuruh kepada yang makruf dan mencegah dari
              yang mungkar. Mereka itulah orang-orang yang beruntung."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Ali Imran: 104)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Melalui ayat tersebut, umat Islam memiliki tanggung jawab untuk
            saling mengingatkan ketika melihat perilaku yang menyimpang. Namun,
            penyampaian nasihat harus dilakukan dengan cara yang santun, penuh
            hikmah, serta tidak menimbulkan permusuhan.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Allah SWT juga mengingatkan bahwa setiap ucapan manusia akan dicatat
            oleh malaikat.
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            <p className="font-arabic text-right text-2xl">
              مَا يَلْفِظُ مِنْ قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ
            </p>
            <p className="mt-4">
              "Tidak ada suatu kata pun yang diucapkannya melainkan di sisinya
              ada malaikat pengawas yang selalu siap mencatat."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Qaf: 18)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Ayat ini sangat relevan dengan kehidupan modern, khususnya
            penggunaan media sosial. Setiap komentar, unggahan, maupun pesan
            yang dikirimkan tidak hanya meninggalkan jejak digital, tetapi juga
            menjadi catatan amal yang akan dipertanggungjawabkan di hadapan
            Allah SWT.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Oleh karena itu, menyikapi masyarakat yang melakukan penyimpangan
            moral tidak seharusnya dilakukan dengan kebencian ataupun tindakan
            main hakim sendiri. Islam mengajarkan agar setiap muslim
            mengedepankan sikap bijaksana, memberikan nasihat dengan lemah
            lembut, menjadi teladan yang baik, serta terus mendoakan agar mereka
            memperoleh hidayah dari Allah SWT. Pendekatan yang penuh kasih
            sayang dan pendidikan yang berkelanjutan diyakini lebih efektif
            dalam membangun masyarakat yang berakhlak mulia dibandingkan sekadar
            memberikan hukuman tanpa pembinaan.
          </p>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            IV. Studi Kasus: Fenomena Ujaran Kebencian (Hate Speech) di Media
            Sosial
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            A. Latar Belakang Studi Kasus
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Perkembangan media sosial telah memberikan kemudahan bagi masyarakat
            dalam menyampaikan pendapat dan memperoleh informasi secara cepat.
            Namun, di balik manfaat tersebut muncul berbagai penyimpangan
            perilaku, salah satunya adalah ujaran kebencian (hate speech).
            Ujaran kebencian merupakan tindakan menyampaikan perkataan, tulisan,
            gambar, maupun video yang mengandung penghinaan, provokasi, hasutan,
            atau diskriminasi terhadap individu maupun kelompok tertentu.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dalam beberapa tahun terakhir, Indonesia sering dihadapkan pada
            kasus penyebaran ujaran kebencian melalui platform seperti Facebook,
            Instagram, TikTok, dan X (Twitter). Tidak sedikit pengguna media
            sosial yang menyebarkan informasi palsu, menghina tokoh masyarakat,
            mencaci agama tertentu, maupun menyerang individu karena perbedaan
            pendapat. Perilaku tersebut sering kali memicu konflik, perpecahan,
            bahkan berujung pada proses hukum berdasarkan Undang-Undang
            Informasi dan Transaksi Elektronik (UU ITE).
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Salah satu contoh nyata adalah banyaknya kasus penyebaran ujaran
            kebencian yang diproses oleh pihak kepolisian karena unggahan yang
            mengandung unsur penghinaan, provokasi, dan penyebaran informasi
            yang tidak benar. Fenomena ini menunjukkan bahwa rendahnya kesadaran
            moral dalam menggunakan media sosial dapat memberikan dampak yang
            luas bagi kehidupan masyarakat.
          </p>
          {/* Bagian ini yang diubah */}
          <div className="text-center mt-6">
            <Image
              src="/ss.png" // Menggunakan gambar ss.png dari folder public
              alt="Tangkapan layar berita mengenai kasus ujaran kebencian" // Deskripsi gambar
              width={700} // Sesuaikan lebar gambar sesuai kebutuhan Anda
              height={400} // Sesuaikan tinggi gambar sesuai kebutuhan Anda
              className="mx-auto rounded-lg shadow-md" // Styling opsional
            />
            <p className="text-sm text-gray-600 italic mt-2">
              Contoh tangkapan layar berita mengenai kasus ujaran kebencian.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            B. Analisis Studi Kasus Berdasarkan Nilai Moral
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Dari sudut pandang moral, perilaku menyebarkan ujaran kebencian
            merupakan tindakan yang tidak mencerminkan sikap saling menghargai
            antarsesama manusia. Moral mengajarkan pentingnya menghormati hak
            orang lain, menjaga sopan santun, serta bertanggung jawab terhadap
            setiap perkataan maupun tindakan yang dilakukan.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Pelaku ujaran kebencian umumnya terdorong oleh emosi sesaat,
            fanatisme, atau keinginan memperoleh perhatian di media sosial.
            Padahal, dampak yang ditimbulkan sangat besar, antara lain:
          </p>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>Menimbulkan permusuhan antarindividu maupun kelompok.</li>
            <li>Menyebabkan korban mengalami tekanan psikologis.</li>
            <li>Merusak persatuan masyarakat.</li>
            <li>Menurunkan kualitas komunikasi di media sosial.</li>
            <li>Menimbulkan keresahan sosial.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Oleh karena itu, setiap pengguna media sosial memiliki tanggung
            jawab moral untuk menggunakan teknologi secara bijaksana serta
            menghindari penyebaran konten yang dapat merugikan orang lain.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600 mt-8">
            C. Analisis Berdasarkan Perspektif Islam
          </h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Islam mengajarkan bahwa setiap muslim wajib menjaga lisan, menjaga
            kehormatan orang lain, dan menghindari segala bentuk fitnah maupun
            permusuhan.
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            <p className="font-arabic text-right text-2xl">
              يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِّنَ الظَّنِّ
              إِنَّ بَعْضَ الظَّنِّ إِثْمٌ
            </p>
            <p className="mt-4">
              "Wahai orang-orang yang beriman! Jauhilah kebanyakan prasangka,
              karena sebagian prasangka itu adalah dosa."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (QS. Al-Hujurat: 12)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Ayat tersebut mengajarkan agar manusia tidak mudah berprasangka
            buruk terhadap orang lain, apalagi menyebarkannya kepada masyarakat
            luas tanpa bukti yang jelas.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Selain itu Rasulullah ﷺ bersabda:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-4 text-left">
            <p className="font-arabic text-right text-2xl">
              مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ
              خَيْرًا أَوْ لِيَصْمُتْ
            </p>
            <p className="mt-4">
              "Barang siapa beriman kepada Allah dan hari akhir, hendaklah ia
              berkata yang baik atau diam."
            </p>
            <span className="block text-sm mt-2 font-medium text-right text-emerald-600">
              (HR. Bukhari No. 6018 dan Muslim No. 47)
            </span>
          </blockquote>
          <p className="mb-4 text-lg leading-relaxed text-gray-800 mt-4">
            Hadits ini menjadi pedoman penting dalam penggunaan media sosial.
            Apabila suatu komentar atau unggahan tidak memberikan manfaat bahkan
            berpotensi menyakiti orang lain, maka lebih baik tidak
            dipublikasikan.
          </p>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            V. Opini Pribadi
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Menurut pendapat saya, perilaku masyarakat yang tidak sesuai dengan
            nilai moral maupun nilai agama tidak boleh dianggap sebagai sesuatu
            yang biasa. Kemajuan teknologi memang memberikan kebebasan kepada
            setiap orang untuk menyampaikan pendapat, tetapi kebebasan tersebut
            harus disertai dengan rasa tanggung jawab. Banyak pengguna media
            sosial yang merasa aman menghina orang lain karena tidak bertatap
            muka secara langsung, padahal setiap perkataan tetap memiliki
            konsekuensi baik secara hukum maupun di hadapan Allah SWT.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Saya berpendapat bahwa penyelesaian terhadap perilaku menyimpang
            tidak cukup hanya melalui pemberian hukuman. Hukuman memang
            diperlukan sebagai bentuk penegakan hukum, namun pembinaan karakter
            jauh lebih penting agar seseorang tidak mengulangi kesalahan yang
            sama. Pendidikan moral sejak usia dini, keteladanan dari orang tua,
            guru, tokoh agama, serta penggunaan media sosial secara bijaksana
            merupakan langkah yang harus dilakukan secara bersama-sama.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Selain itu, masyarakat juga harus membiasakan budaya tabayyun, yaitu
            memeriksa kebenaran suatu informasi sebelum mempercayai atau
            menyebarkannya. Banyak konflik yang sebenarnya dapat dicegah apabila
            setiap orang tidak mudah terpancing oleh berita yang belum jelas
            sumbernya. Sebagai seorang muslim, saya meyakini bahwa setiap
            perkataan, tulisan, maupun tindakan akan dimintai pertanggungjawaban
            oleh Allah SWT. Oleh karena itu, media sosial seharusnya dijadikan
            sarana untuk menyebarkan ilmu pengetahuan, dakwah, motivasi, serta
            hal-hal yang bermanfaat bagi masyarakat.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Apabila setiap individu mampu menerapkan nilai moral dan nilai agama
            dalam kehidupan sehari-hari, maka lingkungan sosial akan menjadi
            lebih harmonis, saling menghargai, serta terhindar dari berbagai
            bentuk konflik yang disebabkan oleh penyalahgunaan teknologi.
          </p>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            VI. Upaya Menyikapi Masyarakat yang Tidak Sesuai dengan Nilai Moral
            dan Nilai Agama
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Beberapa langkah yang dapat dilakukan antara lain:
          </p>
          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              Memperkuat pendidikan karakter sejak usia dini melalui keluarga
              dan sekolah.
            </li>
            <li>
              Meningkatkan pemahaman agama agar masyarakat memiliki landasan
              moral yang kuat.
            </li>
            <li>
              Menggunakan media sosial secara bijaksana serta menghindari
              penyebaran hoaks dan ujaran kebencian.
            </li>
            <li>
              Menegakkan hukum secara adil terhadap pelaku penyebaran kebencian
              maupun informasi palsu.
            </li>
            <li>
              Menumbuhkan budaya saling mengingatkan (amar ma'ruf nahi munkar)
              dengan cara yang santun dan penuh hikmah.
            </li>
            <li>
              Menjadikan Rasulullah ﷺ sebagai teladan utama dalam berakhlak
              mulia.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            VII. Kesimpulan
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Nilai moral dan nilai agama merupakan dua unsur penting yang tidak
            dapat dipisahkan dalam kehidupan manusia. Moral mengajarkan
            bagaimana seseorang berperilaku baik terhadap sesama, sedangkan
            agama memberikan pedoman agar setiap tindakan selalu berada dalam
            koridor yang diridhai Allah SWT. Perkembangan teknologi telah
            membawa banyak manfaat, tetapi juga memunculkan tantangan berupa
            meningkatnya berbagai perilaku yang bertentangan dengan norma sosial
            maupun ajaran agama.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Fenomena ujaran kebencian di media sosial menjadi salah satu contoh
            nyata bagaimana rendahnya kesadaran moral dapat menimbulkan konflik
            di masyarakat. Islam mengajarkan agar setiap muslim menjaga lisan,
            menghindari fitnah, melakukan tabayyun terhadap setiap informasi,
            serta senantiasa berkata baik atau memilih diam apabila tidak
            memiliki sesuatu yang bermanfaat untuk disampaikan.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Oleh karena itu, penyelesaian terhadap berbagai penyimpangan moral
            tidak cukup hanya melalui penegakan hukum, tetapi juga memerlukan
            pendidikan karakter, pembinaan agama, keteladanan dari lingkungan
            keluarga, serta kesadaran setiap individu untuk menggunakan
            teknologi secara bertanggung jawab. Dengan menerapkan nilai-nilai
            moral dan ajaran Islam secara konsisten, diharapkan masyarakat
            Indonesia mampu menciptakan kehidupan yang damai, saling
            menghormati, serta menjaga persatuan di tengah perkembangan zaman.
          </p>
        </SectionContainer>

        {/* DAFTAR PUSTAKA */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            Daftar Pustaka
          </h2>

          <ul className="list-disc ml-8 text-lg space-y-2 text-gray-800">
            <li>Al-Qur'an Al-Karim.</li>
            <li>HR. Bukhari No. 6018.</li>
            <li>HR. Muslim No. 47.</li>
            <li>HR. Ahmad No. 8952.</li>
            <li>
              Lickona, T. (1991). Educating for Character: How Our Schools Can
              Teach Respect and Responsibility. New York: Bantam Books.
            </li>
            <li>
              Shihab, M. Quraish. (2002). Tafsir Al-Misbah. Jakarta: Lentera
              Hati.
            </li>
            <li>
              Nata, Abuddin. (2012). Akhlak Tasawuf. Jakarta: RajaGrafindo
              Persada.
            </li>
            <li>
              Al-Qaradawi, Yusuf. (2000). Akhlak dalam Islam. Jakarta: Pustaka
              Al-Kautsar.
            </li>
            <li>
              Undang-Undang Republik Indonesia Nomor 19 Tahun 2016 tentang
              Perubahan atas UU Nomor 11 Tahun 2008 tentang Informasi dan
              Transaksi Elektronik.
            </li>
            <li>
              Suyanto, B. (2013). Pendidikan Karakter dalam Perspektif
              Pendidikan Nasional. Jakarta: Bumi Aksara.
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
