export default function RadioInput({ onClick, checked, label, className }) {
    return (
        <button onClick={onClick} className={`flex items-center gap-x-2 ${className}`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center p-1.5 ${checked ? "bg-primary-900" : "bg-primary-800 border border-secondary-900/20"}`}>
                {checked && <div className="w-full h-full bg-background rounded-full"></div>}
            </div>

            <label className={`cursor-pointer text-sm font-medium ${checked ? "text-primary-900" : "text-secondary-700"}`}>
                {label}
            </label>
        </button>
    );
}
