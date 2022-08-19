import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <ul className="listInline">
            <li>
              <Link href="/actualites">
                <a>Actualités</a>
              </Link>
            </li>
            <li>
              <Link href="/horaire">
                <a>Horaire</a>
              </Link>
            </li>
            <li>
              <Link href="/equipe">
                <a>Notre équipe</a>
              </Link>
            </li>
            <li>
              <Link href="/rediffusions">
                <a>Rediffusions</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/tutoriaux">
                <a>Tutoriaux</a>
              </Link>
            </li> */}
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <div className="logoFooter">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={165} height={112} />
            </Link>
          </div>
          <div className="footerContent">
            <p>
              Design et développement <br />
              DEBUYSSCHER Thomas
            </p>
            <p>
              info@lapetiteradio.be <br />
              33 rue d`&apos;Ath 7900 Leuze, Belgium
            </p>
          </div>
          <div className="footerFooter">
            <a href="https://www.facebook.com/PtiteRadioLeuze/" target="_blank" rel="noreferrer">
              <i className="icon-facebook"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank"rel="noreferrer">
              <i className="icon-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
