import React from 'react'
import Head from '../../Head'
import styles from '../Home1/Home.module.css'

const Main = () => {
  return (
    <section className={styles.sectionText}>
      <Head title='Vikings | Home'/>
    <div className={styles.text + ' animeLeft '}>
      <h1>Vi<span>kings</span></h1>
      <h3>
      Vikings segue a vida de Ragnar Lothbrok (Travis Fimmel), o maior guerreiro da sua era. Lider de seu bando, com seus irmãos e sua família, ele ascende ao poder e torna-se Rei da tribo dos vikings. Além de guerreiro implacável, Ragnar segue as tradições nórdicas e é devoto dos deuses. As lendas contam que ele descende diretamente de Odin, o deus da guerra. 
      </h3>
    </div>
  </section>
  )
}

export default Main