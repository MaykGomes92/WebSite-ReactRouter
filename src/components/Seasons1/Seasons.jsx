import React from "react";
import Head from "../../Head";
import styles from "./Seasons.module.css";
import RagnarSeason from "../../img/poster-ragnar.jpg";
import RagnarSeason2 from "../../img/machado-viking.jpg";
import Buttons from "../Buttons";

const Seasons = () => {
  const [idButtons, setIdButtons] = React.useState("btnS1");

  function handleClickButtons({ target }) {
    setIdButtons(target.id);
  }

  const RenderButtons = () => {
    if (
      idButtons === "btnS1" ||
      idButtons === "btnS2" ||
      idButtons === "btnS3" ||
      idButtons === "btnS4" ||
      idButtons === "btnS5" ||
      idButtons === "btnS6" 
    ) {
      return (
        <div className={styles.Eps}>
          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              1. Ritos de passagem
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              2. A fúria dos homens do Norte
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              3. Despossuído
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              4. O julgamento
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              5 .Ataque de surpresa
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              6. A cerimônia dos mortos
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              7. O resgate do rei
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              8. Sacrifício
            </a>
          </div>

          <div>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              <img src={RagnarSeason} alt="" />
            </a>
            <a target="_blank" href="https://www.netflix.com/br/title/70301870">
              9. Quando tudo muda
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <section className={styles.sectionSeasons}>
      <Head title="Vikings | Seasons" />
      <div className={styles.flexSeason + ' animeLeft '}>
        <div>
          <img src={RagnarSeason} className={styles.ragnarSeason} alt="" />
        </div>
        <div className={styles.textSeason}>
          <div className={styles.buttonsSeason}>
            <Buttons func={handleClickButtons} id="btnS1" text="Season 1" />
            <Buttons func={handleClickButtons} id="btnS2" text="Season 2" />
            <Buttons id="btnS3" text="Season 3" />
            <Buttons id="btnS4" text="Season 4" />
            <Buttons id="btnS5" text="Season 5" />
            <Buttons id="btnS6" text="Season 6" />
          </div>
          <div className={styles.renderizarText}>
            <RenderButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seasons;
