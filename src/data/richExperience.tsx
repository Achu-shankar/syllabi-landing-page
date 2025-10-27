import { FiFileText, FiImage, FiCode, FiVideo } from "react-icons/fi";

export interface IRichFeature {
    title: string;
    description: string;
    icon: React.ReactElement;
    imageSrc: string;
}

export const richFeatures: IRichFeature[] = [
    {
        title: "Document Highlighting",
        description: "Click on citations to see the exact source highlighted in the original document. Navigate directly to relevant passages.",
        icon: <FiFileText size={32} />,
        imageSrc: "/app_screenshots/chatbot_doc_highlight.png"
    },
    {
        title: "Diagrams & Visualizations",
        description: "Generate Mermaid diagrams, flowcharts, and visual explanations to make complex concepts easier to understand.",
        icon: <FiImage size={32} />,
        imageSrc: "/app_screenshots/mermaid_diagram.png"
    },
    {
        title: "Native Code Execution",
        description: "Run Python and R code directly in the browser using Pyodide and WebR. Generate, execute, and visualize results instantly—no server needed.",
        icon: <FiCode size={32} />,
        imageSrc: "/app_screenshots/code_execution_ss.png"
    },
    {
        title: "Multimedia Support",
        description: "Embed and play videos, display images, and share rich media content directly in conversations.",
        icon: <FiVideo size={32} />,
        imageSrc: "/app_screenshots/chatbot_multimedia_mermaid_dia.png"
    }
];
