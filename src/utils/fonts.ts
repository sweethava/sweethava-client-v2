import { Manrope } from 'next/font/google'

export const MainFont = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font',
})