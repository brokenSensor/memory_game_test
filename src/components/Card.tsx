import React from 'react'
import { useAppDispatch } from '../hooks'
import { toggleVisibility } from '../slices/gridSlice'
import { CardProps } from '../types'

const Card = ({ card }: CardProps) => {
	const dispatch = useAppDispatch()

	return (
		<div
			onClick={() => {
				dispatch(
					toggleVisibility({
						row: card.position.row,
						col: card.position.col,
					})
				)
			}}
			className={`card`}
		>
			{card.visibility && (
				<>
					Row: {card.position.row}, Col: {card.position.col}
					<i className={card.icon}></i>
				</>
			)}
		</div>
	)
}

export default Card
