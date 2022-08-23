import React, { useState, useEffect } from "react";
import Header from "../src/components/common/header/Header";
import { useQuery } from "@apollo/client";
import { getHoraire } from "../lib/wordpress/api";
// import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";

export default function Horaire() {
  const { data } = useQuery(getHoraire);
  const [day, setDay] = useState({});

  // IF data is undefined return empty
  if (data == undefined) {
    return;
  }
  console.log(day);
  const options = [
    { value: "lundi", label: "Lundi" },
    { value: "mardi", label: "Mardi" },
    { value: "mercredi", label: "Mercredi" },
    { value: "jeudi", label: "Jeudi" },
    { value: "vendredi", label: "Vendredi" },
    { value: "samedi", label: "Samedi" },
    { value: "dimanche", label: "Dimanche" },
  ];

  // const options = [
  //   "lundi",
  //   "mardi",
  //   "mercredi",
  //   "jeudi",
  //   "vendredi",
  //   "samedi",
  //   "dimanche",
  // ];

  // const defaultOption = options[0];

  return (
    <div>
      <Header />
      <h1 className="title">Horaire</h1>
      <div className="container">
        <Select
          options={options}
          placeholder="Choisir un jour..."
          onChange={setDay}
        />
        {/* <Dropdown
          options={options}
          onChange={(e) => setDay(e.target.value)}
          value={defaultOption}
          placeholder="Choisir un jour"
        /> */}
        <div className="row">
          {data.horaires.nodes.map((horaire) => {
            if (horaire.horaireContent.jour === day.value)
              return (
                <div className="col-12">
                  <h3>{horaire.horaireContent.nom}</h3>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
