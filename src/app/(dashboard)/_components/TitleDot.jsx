export default function TitleDot({ title }) {
    return (
        <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-primary-900 rounded-full"></span>
            <div className="text-xl font-medium text-secondary-900">
                {title}
            </div>
        </div>
    )
}
