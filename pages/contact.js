import React from "react";
import Footer from "../src/components/common/footer/Footer";
import Header from "../src/components/common/header/Header";
import Image from "next/image";
// import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <div>
      <Header />
      <section className="contactHeader">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-12 map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.4872396201504!2d3.6226906159924233!3d50.599483184495575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2fd0b83f2ee21%3A0x476fa26a02676288!2sRue%20d&#39;Ath%2033%2C%207900%20Leuze-en-Hainaut!5e0!3m2!1sfr!2sbe!4v1654171306830!5m2!1sfr!2sbe"></iframe>
            </div>
            <div className="col-xl-6 col-12 content">
              <h1>Contact</h1>
              <h3>La P&apos;tite Radio</h3>
              <p>info@lapetiteradio.be</p>
              <p>Rue d&apos;Ath 33</p>
              <p>7900 Leuze-en-Hainaut</p>
              <h3>Centre culturel</h3>
              <div className="group">
                <div className="left">
                  <p>info@cultureleuze.be</p>
                  <a
                    href="https://www.cultureleuze.be/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>www.cultureleuze.be</p>
                  </a>
                  <p>069 66 24 67</p>
                </div>
                <div className="right">
                  <Image
                    src="/logoCCL.png"
                    alt="logoCCL"
                    width={128}
                    height={128}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="information bgBlack">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-12 content">
              <h2>Votre pub en direct ?</h2>
              <p>pub@lapetiteradio.be</p>
              <h2>Devenir animateur ?</h2>
              <p>info@lapetiteradio.be</p>
            </div>
            <div className="col-xl-6 col-12 img">
              <Image
                src="/contactImg.png"
                alt="logoCCL"
                width={675}
                height={675}
                // layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
