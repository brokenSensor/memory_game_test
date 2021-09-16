import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { clearLeaderboard, setPlayer, startGame } from '../slices/gameSlice'

const StartScreen = () => {
	const dispatch = useAppDispatch()

	const gameSlice = useAppSelector(state => state.game)

	return (
		<div className='start-screen'>
			<input
				className='input-text'
				type='text'
				name='player'
				value={gameSlice.player || ''}
				onChange={e => {
					dispatch(setPlayer(e.currentTarget.value))
				}}
			/>
			<button
				onClick={() => {
					dispatch(startGame())
				}}
				className='button start-button'
			>
				Start game
			</button>
			{gameSlice.leaderboard.length > 0 && (
				<div className='leaderbord'>
					{gameSlice.leaderboard.map((item, index) => (
						<div key={index}>
							{index + 1}. {item.player}: {item.time}sec
						</div>
					))}
					{gameSlice.leaderboard.length > 0 && (
						<button
							onClick={() => {
								dispatch(clearLeaderboard())
							}}
							className='button'
						>
							Clear Leaderboard
						</button>
					)}
				</div>
			)}
		</div>
	)
}

export default StartScreen
