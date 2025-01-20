import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/QualityCheck.css";
import Guide1 from "../assets/Guide1.png";
import Guide2 from "../assets/Guide2.png";

function QualityCheck() {
  const handleRuparupaRedirect = () => {
    window.open('https://www.ruparupa.com', '_blank');
  };

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
              <li>Size maksimal untuk foto yang diunggah adalah 5 Mb</li>
              <li>Akses ruparupa dari tombol di bawah ini</li>
            </ol>
          </div>
          <button className="ruparupa-button" onClick={handleRuparupaRedirect}>
            Kunjungi Ruparupa
          </button>
        </div>
      </main>
    </div>
  );
}
