export type IconType = "slack" | "google" | "notion" | "globe" | "file" | "discord" | "message" | "mail" | "calendar" | "code";

export interface IIntegrationApp {
    name: string;
    category: "knowledge" | "channel" | "action" | "multi";
    description: string;
    categoryLabels: string[]; // What it can do
    color: string; // Brand color
    iconType: IconType; // Icon type identifier
}

export const integrationApps: IIntegrationApp[] = [
    // Multi-purpose (Knowledge + Channel + Action)
    {
        name: "Slack",
        category: "multi",
        description: "Build knowledge base from Slack, deploy chatbot to Slack, trigger Slack actions",
        categoryLabels: ["Knowledge Source", "Deploy Channel", "Action/Workflow"],
        color: "from-blue-500 to-blue-600",
        iconType: "slack"
    },
    {
        name: "Google Workspace",
        category: "multi",
        description: "Connect Google Drive, Gmail, Calendar, and Docs as knowledge sources",
        categoryLabels: ["Knowledge Source", "Action/Workflow"],
        color: "from-blue-400 to-red-500",
        iconType: "google"
    },

    // Knowledge Sources
    {
        name: "Notion",
        category: "knowledge",
        description: "Sync Notion pages and databases as knowledge sources",
        categoryLabels: ["Knowledge Source"],
        color: "from-gray-800 to-black",
        iconType: "notion"
    },
    {
        name: "Website URLs",
        category: "knowledge",
        description: "Feed in direct website URLs and web pages to build your knowledge base",
        categoryLabels: ["Knowledge Source"],
        color: "from-purple-500 to-purple-600",
        iconType: "globe"
    },
    {
        name: "PDFs & Documents",
        category: "knowledge",
        description: "Upload and process PDFs, Word docs, markdown, and text files",
        categoryLabels: ["Knowledge Source"],
        color: "from-red-500 to-orange-500",
        iconType: "file"
    },

    // Deploy Channels
    {
        name: "Discord",
        category: "channel",
        description: "Deploy your chatbot to Discord servers and channels",
        categoryLabels: ["Deploy Channel"],
        color: "from-indigo-500 to-indigo-600",
        iconType: "discord"
    },
    {
        name: "Web Widget",
        category: "channel",
        description: "Embed on any website with a customizable, fully-branded chat widget",
        categoryLabels: ["Deploy Channel"],
        color: "from-cyan-400 to-blue-500",
        iconType: "globe"
    },
    {
        name: "Standalone App",
        category: "channel",
        description: "Deploy as a fully standalone chat application like ChatGPT or Claude",
        categoryLabels: ["Deploy Channel"],
        color: "from-orange-400 to-red-500",
        iconType: "message"
    },

    // Actions & Extensions
    {
        name: "Gmail",
        category: "action",
        description: "Send emails through Gmail based on chatbot interactions",
        categoryLabels: ["Action/Workflow"],
        color: "from-red-400 to-orange-500",
        iconType: "mail"
    },
    {
        name: "Google Calendar",
        category: "action",
        description: "Create events and manage calendars automatically",
        categoryLabels: ["Action/Workflow"],
        color: "from-blue-400 to-cyan-500",
        iconType: "calendar"
    },
    {
        name: "Custom APIs",
        category: "action",
        description: "Connect to any custom API or webhook for unlimited extensions",
        categoryLabels: ["Action/Workflow"],
        color: "from-purple-500 to-pink-500",
        iconType: "code"
    },
];

export const integrationCategories = [
    {
        id: "knowledge",
        title: "Knowledge Sources",
        subtitle: "Build your knowledge base from these sources",
        icon: "📚"
    },
    {
        id: "channel",
        title: "Deploy Channels",
        subtitle: "Reach users where they are",
        icon: "🌍"
    },
    {
        id: "action",
        title: "Actions & Extensions",
        subtitle: "Extend capabilities and automate workflows",
        icon: "⚡"
    },
    {
        id: "multi",
        title: "Powerhouse Integrations",
        subtitle: "Deep integrations that work as knowledge sources, channels, AND actions",
        icon: "🚀"
    }
];
