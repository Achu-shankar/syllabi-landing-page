import { stats } from "@/data/stats"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-10 lg:py-20">
            <div className="grid sm:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <div key={stat.title} className="relative group">
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative glass rounded-2xl p-8 text-center sm:text-left hover:scale-105 transition-all duration-300">
                            <div className="flex items-center justify-center sm:justify-start mb-4">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="mb-3 text-2xl md:text-3xl font-bold gradient-text">
                                {stat.title}
                            </h3>
                            <p className="text-foreground-accent text-sm md:text-base">{stat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats