import { FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa'
import { HiMail, HiPhoneIncoming } from 'react-icons/hi'
import { RiInstagramFill } from 'react-icons/ri'

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