export const CardInfo = ({ children, width, height}) => {
    return (
        <div className={`flex-shrink-0 rounded-xl p-4 dark:bg-slate-700/50 bg-blue-50/80 dark:text-gray-300 text-gray-700`} style={{ width: width, height: height }}>
            {children}
        </div>
    )
}