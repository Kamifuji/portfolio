import { styles } from './page.css'
import { Articles } from './components/Articles/Articles'
import { KeyVisual } from './components/KeyVisual/KeyVisual'
import { Blogs } from './components/Blogs/Blogs'

export default function Home() {
  return (
    <main className={styles.main}>
      <KeyVisual />
      <Blogs />
      {/* @ts-expect-error Server Component */}
      <Articles />
    </main>
  )
}
