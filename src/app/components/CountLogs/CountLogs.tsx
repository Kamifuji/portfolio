'use client'
import { useState } from 'react'
import { styles } from './CountLogs.css'
import { Count } from './Count'

export const CountLogs = () => {
  const [counts, setCount] = useState([0])
  const handleClick = () => setCount((prev) => [...prev, prev.length])
  console.log(counts)
  return (
    <section className={styles.section}>
      <button className={styles.button} onClick={handleClick}>
        押すよ
      </button>
      <ul className={styles.list}>
        {lists.map((count, index) => {
          return <Count key={index} count={count} />
        })}
      </ul>
    </section>
  )
}

const lists = [1, 2, 3, 4,7,8, 5,6]
