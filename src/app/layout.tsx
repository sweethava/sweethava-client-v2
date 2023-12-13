import '@/styles/variables.scss'
import '@/styles/global.scss'
import { MainFont } from '../utils/fonts'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
	title: 'Zhan Ilyas',
	description: 'My personal site',
	other: {
		'mailru-domain': 'zsvILXEQ6z6eVxiu'
	},
	icons: {
		icon: '/favicon/favicon.ico',
		apple: '/favicon/favicon.ico',
	}
}

export const viewport: Viewport = {
	themeColor: 'black',
	initialScale: 1,
	userScalable: false
}

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
