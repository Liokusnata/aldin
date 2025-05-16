import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Info.css";

function InformationCard({ title, description, icon }) {
  return (
    <div className="info-card" role="region" aria-labelledby={`${title}-title`}>
      <div className="info-card-icon" aria-label={`${title} icon`} role="img">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4 className="info-card-title" id={`${title}-title`}>{title}</h4>
      <p className="info-card-description">{description}</p>
    </div>
  );
}

export default InformationCard;
