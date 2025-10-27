import { FiUnlock, FiHome, FiTool, FiUsers, FiShield } from "react-icons/fi";

export interface IOpenSourceFeature {
    title: string;
    description: string;
    icon: React.ReactElement;
}

export const openSourceFeatures: IOpenSourceFeature[] = [
    {
        title: "MIT Licensed",
        description: "Free to use, modify, and deploy. No vendor lock-in, no hidden costs.",
        icon: <FiUnlock size={32} />
    },
    {
        title: "Self-Hosted",
        description: "Run on your infrastructure with full data control and privacy.",
        icon: <FiHome size={32} />
    },
    {
        title: "Extensible",
        description: "Build custom integrations, skills, and features to match your needs.",
        icon: <FiTool size={32} />
    },
    {
        title: "Community-Driven",
        description: "Active development with contributions from developers worldwide.",
        icon: <FiUsers size={32} />
    },
    {
        title: "Privacy-First",
        description: "Your data never leaves your servers. Complete control over security.",
        icon: <FiShield size={32} />
    }
];
