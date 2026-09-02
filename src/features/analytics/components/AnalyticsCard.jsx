function AnalyticsCard({ title, value }) {
    return(
        <div className="metric-card p-5">
            <p className="metric-label">
                {title}
            </p>

            <h2 className="metric-value mt-3 text-3xl font-bold">
                {value}
            </h2>
        </div>
    )
}

export default AnalyticsCard;