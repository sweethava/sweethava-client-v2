import { configureStore } from '@reduxjs/toolkit'
import GameSlice from './gameStore'
// ...

export const store = configureStore({
    reducer: {
        game: GameSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch