"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { customizationFeatures } from "@/data/customization";

const Customization: React.FC = () => {
    return (
        <Section id="customization" className="py-16 md:py-24">
            <div className="text-center mb-16">
                <SectionTitle>
                    <h2 className="gradient-text">
                        Full Control Over Behavior & Appearance
                    </h2>
                </SectionTitle>
                <p className="mt-4 text-lg md:text-xl text-foreground-accent max-w-3xl mx-auto">
                    Customize every aspect of your chatbot to match your brand and business needs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {customizationFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group"
                    >
                        <div className="relative glass rounded-2xl p-6 border border-purple-100 hover:border-purple-200 transition-all shadow-lg hover:shadow-xl h-full">
                            {/* Gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-orange-400 to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10"></div>

                            <div className="flex items-start gap-4 mb-4">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 via-orange-500 to-blue-500 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                                    {feature.icon}
                                </div>

                                <div>
                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                        {feature.title}
                                    </h3>
                                    {/* Description */}
                                    <p className="text-foreground-accent">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Optional Image */}
                            {feature.imageSrc && (
                                <div className="mt-6 relative rounded-xl overflow-hidden border border-gray-200 shadow-md">
                                    <Image
                                        src={feature.imageSrc}
                                        alt={feature.title}
                                        width={600}
                                        height={400}
                                        quality={90}
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Customization;
