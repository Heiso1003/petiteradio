import React, { useState } from "react";
import Header from "../src/components/common/header/Header";
import { useQuery } from "@apollo/client";
import { getHoraire } from "../lib/wordpress/api";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Horaire() {
  const { data } = useQuery(getHoraire);

  // IF data is undefined return empty
  if (data == undefined) {
    return;
  }

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

  // const [day, setDay] = useState("lundi");

  return (
    <div>
      <Header />
      <h1 className="title">Horaire</h1>
      <div className="container">
        <Dropdown
          options={options}
          onChange={console.log('changement')}
          value={defaultOption}
          placeholder="Choisir un jour"
        />
        <div className="row">
          {data.horaires.nodes.map((horaire) => {
            // if (horaire.horaireContent.jour === day)
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
