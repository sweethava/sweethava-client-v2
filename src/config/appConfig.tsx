import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa'
import { HiMail, HiPhoneIncoming } from 'react-icons/hi'
import { RiInstagramFill, RiMoneyDollarCircleFill } from 'react-icons/ri'
import { SiBuymeacoffee } from 'react-icons/si'

export const AppEmail = 'ilyasov.zhan@gmail.com'
export const AppSocial = [
    {
        icon: <FaTelegramPlane />,
        title: 'Telegram',
        link: 'https://t.me/sweethava'
    },
    {
        icon: <FaLinkedinIn />,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/zhan-ilyas-1a0637250/'
    },
    {
        icon: <RiInstagramFill />,
        title: 'Instagram',
        link: 'https://www.instagram.com/sweethava/'
    },
    {
        icon: <HiMail />,
        title: 'Email',
        link: `mailto:${AppEmail}`
    },
    {
        icon: <HiPhoneIncoming />,
        title: 'Phone',
        link: `tel:+77024041504`
    },
]
export const DonationLinks = [
    {
        link: 'https://www.buymeacoffee.com/sweethava',
        title: 'Buy Me a Coffee',
        icon: <SiBuymeacoffee />
    },
    {
        link: 'https://boosty.to/sweethava',
        title: 'Boosty',
        icon: <RiMoneyDollarCircleFill />
    },
]