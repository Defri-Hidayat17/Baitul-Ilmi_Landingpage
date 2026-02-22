// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo Baitul Ilmi dengan ikon Anda */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png" // Pastikan Anda memiliki logo.png di folder public/
            alt="Baitul Ilmi Logo"
            width={30}
            height={30}
            className="w-8 h-8 rounded-md"
          />
          <span className="text-2xl font-bold text-dark-green">
            Baitul Ilmi
          </span>
        </Link>

        {/* Navigasi Utama */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/#hero-section" // <--- DIUBAH UNTUK NAVIGASI YANG LEBIH STABIL
                className="text-text-light hover:text-dark-green font-medium transition-colors duration-200"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/#materi-overview-section" // <--- DIUBAH UNTUK NAVIGASI YANG LEBIH STABIL
                className="text-text-light hover:text-dark-green font-medium transition-colors duration-200"
              >
                Materi
              </Link>
            </li>
            <li>
              <Link
                href="/#referensi-video-section" // <--- DIUBAH UNTUK NAVIGASI YANG LEBIH STABIL
                className="text-text-light hover:text-dark-green font-medium transition-colors duration-200"
              >
                Referensi Video
              </Link>
            </li>
            <li>
              <Link
                href="/#about-section" // <--- DIUBAH UNTUK NAVIGASI YANG LEBIH STABIL
                className="text-text-light hover:text-dark-green font-medium transition-colors duration-200"
              >
                Tentang
              </Link>
            </li>
          </ul>
        </nav>

        {/* Ikon dan Tombol Aksi */}
        <div className="flex items-center space-x-4">
          {/* Ikon Pencarian (Contoh, bisa ditambahkan fungsionalitasnya nanti) */}
          <button className="text-text-light hover:text-dark-green p-2 rounded-full hover:bg-primary-green transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Ikon Menu (untuk mobile - perlu implementasi menu dropdown/sidebar terpisah) */}
          <button className="md:hidden text-text-light hover:text-dark-green p-2 rounded-full hover:bg-primary-green transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Tombol "Mulai Belajar" */}
          <Link href="/#materi-overview-section" passHref>
            {" "}
            {/* <--- DIUBAH UNTUK NAVIGASI YANG LEBIH STABIL */}
            <button className="bg-button-green text-white px-5 py-2 rounded-full font-medium hover:bg-dark-green transition-colors duration-200 hidden md:block">
              Mulai Belajar
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
