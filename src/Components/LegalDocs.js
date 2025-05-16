import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Kewarganegaraan <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Informasi Umum</p>
        <p className="legal-description">
          Selamat datang di platform layanan administrasi kewarganegaraan kami. 
          Kami berkomitmen untuk menyediakan informasi dan layanan yang akurat 
          dan terpercaya terkait status kewarganegaraan, pendaftaran penduduk, 
          dan dokumen kependudukan.
        </p>

        <p className="legal-title">Kebijakan Privasi</p>
        <p className="legal-description">
          Kami sangat menghargai privasi Anda. Kebijakan Privasi kami menjelaskan 
          bagaimana data pribadi dan dokumen kewarganegaraan Anda dikumpulkan, 
          digunakan, dan dilindungi sesuai dengan peraturan perlindungan data yang berlaku.
        </p>

        <p className="legal-title">Syarat & Ketentuan</p>
        <p className="legal-description">
          Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan yang berlaku. 
          Termasuk ketentuan penggunaan data, kewajiban dalam proses pendaftaran, serta hak dan 
          tanggung jawab pengguna dan penyedia layanan.
        </p>

        <p className="legal-title">Proses Layanan</p>
        <p className="legal-description">
          Platform kami memfasilitasi proses administrasi kewarganegaraan, seperti pengajuan 
          dokumen, verifikasi data, dan konsultasi terkait status kependudukan. Kami berupaya 
          memberikan pelayanan yang cepat, akurat, dan transparan.
        </p>

        <p className="legal-title">Penanganan Darurat</p>
        <p className="legal-description">
          Dalam kasus darurat administrasi seperti perubahan status mendadak, kehilangan dokumen 
          penting, atau masalah hukum terkait kewarganegaraan, kami menyediakan panduan dan 
          kontak yang dapat membantu Anda segera menangani situasi tersebut.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013–2025 Kewarganegaraan+. Semua hak dilindungi dan diatur sesuai hukum yang berlaku.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
