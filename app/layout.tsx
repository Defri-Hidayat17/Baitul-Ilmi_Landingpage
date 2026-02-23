"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOSInitializer from "@/components/AOSInitializer";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const bankDetails = {
    name: "DEFRI LUGAS HIDAYAT",
    bank: "Bank Mandiri",
    accountNumber: "1560016475867",
    logo: "/logo.png",
  };

  /* =============================
     COPY WITH TOAST
  ============================= */
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  };

  /* =============================
     GLOBAL EVENT
  ============================= */
  useEffect(() => {
    const handleOpenDonationModal = () => setShowDonationModal(true);
    window.addEventListener("openDonationModal", handleOpenDonationModal);

    return () =>
      window.removeEventListener("openDonationModal", handleOpenDonationModal);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSInitializer />
        <Header />
        <main>{children}</main>
        <Footer />

        {/* =============================
            DONATION MODAL
        ============================= */}
        <AnimatePresence>
          {showDonationModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Background cinematic blur */}
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
                onClick={() => setShowDonationModal(false)}
              />

              {/* ===== MODAL CARD ===== */}
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                className="
                  relative w-full max-w-md
                  rounded-[30px]
                  bg-white/90
                  backdrop-blur-xl
                  border border-white/40
                  shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                  overflow-hidden
                "
              >
                {/* Glow Light */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-primary-green/20 blur-3xl rounded-full pointer-events-none" />

                {/* CLOSE */}
                <button
                  onClick={() => setShowDonationModal(false)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
                >
                  ✕
                </button>

                {/* HEADER */}
                <div className="p-8 text-center">
                  <h4 className="text-3xl font-extrabold text-dark-green mb-6">
                    Dukung Baitul Ilmi
                  </h4>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center mb-6"
                  >
                    <div className="p-[3px] rounded-full bg-gradient-to-tr from-primary-green to-button-green shadow-lg">
                      <Image
                        src={bankDetails.logo}
                        alt="Logo"
                        width={90}
                        height={90}
                        className="rounded-full bg-white"
                      />
                    </div>
                  </motion.div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Kontribusi Anda membantu penyebaran ilmu Islam melalui
                    platform digital modern.
                  </p>
                </div>

                {/* CONTENT */}
                <div className="px-8 pb-8 space-y-5">
                  <Info label="Nama Penerima" value={bankDetails.name} />
                  <Info label="Bank" value={bankDetails.bank} />

                  <div className="bg-primary-green/10 rounded-2xl p-4 border border-primary-green/20">
                    <p className="text-xs text-gray-500 mb-2">Nomor Rekening</p>

                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xl font-bold text-dark-green tracking-widest">
                        {bankDetails.accountNumber}
                      </p>

                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() =>
                          copyToClipboard(bankDetails.accountNumber)
                        }
                        className="
                          bg-button-green
                          text-white
                          px-4 py-2
                          rounded-xl
                          text-sm
                          font-semibold
                          shadow-md
                        "
                      >
                        Salin
                      </motion.button>
                    </div>
                  </div>

                  <p className="text-sm text-center text-gray-600 pt-2">
                    🤍 Semoga menjadi amal jariyah yang terus mengalir.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =============================
            TOAST SUCCESS
        ============================= */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className="
                fixed bottom-8 left-1/2 -translate-x-1/2
                bg-dark-green text-white
                px-6 py-3 rounded-full
                shadow-xl z-[60]
                text-sm font-medium
              "
            >
              ✅ Nomor rekening berhasil disalin
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}

/* =============================
   REUSABLE INFO CARD
============================= */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 border">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  );
}
