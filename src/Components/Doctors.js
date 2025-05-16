import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Anggota Kelompok Kami</span>
        </h3>

        <p className="dt-description">
          Berikut adalah anggota tim pengembang website ini. Kami bekerja sama dengan semangat dan komitmen untuk menghasilkan proyek yang bermanfaat dan berkualitas.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Aldi Fernandes, S.T."
          role="Ketua Kelompok"
          description="G1C024097"
          stars="5.0"
         
        />
        <DoctorCard
          img={profile2}
          name="hery ado saputra hati, S.T."
          role="Anggota Kelompok"
          description="G1C024017"
          stars="5.0"
          
        />
        <DoctorCard
          img={profile3}
          name="M.Zaki Saputra,S.T."
          role="Anggota Kelompok"
          description="G1C024067"
          stars="5.0"

        />
        <DoctorCard
          img={profile4}
          name="ahmad reza fahlevi, S.T."
          role="Anggota Kelompok"
          description="G1C024029"
          stars="5.0"
         
        />
      </div>
    </div>
  );
}

export default Doctors;
