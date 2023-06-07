import { styles } from "./ArticleCard.css";

export const ArticleCard = () => {
  return (
    <article>
      <div className={styles.image}></div>
      <h2>ここにタイトルが入る</h2>
    </article>
  );
}