import Image from 'next/image'
import { styles } from './KeyVisual.css'

export const KeyVisual = () => {
  return (
    <section className={styles.sectionTest}>
      <div className={styles.headline}>
        <h1 className={styles.h1}>Kamifuji-m</h1>
        <p className={styles.text}>Nanka setsumei ireru iikanjinoyastu</p>
      </div>
      <Image
        src="/image_2.png"
        alt="ダミー"
        width={684}
        height={385}
        className={styles.image}
      />
      <span className={styles.scroll}>scroll</span>
    </section>
  )
}
