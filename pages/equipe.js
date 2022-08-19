import React from "react";
import { getMember } from "../lib/wordpress/api";
import Footer from "../src/components/common/footer/Footer";
import Header from "../src/components/common/header/Header";
import { useQuery  } from "@apollo/client";

export default function Equipe() {
  const { data } = useQuery(getMember);

    // IF data is undefined return empty
    if (data == undefined) {
      return;
    }

  return (
    <div>
      <Header />
      <h1 className="title">Notre équipe</h1>
      <div className="container containerPortrait">
        <h2>Administrateur</h2>
        <div className="row">
        {data.membres.nodes.map((membre) => {
          if(membre.membreContent.role === 'admin')
          return (
            <div className="col-md-4 col-12 portrait">
              <img src={membre.membreContent.photo.sourceUrl}/>
              <h3>{membre.membreContent.nom}</h3>
            </div>
          )
        })}
        </div>
        <h2>Reste de l&apos;équipe</h2>
        <div className="row">
        {data.membres.nodes.map((membre) => {
          if(membre.membreContent.role === 'autre')
          return (
            <div className="col-md-4 col-12 portrait">
              <img src={membre.membreContent.photo.sourceUrl}/>
              <h3>{membre.membreContent.nom}</h3>
            </div>
          )
        })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
