import { createSlice } from '@reduxjs/toolkit'
import { GridState } from '../types'

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
				grid = []

			for (let r = row; r > 0; r--) {
				const row = []
				for (let c = col / 2; c > 0; c--) {
					const card1 = {
						value: c,
					}
					const card2 = {
						value: c,
					}
					row.push(card1, card2)
				}
				grid.push(row)
			}
			state.grid = grid
		},
	},
})

export const { populateGrid } = gridSlice.actions

export default gridSlice.reducer
