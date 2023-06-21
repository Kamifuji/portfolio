import Image from 'next/image'
import { styles } from './ArticleCard.css'
import Link from 'next/link'

export const ArticleCard = () => {
  return (
    <Link href="/hoge">
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
    </Link>
  )
}
