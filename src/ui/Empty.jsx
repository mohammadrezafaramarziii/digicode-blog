export default function Empty({ text, children }) {
    return (
        <div className="w-full h-64 flex flex-col items-center justify-center gap-3">
            {children}
            <div className="font-bold text-secondary-900/40">
                {text}
            </div>
        </div>
    )
}
