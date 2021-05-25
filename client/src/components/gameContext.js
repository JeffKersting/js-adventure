// import * as React from 'react'
//
// const GameContext = React.createContext({
//   level: 'SceneOne'
// })
//
// function gameReducer(state, action) {
//   switch(action.type) {
//     case 'changeLevel': {
//       return {level: state.level = action.text}
//     }
//   }
// }
//
// function GameDataProvider({children}) {
//   const [state, dispatch] = React.useReducer()
//   const value = {state, dispatch}
//   return <GameContext.Provider value={value}>{children}</GameContext.Provider>
// }
//
// export {GameDataProvider}

export const gameData = {
  level: "SceneOne"
}
