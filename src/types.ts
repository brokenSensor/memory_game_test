export type GameProps = {
	started: boolean
}

export type GridState = {
	grid: CartType[][]
}

export type CartType = {
	icon: string
	position: { row: number; col: number }
}

export type CardProps = {
	visible: boolean
	card: CartType
}
