export type GameState = {
	started: boolean
	done: boolean
	leaderboard: LeaderboardItem[]
	player: string
}

export type GridState = {
	grid: CartType[][]
	pair: CartType[]
	foundPairs: number
}

export type CartType = {
	icon: string
	position: { row: number; col: number }
	visibility: boolean
	done: boolean
}

export type CardProps = {
	visibility: boolean
	card: CartType
}

export type TimerState = {
	pairTimer: { timer: number; started: boolean }
	totalTimer: { timer: number; started: boolean }
}

export type LeaderboardItem = {
	player: string
	time: number
}
