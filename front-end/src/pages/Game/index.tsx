import React from 'react'

import scss from './Game.module.scss'
import { GameNavBar } from './NavBar'

export const GamePage = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <GameNavBar />
        <div className={scss.gameArea}></div>
      </div>
    </div>
  )
}
