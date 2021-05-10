import { useState, useEffect } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import game from '../../phaser/gameConfig'

function App() {

  return (
    <>
      <IonPhaser game={game} initialize={true} />
    </>
  )
}

export default App;
