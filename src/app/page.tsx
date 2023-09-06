import { styles } from './page.css'
import { Articles } from './components/Articles/Articles'
import { KeyVisual } from './components/KeyVisual/KeyVisual'
import { Blogs } from './components/Blogs/Blogs'
import { CountLogs } from './components/CountLogs/CountLogs'
import { Example } from './components/Example/Example'

export default function Home() {
  return (
    <main className={styles.main}>
      <KeyVisual />
      <Blogs />
      {/* @ts-expect-error Server Component */}
      <Articles />
      <CountLogs />
      <Example />
    </main>
  )
}
