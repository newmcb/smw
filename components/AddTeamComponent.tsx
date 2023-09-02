import React from 'react'
import styles from './AddTeamComponet.module.scss'

function AddTeamComponent({ teamType }: { teamType: string }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>{teamType}</div>
      <div className={styles.row}>
        <label htmlFor="leader">
          <span>*</span>리더
        </label>
        <input type="text" />
      </div>
      <div className={styles.row}>
        <label htmlFor="monster1">
          <span>*</span>몬스터 1
        </label>
        <input type="text" />
      </div>
      <div className={styles.row}>
        <label htmlFor="monster2">
          <span>*</span>몬스터 2
        </label>
        <input type="text" />
      </div>
      <div className={styles.row}>
        <label htmlFor="memo">
          <span>*</span>메모
        </label>
        <input type="text" />
      </div>
      <div className={styles.row}>
        <label htmlFor="sort">
          <span>*</span>순서
        </label>
        <input type="text" />
      </div>
    </div>
  )
}

export default AddTeamComponent
