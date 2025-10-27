import { FiDatabase, FiMessageSquare, FiZap, FiLayers, FiGlobe, FiSettings, FiSliders, FiActivity, FiBox } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Build from Your Knowledge",
        description: "Transform your documents, websites, and data into an intelligent knowledge base. Your chatbot retrieves accurate information with citations and source highlighting.",
        bullets: [
            {
                title: "Multi-Format Support",
                description: "Import PDFs, videos, websites, Google Drive, Notion, and more.",
                icon: <FiDatabase size={26} />
            },
            {
                title: "Smart Retrieval (RAG)",
                description: "Advanced retrieval technology finds the most relevant information instantly.",
                icon: <FiZap size={26} />
            },
            {
                title: "Source Citations",
                description: "Highlights exact passages from documents with clickable references.",
                icon: <FiActivity size={26} />
            }
        ],
        imageSrc: "/app_screenshots/kb.png"
    },
    {
        title: "Deploy Across Channels",
        description: "One chatbot, multiple channels. Deploy to web, embed in your website, or connect to Slack and Discord for team collaboration.",
        bullets: [
            {
                title: "Web & Embedded Widget",
                description: "Add AI-powered chat to any website with customizable widgets.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Slack & Discord",
                description: "Integrate with team messaging platforms for instant access to knowledge.",
                icon: <FiMessageSquare size={26} />
            },
            {
                title: "API Access",
                description: "Build custom integrations with our REST API.",
                icon: <FiBox size={26} />
            }
        ],
        imageSrc: "/app_screenshots/integration.png"
    },
    {
        title: "Extend with Skills",
        description: "Make your chatbot agentic by adding custom skills and tools. Connect to external services, trigger actions, or create custom API integrations.",
        bullets: [
            {
                title: "Custom Tools & Webhooks",
                description: "Create custom actions via webhooks and API integrations.",
                icon: <FiSliders size={26} />
            },
            {
                title: "Integration Skills",
                description: "Send Slack messages, trigger workflows, and connect external services.",
                icon: <FiSettings size={26} />
            },
            {
                title: "Agentic Behavior",
                description: "Your chatbot intelligently decides when and how to use available tools.",
                icon: <FiLayers size={26} />
            }
        ],
        imageSrc: "/app_screenshots/chatbot_multimedia_mermaid_dia_py_code.png"
    },
]