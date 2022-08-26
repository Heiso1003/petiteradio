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

  return (
    <div>
      <Header />
      <h1 className="title">Actualités</h1>
      <div className="container">
        <Select
          options={options}
          placeholder="Choisir un thème..."
          onChange={setFilter}
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

// const axios = require("axios");
// axios({
//   url: "https://thomas.techniques-graphiques.be/backend/graphql",
//   method: "post",
//   data: {
//     query: `
//       rediffusions {
//         nodes {
//           slug
//           title
//           rediffusionContent {
//             animateur
//             description
//             idVideo
//             emission
//             imageMiseEnAvant {
//               sourceUrl
//             }
//           }
//         }
//       }
//       `,
//   },
// }).then((result) => {
//   console.log(result.data);
// });
