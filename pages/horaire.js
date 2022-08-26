import React, { useState } from "react";
import Header from "../src/components/common/header/Header";
import { useQuery } from "@apollo/client";
import { getHoraire } from "../lib/wordpress/api";
import Select from "react-select";

export default function Horaire() {
  const { data } = useQuery(getHoraire);

  const [day, setDay] = useState({});

  // IF data is undefined return empty
  if (data == undefined) {
    return;
  }
  const options = [
    { value: "lundi", label: "Lundi" },
    { value: "mardi", label: "Mardi" },
    { value: "mercredi", label: "Mercredi" },
    { value: "jeudi", label: "Jeudi" },
    { value: "vendredi", label: "Vendredi" },
    { value: "samedi", label: "Samedi" },
    { value: "dimanche", label: "Dimanche" },
  ];

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
        <div className="row">
          {data.horaires.nodes.map((horaire) => {
            if (horaire.horaireContent.jour === day.value)
              return (
                <div className="col-12 horaireContainer">
                  <img src={horaire.horaireContent.image.sourceUrl} />
                  <div className="rightside">
                    <h3>{horaire.horaireContent.nom}</h3>
                    <span>
                      {horaire.horaireContent.heureDeDebut}
                      {"h - "}
                      {horaire.horaireContent.heureDeFin}
                      {"h"}
                    </span>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
