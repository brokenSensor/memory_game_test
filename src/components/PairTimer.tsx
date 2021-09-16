import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { pairTimerTick } from '../slices/timerSlice'

const PairTimer = () => {
	const dispatch = useAppDispatch()

	const timerSlice = useAppSelector(state => state.timer)

	useEffect(() => {
		if (timerSlice.pairTimer.started) {
			const timer = setInterval(() => {
				dispatch(pairTimerTick())
			}, 1000)
			return () => clearInterval(timer)
		}
	}, [dispatch, timerSlice.pairTimer.started])

	return (
		<div>
			<span>Timer:</span>
			<span>{timerSlice.pairTimer.timer}</span>
		</div>
	)
}

export default PairTimer
