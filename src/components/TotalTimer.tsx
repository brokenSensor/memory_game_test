import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { totalTimerTick } from '../slices/timerSlice'

const TotalTimer = () => {
	const dispatch = useAppDispatch()

	const timerSlice = useAppSelector(state => state.timer)

	useEffect(() => {
		if (timerSlice.totalTimer.started) {
			const timer = setInterval(() => {
				dispatch(totalTimerTick())
			}, 1000)
			return () => clearInterval(timer)
		}
	}, [dispatch, timerSlice.totalTimer.started])

	return (
		<div>
			<span>Total time:</span>
			<span>{timerSlice.totalTimer.timer}</span>
		</div>
	)
}

export default TotalTimer
