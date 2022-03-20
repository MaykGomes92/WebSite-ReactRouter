import React from "react";
import styles from "../Header/Header.module.css";
import LogoVik from "../../img/logo-vik-png.png";
import { Link } from "react-router-dom";

import { TiThMenuOutline } from "react-icons/ti";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [menu, setMenu] = React.useState(false);

  function handleClick() {
    setMenu(!menu);
  } 


  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <button onClick={handleClick} className={styles.menuBurger}>
          {menu ? <CgClose /> : <TiThMenuOutline />}
        </button>

        <img className={styles.logoHeader} src={LogoVik} alt="Logo Vikings" />
        <ul className={menu ? styles.menuUl : styles.menNormal}>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/history">História</Link>
          </li>
          <li>
            <Link to="/seasons">Temporadas</Link>
          </li>
          <li>
            <Link to="/news">Novidades</Link>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Header;
