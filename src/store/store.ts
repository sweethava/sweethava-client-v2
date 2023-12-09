import { configureStore } from '@reduxjs/toolkit'
import GameSlice from './gameStore'
import LoadingSlice from './loadingStore'

export const store = configureStore({
    reducer: {
        game: GameSlice,
        loading: LoadingSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch