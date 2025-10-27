"use client"
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useCases } from "@/data/useCases";

const UseCases: React.FC = () => {
    return (
        <section id="use-cases" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionTitle>
                        <h2 className="gradient-text">
                            Built for Every Team and Use Case
                        </h2>
                    </SectionTitle>
                    <p className="mt-4 text-lg md:text-xl text-foreground-accent max-w-3xl mx-auto">
                        From education to customer support, Syllabi adapts to your needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group"
                    >
                        <div className="relative h-full glass rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            {/* Gradient glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10"></div>

                            {/* Icon */}
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-orange-500 to-blue-500 flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
                                {useCase.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {useCase.title}
                            </h3>

                            {/* Description */}
                            <p className="text-foreground-accent mb-6">
                                {useCase.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {useCase.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-foreground-accent">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
