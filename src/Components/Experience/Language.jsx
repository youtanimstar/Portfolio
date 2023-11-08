import React from "react";
import Style from "../../css/experience.module.css"

const Language = ({name, img}) => {
  return (
    <div className={Style.languageCard}>
      <img src={img} alt={name} />
      <div className={Style.name}>{name}</div>
    </div>
  );
};

export default Language;
