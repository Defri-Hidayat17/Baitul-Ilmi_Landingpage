// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-green text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kolom 1: Logo dan Deskripsi Singkat */}
        <div className="col-span-full md:col-span-1 text-center md:text-left">
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start space-x-2 mb-4"
          >
            <Image
              src="/logo.png" // Pastikan Anda memiliki logo.png di folder public/
              alt="Baitul Ilmi Logo"
              width={30}
              height={30}
              className="w-8 h-8 rounded-md"
            />
            <span className="text-2xl font-bold font-inter">
              {" "}
              {/* <--- Ditambahkan font-inter */}
              Baitul Ilmi
            </span>
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto md:mx-0">
            Platform pembelajaran Pendidikan Agama Islam yang interaktif dan
            terstruktur untuk pemahaman mendalam.
          </p>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Navigasi Cepat</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/#hero-section" // Menggunakan hash link yang benar
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/#materi-overview-section" // Menggunakan hash link yang benar
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Materi
              </Link>
            </li>
            <li>
              <Link
                href="/#referensi-video-section" // Menggunakan hash link yang benar
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Referensi Video
              </Link>
            </li>
            <li>
              <Link
                href="/#about-section" // Menggunakan hash link yang benar
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Tentang
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Sumber Daya */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Sumber Daya</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#" // Ganti dengan link yang sesuai jika ada
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#" // Ganti dengan link yang sesuai jika ada
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link
                href="#" // Ganti dengan link yang sesuai jika ada
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </Link>
            </li>
            <li>
              <Link
                href="#" // Ganti dengan link yang sesuai jika ada
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Bantuan
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Ikuti Kami (Dengan Link Media Sosial Anda dan tempat SVG) */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* WhatsApp */}
            <Link
              href="https://wa.me/6289509371705" // Menggunakan format internasional (+62)
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2" // Diperbaiki dari stroke-width
                strokeLinecap="round" // Diperbaiki dari stroke-linecap
                strokeLinejoin="round" // Diperbaiki dari stroke-linejoin
                className="lucide lucide-whatsapp"
              >
                <path d="M12 10.9c2.24 0 4.06 1.82 4.06 4.06 0 2.24-1.82 4.06-4.06 4.06a4.06 4.06 0 0 1-4.06-4.06c0-2.24 1.82-4.06 4.06-4.06Z" />
                <path d="M19.07 4.93a10 10 0 0 0-16.28 11.23l-1.33 4.41 4.51-1.26a10 10 0 0 0 11.09 1.45l.93-1.07a10 10 0 0 0 1.05-13.88Z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/defrilugashidayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2" // Diperbaiki
                strokeLinecap="round" // Diperbaiki
                strokeLinejoin="round" // Diperbaiki
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/DefriLugasHidayat" // Asumsi ini adalah URL profil Anda
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2" // Diperbaiki
                strokeLinecap="round" // Diperbaiki
                strokeLinejoin="round" // Diperbaiki
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>

            {/* TikTok */}
            <Link
              href="https://www.tiktok.com/@deeyatt17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2" // Diperbaiki
                strokeLinecap="round" // Diperbaiki
                strokeLinejoin="round" // Diperbaiki
                className="lucide lucide-tiktok"
              >
                <path d="M21 8V2h-7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v-6a2 2 0 0 0-2-2h-3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3Z" />
                <path d="M12 22a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5Z" />
              </svg>
            </Link>

            {/* Gmail */}
            <Link
              href="mailto:defrilugas46@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2" // Diperbaiki
                strokeLinecap="round" // Diperbaiki
                strokeLinejoin="round" // Diperbaiki
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bagian Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Baitul Ilmi. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
