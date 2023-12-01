import '@/styles/variables.scss'
import '@/styles/global.scss'
import { MainFont } from '../utils/fonts'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={MainFont.className}>{children}</body>
		</html>
	)
}
