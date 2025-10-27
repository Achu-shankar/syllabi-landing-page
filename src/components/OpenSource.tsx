"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiArrowRight } from "react-icons/fi";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { openSourceFeatures } from "@/data/openSource";

const OpenSource: React.FC = () => {
    return (
        <Section id="open-source" className="py-16 md:py-24">
            <div className="text-center mb-16">
                <SectionTitle>
                    <h2 className="gradient-text">
                        Open Source. Self-Hosted. Your Data, Your Control.
                    </h2>
                </SectionTitle>
                <p className="mt-4 text-lg md:text-xl text-foreground-accent max-w-3xl mx-auto">
                    Built for developers and teams who value transparency, privacy, and full control over their AI infrastructure.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                {openSourceFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        className="group text-center"
                    >
                        <div className="relative glass rounded-2xl p-6 border border-purple-100 hover:border-purple-200 transition-all shadow-lg hover:shadow-xl h-full">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 via-orange-500 to-blue-500 flex items-center justify-center text-white shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-foreground mb-2">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-foreground-accent">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* GitHub CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
            >
                <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                    <Link
                        href="https://github.com/Achu-shankar/Syllabi/tree/main"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 hover:from-purple-700 hover:via-orange-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <FiGithub size={24} />
                        View on GitHub
                        <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <div className="text-foreground-accent">
                        <p className="text-sm">⭐ Star us on GitHub</p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

export default OpenSource;
