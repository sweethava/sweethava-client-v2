
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GameCameraZoom, GameInitialPosition, GameInitialTargetPosition } from '../config/gameConfig'
import { RootState } from './store'

interface CounterState {
    isOnDesktop: boolean,
    cameraPosition: [number, number, number],
    cameraTargetPosition: [number, number, number],
    lockCamera: boolean,
    zoom: number,
    showGoBack: boolean
}

const initialState: CounterState = {
    isOnDesktop: false,
    cameraPosition: GameInitialPosition,
    cameraTargetPosition: GameInitialTargetPosition,
    lockCamera: false,
    zoom: GameCameraZoom,
    showGoBack: false
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setIsOnDesktop: (state, action: PayloadAction<boolean>) => {
            state.isOnDesktop = action.payload
        },
        setCameraPosition: (state, action: PayloadAction<[number, number, number]>) => {
            state.cameraPosition = action.payload
        },
        setCameraTargetPosition: (state, action: PayloadAction<[number, number, number]>) => {
            state.cameraTargetPosition = action.payload
        },
        setLockCamera: (state, action: PayloadAction<boolean>) => {
            state.lockCamera = action.payload
        },
        setShowGoBack: (state, action: PayloadAction<boolean>) => {
            state.showGoBack = action.payload
        },
        setZoom: (state, action: PayloadAction<number>) => {
            state.zoom = action.payload
        },
    },
})

export const { setIsOnDesktop, setCameraPosition, setLockCamera, setZoom, setCameraTargetPosition, setShowGoBack } = gameSlice.actions

export const getCameraPosition = (state: RootState) => state.game.cameraPosition

export default gameSlice.reducer