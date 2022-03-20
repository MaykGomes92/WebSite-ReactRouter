import React from 'react'
import styles from '../History/History.module.css'
import VikingBlood from '../../img/vikings-blood.png'
import Head from '../../Head'

const HistorySection = () => {
  return (
    <section className={styles.sectionHistory}>
      <Head title='Vikings | History'/>
        <article className='animeLeft'>
          <img src={VikingBlood} alt="Logo vikings" />
          <h3 className={styles.title}>Vikings</h3>
          <div className={styles.especificacao}>
            <span>2013</span>
            <span>16</span>
            <span>6 temporadas</span>
            <span>Série de ação e aventura</span>
          </div>
          <p>Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.</p>
          <div className={styles.atores}>
            <h2>Estrelando:</h2>
            <span>Travis Fimmel, Katheryn Winnick, Clive Standen</span>
          </div>
          <div className={styles.criacao}>
            <h2>Criação:</h2>
            <span>Michael Hirst</span>
          </div>
        </article>
    </section>
  )
}

export default HistorySection