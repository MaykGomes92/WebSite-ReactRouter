import React from 'react'
import styles from "../News/New.module.css";
import imgNewVall from '../../img/vik-val-logo.png'

const New = () => {
  return (
    <section className={styles.sectionNew}>
            <div className={styles.rightNew}>
                <div className={styles.titlesNew}>
                <h1>Vikings</h1>
                <h2>Valhalla</h2>

                <h3>Venha conheçar a nova série!</h3>
                </div>
            </div>
                <div className={styles.sectionImg}>
                    <img src={imgNewVall} className={styles.logoVall} alt="" />
                    <p>Vikings: Valhalla narra as aventuras dos vikings mais famosos da história, e aborda as tensões entre eles e a realeza da Inglaterra. Os conflitos chegam a um ponto de ruptura em razão da divergência entre as fés cristãs e pagãs</p>
                </div>
    </section>
  )
}

export default New