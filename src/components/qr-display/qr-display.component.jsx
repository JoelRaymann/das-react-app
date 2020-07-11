import React, { useState, useLayoutEffect } from "react";
import QRCode from "qrcode.react";

import "./qr-display.styles.scss";

function useQRSize() {
  const [qrsize, setQRSize] = useState(0);
  useLayoutEffect(() => {
    function updateQRSize() {
      setQRSize(Math.min(window.innerWidth, window.innerHeight) * 0.8);
    }
    window.addEventListener("resize", updateQRSize);
    updateQRSize();
    return () => window.removeEventListener("resize", updateQRSize);
  }, []);

  return qrsize;
}

function QRDisplayComponent({ value }) {
  const qrCodeSize = useQRSize();

  return (
    <div className="qr-display-container">
      <QRCode
        className="qr-code"
        width={qrCodeSize}
        height={qrCodeSize}
        value={value}
        renderAs="svg"
        level="H"
      />
    </div>
  );
}

export default QRDisplayComponent;
