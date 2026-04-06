// app/materi/2/page.tsx
import React from "react";
import Link from "next/link";

export default function Materi2Page() {
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
          Materi Pertemuan 2: Kisah-Kisah Penuh Hikmah dalam Al-Qur’an
        </h1>

        <p className="text-xl text-white text-center max-w-5xl mx-auto mb-16 opacity-90 drop-shadow-md">
          Al-Qur’an, mukjizat abadi umat Islam, bukan hanya sekadar kumpulan
          hukum dan akidah. Di dalamnya terhampar permadani kisah-kisah yang
          memukau, sarat akan pelajaran mendalam, pembentuk karakter, dan
          penuntun kehidupan manusia sepanjang masa. Mari kita selami samudra
          hikmah dari cerita-cerita agung ini.
        </p>

        {/* BAGIAN I */}
        <SectionContainer index={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN I: Memahami Kisah dalam Al-Qur’an
          </h2>

          <p className="mb-4 text-lg leading-relaxed">
            Secara etimologi, kata "kisah" (القصص) dalam bahasa Arab berarti
            "mengikuti jejak" atau "melacak". Dalam konteks Al-Qur’an, Kisah
            Qur’ani (القصص القرآني) adalah narasi-narasi ilahi yang disampaikan
            oleh Allah SWT. Kisah-kisah ini meliputi berita tentang umat
            terdahulu, para nabi dan rasul, serta peristiwa-peristiwa penting di
            masa lalu yang disajikan sebagai cerminan dan pelajaran bagi kita.
            Ia bukan fiksi, melainkan fakta sejarah yang diungkapkan dengan
            tujuan spiritual dan edukatif.
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800">
            “Sesungguhnya pada kisah-kisah mereka itu terdapat pengajaran bagi
            orang-orang yang mempunyai akal. (Al-Qur’an) itu bukanlah cerita
            yang dibuat-buat, akan tetapi membenarkan (kitab-kitab) yang
            sebelumnya dan menjelaskan segala sesuatu, dan sebagai petunjuk
            serta rahmat bagi kaum yang beriman.”
            <p className="text-sm mt-3 font-medium text-right text-amber-600">
              (QS. Yusuf: 111)
            </p>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Ayat ini dengan jelas menegaskan bahwa kisah-kisah dalam Al-Qur’an
            adalah sumber hikmah yang tak ternilai bagi mereka yang mau berpikir
            dan mengambil pelajaran. Allah SWT juga berfirman:
          </p>
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            “Kitab yang Kami turunkan kepadamu penuh berkah agar mereka
            menghayati ayat-ayatnya dan agar orang-orang yang berakal sehat
            mendapat pelajaran.”
            <p className="text-sm mt-3 font-medium text-right text-emerald-600">
              (QS. Shad: 29)
            </p>
          </blockquote>
          <p className="mt-4 text-base text-gray-700">
            Ini menunjukkan pentingnya tadabbur (merenungi) kisah-kisah tersebut
            untuk mendapatkan pelajaran.
          </p>
        </SectionContainer>

        {/* BAGIAN II */}
        <SectionContainer index={1}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN II: Tujuan Mulia Kisah-Kisah Qur’ani
          </h2>

          <p className="mb-6 text-lg leading-relaxed">
            Setiap kisah dalam Al-Qur’an memiliki tujuan yang jelas dan agung,
            bukan sekadar hiburan. Di antara tujuan-tujuan tersebut adalah:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Meneguhkan Hati Rasulullah ﷺ:</strong> Kisah para nabi
              terdahulu yang menghadapi cobaan serupa, memberikan kekuatan dan
              kesabaran bagi Nabi Muhammad ﷺ dalam mengemban risalah. Allah
              berfirman:
              <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “Dan semua kisah dari rasul-rasul Kami ceritakan kepadamu, ialah
                kisah-kisah yang dengannya Kami teguhkan hatimu; dan dalam surat
                ini telah datang kepadamu kebenaran serta pengajaran dan
                peringatan bagi orang-orang yang beriman.”
                <p className="text-sm mt-2 font-medium text-right text-amber-600">
                  (QS. Hud: 120)
                </p>
              </blockquote>
            </li>
            <li>
              <strong>Memberikan Pelajaran (Ibrah) bagi Umat Manusia:</strong>{" "}
              Menjadi cermin bagi umat Islam untuk memahami konsekuensi dari
              ketaatan dan kemaksiatan, serta mengambil teladan dari kebaikan
              dan menghindari keburukan.
            </li>
            <li>
              <strong>Menjelaskan Akibat dari Kebenaran dan Kebatilan:</strong>{" "}
              Dengan gamblang menunjukkan bagaimana kebenaran akan selalu menang
              pada akhirnya, dan kebatilan akan hancur, meskipun membutuhkan
              waktu. Sebagaimana firman Allah:
              <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “Dan katakanlah: “Yang benar telah datang dan yang batil telah
                lenyap”. Sesungguhnya yang batil itu adalah sesuatu yang pasti
                lenyap.”
                <p className="text-sm mt-2 font-medium text-right text-emerald-600">
                  (QS. Al-Isra’: 81)
                </p>
              </blockquote>
            </li>
            <li>
              <strong>Menanamkan Nilai Tauhid dan Keimanan:</strong> Melalui
              kisah-kisah ini, keesaan Allah, kekuasaan-Nya, dan pentingnya
              berserah diri kepada-Nya ditekankan secara berulang.
            </li>
            <li>
              <strong>Mendidik Akhlak dan Moral:</strong> Mengajarkan
              nilai-nilai luhur seperti kejujuran, kesabaran, keadilan,
              keberanian, dan empati, serta menjauhkan dari sifat-sifat tercela.
              Rasulullah ﷺ bersabda:
              <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “Sesungguhnya aku diutus untuk menyempurnakan akhlak yang
                mulia.”
                <p className="text-sm mt-2 font-medium text-right text-amber-600">
                  (HR. Bukhari)
                </p>
              </blockquote>
              Kisah-kisah ini menjadi media untuk mencapai tujuan tersebut.
            </li>
            <li>
              <strong>Membuktikan Kebenaran Risalah Kenabian:</strong>{" "}
              Kisah-kisah yang diceritakan oleh Nabi Muhammad ﷺ tanpa beliau
              pernah mempelajarinya dari manusia, menjadi bukti bahwa Al-Qur’an
              adalah wahyu dari Allah.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN III */}
        <SectionContainer index={2}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN III: Ragam Jenis Kisah dalam Al-Qur’an
          </h2>

          <p className="mb-6 text-lg leading-relaxed">
            Kisah-kisah dalam Al-Qur’an dapat diklasifikasikan menjadi beberapa
            kategori utama, masing-masing dengan fokus dan pelajarannya sendiri:
          </p>

          <ol className="list-decimal ml-8 text-lg space-y-4 text-gray-800">
            <li>
              <strong>Kisah Para Nabi dan Rasul:</strong>
              <p className="mt-1">
                Meliputi kehidupan, dakwah, perjuangan, serta mukjizat para
                utusan Allah. Contohnya adalah kisah Nabi Adam AS sebagai
                manusia pertama, Nabi Nuh AS dengan bahteranya, Nabi Ibrahim AS
                sang bapak para nabi, Nabi Musa AS yang berhadapan dengan
                Firaun, dan Nabi Isa AS dengan kelahiran dan mukjizatnya yang
                luar biasa. Kisah-kisah ini menyoroti keteguhan iman dan
                kesabaran dalam menghadapi tantangan.
              </p>
            </li>

            <li>
              <strong>Kisah Umat Terdahulu:</strong>
              <p className="mt-1">
                Menceritakan tentang kaum-kaum yang menolak kebenaran dan akibat
                yang menimpa mereka. Contohnya adalah kehancuran Kaum ‘Ad dan
                Tsamud akibat kesombongan, Kaum Luth dengan perbuatan keji
                mereka, serta kisah Firaun dan bala tentaranya yang
                ditenggelamkan di laut merah sebagai balasan atas kezaliman
                mereka.
              </p>
            </li>

            <li>
              <strong>Kisah Individu atau Kelompok Shalih:</strong>
              <p className="mt-1">
                Mengisahkan tentang orang-orang yang beriman dan taat, serta
                balasan baik yang mereka terima. Contohnya adalah kisah Ashabul
                Kahfi (Para Pemuda Penghuni Gua) yang teguh mempertahankan iman,
                kisah Luqman Al-Hakim dengan nasihat-nasihat bijaknya kepada
                anaknya, serta kisah Maryam AS yang suci dan melahirkan Nabi Isa
                AS.
              </p>
            </li>

            <li>
              <strong>Kisah Peristiwa Penting:</strong>
              <p className="mt-1">
                Mencakup kejadian-kejadian monumental yang memiliki makna besar,
                seperti kisah penciptaan Adam, kisah Iblis yang menolak sujud,
                atau kisah Dzulqarnain yang menjelajahi dunia.
              </p>
            </li>
          </ol>
        </SectionContainer>

        {/* BAGIAN IV */}
        <SectionContainer index={3}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN IV: Mengambil Pelajaran dari Kisah Nabi Musa dan Firaun
          </h2>

          <h3 className="text-2xl font-semibold mb-4 text-amber-600">
            Kisah Epik Nabi Musa AS Melawan Kezaliman Firaun
          </h3>

          <p className="mb-4 text-lg leading-relaxed text-gray-800">
            Salah satu kisah paling dramatis dan berulang dalam Al-Qur’an adalah
            pertarungan antara kebenaran yang dibawa Nabi Musa AS dan kezaliman
            Firaun. Kisah ini mengajarkan banyak hal:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Firaun Mengaku sebagai Tuhan:</strong> Firaun, penguasa
              Mesir, mencapai puncak kesombongan dengan mendeklarasikan dirinya
              sebagai tuhan yang paling tinggi, menindas Bani Israil, dan
              membunuh bayi laki-laki mereka. Sikap sombong ini sangat dibenci
              Allah, sebagaimana sabda Rasulullah ﷺ:
              <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “Tidak akan masuk surga orang yang di dalam hatinya ada
                kesombongan seberat biji sawi.”
                <p className="text-sm mt-2 font-medium text-right text-amber-600">
                  (HR. Muslim)
                </p>
              </blockquote>
            </li>
            <li>
              <strong>Nabi Musa Diutus untuk Melawan Kezaliman:</strong> Allah
              SWT mengutus Nabi Musa AS dengan mukjizat dan wahyu untuk menyeru
              Firaun agar beriman kepada Allah dan membebaskan Bani Israil. Ini
              menunjukkan bahwa Allah selalu membela orang yang terzalimi.
            </li>
            <li>
              <strong>Pertarungan Mukjizat dan Sihir:</strong> Firaun menantang
              Nabi Musa dengan para penyihirnya. Namun, tongkat Nabi Musa yang
              berubah menjadi ular besar menelan semua tipuan sihir mereka,
              membuktikan kebenaran risalah Musa.
            </li>
            <li>
              <strong>Puncak Kehancuran Firaun:</strong> Setelah serangkaian
              azab dan penolakan Firaun, Allah menenggelamkan Firaun dan seluruh
              bala tentaranya di Laut Merah saat mereka mengejar Nabi Musa dan
              Bani Israil. Allah berfirman:
              <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “Maka Kami binasakan Firaun dan bala tentaranya, lalu Kami
                lemparkan mereka ke dalam laut. Maka perhatikanlah bagaimana
                akibat orang-orang yang zalim.”
                <p className="text-sm mt-2 font-medium text-right text-emerald-600">
                  (QS. Al-Qasas: 40)
                </p>
              </blockquote>
            </li>
          </ul>

          <p className="mt-6 italic text-xl font-medium text-emerald-700">
            <strong>Pelajaran Berharga:</strong> Kisah ini adalah bukti nyata
            bahwa kesombongan dan kezaliman pasti akan membawa kehancuran, tidak
            peduli seberapa besar kekuasaan yang dimiliki. Sebaliknya, kebenaran
            dan kesabaran, meskipun diuji berat, akan selalu meraih kemenangan
            pada akhirnya dengan pertolongan Allah. Ini adalah pengingat abadi
            akan keadilan ilahi.
          </p>
        </SectionContainer>

        {/* BAGIAN V */}
        <SectionContainer index={4}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN V: Karakteristik Unik Kisah Qur’ani
          </h2>

          <p className="mb-6 text-lg leading-relaxed">
            Kisah-kisah dalam Al-Qur’an memiliki ciri khas yang membedakannya
            dari cerita-cerita lain:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Bersumber dari Wahyu Ilahi:</strong> Ini adalah kebenaran
              mutlak dari Allah, bukan dongeng atau mitos buatan manusia. Setiap
              detailnya mengandung kebenaran dan hikmah. Allah berfirman:
              <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “Dan sesungguhnya Al-Qur’an itu adalah benar-benar wahyu (yang
                diturunkan kepada) Tuhan semesta alam.”
                <p className="text-sm mt-2 font-medium text-right text-emerald-600">
                  (QS. Asy-Syu'ara: 192)
                </p>
              </blockquote>
            </li>
            <li>
              <strong>Tidak Selalu Kronologis:</strong> Al-Qur’an tidak
              menyajikan kisah secara berurutan waktu dari awal sampai akhir.
              Bagian-bagian kisah seringkali tersebar di berbagai surah,
              disajikan sesuai kebutuhan konteks dan pelajaran yang ingin
              disampaikan.
            </li>
            <li>
              <strong>Fokus pada Hikmah, Bukan Detail Sekunder:</strong>{" "}
              Al-Qur’an tidak bertele-tele pada detail-detail yang tidak relevan
              seperti tanggal pasti, nama tempat yang tidak penting, atau
              gambaran fisik yang mendetail. Fokus utamanya adalah inti
              pelajaran (ibrah) dan pesan moral.
            </li>
            <li>
              <strong>Diulang dengan Variasi Gaya Bahasa:</strong> Banyak kisah
              diulang di beberapa tempat dalam Al-Qur’an, namun setiap
              pengulangan selalu datang dengan penekanan, sudut pandang, atau
              detail tambahan yang berbeda, memperkaya pemahaman dan menguatkan
              pesan.
            </li>
            <li>
              <strong>Bahasa yang Puitis dan Menggugah:</strong> Kisah-kisah ini
              disampaikan dengan gaya bahasa yang indah, kuat, dan mampu
              menyentuh sanubari, menjadikannya mudah diingat dan diresapi.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VI */}
        <SectionContainer index={5}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            BAGIAN VI: Hikmah dan Ibrah Sepanjang Masa
          </h2>

          <p className="mb-6 text-lg leading-relaxed">
            Mempelajari kisah-kisah Al-Qur’an adalah investasi spiritual yang
            tak ternilai. Manfaat dan pelajaran yang bisa dipetik sangatlah
            banyak:
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Menambah Kekuatan Iman dan Keyakinan:</strong> Dengan
              melihat bagaimana Allah menolong hamba-Nya yang taat dan
              menghancurkan para penentang, iman kita akan semakin kokoh.
            </li>
            <li>
              <strong>Memberi Motivasi dan Inspirasi Hidup:</strong> Kisah para
              nabi yang menghadapi cobaan berat dengan kesabaran luar biasa,
              menginspirasi kita untuk tidak mudah menyerah dalam menghadapi
              kesulitan. Rasulullah ﷺ bersabda:
              <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “Sungguh menakjubkan urusan seorang mukmin. Sesungguhnya semua
                urusannya adalah baik. Dan itu tidak akan terjadi kecuali bagi
                seorang mukmin. Jika dia mendapatkan kesenangan, dia bersyukur,
                maka itu baik baginya. Jika dia ditimpa kesusahan, dia bersabar,
                maka itu baik baginya.”
                <p className="text-sm mt-2 font-medium text-right text-amber-600">
                  (HR. Muslim)
                </p>
              </blockquote>
            </li>
            <li>
              <strong>Menjadi Peringatan dari Kesalahan Umat Terdahulu:</strong>{" "}
              Kita belajar dari kesalahan kaum-kaum yang binasa agar tidak
              mengulangi dosa dan kesombongan mereka.
            </li>
            <li>
              <strong>Menjadi Pedoman dalam Menghadapi Ujian Hidup:</strong>{" "}
              Kisah-kisah ini mengajarkan kita strategi kesabaran, doa, tawakal,
              dan ikhtiar saat dihadapkan pada masalah. Al-Qur'an sendiri adalah
              pedoman hidup:
              <blockquote className="border-l-4 border-emerald-500 pl-4 italic bg-emerald-50/70 p-3 rounded-lg text-gray-800 mt-2">
                “Sesungguhnya Al-Qur’an ini memberi petunjuk kepada (jalan) yang
                paling lurus dan memberi kabar gembira kepada orang-orang mukmin
                yang mengerjakan amal saleh bahwa bagi mereka ada pahala yang
                besar.”
                <p className="text-sm mt-2 font-medium text-right text-emerald-600">
                  (QS. Al-Isra’: 9)
                </p>
              </blockquote>
            </li>
            <li>
              <strong>Membentuk Karakter dan Akhlak Mulia:</strong> Dengan
              meneladani sifat-sifat terpuji para nabi dan orang shalih, kita
              terdorong untuk memperbaiki diri.
            </li>
          </ul>
        </SectionContainer>

        {/* BAGIAN VII */}
        <SectionContainer index={6}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6 border-b-2 pb-3 border-amber-200">
            BAGIAN VII: Kisah Qur’ani sebagai Metode Pendidikan Efektif
          </h2>

          <p className="text-lg mb-4 leading-relaxed">
            Al-Qur’an menggunakan metode bercerita sebagai salah satu cara
            paling efektif dalam menyampaikan pesan dan mendidik jiwa. Mengapa
            demikian?
          </p>

          <ul className="list-disc ml-8 text-lg space-y-3 text-gray-800">
            <li>
              <strong>Mudah Dipahami dan Dicerna:</strong> Manusia secara alami
              menyukai cerita. Kisah membuat pesan yang kompleks menjadi lebih
              mudah diakses dan dipahami oleh berbagai kalangan.
            </li>
            <li>
              <strong>Menyentuh Emosi dan Hati Nurani:</strong> Kisah yang kuat
              dapat membangkitkan empati, rasa takut, harapan, dan inspirasi,
              sehingga pesan moralnya meresap lebih dalam ke dalam jiwa.
            </li>
            <li>
              <strong>Mudah Diingat dan Dikenang:</strong> Informasi yang
              disajikan dalam bentuk narasi cenderung lebih mudah diingat
              dibandingkan dengan daftar poin atau teori abstrak.
            </li>
            <li>
              <strong>Relevan Sepanjang Zaman:</strong> Meskipun berlatar masa
              lalu, pelajaran dari kisah-kisah ini bersifat universal dan abadi,
              relevan untuk setiap generasi dan kondisi manusia.
            </li>
            <li>
              <strong>Membentuk Imajinasi dan Refleksi:</strong> Kisah mendorong
              pendengar atau pembaca untuk berimajinasi dan merenungkan makna di
              balik peristiwa, memicu pemikiran kritis dan introspeksi.
            </li>
          </ul>
        </SectionContainer>

        {/* KESIMPULAN */}
        <SectionContainer index={7}>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b-2 pb-3 border-emerald-200">
            KESIMPULAN: Samudra Hikmah yang Tak Bertepi
          </h2>

          <p className="text-xl leading-relaxed text-gray-800">
            Kisah-kisah dalam Al-Qur’an jauh melampaui sekadar cerita pengantar
            tidur. Ia adalah peta jalan kehidupan, cermin refleksi diri, dan
            sumber inspirasi tak terbatas. Setiap lembarannya adalah undangan
            untuk merenung, mengambil pelajaran, dan mengaplikasikannya dalam
            kehidupan sehari-hari. Dengan menyelami kisah-kisah ini, kita tidak
            hanya memperkaya pengetahuan, tetapi juga menguatkan iman,
            memurnikan akhlak, dan menemukan arah menuju kebahagiaan sejati di
            dunia dan akhirat. Mari kita jadikan Al-Qur’an sebagai sahabat yang
            selalu membimbing dengan kisah-kisah penuh hikmahnya. Sebagaimana
            sabda Rasulullah ﷺ:
          </p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic bg-amber-50/70 p-4 rounded-lg shadow-inner text-gray-800 mt-4">
            “Aku tinggalkan kepada kalian dua perkara, kalian tidak akan
            tersesat selama berpegang teguh kepada keduanya, yaitu Kitabullah
            (Al-Qur'an) dan Sunnah Rasul-Nya.”
            <p className="text-sm mt-3 font-medium text-right text-amber-600">
              (HR. Malik)
            </p>
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
