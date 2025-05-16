import { faIdCard, faFileSignature, faUsers, faGavel, faLandmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../Styles/Info.css";
import InformationCard from "./InformationCard";

function Info() {
  return (
    <div className="citizenship-section" id="citizenship-services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Tentang Kewarganegaraan</span>
        </h3>

        <p className="info-description">
          Kami menyediakan informasi dan layanan terkait kewarganegaraan untuk membantu Anda memahami hak, kewajiban, serta proses administratif yang diperlukan. Dapatkan panduan lengkap mulai dari pendaftaran, pengajuan dokumen, hingga perlindungan hukum sebagai warga negara.
        </p>
      </div>

      <div className="info-cards-content">
        <div id="citizenship-registration">
          <InformationCard
            title="Pendaftaran Kewarganegaraan"
            description="Proses pendaftaran kewarganegaraan dengan panduan langkah demi langkah, termasuk persyaratan dan dokumen yang dibutuhkan agar Anda dapat terdaftar secara resmi sebagai warga negara."
            icon={faIdCard}
          />
        </div>

        <div id="document-processing">
          <InformationCard
            title="Pengurusan Dokumen"
            description="Layanan pengurusan dokumen penting seperti KTP, paspor, akta kelahiran, dan dokumen kewarganegaraan lainnya agar Anda dapat melakukan proses administrasi dengan mudah dan cepat."
            icon={faFileSignature}
          />
        </div>

        <div id="citizen-rights">
          <InformationCard
            title="Hak dan Kewajiban Warga Negara"
            description="Penjelasan lengkap mengenai hak-hak yang Anda miliki serta kewajiban yang harus dipenuhi sebagai warga negara demi menjaga harmonisasi dan kesejahteraan masyarakat."
            icon={faUsers}
          />
        </div>

        <div id="legal-protection">
          <InformationCard
            title="Perlindungan Hukum"
            description="Informasi mengenai perlindungan hukum bagi warga negara, termasuk mekanisme pengaduan dan pendampingan hukum yang dapat Anda akses."
            icon={faGavel}
          />
        </div>

        <div id="government-services">
          <InformationCard
            title="Layanan Pemerintah"
            description="Akses berbagai layanan pemerintah yang diperuntukkan bagi warga negara, seperti bantuan sosial, program pendidikan, dan lainnya untuk mendukung kesejahteraan Anda."
            icon={faLandmark}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
