import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GameState } from '../types'

const initialState: GameState = {
	started: false,
	done: false,
	leaderboard: JSON.parse(
		localStorage.getItem('leaderboard') || JSON.stringify([])
	),
	player: JSON.parse(
		localStorage.getItem('player') || JSON.stringify('Player')
	),
}

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		startGame: state => {
			state.started = true
		},

		finishGame: (state, action: PayloadAction<number>) => {
			state.started = false
			state.leaderboard.push({ player: state.player, time: action.payload })
			state.leaderboard.sort((a, b) => a.time - b.time)
			localStorage.setItem('leaderboard', JSON.stringify(state.leaderboard))
		},

		setPlayer: (state, action: PayloadAction<string>) => {
			state.player = action.payload
			localStorage.setItem('player', JSON.stringify(action.payload))
		},

		clearLeaderboard: state => {
			state.leaderboard = []
			localStorage.setItem('leaderboard', JSON.stringify(state.leaderboard))
		},
	},
})

export const { startGame, finishGame, setPlayer, clearLeaderboard } =
	gameSlice.actions

export default gameSlice
