const btnType = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    danger: "btn--danger",
}

export default function Button({ children, varint = "primary", onClick, className, type = "button", ...rest }) {
    return (
        <button type={type} onClick={onClick} className={`btn ${btnType[varint]} ${className}`} {...rest}>
            {children}
        </button>
    )
}
