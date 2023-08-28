'use client'

import React, { useState } from 'react'
import { router } from 'next/client'
import styles from './Header.module.scss'

function Header() {
  const [isNav, setIsNav] = useState(false)

  const handleNav = () => {
    setIsNav(!isNav)
  }

  const handleAddTeam = () => {
    console.log('>>>>>>')
  }

  return (
    <div className={styles.wrap}>
      <button className={styles.nav} onClick={handleNav}>
        사이드
      </button>
      <div>
        <img src="/img/logo_ko.svg" alt="logo" className={styles.logo} />
      </div>
      {isNav && (
        <div className={styles.navContents}>
          <button className={styles.row} onClick={() => handleAddTeam()}>
            등록하기
          </button>
          <button className={styles.row}>메뉴 2</button>
          <button className={styles.row}>메뉴 3</button>
          <button className={styles.row}>메뉴 4</button>
        </div>
      )}
    </div>
  )
}

export default Header
