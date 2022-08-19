import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function DropDownHoraire() {
  const options = [
    "lundi",
    "mardi",
    "mecredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
  ];
  const defaultOption = options[0];
  return (
    <>
      <Dropdown
        options={options}
        onChange={this._onSelect}
        value={defaultOption}
        placeholder="Choisir un jour"
      />
      ;
    </>
  );
}
