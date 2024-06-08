import { getBlogs } from '@/app/api'
import { BlogCard } from './BlogCard/BlogCard'
import { styles } from './Blogs.css'

export const Blogs = async () => {
  const {contents} = await getBlogs()

  return (
    <section className={styles.root}>
      <h2 className={styles.h2}>個人制作物</h2>
      <section className={styles.section}>
        {contents.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              date={blog.createdAt}
              href={blog.id}
              imageSrc={blog.eyecatch?.url}
            />
          )
        })}
      </section>
    </section>
  )
}

