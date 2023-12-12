import dynamic from "next/dynamic"
import Providers from "../components/providers/providers"
import MainScene from "../scenes/mainScene/mainScene"
import LoadingScreen from "../components/ui/loadingScreen/loadingScreen"

const Scene = dynamic(() => import('../scenes/mainScene/mainScene'), {
	ssr: false
})
// const PlaygroundScene = dynamic(() => import('../scenes/playgroundScene/playgroundScene'), {
// 	ssr: false
// })

export default function Home() {
	return (
		<main>
			<Providers>
				<LoadingScreen />
				<Scene />
			</Providers>
		</main>
	)
}
