import React from "react";
import { Link } from "react-router-dom"; // Mengimpor Link
import Sidebar from "../components/Sidebar";
import "../styles/Home.css";
import foto1 from "../assets/foto1.png";

function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <main className="content">
        <div className="text-section">
          <h1>SELAMAT DATANG DI CHECKRUPA</h1>
          <h2>Tentang Layanan</h2>
          <p>
            Laman ini digunakan sebagai <strong>Quality Check</strong> sebuah barang jika meubel
            tersebut diinput sesuai dengan bentuk yang seharusnya.
          </p>
          <p>
            Agar memaksimalkan performa jika gambar tersebut digunakan pada image search engine.
          </p>
          <Link to="/quality-check">
            <button className="cta-button">Coba Sekarang</button>
          </Link>
        </div>
        <div className="image-section">
          <img src={foto1} alt="Quality Check Preview" className="feature-image" />
        </div>
      </main>
    </div>
  );
}

export default Home;
