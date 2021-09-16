import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { clearPair, toggleVisibility } from '../slices/gridSlice'
import { pairTimerStart, pairTimerStop } from '../slices/timerSlice'
import { CardProps } from '../types'

const Card = ({ card }: CardProps) => {
	const dispatch = useAppDispatch()
	const gridSlice = useAppSelector(state => state.grid)
	const timerSlice = useAppSelector(state => state.timer)

	const clickHandler = () => {
		if (gridSlice.pair.length === 2) {
			dispatch(clearPair())
			dispatch(pairTimerStop())
		}

		if (
			!gridSlice.grid[card.position.row][card.position.col].done &&
			timerSlice.totalTimer.started
		) {
			dispatch(
				toggleVisibility({
					row: card.position.row,
					col: card.position.col,
				})
			)
			dispatch(pairTimerStart())
		}
	}
	return (
		<>
			<div
				onClick={clickHandler}
				className={`card ${
					card.visibility ? 'flip-card-face' : 'flip-card-bottom'
				} ${card.done && 'card-hide'}`}
			>
				<>
					<i className={`${card.icon}`}></i>
				</>
			</div>
		</>
	)
}

export default Card
