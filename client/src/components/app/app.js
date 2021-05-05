// import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'

// class App extends Component {
//   state = {
//     initialize: false,
//     game: {
//       width: "100%",
//       height: "100%",
//       type: Phaser.AUTO,
//       scene: {}
//     }
//   }
//
//   render() {
//     const { initialize, game } = this.state
//     return (
//       <IonPhaser game={game} initialize={initialize} />
//     )
//   }
// }

function App() {

  const [initialize, setInitialize] = useState(null)
  const [game, setGame] = useState(null)

  useEffect(() => {
    setInitialize(false)
    setGame({
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: {}
    })
  }, [])

  return (
    <>
      <div>Test</div>
      <IonPhaser game={game} initialize={initialize} />
    </>
  )
}

export default App;
