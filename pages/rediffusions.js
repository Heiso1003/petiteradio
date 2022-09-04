import React from "react";
import Header from "../src/components/common/header/Header";
import { getRediff } from "../lib/wordpress/api";
import Footer from "../src/components/common/footer/Footer";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import Select from "react-select";

export default function Rediffusions() {
  const { data } = useQuery(getRediff);

  const [filter, setFilter] = useState({});

  // IF data is undefined return empty
  if (data == undefined) {
    return;
  }

  const options = [
    { value: "Alain Baix", label: "Alain Baix" },
    { value: "Michel François", label: "Michel François" },
    { value: "Lucette Jean", label: "Lucette Jean" },
  ];

  const colourStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "orange" : null,
        color: "#333333",
      };
    },
  };

  return (
    <div>
      <Header />
      <main className="mainRediffusions">
        <h1 className="title">Rediffusions</h1>
        <div className="container">
          <Select
            options={options}
            placeholder="Choisir un animateur..."
            onChange={setFilter}
            styles={colourStyles}
            className="dropdown"
          />
        </div>
        {data.rediffusions.nodes.map((rediffusion) => {
          if (rediffusion.rediffusionContent.animateur === filter.value)
            return (
              <div
                className="container-fluid rediffusions"
                key={rediffusion.id}
              >
                <div className="col-md-6 col-12 img">
                  <iframe
                    src={
                      "https://www.youtube.com/embed/" +
                      rediffusion.rediffusionContent.idVideo
                    }
                  ></iframe>
                </div>
                <div className="col-md-6 col-12 content">
                  <h3>{rediffusion.title}</h3>
                  <span>{rediffusion.rediffusionContent.animateur}</span>
                  <p>{rediffusion.rediffusionContent.description}</p>
                </div>
              </div>
            );
        })}
        {data.rediffusions.nodes.map((rediffusion) => {
          if (filter.value === undefined)
            return (
              <div
                className="container-fluid rediffusions"
                key={rediffusion.id}
              >
                <div className="col-md-6 col-12 img">
                  <iframe
                    src={
                      "https://www.youtube.com/embed/" +
                      rediffusion.rediffusionContent.idVideo
                    }
                  ></iframe>
                </div>
                <div className="col-md-6 col-12 content">
                  <h3>{rediffusion.title}</h3>
                  <span>{rediffusion.rediffusionContent.animateur}</span>
                  <p>{rediffusion.rediffusionContent.description}</p>
                </div>
              </div>
            );
        })}
      </main>
      <Footer />
    </div>
  );
}
