// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // Data untuk ikon sosial media
  const socialLinks = [
    {
      href: "https://wa.me/6289509371705",
      icon: "/wa.svg",
      alt: "WhatsApp",
    },
    {
      href: "https://www.instagram.com/defrilugashidayat",
      icon: "/ig.svg",
      alt: "Instagram",
    },
    {
      href: "https://www.facebook.com/DefriLugasHidayat",
      icon: "/fb.svg",
      alt: "Facebook",
    },
    {
      href: "https://www.tiktok.com/@deeyatt17",
      icon: "/tiktok.svg",
      alt: "TikTok",
    },
    {
      href: "https://www.youtube.com/@DeeYatt17",
      icon: "/yt.svg",
      alt: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#0f2f2a] text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* ================= LOGO + DESC ================= */}
        <div className="space-y-4 text-center md:text-left">
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start gap-3"
          >
            <Image
              src="/logo.png"
              alt="Baitul Ilmi Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold tracking-wide">
              Baitul Ilmi
            </span>
          </Link>

          <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Platform pembelajaran Pendidikan Agama Islam modern yang membantu
            memahami Al-Qur'an, Hadist, dan ilmu Islam secara interaktif,
            terstruktur, dan mudah diakses.
          </p>
        </div>

        {/* ================= NAVIGASI ================= */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-4">Navigasi</h4>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <Link
                href="/#hero-section"
                className="hover:text-white transition"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/#materi-overview-section"
                className="hover:text-white transition"
              >
                Materi
              </Link>
            </li>
            <li>
              <Link
                href="/#referensi-video-section"
                className="hover:text-white transition"
              >
                Referensi Video
              </Link>
            </li>
            <li>
              <Link
                href="/#about-section"
                className="hover:text-white transition"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= KONTAK (Informasi Baru) ================= */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-4">Informasi Mahasiswa</h4>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li>Defri Lugas Hidayat</li>
            <li>(312310272)</li>
            <li>Teknik Informatika</li>
            <li>Universitas Pelita Bangsa</li>
          </ul>
        </div>

        {/* ================= SOCIAL ================= */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-4">Ikuti Kami</h4>

          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index} // Menggunakan index sebagai key untuk daftar statis ini
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 transition
                           w-10 h-10 flex items-center justify-center
                           rounded-lg" // Gaya yang konsisten untuk semua ikon
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  width={24} // Ukuran ikon yang konsisten
                  height={24} // Ukuran ikon yang konsisten
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-white/10" />

      {/* ================= COPYRIGHT ================= */}
      <div className="text-center text-sm text-gray-400 py-6">
        © {new Date().getFullYear()} DefriLugasHidayat|Baitul Ilmi — Platform
        Pembelajaran Pendidikan Agama Islam. Seluruh hak cipta dilindungi
        undang-undang.
      </div>
    </footer>
  );
};

export default Footer;
