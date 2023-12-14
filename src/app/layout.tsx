import '@/styles/variables.scss'
import '@/styles/global.scss'
import { MainFont } from '../utils/fonts'
import { Metadata, Viewport } from 'next'
import ExternalScripts from '../components/externalScripts/externalScripts'
import thumbnailImage from '/public/images/thumbnail.jpg'

export const metadata: Metadata = {
	title: 'Zhan Ilyas',
	description: 'Full-Stack Developer',
	other: {
		'mailru-domain': 'zsvILXEQ6z6eVxiu'
	},
	icons: {
		icon: '/favicon/favicon.ico',
		apple: '/favicon/favicon.ico',
	},
	openGraph: {
		title: 'Zhan Ilyas',
		description: 'Full-Stack Developer',
		siteName: 'Zhan Ilyas',
		images: [
			{
				url: thumbnailImage.src,
				width: thumbnailImage.width,
				height: thumbnailImage.height,
				alt: 'Zhan Ilyas'
			}
		],
		locale: 'en_US',
		type: 'website',
		emails: ['ilyasov.zhan@gmail.com'],
		phoneNumbers: ['+77024041504']
	},
	twitter: {
		title: 'Zhan Ilyas',
		description: 'Full-Stack Developer',
		images: [
			{
				url: thumbnailImage.src,
				width: thumbnailImage.width,
				height: thumbnailImage.height,
				alt: 'Zhan Ilyas'
			}
		],
	},
	themeColor: 'dark',
	colorScheme: 'dark'
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
			<body className={MainFont.className}>
				{children}
				<ExternalScripts />
			</body>
		</html>
	)
}
