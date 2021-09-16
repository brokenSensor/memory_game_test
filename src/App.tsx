import React from 'react'
import Game from './components/Game'
import Interface from './components/Interface'
import StartScreen from './components/StartScreen'
import { useAppSelector } from './hooks'

function App() {
	const gameSlice = useAppSelector(state => state.game)
	return (
		<>
			<Interface />
			<div className='game-box'>
				{gameSlice.started ? <Game /> : <StartScreen />}
			</div>
		</>
	)
}

export default App
