import Image from "next/image";
import { styles } from "./ArticleCard.css";

export const ArticleCard = () => {
  return (
    <article>
      <Image
        src="/dummy_article.png"
        alt="ダミー"
        className={styles.image}
        width={720}
        height={539}
        
      />
      <h2 className={styles.title}>ここにタイトルが入る</h2>
    </article>
  );
};
