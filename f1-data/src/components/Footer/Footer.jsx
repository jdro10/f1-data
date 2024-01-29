import React from "react";
import { GiCheckeredFlag } from "react-icons/gi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <aside>
        <GiCheckeredFlag size="40" />
        <p class="font-bold">F1 DATA</p>
      </aside>
      <nav>
        <p>API</p>
        <a href="http://ergast.com/mrd/">Racing data provided by Ergast API</a>
        <p>Driver and circuit information provided by Wikipedia API.</p>
      </nav>
      <nav>
        <p>DISCLAIMER</p>
        <p>This website was developed for learning and educational purposes only.</p>
        <p>Data displayed may be inaccurate. By using this website you acknowledge this.</p>
        <p>The author disclaims all responsibility for any loss or damage arising from the use of this website.</p>
        <p class="max-w-xl">
          This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE,
          FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One
          Licensing B.V.
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
