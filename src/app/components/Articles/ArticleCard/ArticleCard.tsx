import Image from 'next/image'
import { styles } from './ArticleCard.css'
import Link from 'next/link'
import { FC } from 'react'

type ArticleCardProps = {
  title: string
  href: string
  date: string
}

export const ArticleCard: FC<ArticleCardProps> = (props) => {
  const { title, href, date } = props
  return (
    <a href={href} target="_blank">
      <article>
        <Image
          src="/dummy_article.png"
          alt="ダミー"
          className={styles.image}
          width={720}
          height={539}
        />
        <h2 className={styles.title}>{title}</h2>
        <p>{date}</p>
      </article>
    </a>
  )
}
