import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} really free and open-source?`,
        answer: 'Yes! Syllabi is 100% open-source under the MIT license. You can self-host it on your own infrastructure, customize it to your needs, and use it completely free. No hidden costs or usage limits.',
    },
    {
        question: 'What channels can I deploy my chatbot to?',
        answer: 'Currently, Syllabi supports deployment to Web, Embedded widgets, Slack, and Discord. You can also build custom integrations via our REST API.',
    },
    {
        question: 'Can I highlight sources in documents?',
        answer: 'Yes! When your chatbot provides answers with citations, users can click on the references to see the exact highlighted passages in the original documents. This makes verification easy and builds trust.',
    },
    {
        question: 'What AI models does Syllabi support?',
        answer: 'Currently, Syllabi supports OpenAI models (GPT-4, GPT-3.5, etc.). You can configure model parameters like temperature and behavior. Support for additional model providers is planned for future releases.',
    },
    {
        question: 'Can I connect external tools and APIs?',
        answer: 'Absolutely! Syllabi supports custom skills and webhooks. You can create tools that send Slack messages, trigger workflows, query APIs, or integrate with any external service. Your chatbot becomes agentic and can decide when to use these tools.',
    },
    {
        question: 'How does the knowledge base work?',
        answer: 'Upload documents (PDFs, videos, websites, Notion pages, Google Drive files) and Syllabi processes them using advanced RAG (Retrieval Augmented Generation). Your chatbot retrieves the most relevant information and provides cited, accurate responses.',
    },
    {
        question: 'Is my data private and secure?',
        answer: 'Yes! Since Syllabi is self-hosted and open-source, your data never leaves your servers. You have complete control over data storage, security, and privacy compliance.',
    }
];