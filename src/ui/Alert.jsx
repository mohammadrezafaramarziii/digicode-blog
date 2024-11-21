export default function Alert({ children }) {
    return (
        <div className="w-full flex items-center gap-3 p-5 bg-warning text-lg rounded-xl text-white font-bold">
            {children}
        </div>
    )
}
