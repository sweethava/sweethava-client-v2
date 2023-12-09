import { GameCameraZoom, GameCameraZoomSpeed, GameInitialPosition, GameInitialTargetPosition } from "../config/gameConfig";
import { useAppSelector } from "../hooks/storeHooks";
import { getZoomMultiplier, setCameraPosition, setCameraTargetPosition, setHideChair, setInteractiveMode, setIsOnBook, setIsOnCamera, setIsOnDesktop, setIsOnLaptop, setIsOnPhone, setIsOnSafe, setLockCamera, setShowGoBack, setShowPicture, setZoom } from "../store/gameStore";
import { AppDispatch, store } from "../store/store";

export const setGameDefaultState = (dispatch: AppDispatch) => {
    const state = store.getState()
    const { zoomMultiplier } = state.game

    dispatch(setHideChair(false))
    dispatch(setIsOnCamera(false))
    dispatch(setShowPicture(false))
    dispatch(setShowGoBack(false))
    dispatch(setIsOnDesktop(false))
    dispatch(setIsOnLaptop(false))
    dispatch(setIsOnPhone(false))
    dispatch(setIsOnSafe(false))
    dispatch(setIsOnBook(false))
    dispatch(setZoom(GameCameraZoom * zoomMultiplier))
    dispatch(setCameraTargetPosition(GameInitialTargetPosition))
    dispatch(setCameraPosition(GameInitialPosition))

    setTimeout(() => {
        dispatch(setLockCamera(false))
        dispatch(setInteractiveMode(false))
    }, 1000 * GameCameraZoomSpeed)
}