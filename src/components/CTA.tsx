import Link from "next/link"
import { ctaDetails } from "@/data/cta"
import { FiBook, FiGithub } from "react-icons/fi"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-16 sm:py-24 overflow-hidden">
                <div className="h-full w-full">
                    {/* Modern gradient background */}
                    <div className="rounded-3xl absolute inset-0 -z-10 h-full w-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 opacity-95"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                        {/* Animated gradient orbs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
                    </div>

                    <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-5 z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                href={ctaDetails.appStoreUrl}
                                className="group relative flex items-center gap-2 bg-white text-purple-600 hover:text-purple-700 px-8 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                            >
                                <FiBook size={20} />
                                Read Documentation
                                <div className="absolute inset-0 rounded-full bg-purple-100 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                            </Link>
                            <Link
                                href={ctaDetails.googlePlayUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 glass-dark px-8 py-4 rounded-full font-semibold text-white hover:bg-white/20 transition-all border-2 border-white/30 hover:border-white/50"
                            >
                                <FiGithub size={20} />
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA