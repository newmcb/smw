'use client'

import React, { useEffect } from 'react'
import styles from './ContentsList.module.scss'

function ContentsList() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/test')
        const data = await response.json()
        console.log('data', data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.table}>
        <div className={styles.search}>
          <input type="text" placeholder="검색" />
        </div>
        <div className={styles.header}>
          <div className={styles.row}>리더</div>
          <div className={styles.row}>몬스터 1</div>
          <div className={styles.row}>몬스터 2</div>
        </div>
        <button
          className={styles.contents}
          onClick={() => {
            console.log('>>>>click')
          }}
        >
          <div className={styles.row}>122</div>
          <div className={styles.row}>23333</div>
          <div className={styles.row}>34444</div>
        </button>
      </div>
    </div>
  )
}

export default ContentsList
