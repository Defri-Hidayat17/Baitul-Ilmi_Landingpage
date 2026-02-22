// components/sections/TestimonialsSection.tsx
"use client";

import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials-section"
      className="bg-primary-green py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-dark-green mb-4 text-center">
          Apa Kata Mereka?
        </h3>
        <p className="text-lg text-text-light mb-12 text-center max-w-2xl mx-auto">
          Dengar langsung dari para pelajar yang telah merasakan manfaat Baitul
          Ilmi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center">
            <Image
              src="/testimonial-avatar-1.png"
              alt="Avatar Pelajar 1"
              width={80}
              height={80}
              className="rounded-full mb-4 w-20 h-20 object-cover"
            />
            <p className="text-lg italic text-gray-700 mb-4">
              "Baitul Ilmi mengubah cara saya belajar PAI. Materi yang disajikan
              sangat jelas dan mudah dipahami. Saya jadi lebih semangat!"
            </p>
            <p className="font-semibold text-dark-green">
              - Ahmad Fauzi, Mahasiswa
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center">
            <Image
              src="/testimonial-avatar-2.png"
              alt="Avatar Pelajar 2"
              width={80}
              height={80}
              className="rounded-full mb-4 w-20 h-20 object-cover"
            />
            <p className="text-lg italic text-gray-700 mb-4">
              "Fitur-fitur interaktifnya sangat membantu. Sekarang saya bisa
              mengulang materi kapan saja dan di mana saja. Sangat
              direkomendasikan!"
            </p>
            <p className="font-semibold text-dark-green">
              - Siti Aminah, Pelajar
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col items-center">
            <Image
              src="/testimonial-avatar-3.png"
              alt="Avatar Pelajar 3"
              width={80}
              height={80}
              className="rounded-full mb-4 w-20 h-20 object-cover"
            />
            <p className="text-lg italic text-gray-700 mb-4">
              "Saya merasa lebih percaya diri dalam memahami ajaran agama
              setelah menggunakan Baitul Ilmi. Terima kasih atas platform yang
              luar biasa ini!"
            </p>
            <p className="font-semibold text-dark-green">
              - Budi Santoso, Pengajar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
