// components/AOSInitializer.tsx
"use client"; // Penting: Ini adalah komponen client-side

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      // Opsi global yang bisa Anda sesuaikan
      // Misalnya:
      // offset: 200, // offset (in px) from the original trigger point
      // duration: 600, // values from 0 to 3000, with step 50ms
      // easing: 'ease-in-out', // default easing for AOS animations
      // once: true, // whether animation should happen only once - while scrolling down
    });
    // Jika Anda ingin me-refresh AOS setelah ada perubahan DOM (misalnya load gambar)
    // AOS.refresh();
  }, []);

  return null; // Komponen ini tidak merender apapun
};

export default AOSInitializer;
