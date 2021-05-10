import { useState, useEffect } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import game from '../../phaser/gameConfig'
import GameDataProvider from '../gameContext'

function App() {

  let [level, setLevel] = useState('SceneOne')

  return (
    <>
      <IonPhaser game={game} initialize={true} className='phaser' level={level}/>
      <article className='game-border'>
        <div className='game-top'></div>
        <div className='game-sidebar'></div>
      </article>
    </>
  )
}

export default App;
