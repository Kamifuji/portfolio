import { getQiitaPosts } from '@/app/api'
import { ArticleCard } from './ArticleCard/ArticleCard'
import { styles } from './Articles.css'
import { cdate } from 'cdate'
import { Item } from '../../../../qiita-types'

export const Articles = async () => {
  const posts: Item[] = await getQiitaPosts()

  return (
    <section className={styles.section}>
      {posts.map((post) => {
        const formatDate = cdate(post.created_at).format('YYYY-MM-DD')
        return (
          <ArticleCard
            key={post.id}
            title={post.title}
            date={formatDate}
            href={post.url}
          />
        )
      })}
    </section>
  )
}
