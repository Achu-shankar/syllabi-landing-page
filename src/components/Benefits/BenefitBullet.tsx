import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-start group"
            variants={childVariants}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-1">
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-purple-200 group-hover:scale-110 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                        {icon}
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                    {title}
                </h4>
                <p className="text-base text-foreground-accent mt-1">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet