import React from "react";
import styles from './Player.module.scss';

export default function Player() {
  return (
    <div>
      <iframe className={styles.player}src="https://player.radioking.io/la-ptite-radio-leuze-en-hainaut/?c=%23000000&c2=%23ffffff&f=h&i=1&p=1&s=0&li=1&popup=1&plc=NaN&h=undefined&l=470&v=2"></iframe>
      <script
        type="text/javascript"
        src="https://player.radioking.io/scripts/iframe.bundle.js"
      ></script>
    </div>
  );
}
