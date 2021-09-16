export type GameProps = {
	started: boolean
}

export type GridState = {
	grid: CartType[][]
}

export type CartType = {
	icon: string
	position: { row: number; col: number }
	visibility: boolean
}

export type CardProps = {
	visibility: boolean
	card: CartType
}
