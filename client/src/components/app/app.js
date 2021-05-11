import React, { useState, useEffect, createContext } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import game from '../../phaser/gameConfig'
import GameDataProvider from '../gameContext'

export const GameContext = React.createContext()

function App() {

  const [level, setLevel] = useState(null)



  return (
    <GameContext.Provider value={level}>
      <IonPhaser game={game} initialize={true} setLevelData={setLevel}/>
      <article className='game-border'>
        <div className='game-top'>{level}</div>
        <div className='game-sidebar'></div>
      </article>
    </GameContext.Provider>
  )
}

export default App;
