import { useState } from "react";
import QRCode from "react-qr-code";

const QrGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerate = () => {
    setQrCode(input);
  };
  return (
    <>
      <div>
        <h1>QR Code Generator</h1>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerate}>
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          bgColor="#fff"></QRCode>
      </div>
    </>
  );
};

export default QrGenerator;
