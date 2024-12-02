
export default function ButtonIcon({ onClick, children, className, variant = "primary", noHover = false, ...rest }) {
    const btnType = {
        primary: `bg-primary-900/15 text-primary-900 ${!noHover && "hover:bg-primary-900 hover:text-primary-800"}`,
        yellow: `bg-yellow-600/15 text-yellow-600 ${!noHover && "hover:bg-yellow-600 hover:text-primary-800"}`,
        red: `bg-red-600/15 text-red-600 ${!noHover && "hover:bg-red-600 hover:text-primary-800"}`,
    }

    return (
        <button
            onClick={onClick}
            className={`${btnType[variant]} ${className} disabled:opacity-30 flex items-center p-1.5 duration-150 rounded-lg gap-x-1 text-xs [&>svg]:w-4 [&>svg]:h-4`}
            {...rest}
        >
            {children}
        </button>
    )
}
