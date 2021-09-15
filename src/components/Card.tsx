import React from 'react'
import { CardProps } from '../types'

const Card = ({ value }: CardProps) => {
	return <div className={`card`}>{value}</div>
}

export default Card
