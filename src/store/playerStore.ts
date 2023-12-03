import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface PlayerStore {
	pickedUp: number
	setPickedUp: (id: number) => void
}

const usePlayerStore = create<PlayerStore>()(
	devtools(
		persist(
			(set) => ({
				pickedUp: 0,
				setPickedUp: (id) => set((state) => ({ pickedUp: id })),
			}),
			{
				name: 'PlayerStorage',
			},
		),
	),
)

export default usePlayerStore