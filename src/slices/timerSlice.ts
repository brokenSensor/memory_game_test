import { createSlice } from '@reduxjs/toolkit'
import { TimerState } from '../types'

const initialState: TimerState = {
	pairTimer: { started: false, timer: 0 },
	totalTimer: { started: false, timer: 0 },
}

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		pairTimerTick: state => {
			state.pairTimer.timer = state.pairTimer.timer + 1
		},
		pairTimerStart: state => {
			state.pairTimer.started = true
		},
		pairTimerStop: state => {
			state.pairTimer.started = false
			state.pairTimer.timer = 0
		},
		totalTimerTick: state => {
			state.totalTimer.timer = state.totalTimer.timer + 1
		},
		totalTimerStart: state => {
			state.totalTimer.started = true
		},
		totalTimerStop: state => {
			state.totalTimer.started = false
			state.totalTimer.timer = 0
		},
	},
})

export const {
	pairTimerStop,
	pairTimerTick,
	pairTimerStart,
	totalTimerStart,
	totalTimerStop,
	totalTimerTick,
} = timerSlice.actions

export default timerSlice
