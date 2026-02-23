// components/sections/TestimonialsSection.tsx
"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react"; // Import useRef, useEffect, useState

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);

  // Data testimoni yang sudah ada
  const testimonials = [
    {
      id: 1,
      gender: "male",
      avatar: "/cowo1.png",
      quote:
        "Baitul Ilmi mengubah cara saya belajar PAI. Materi yang disajikan sangat jelas dan mudah dipahami. Saya jadi lebih semangat!",
      name: "Ahmad Fauzi, Mahasiswa",
    },
    {
      id: 2,
      gender: "female",
      avatar: "/cewe2.png",
      quote:
        "Fitur-fitur interaktifnya sangat membantu. Sekarang saya bisa mengulang materi kapan saja dan di mana saja. Sangat direkomendasikan!",
      name: "Siti Aminah, Pelajar",
    },
    {
      id: 3,
      gender: "male",
      avatar: "/cowo2.png",
      quote:
        "Saya merasa lebih percaya diri dalam memahami ajaran agama setelah menggunakan Baitul Ilmi. Terima kasih atas platform yang luar biasa ini!",
      name: "Budi Santoso, Pengajar",
    },
    {
      id: 4,
      gender: "female",
      avatar: "/cewe1.png",
      quote:
        "Pembelajaran di Baitul Ilmi sangat fleksibel. Saya bisa belajar sesuai ritme saya sendiri tanpa merasa tertekan. Sangat membantu untuk jadwal saya yang padat.",
      name: "Fatimah Zahra, Ibu Rumah Tangga",
    },
    {
      id: 5,
      gender: "male",
      avatar: "/cowo3.png",
      quote:
        "Saya sangat mengapresiasi kualitas materi dan penjelasan yang diberikan. Baitul Ilmi benar-benar menjadi jembatan ilmu yang sangat bermanfaat.",
      name: "Rahmat Hidayat, Pekerja Swasta",
    },
    {
      id: 6,
      gender: "female",
      avatar: "/cewe3.png",
      quote:
        "Antarmuka yang user-friendly membuat saya nyaman belajar. Saya bisa menemukan apa yang saya cari dengan mudah. Rekomendasi sekali!",
      name: "Nurul Hikmah, Mahasiswi",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollWidth, clientWidth } = scrollContainer;

      const overflows = scrollWidth > clientWidth;
      setIsContentOverflowing(overflows);

      // Jika konten meluap, geser ke tengah secara default
      if (overflows) {
        scrollContainer.scrollLeft = (scrollWidth - clientWidth) / 2;
      }
    }
  }, [testimonials.length]); // Dependensi pada jumlah testimoni jika berubah

  return (
    <section
      id="testimonials-section"
      className="bg-primary-green py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <h3
          className="text-4xl font-bold text-dark-green mb-4 text-center"
          data-aos="fade-up" // Efek AOS untuk judul
          data-aos-duration="800"
        >
          Apa Kata Mereka?
        </h3>
        <p
          className="text-lg text-text-light mb-12 text-center max-w-2xl mx-auto"
          data-aos="fade-up" // Efek AOS untuk deskripsi
          data-aos-delay="100"
          data-aos-duration="800"
        >
          Dengar langsung dari para pelajar yang telah merasakan manfaat Baitul
          Ilmi.
        </p>

        {/* Kontainer untuk scroll horizontal */}
        <div
          className={`flex overflow-x-auto snap-x snap-mandatory scroll-smooth custom-scrollbar pb-8 ${
            !isContentOverflowing ? "justify-center" : ""
          }`}
          ref={scrollContainerRef}
        >
          <div className="flex gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="
                  bg-white p-8 rounded-3xl shadow-md text-center // <--- PERUBAHAN DI SINI: rounded-lg menjadi rounded-3xl
                  flex flex-col items-center
                  w-80 flex-shrink-0 snap-start // Penting untuk scroll horizontal
                  transition-all duration-300
                  border-b-4 border-r-4 border-gray-300
                  hover:shadow-xl hover:-translate-y-2
                  relative overflow-hidden
                "
                data-aos="zoom-in" // Efek AOS untuk setiap kartu testimoni
                data-aos-delay={testimonial.id * 100 + 100} // Penundaan AOS berurutan
                data-aos-duration="800"
              >
                {/* subtle gradient hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-green-50 to-transparent"></div>

                <Image
                  src={testimonial.avatar}
                  alt={`Avatar Pelajar ${testimonial.id}`}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 w-20 h-20 object-cover relative z-10"
                />
                <p className="text-lg italic text-gray-700 mb-4 relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold text-dark-green relative z-10">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
