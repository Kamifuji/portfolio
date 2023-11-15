import { BlogCard } from './BlogCard/BlogCard'
import { styles } from './Blogs.css'

export const Blogs = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.h2}>個人制作物</h2>
      <section className={styles.section}>
        {blogsDummy.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              title={blog.title}
              date={blog.date}
              href={blog.url}
            />
          )
        })}
      </section>
      <ol className={styles.ol}>
        <li>Saturn</li>
        <li>
          <ul>
            <li>Mimas</li>
            <li>Enceladus</li>
            <li>
              <ol>
                <li>Voyager</li>
                <li>Cassini</li>
              </ol>
            </li>
            <li>Tethys</li>
          </ul>
        </li>
        <li>Uranus</li>
        <li>
          <ol>
            <li>Titania</li>
            <li>Oberon</li>
          </ol>
        </li>
      </ol>
    </section>
  )
}

const blogsDummy = [
  {
    id: 1,
    title: '個人の制作物を記事にする',
    date: '2021-01-01',
    url: 'hoge'
  },
  {
    id: 2,
    title: 'ここにいい感じの記事タイトル〜とってもほげほげ〜',
    date: '2023-01-01',
    url: 'hoge'
  },
  {
    id: 3,
    title: 'dummy1',
    date: '2021-01-01',
    url: 'hoge'
  },
  { id: 4, title: 'dummy1', date: '2021-01-01', url: 'hoge' }
]
