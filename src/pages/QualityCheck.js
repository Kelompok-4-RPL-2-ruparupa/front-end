import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/QualityCheck.css";
import Guide1 from "../assets/Guide1.png";
import Guide2 from "../assets/Guide2.png";

function QualityCheck() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hasil, setHasil] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const getKualitasLabel = (accuracy) => {
    const percentage = parseFloat(accuracy);
    if (percentage >= 90) return "Sangat Baik";
    if (percentage >= 70) return "Baik";
    if (percentage >= 50) return "Cukup Baik";
    if (percentage >= 30) return "Buruk";
    return "Sangat Buruk";
  };

  const handleStreamlitAccess = () => {
    window.open('https://ruparupa.streamlit.app/', '_blank');
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

          <div className="hal-yang-disiapkan">
            <h2>Hal yang perlu disiapkan</h2>
            <ol>
              <li>Persiapkan koneksi internet yang baik</li>
              <li>Unduh ataupun foto barang yang ingin dicek kualitasnya</li>
              <li>Size maksimal untuk foto yang diunggah adalah 200 Mb</li>
            </ol>
          </div>
        </div>

        <div className="cek-kualitas">
          {selectedImage && (
            <div className="preview">
              <img src={selectedImage} alt="Preview" />
            </div>
          )}
          <div className="button-container">
            <button
              className="cek-button streamlit-button"
              onClick={handleStreamlitAccess}
            >
              Cek Kualitas
            </button>
          </div>
        </div>

        {hasil && (
          <div className="hasil" id="hasil-section">
            <h2>Hasil</h2>
            <p>Jenis mebel: {hasil.jenisMebel}</p>
            <p>Akurasi: {hasil.akurasi}%</p>
            <p>Kualitas: {hasil.kualitas}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default QualityCheck;
