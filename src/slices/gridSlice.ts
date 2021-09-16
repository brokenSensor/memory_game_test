import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { icons } from '../icons'
import { CartType, GridState } from '../types'

const initialState: GridState = {
	grid: [],
	pair: [],
	foundPairs: 0,
}

export const gridSlice = createSlice({
	name: 'grid',
	initialState,
	reducers: {
		populateGrid: state => {
			let row = 6,
				col = 6,
				grid = [],
				icons1 = [...icons].sort(() => 0.5 - Math.random()),
				icons2 = [...icons].sort(() => 0.5 - Math.random())

			for (let r = row; r > 0; r--) {
				const rowArray = []
				for (let c = col / 2; c > 0; c--) {
					const card1: CartType = {
						icon: icons1.pop() || '',
						position: { row: (r - row) * -1, col: (c * 2 - col) * -1 },
						visibility: true,
						done: false,
					}
					const card2: CartType = {
						icon: icons2.pop() || '',
						position: { row: (r - row) * -1, col: (c * 2 - col) * -1 + 1 },
						visibility: true,
						done: false,
					}
					rowArray.push(card1, card2)
				}
				grid.push(rowArray)
			}
			state.grid = grid
		},

		toggleVisibility: (
			state,
			action: PayloadAction<{ row: number; col: number }>
		) => {
			state.grid[action.payload.row][action.payload.col].visibility =
				!state.grid[action.payload.row][action.payload.col].visibility
			state.pair.push(state.grid[action.payload.row][action.payload.col])
		},

		closePair: state => {
			for (let cart of state.pair) {
				state.grid[cart.position.row][cart.position.col].done = true
			}
			state.foundPairs++
			state.pair = []
		},

		clearPair: state => {
			for (let cart of state.pair) {
				state.grid[cart.position.row][cart.position.col].visibility = false
			}
			state.pair = []
		},

		clearFoundPairs: state => {
			state.foundPairs = 0
		},

		turnAllCards: state => {
			state.grid.forEach(row => {
				row.forEach(card => (card.visibility = !card.visibility))
			})
		},
	},
})

export const {
	clearFoundPairs,
	populateGrid,
	toggleVisibility,
	clearPair,
	closePair,
	turnAllCards,
} = gridSlice.actions

export default gridSlice
