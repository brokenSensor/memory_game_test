import React from 'react'
import { useAppSelector } from '../hooks'
import PairTimer from './PairTimer'
import TotalTimer from './TotalTimer'

const Interface = () => {
	const gridSlice = useAppSelector(state => state.grid)
	return (
		<div className='interface'>
			<TotalTimer />
			<PairTimer />
			<div>
				<span>Pairs:</span>
				<span>{gridSlice.foundPairs}</span>
			</div>
		</div>
	)
}

export default Interface
