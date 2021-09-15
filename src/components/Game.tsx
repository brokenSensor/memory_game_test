import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { populateGrid } from '../slices/gridSlice'
import { CartType, GameProps } from '../types'
import Card from './Card'

const Game = ({ started }: GameProps) => {
	const dispatch = useAppDispatch()
	const gridSlice = useAppSelector(state => state.grid)
	useEffect(() => {
		if (started) {
			dispatch(populateGrid())
		}
	}, [dispatch, started])
	return (
		<div className='container'>
			{gridSlice.grid.map((row, rowIndex) => (
				<div key={rowIndex} className='row'>
					{row.map((card, cardIndex) => (
						<div key={cardIndex} className='col'>
							<Card visible={true} value={5} />
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default Game
