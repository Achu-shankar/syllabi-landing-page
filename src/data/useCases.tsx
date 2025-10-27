import { FiBookOpen, FiHeadphones, FiUsers, FiCode } from "react-icons/fi";

export interface IUseCase {
    title: string;
    description: string;
    icon: React.ReactElement;
    features: string[];
}

export const useCases: IUseCase[] = [
    {
        title: "Course Assistant for Students",
        description: "Teachers create chatbots from course materials. Students get instant answers with source citations, making learning interactive and efficient.",
        icon: <FiBookOpen size={40} />,
        features: ["Document upload", "Citation tracking", "Q&A support"]
    },
    {
        title: "Embedded Website Support",
        description: "Add AI-powered support to your website. Automatically answer questions from your docs, reducing support tickets and improving customer satisfaction.",
        icon: <FiHeadphones size={40} />,
        features: ["Embedded widget", "24/7 availability", "Brand customization"]
    },
    {
        title: "Team Knowledge via Slack/Discord",
        description: "Connect your team's knowledge base to Slack or Discord. Get instant answers from company docs without leaving your workflow.",
        icon: <FiUsers size={40} />,
        features: ["Slack/Discord integration", "Private data", "Team collaboration"]
    },
    {
        title: "API & Code Documentation",
        description: "Help developers find answers in technical documentation. Generate code examples and explain complex concepts with diagrams.",
        icon: <FiCode size={40} />,
        features: ["Code generation", "Diagram support", "Technical docs"]
    }
];
