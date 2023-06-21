import { ArticleCard } from './ArticleCard/ArticleCard'
import { styles } from './Articles.css'

export const Articles = () => {
  return (
    <section className={styles.section}>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </section>
  )
}
