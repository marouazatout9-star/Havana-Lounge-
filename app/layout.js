import "./globals.css";

export const metadata = {
  title: "Havana Chicha Lounge",
  description: "Bienvenue au paradis de la chicha 🍃",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
