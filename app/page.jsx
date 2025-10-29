"use client";

import Image from "next/image";
import { CubanBorder } from "../components/CubanBorder";
import { MenuSection } from "../components/MenuSection";
import { QRCodeSection } from "../components/QRCodeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-teal-700 to-green-600 opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="mb-8 flex justify-center">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_3905-1761760311375.png?width=8000&height=8000&resize=contain"
                alt="Le Havana Logo"
                width={400}
                height={400}
                className="w-64 h-64 md:w-96 md:h-96 object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-4 tracking-wider uppercase" 
                style={{ fontFamily: 'serif', textShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}>
              HAVANA
            </h1>
            <p className="text-2xl md:text-3xl text-green-300 mb-8 uppercase tracking-widest">
              Chicha Lounge
            </p>

            <div className="max-w-4xl mx-auto mb-8">
              <CubanBorder className="bg-gradient-to-br from-gray-900 to-black">
                <div className="aspect-video bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574790398664-0cb03682ed1c?w=1200')] bg-cover bg-center opacity-20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-green-400 text-lg font-semibold">Découvrez nos chichas</p>
                    <p className="text-green-300 text-sm mt-2">Vidéo de présentation</p>
                  </div>
                </div>
              </CubanBorder>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="container mx-auto px-4 py-12">
        <CubanBorder className="bg-gradient-to-br from-gray-900 to-black mb-12">
          <MenuSection
            title="CHICHA AVEC BOISSON"
            subtitle="TOUTE LES CHICHA À 10€!"
            items={[
              { name: "MI AMOR ❤️", price: "" },
              { name: "HAWAÏ 🥥", price: "" },
              { name: "LOVE 66 💕", price: "" },
              { name: "ICE LEMON 🍋", price: "" },
              { name: "SWISS BONBON 🍬", price: "" },
              { name: "MENTHE 🌿", price: "" },
              { name: "DOUBLE POMME 🍎", price: "" },
              { name: "FRAMBOISE 🍓", price: "" },
              { name: "ABSOLUTE ZERO ❄️", price: "" },
            ]}
          />
          <p className="text-center text-white/70 text-sm mt-4">
            (TETE PLATE, BROHOOD, KALOUD, MADRID, QUASAR)
          </p>
        </CubanBorder>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <CubanBorder className="bg-gradient-to-br from-gray-900 to-black">
            <MenuSection
              title="SALÉ"
              priceColumns={{ label1: "SEUL", label2: "AVEC BOISSON" }}
              items={[
                { name: "PANINI:" },
                { name: "SURIMI", price: "3.50€ / 5€" },
                { name: "THON MAYONNAISE", price: "3.50€ / 5€" },
                { name: "THON PIQUANT", price: "3.50€ / 5€" },
                { name: "POULET", price: "3.50€ / 5€" },
                { name: "POULET ANDALOUSE", price: "3.50€ / 5€" },
                { name: "POULET PIQUANT", price: "3.50€ / 5€" },
                { name: "POULET CURRY", price: "3.50€ / 5€" },
                { name: "FILET AMÉRICAIN", price: "3.50€ / 5€" },
                { name: "" },
                { name: "CROC MONSIEUR", price: "3€ / 4.50€" },
              ]}
            />
          </CubanBorder>

          <CubanBorder className="bg-gradient-to-br from-gray-900 to-black">
            <MenuSection
              title="SUCRÉ"
              priceColumns={{ label1: "SEUL", label2: "AVEC BOISSON" }}
              items={[
                { name: "PANINI:" },
                { name: "NUTELLA", price: "1.50€ / 2.50€" },
                { name: "KINDER BUENO", price: "1.50€ / 2.50€" },
                { name: "SPÉCULOOS", price: "1.50€ / 2.50€" },
                { name: "BEURRE DE CACAHUÈTE", price: "1.50€ / 2.50€" },
                { name: "" },
                { name: "TIRAMISU", price: "2.50€" },
                { name: "SPÉCULOOS", price: "" },
                { name: "KINDER BUENO / WHITE", price: "" },
                { name: "OREO", price: "" },
                { name: "" },
                { name: "TARTE AU DAIM", price: "2.50€" },
                { name: "GLACE", price: "2€" },
              ]}
            />
          </CubanBorder>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <CubanBorder className="bg-gradient-to-br from-gray-900 to-black">
            <MenuSection
              title="BOISSON FROIDE"
              items={[
                { name: "CANETTE", price: "2€" },
                { name: "BOUTEILLE 50CL", price: "2.50€" },
                { name: "EAU", price: "1€" },
                { name: "SIROP", price: "1.50€" },
                { name: "CAPRI-SUN", price: "1€" },
                { name: "GRAND CAPRI-SUN", price: "2€" },
                { name: "REDBULL", price: "2.50€" },
                { name: "GRAND REDBULL", price: "3€" },
                { name: "MILKSHAKE", price: "5€" },
                { name: "KINDER BUENO / WHITE" },
                { name: "OREO" },
                { name: "SPÉCULOOS" },
                { name: "RAFFAELLO" },
                { name: "M&M'S" },
                { name: "BOUNTY" },
                { name: "SCHOKO-BONS" },
                { name: "KINDER MAXI" },
                { name: "MALTESER" },
                { name: "GALAK" },
                { name: "NAPPAGE: CHOCO, CARAMEL OU FRUIT ROUGE" },
              ]}
            />
          </CubanBorder>

          <div className="space-y-8">
            <CubanBorder className="bg-gradient-to-br from-gray-900 to-black">
              <MenuSection
                title="BOISSON CHAUDE"
                items={[
                  { name: "CAFÉ AU LAIT", price: "1.80€" },
                  { name: "EXPRESSO", price: "1.20€" },
                  { name: "EXPRESSON LONG", price: "1.50€" },
                  { name: "THÉIÈRE THÉ MAROCAIN", price: "5€" },
                ]}
              />
            </CubanBorder>

            <CubanBorder className="bg-gradient-to-br from-gray-900 to-black">
              <MenuSection
                title="PETITE FAIM"
                items={[
                  { name: "PETIT PAQUET DE CHIPS", price: "1.50€" },
                  { name: "GRAND PAQUET DE CHIPS", price: "3€" },
                  { name: "KINDER BUENO / WHITE", price: "1.50€" },
                ]}
              />
            </CubanBorder>
          </div>
        </div>

        <CubanBorder className="bg-gradient-to-br from-gray-900 to-black">
          <QRCodeSection />
        </CubanBorder>
      </section>

      <footer className="border-t-2 border-green-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-400 text-lg font-semibold mb-2">HAVANA CHICHA LOUNGE</p>
          <p className="text-green-300 text-sm">Since 2024</p>
          <p className="text-white/50 text-xs mt-4">Bienvenue au paradis de la chicha</p>
        </div>
      </footer>
    </div>
  );
}
