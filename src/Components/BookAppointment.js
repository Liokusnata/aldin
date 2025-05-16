import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Pancasila</span>
        </h3>
        <p className="ba-description">
          Pancasila adalah dasar negara Indonesia yang menjadi pedoman hidup
          berbangsa dan bernegara. Lima sila di dalamnya mencerminkan nilai-nilai
          luhur seperti ketuhanan, kemanusiaan, persatuan, musyawarah, dan
          keadilan sosial. Pancasila bukan hanya fondasi hukum, tetapi juga jiwa
          dari setiap tindakan dan keputusan dalam kehidupan bernegara.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Ketuhanan Yang Maha Esa
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Kemanusiaan yang Adil dan Beradab
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Persatuan Indonesia
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Keadilan Sosial bagi Seluruh Rakyat Indonesia
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Kuis Kewarganegaraan
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
