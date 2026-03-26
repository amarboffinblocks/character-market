import { stats } from "@/lib/mock-data"

export function StatsSection() {
  const statItems = [
    { label: "Orders Completed", value: stats.ordersCompleted },
    { label: "Verified Creators", value: stats.verifiedCreators },
    { label: "Average Rating", value: stats.averageRating },
    { label: "Avg Response Time", value: stats.avgResponseTime },
  ]

  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statItems.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
