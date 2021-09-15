export type GameProps = {
	started: boolean
}

export type GridState = {
	grid: CartType[][]
}

export type CartType = {
	value: number
}

export type CardProps = {
	value: number
	visible: boolean
}
