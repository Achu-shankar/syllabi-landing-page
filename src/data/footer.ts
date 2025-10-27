import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Open-source chatbot creator platform. Build intelligent chatbots with knowledge bases and deploy everywhere.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Documentation",
            url: "/docs"
        },
        {
            text: "GitHub",
            url: "https://github.com/Achu-shankar/Syllabi/tree/main"
        }
    ],
    email: 'hello@syllabi.io',
    telephone: '', // Remove phone number as it's not relevant for open-source project
    socials: {
        github: 'https://github.com/Achu-shankar/Syllabi/tree/main',
        twitter: 'https://twitter.com/syllabi',
        // facebook: 'https://facebook.com', // Remove irrelevant socials
        // linkedin: 'https://www.linkedin.com',
        // instagram: 'https://www.instagram.com',
    }
}