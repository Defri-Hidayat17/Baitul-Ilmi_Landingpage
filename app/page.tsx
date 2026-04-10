// app/page.tsx
"use client"; // Tetap sebagai Client Component karena menggunakan hooks dan AnimatedSection

import { useEffect, useRef, useState, useCallback } from "react";

// Import semua komponen section yang baru dibuat
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import OfferSection from "@/components/sections/OfferSection";
import MateriOverviewSection from "@/components/sections/MateriOverviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ReferensiVideoSection from "@/components/sections/ReferensiVideoSection";
import SupportSection from "@/components/sections/SupportSection";
import AboutSection from "@/components/sections/AboutSection";
import BiodataSection from "@/components/sections/biodata"; // Import BiodataSection

// Komponen untuk animasi muncul (fade-in dan slide-up)
const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
  id = "", // Tambahkan prop id
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string; // Tambahkan prop id
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
      } else {
        // Opsional: reset isVisible ke false jika elemen keluar dari viewport
        // setIsVisible(false);
      }
    },
    [delay]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the item is visible
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersect]);

  return (
    <div
      ref={ref}
      id={id} // Gunakan prop id di sini
      className={`${className} transition-all duration-500 ease-out ${
        // Durasi animasi 500ms
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Render semua komponen section, dibungkus dengan AnimatedSection */}
      {/* min-h-[calc(100vh-64px)] memastikan tinggi minimal satu layar penuh (dikurangi tinggi header) */}
      <AnimatedSection className="min-h-[calc(100vh-64px)] flex items-center">
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <StatsSection />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <OfferSection />
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <MateriOverviewSection />
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection delay={500}>
        <ReferensiVideoSection />
      </AnimatedSection>

      <AnimatedSection delay={600}>
        <SupportSection />
      </AnimatedSection>

      <AnimatedSection delay={700}>
        <AboutSection />
      </AnimatedSection>

      {/* 🔥 BIODATA SECTION BARU, DIATAS FOOTER (jika footer ada di layout atau di bawah ini) */}
      <AnimatedSection delay={800} id="biodata-section">
        {" "}
        {/* Tambahkan ID di sini */}
        <BiodataSection />
      </AnimatedSection>

      {/* Jika Anda memiliki komponen Footer, letakkan di sini setelah BiodataSection */}
      {/* <Footer /> */}
    </>
  );
}
