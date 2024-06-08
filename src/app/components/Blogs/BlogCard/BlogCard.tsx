import Image from 'next/image'
import { styles } from './BlogCard.css'
import Link from 'next/link'
import { FC } from 'react'

type BlogCardProps = {
  title: string
  href: string
  date: string
  imageSrc?: string
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { title, href, date, imageSrc } = props
  return (
    <Link href={href} className={styles.link} rel="nofollow">
      <article className={styles.root}>
        <Image
          src={imageSrc || '/image_2.png'}
          alt=""
          className={styles.image}
          width={720}
          height={539}
        />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.date}>{date}</p>
        </div>
      </article>
    </Link>
  )
}
