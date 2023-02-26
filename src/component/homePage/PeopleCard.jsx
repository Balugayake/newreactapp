import React from "react";
import "./PeopleCard.scss";
function PeopleCard({ profiles }) {
  return (
    <div className="people-card">
      <img
        className="people-card__image"
        src={profiles.userImage}
        alt={profiles.name}
      />
      <h3 className="people-card__name">{profiles.name}</h3>
      <p className="people-card__status">
        {profiles.active ? "Active" : "Inactive"}
      </p>
    </div>
  );
}

export default PeopleCard;
