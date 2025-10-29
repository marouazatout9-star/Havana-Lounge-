import Image from "next/image";

export function QRCodeSection() {
  return (
    <div className="p-6 text-center">
      <h3 className="text-green-400 font-bold mb-4">Scannez pour accéder au menu</h3>
      <div className="mx-auto w-40 h-40">
        <Image 
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://havana-chicha.vercel.app"
          alt="QR Code Menu"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
