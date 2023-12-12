import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface LoadingState {
    isRoomLoaded: boolean,
    isDesktopLoaded: boolean,
    isLaptopLoaded: boolean,
    isPhoneLoaded: boolean,
    isCameraLoaded: boolean,
    isChairLoaded: boolean,
    isSafeLoaded: boolean,
    isBookLoaded: boolean,
    isPropsLoaded: boolean,
    isPlantsLoaded: boolean,
    isConsoleLoaded: boolean,
    isMobile: boolean,
    isGpuLoaded: boolean,
    hideLoading: boolean,
}

const initialState: LoadingState = {
    isRoomLoaded: false,
    isDesktopLoaded: false,
    isLaptopLoaded: false,
    isPhoneLoaded: false,
    isCameraLoaded: false,
    isChairLoaded: false,
    isSafeLoaded: false,
    isBookLoaded: false,
    isPropsLoaded: false,
    isPlantsLoaded: false,
    isConsoleLoaded: false,
    isMobile: false,
    isGpuLoaded: false,
    hideLoading: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        roomLoaded: (state) => {
            state.isRoomLoaded = true
        },
        desktopLoaded: (state) => {
            state.isDesktopLoaded = true
        },
        laptopLoaded: (state) => {
            state.isLaptopLoaded = true
        },
        phoneLoaded: (state) => {
            state.isPhoneLoaded = true
        },
        cameraLoaded: (state) => {
            state.isCameraLoaded = true
        },
        chairLoaded: (state) => {
            state.isChairLoaded = true
        },
        safeLoaded: (state) => {
            state.isSafeLoaded = true
        },
        bookLoaded: (state) => {
            state.isBookLoaded = true
        },
        propsLoaded: (state) => {
            state.isPropsLoaded = true
        },
        plantsLoaded: (state) => {
            state.isPlantsLoaded = true
        },
        consoleLoaded: (state) => {
            state.isConsoleLoaded = true
        },
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload
        },
        hideLoading: (state) => {
            state.hideLoading = true
        },
        gpuLoaded: (state) => {
            state.isGpuLoaded = true
        },
    },
})

export const { roomLoaded, desktopLoaded, laptopLoaded, phoneLoaded, cameraLoaded, chairLoaded, safeLoaded, bookLoaded, propsLoaded, plantsLoaded, setIsMobile, gpuLoaded, consoleLoaded, hideLoading } = loadingSlice.actions

export default loadingSlice.reducer