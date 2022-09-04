import React, { useState } from "react";
import Footer from "../src/components/common/footer/Footer";
import Header from "../src/components/common/header/Header";
import { getPosts } from "../lib/wordpress/api";
import { useQuery } from "@apollo/client";
import Select from "react-select";

export default function Actualites() {
  const { data } = useQuery(getPosts);

  const [filter, setFilter] = useState({});

  // IF data is undefined return empty
  if (data == undefined) {
    return;
  }

  const options = [
    { value: "animateur", label: "Animateur" },
    { value: "journaux", label: "Journaux" },
    { value: "invite", label: "Invité" },
    { value: "evenement", label: "Evénement" },
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
      <h1 className="title">Actualités</h1>
      <div className="container">
        <Select
          options={options}
          placeholder="Choisir un thème..."
          onChange={setFilter}
          styles={colourStyles}
        />
        <div className="row">
          {data.posts.nodes.map((post) => {
            if (post.posts.sujet === filter.value)
              return (
                <div className="col-lg-4 col-12 cardNews" key={post.slug}>
                  <div className="cardNewsImg">
                    <img src={post.posts.image.sourceUrl} alt="" />
                  </div>
                  <div className="cardNewsHeader">
                    <span>{post.posts.date}</span>
                    <h3>{post.title}</h3>
                  </div>
                  <div className="cardNewsBody">
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  </div>
                </div>
              );
          })}
          {data.posts.nodes.map((post) => {
            if (filter.value === undefined)
              return (
                <div className="col-lg-4 col-12 cardNews" key={post.slug}>
                  <div className="cardNewsImg">
                    <img src={post.posts.image.sourceUrl} alt="" />
                  </div>
                  <div className="cardNewsHeader">
                    <span>{post.posts.date}</span>
                    <h3>{post.title}</h3>
                  </div>
                  <div className="cardNewsBody">
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  </div>
                </div>
              );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
