export const Card = ({ children }) => {
    return (
        <div className="dark:bg-slate-800/50 bg-white shadow-2xl p-6 md:p-8 rounded-3xl backdrop-blur-xl border border-slate-700/50">
            {children}
        </div>
    )
}