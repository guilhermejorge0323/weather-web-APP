export const CardInfo = ({ children, width, height}) => {
    return (
        <div className={`flex-shrink-0 rounded-xl p-4 dark:bg-slate-700/50 w-[${width}] bg-blue-50/80 h-[${height}]`}>
            {children}
        </div>
    )
}