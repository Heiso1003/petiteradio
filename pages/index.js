import React from "react";
import Footer from "../src/components/common/footer/Footer";
import Header from "../src/components/common/header/Header";
import { getHome } from "../lib/wordpress/api";
import { useQuery  } from "@apollo/client";
import SliderNews from "../src/components/common/sliderNews/SliderNews";

export default function Home() {
  const { data } = useQuery(getHome);

  // IF data is undefined return empty
  if (data == undefined) {
    return;
  }

  return (
    <div>
      <Header />
      {data.homepages.nodes.map((home) => {
        return (
          <div key={home.homePage.titre}>
            <section className="herobanner">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-12 leftSide">
                    <img
                      src={home.homePage.imageHerobanner.sourceUrl}
                      alt="herobanner"
                      className="herobannerImg"
                    />
                  </div>
                  <div className="col-xl-6 col-12 rightSide">
                    <h1>{home.homePage.titre}</h1>
                    <p>{home.homePage.description}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="news">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-12 leftSide">
                    <h1>{home.homePage.titreSectionNews}</h1>
                    <p>{home.homePage.contentSectionNews}</p>
                    {/* //TODO: Replace btn par compostant btn */}
                    <button className="btn">Actualités</button>
                  </div>
                  <div className="col-xl-6 col-12 rightSide">
                    <SliderNews />
                  </div>
                </div>
              </div>
            </section>

            <section className="videoListen bgBlack">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-12 leftSide">
                    <h1>{home.homePage.titreSectionVideo}</h1>
                    <p>{home.homePage.contentSectionVideo}</p>
                    <ul>
                      <li className="circle">{home.homePage.methode1}</li>
                      <li className="circle">{home.homePage.methode2}</li>
                    </ul>
                  </div>
                  <div className="col-xl-6 col-12 rightSide">
                    <iframe
                      src={
                        "https://www.youtube.com/embed/" + home.homePage.idVideo
                      }
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
