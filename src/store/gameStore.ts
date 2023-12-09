
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GameCameraZoom, GameInitialPosition, GameInitialTargetPosition } from '../config/gameConfig'
import { RootState } from './store'

interface CounterState {
    isOnDesktop: boolean,
    isOnLaptop: boolean,
    isOnPhone: boolean,
    isOnCamera: boolean,
    isOnSafe: boolean,
    isOnBook: boolean,
    cameraShot: boolean,
    showPicture: boolean,
    hideChair: boolean,
    cameraPosition: [number, number, number],
    cameraTargetPosition: [number, number, number],
    lockCamera: boolean,
    zoom: number,
    showGoBack: boolean,
    interactiveMode: boolean,
    zoomMultiplier: number
}

const initialState: CounterState = {
    isOnDesktop: false,
    isOnLaptop: false,
    isOnPhone: false,
    isOnCamera: false,
    isOnSafe: false,
    isOnBook: false,
    cameraShot: false,
    showPicture: false,
    hideChair: false,
    cameraPosition: GameInitialPosition,
    cameraTargetPosition: GameInitialTargetPosition,
    lockCamera: false,
    zoom: GameCameraZoom,
    showGoBack: false,
    interactiveMode: false,
    zoomMultiplier: 1
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setIsOnDesktop: (state, action: PayloadAction<boolean>) => {
            state.isOnDesktop = action.payload
        },
        setIsOnLaptop: (state, action: PayloadAction<boolean>) => {
            state.isOnLaptop = action.payload
        },
        setIsOnPhone: (state, action: PayloadAction<boolean>) => {
            state.isOnPhone = action.payload
        },
        setIsOnCamera: (state, action: PayloadAction<boolean>) => {
            state.isOnCamera = action.payload
        },
        setIsOnSafe: (state, action: PayloadAction<boolean>) => {
            state.isOnSafe = action.payload
        },
        setIsOnBook: (state, action: PayloadAction<boolean>) => {
            state.isOnBook = action.payload
        },
        setCameraShot: (state, action: PayloadAction<boolean>) => {
            state.cameraShot = action.payload
        },
        setShowPicture: (state, action: PayloadAction<boolean>) => {
            state.showPicture = action.payload
        },
        setHideChair: (state, action: PayloadAction<boolean>) => {
            state.hideChair = action.payload
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
        setInteractiveMode: (state, action: PayloadAction<boolean>) => {
            state.interactiveMode = action.payload
        },
        setZoom: (state, action: PayloadAction<number>) => {
            state.zoom = action.payload
        },
        setZoomMultiplier: (state, action: PayloadAction<number>) => {
            state.zoomMultiplier = action.payload
        },
    },
})

export const { setIsOnDesktop, setIsOnLaptop, setIsOnPhone, setIsOnCamera, setIsOnSafe, setIsOnBook, setCameraShot, setShowPicture, setHideChair, setCameraPosition, setLockCamera, setZoom, setCameraTargetPosition, setShowGoBack, setInteractiveMode, setZoomMultiplier } = gameSlice.actions

export const getCameraPosition = (state: RootState) => state.game.cameraPosition
export const getZoomMultiplier = (state: RootState) => state.game.zoomMultiplier

export default gameSlice.reducer