import { BsBarChartFill, BsFillChatDotsFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { FiTool } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "Open Source",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "MIT licensed and community-driven. Self-host and customize freely."
    },
    {
        title: "Multi-Channel",
        icon: <BsFillChatDotsFill size={34} className="text-purple-500" />,
        description: "Deploy to Web, Embedded, Slack, and Discord."
    },
    {
        title: "Agentic & Extensible",
        icon: <FiTool size={34} className="text-orange-500" />,
        description: "Add custom skills and tools to extend chatbot capabilities."
    },
    {
        title: "Advanced RAG",
        icon: <PiGlobeFill size={34} className="text-cyan-600" />,
        description: "Powered by retrieval-augmented generation for accurate, cited responses."
    }
];