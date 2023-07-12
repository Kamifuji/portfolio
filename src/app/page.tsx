import { styles } from './page.css'
import { Articles } from './components/Articles/Articles'
import { KeyVisual } from './components/KeyVisual/KeyVisual'

export default function Home() {
  return (
    <main className={styles.main}>
      <KeyVisual />
      {/* @ts-expect-error Server Component */}
      <Articles />
    </main>
  )
}
