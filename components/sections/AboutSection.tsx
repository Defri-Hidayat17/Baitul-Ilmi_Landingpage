// components/sections/AboutSection.tsx
"use client";

const AboutSection = () => {
  return (
    <section id="about-section" className="bg-primary-green py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 shadow-md text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-green mb-8">
            Tentang Baitul Ilmi
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p className="leading-relaxed">
              Baitul Ilmi adalah platform inovatif yang didedikasikan untuk
              menyebarkan ilmu dan praktik Islam melalui teknologi modern. Kami
              berkomitmen untuk menyediakan sumber daya Islami yang mudah
              diakses, relevan, dan berkualitas tinggi bagi umat Muslim di
              seluruh dunia.
            </p>
            <p className="leading-relaxed">
              Melalui aplikasi dan website kami, Anda dapat menemukan koleksi
              doa, ruqyah, waktu shalat, artikel blog, dan banyak lagi, semuanya
              dirancang untuk memperkuat iman dan memfasilitasi ibadah
              sehari-hari.
            </p>
            <p className="leading-relaxed">
              Kami percaya bahwa teknologi dapat menjadi jembatan untuk
              mendekatkan diri kepada Allah SWT dan memperkaya kehidupan
              spiritual. Bergabunglah dengan kami dalam perjalanan ini untuk
              belajar, tumbuh, dan menginspirasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
