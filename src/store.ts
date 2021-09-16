import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './slices/gameSlice'
import gridSlice from './slices/gridSlice'
import timerSlice from './slices/timerSlice'

export const store = configureStore({
	reducer: {
		grid: gridSlice.reducer,
		timer: timerSlice.reducer,
		game: gameSlice.reducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
