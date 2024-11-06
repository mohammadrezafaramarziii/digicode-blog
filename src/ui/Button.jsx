const btnType = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    danger: "btn--danger",
}

export default function Button({ children, varint = "primary", onClick, ...rest }) {
    return (
        <button onClick={onClick} className={`btn ${btnType[varint]}`} {...rest}>
            {children}
        </button>
    )
}
