import React from "react";
import Header from "../src/components/common/header/Header";
import { getRediff } from "../lib/wordpress/api";
import Footer from "../src/components/common/footer/Footer";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Rediffusions() {
  const { data } = useQuery(getRediff);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    console.log(slug);
  }, [slug]);

  // IF data is undefined return empty
  if (data == undefined) {
    return;
  }

  return (
    <div>
      <Header />
      <main className="mainRediffusions">
        <h1 className="title">Rediffusions</h1>
        {data.rediffusions.nodes.map((rediffusion) => {
          return (
            // <Link href={(rediffusion.slug)}>
              <div
                // onClick={() => setSlug(rediffusion.slug)}
                className="container-fluid rediffusions"
                key={rediffusion.id}
              >
                <div className="col-md-6 col-12 img">
                  <img
                    src={
                      rediffusion.rediffusionContent.imageMiseEnAvant.sourceUrl
                    }
                  />
                </div>
                <div className="col-md-6 col-12 content">
                  <h3>{rediffusion.title}</h3>
                  <span>{rediffusion.rediffusionContent.animateur}</span>
                  <p>{rediffusion.rediffusionContent.description}</p>
                </div>
              </div>
            // </Link>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
