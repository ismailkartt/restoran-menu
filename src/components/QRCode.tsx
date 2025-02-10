import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCode = () => {
  const currentUrl = window.location.href;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 animate-fade-in">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Hoş Geldiniz</h3>
          <p className="text-gray-600 mb-6">
            Menümüzü görüntülemek için QR kodu tarayın veya bekleyin
          </p>
          <div className="bg-gray-50 p-6 rounded-xl mb-4">
            <QRCodeSVG 
              value={currentUrl}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
          <p className="text-sm text-gray-500">
            QR kod birkaç saniye içinde otomatik olarak kapanacaktır
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCode;