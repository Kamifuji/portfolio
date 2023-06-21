import Image from "next/image";
import { styles } from "./KeyVisual.css";
import keyVisualImage from "../../../../public/dummy_key_visual.png";

export const KeyVisual = () => {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.h1}>Kamifuji-m</h1>
        <p className={styles.text}>Nanka setsumei ireru iikanjinoyastu</p>
      </div>
      <Image src={keyVisualImage} alt="ダミー" />
    </section>
  );
};
