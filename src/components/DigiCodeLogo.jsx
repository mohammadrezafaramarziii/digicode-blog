import { DigiCodeIcon } from '@/ui/Icons'
import Link from 'next/link'

export function DigiCodeLogoSm({ className }) {
    return (
        <div>
            <DigiCodeIcon className={`${className} w-10 h-10 text-primary-900`} />
        </div>
    )
}

export function DigiCodeLogoLg({ classNameIcon, classNameText, customeLabel = "دیجــی کد" }) {
    return (
        <Link href={'/'} className='flex items-center gap-2'>
            <DigiCodeIcon className={`${classNameIcon} w-9 h-9 text-primary-900`} />
            <div className={`${classNameText} text-2xl text-primary-900 font-black`}>
                {customeLabel}
            </div>
        </Link>
    )
}
