import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { finishGame } from '../slices/gameSlice'
import {
	clearFoundPairs,
	clearPair,
	closePair,
	populateGrid,
	turnAllCards,
} from '../slices/gridSlice'
import {
	pairTimerStop,
	totalTimerStart,
	totalTimerStop,
} from '../slices/timerSlice'
import Card from './Card'

const Game = () => {
	const dispatch = useAppDispatch()

	const gridSlice = useAppSelector(state => state.grid)
	const timerSlice = useAppSelector(state => state.timer)

	// Starts game
	useEffect(() => {
		dispatch(populateGrid())

		setTimeout(() => {
			dispatch(turnAllCards())
			dispatch(totalTimerStart())
		}, 5000)
	}, [dispatch])

	useEffect(() => {
		//If fail to find pair
		if (timerSlice.pairTimer.timer >= 5 || gridSlice.pair.length > 2) {
			setTimeout(() => {
				dispatch(clearPair())
				dispatch(pairTimerStop())
			}, 500)
		}
		//If found pair
		if (
			timerSlice.pairTimer.timer < 5 &&
			gridSlice.pair.length === 2 &&
			gridSlice.pair[0].icon === gridSlice.pair[1].icon &&
			gridSlice.pair[0].position !== gridSlice.pair[1].position
		) {
			dispatch(closePair())
			dispatch(pairTimerStop())
		}

		//If game over
		if (gridSlice.foundPairs === 18 && timerSlice.totalTimer.started) {
			dispatch(finishGame(timerSlice.totalTimer.timer))
			dispatch(totalTimerStop())
			dispatch(clearFoundPairs())
		}
	}, [
		dispatch,
		gridSlice.foundPairs,
		gridSlice.pair,
		timerSlice.pairTimer.timer,
		timerSlice.totalTimer.started,
		timerSlice.totalTimer.timer,
	])

	return (
		<div className='container'>
			{gridSlice.grid.map((row, rowIndex) => (
				<div key={rowIndex} className='row'>
					{row.map((card, cardIndex) => (
						<div key={cardIndex} className='col'>
							<Card visibility={card.visibility} card={card} />
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default Game
