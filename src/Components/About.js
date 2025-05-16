import React from "react";
import HeroImage from "../Assets/doctor-group.png"; // Ganti gambar jika tersedia yang lebih relevan
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={HeroImage} alt="Ilustrasi Kewarganegaraan" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Tentang Kami</span>
        </h3>
        <p className="about-description">
          Selamat datang di platform edukasi Kewarganegaraan Indonesia. Kami hadir untuk memberikan informasi yang akurat, mudah dipahami, dan relevan mengenai sejarah, prinsip, dan peraturan kewarganegaraan di Republik Indonesia. Kami percaya bahwa pemahaman tentang hak dan kewajiban sebagai warga negara adalah fondasi dari masyarakat yang kuat dan demokratis.
        </p>

        <h4 className="about-text-title">Langkah Memahami Kewarganegaraan</h4>

        <SolutionStep
          title="jariPela Sejarah"
          description="Telusuri bagaimana konsep kewarganegaraan berkembang sejak kemerdekaan hingga saat ini, serta dampaknya terhadap kehidupan berbangsa dan bernegara."
        />

        <SolutionStep
          title="Pahami Hak & Kewajiban"
          description="Kenali hak-hak dasar yang dijamin oleh konstitusi serta kewajiban yang harus dipenuhi sebagai warga negara Indonesia."
        />

        <SolutionStep
          title="Akses Regulasi Terkait"
          description="Dapatkan akses mudah ke peraturan, undang-undang, dan kebijakan terbaru yang mengatur kewarganegaraan dan status hukum di Indonesia."
        />
      </div>
    </div>
  );
}

export default About;
