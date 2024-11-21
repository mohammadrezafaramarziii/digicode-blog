
export default function Table({ children }) {
    return (
        <div className="rounded-xl overflow-hidden">
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-right text-secondary-800">
                    {children}
                </table>
            </div>
        </div>
    )
}

function TableHeader({ children }) {
    return (
        <thead className="text-xs text-secondary-800 uppercase bg-background">
            <tr>
                {children}
            </tr>
        </thead>
    )
}

function TableBody({ children }) {
    return (
        <tbody>{children}</tbody>
    )
}

function TableRow({ children }) {
    return (
        <tr className="border-b last:border-b-0 border-secondary-900/10 odd:bg-transparent even:bg-deepRed/10">
            {children}
        </tr>
    )
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
