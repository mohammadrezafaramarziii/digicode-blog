export function ScreenLoading({message}) {
    return (
        <div className="w-full h-full flex flex-col gap-6 items-center justify-center bg-primary-800/20 backdrop-blur-sm fixed top-0 right-0 z-50">
            <div
                style={{
                    "--size": "64px",
                    "--dot-size": "7px",
                    "--dot-count": 6,
                    "--speed": "1s",
                    "--spread": "60deg"
                }}
                className="dots"
            >
                <div style={{ "--i": 0 }} className="dot"></div>
                <div style={{ "--i": 1 }} className="dot"></div>
                <div style={{ "--i": 2 }} className="dot"></div>
                <div style={{ "--i": 3 }} className="dot"></div>
                <div style={{ "--i": 4 }} className="dot"></div>
                <div style={{ "--i": 5 }} className="dot"></div>
            </div>
            
            <div className="text-xl font-bold text-secondary-900">
                {message}
            </div>
        </div>
    )
}
