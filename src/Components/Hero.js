import React, { useEffect, useState } from "react";
import HeroImage from "../Assets/g.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment"); // Anda bisa mengganti ke "/informasi" jika lebih cocok
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Kewarganegaraan</p>
          <h2 className="text-title">
            SEJARAH KEWARGANEGARAAN REPUBLIK INDONESIA
          </h2>
          <p className="text-descritpion">
            Sejak kemerdekaan pada tahun 1945, Indonesia telah mengalami berbagai perubahan dalam kebijakan kewarganegaraan. Melalui platform ini, Anda dapat mempelajari perkembangan sejarah kewarganegaraan RI, peraturan terkait, serta hak dan kewajiban sebagai warga negara Indonesia.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Kuis Kewarganegaraan
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>275 Juta+</p>
              <p>Warga Negara Indonesia</p>
            </div>

            <div className="text-stats-container">
              <p>78+</p>
              <p>Tahun Sejarah Kewarganegaraan</p>
            </div>

            <div className="text-stats-container">
              <p>100+</p>
              <p>Regulasi dan Undang-Undang</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={HeroImage} alt="Indonesia" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
