import React from 'react'
import { CardProps } from '../types'

const Card = ({ card }: CardProps) => {
	return (
		<div className={`card`}>
			Row: {card.position.row}, Col: {card.position.col}
			<i className={card.icon}></i>
		</div>
	)
}

export default Card
