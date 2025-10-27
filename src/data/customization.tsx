import { FiSettings, FiSliders, FiMessageSquare, FiBarChart2 } from "react-icons/fi";

export interface ICustomizationFeature {
    title: string;
    description: string;
    icon: React.ReactElement;
    imageSrc?: string;
}

export const customizationFeatures: ICustomizationFeature[] = [
    {
        title: "Brand Customization",
        description: "Match your brand with custom themes, colors, and styling. Choose from pre-built themes or create your own.",
        icon: <FiSettings size={32} />,
        imageSrc: "/app_screenshots/settings.png"
    },
    {
        title: "Model Configuration",
        description: "Choose OpenAI models (GPT-4, GPT-3.5) and configure temperature, personality, and behavior. More model providers coming soon.",
        icon: <FiSliders size={32} />,
        imageSrc: "/app_screenshots/ai_behaviour_model.png"
    },
    {
        title: "Conversation Design",
        description: "Set custom welcome messages, suggested questions, and conversation flows to guide user interactions.",
        icon: <FiMessageSquare size={32} />,
        imageSrc: "/app_screenshots/chat_preview.png"
    },
    {
        title: "Analytics & Insights",
        description: "Track conversations, measure engagement, and understand user needs with detailed analytics dashboards.",
        icon: <FiBarChart2 size={32} />,
        imageSrc: "/app_screenshots/analytics.png"
    }
];
