import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { icons } from '../icons'
import { CartType, GridState } from '../types'

const initialState: GridState = {
	grid: [],
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
						visibility: false,
					}
					const card2: CartType = {
						icon: icons2.pop() || '',
						position: { row: (r - row) * -1, col: (c * 2 - col) * -1 + 1 },
						visibility: false,
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
		},
	},
})

export const { populateGrid, toggleVisibility } = gridSlice.actions

export default gridSlice.reducer
