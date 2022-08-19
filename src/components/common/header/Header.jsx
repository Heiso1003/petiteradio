import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function showMenu() {
  const element = document.getElementById("responsiveMenu");
  element.classList.toggle("active");
}

export default function Header() {
  return (
    <>
      <header className="mainNavigation">
        <Link href="/">
          <Image src="/logoBlack.svg" alt="logo" width={165} height={112} />
        </Link>
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

        <ul className="responsiveMenu" id="responsiveMenu">
          <li>
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
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
        <a href="#" className="burger" onClick={showMenu}>
          <Image src="/menu.svg" alt="burger" width={50} height={50} />
        </a>
      </header>
    </>
  );
}
