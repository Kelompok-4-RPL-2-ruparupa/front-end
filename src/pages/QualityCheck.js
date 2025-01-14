import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/QualityCheck.css";
import Guide1 from "../assets/Guide1.png";
import Guide2 from "../assets/Guide2.png";

function QualityCheck() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasil, setHasil] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCekKualitas = () => {
    setIsChecking(true);
    setTimeout(() => {
      const jenisMebel = "Meja";
      const akurasi = Math.floor(Math.random() * 100) + 1;
      const kualitas = Math.floor(Math.random() * 5) + 1;

      const result = {
        jenisMebel,
        akurasi,
        kualitas,
      };
      setHasil(result);
      setIsChecking(false);
    }, 2000); 
  };

  useEffect(() => {
    if (hasil) {
      const hasilSection = document.getElementById("hasil-section");
      if (hasilSection) {
        hasilSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [hasil]); 

  return (
    <div className="quality-check-container">
      <Sidebar />
      <main className="content">
        <h1>QUALITY CHECK</h1>
        <div className="cara-pemakaian">
        <h2 className="cara-pemakaian-title">Cara Pemakaian</h2>
    <div className="guides-container">
        <div className="guide">
            <img src={Guide1} alt="Panduan 1" className="guide-image" />
    </div>
        <div className="guide">
            <img src={Guide2} alt="Panduan 2" className="guide-image" />
        </div>
        </div>
    </div>

        <div className="cek-kualitas">
          <h2>Cek Kualitas Meubel</h2>
          <div className="upload-section">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <label htmlFor="fileInput" className="file-label">
              {isChecking ? "Memeriksa..." : "Pilih File"}
            </label>
            <span>
              {selectedImage ? "Gambar Dipilih" : "Tidak ada File yang Dipilih"}
            </span>
          </div>
          {selectedImage && (
            <div className="preview">
              <img src={selectedImage} alt="Preview" />
            </div>
          )}
          <button className="cek-button" onClick={handleCekKualitas}>
            {isChecking ? "Sedang Memeriksa..." : "Cek Kualitas"}
          </button>
        </div>

        {hasil && (
          <div className="hasil" id="hasil-section">
            <h2>Hasil</h2>
            <p>Jenis mebel: {hasil.jenisMebel}</p>
            <p>Akurasi: {hasil.akurasi}%</p>
            <p>Kualitas: {hasil.kualitas}/5</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default QualityCheck;
