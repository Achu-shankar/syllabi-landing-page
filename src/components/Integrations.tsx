"use client"
import { motion } from "framer-motion";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import {
    FiGlobe,
    FiMessageSquare,
    FiMail,
    FiCalendar,
    FiFileText,
    FiCode
} from "react-icons/fi";
import {
    SiSlack,
    SiDiscord,
    SiNotion,
    SiGoogledrive,
    SiGmail,
    SiGooglecalendar,
    SiGoogle
} from "react-icons/si";

const Integrations: React.FC = () => {
    return (
        <Section id="integrations" className="py-16 md:py-24">
            <div className="text-center mb-16">
                <SectionTitle>
                    <h2 className="gradient-text">
                        Integrate with Tools You Already Use
                    </h2>
                </SectionTitle>
                <p className="mt-4 text-lg md:text-xl text-foreground-accent max-w-3xl mx-auto">
                    Connect Syllabi to your favorite apps. Use them as knowledge sources, deployment channels, or to automate actions and workflows.
                </p>
            </div>

            {/* Knowledge Sources */}
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-10">
                    <span className="text-3xl">📚</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Knowledge Sources</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Google Drive */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-yellow-500 flex items-center justify-center text-white mb-4">
                                <SiGoogledrive size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Google Drive</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-yellow-500 text-white mb-3">Knowledge Source</span>
                            <p className="text-sm text-foreground-accent">Sync Google Drive files and docs as knowledge sources.</p>
                        </div>
                    </motion.div>

                    {/* Notion */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05, duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white mb-4">
                                <SiNotion size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Notion</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-white mb-3">Knowledge Source</span>
                            <p className="text-sm text-foreground-accent">Sync Notion pages and databases.</p>
                        </div>
                    </motion.div>

                    {/* Website URLs */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center text-white mb-4">
                                <FiGlobe size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Website URLs</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-500 text-white mb-3">Knowledge Source</span>
                            <p className="text-sm text-foreground-accent">Feed in direct website URLs and web pages.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Deploy Channels */}
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-10">
                    <span className="text-3xl">🌍</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Deploy Channels</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Discord */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-indigo-500 flex items-center justify-center text-white mb-4">
                                <SiDiscord size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Discord</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500 text-white mb-3">Deploy Channel</span>
                            <p className="text-sm text-foreground-accent">Deploy chatbot to Discord servers.</p>
                        </div>
                    </motion.div>

                    {/* Web Widget */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05, duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center text-white mb-4">
                                <FiGlobe size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Web Widget</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500 text-white mb-3">Deploy Channel</span>
                            <p className="text-sm text-foreground-accent">Embed on any website with a chat widget.</p>
                        </div>
                    </motion.div>

                    {/* Standalone App */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center text-white mb-4">
                                <FiMessageSquare size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Standalone App</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-orange-500 text-white mb-3">Deploy Channel</span>
                            <p className="text-sm text-foreground-accent">Deploy as a standalone chat app.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Actions & Extensions */}
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-10">
                    <span className="text-3xl">⚡</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Actions & Extensions</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Gmail */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center text-white mb-4">
                                <SiGmail size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Gmail</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-red-500 text-white mb-3">Action/Workflow</span>
                            <p className="text-sm text-foreground-accent">Send emails based on chatbot interactions.</p>
                        </div>
                    </motion.div>

                    {/* Google Calendar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05, duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-4">
                                <SiGooglecalendar size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Google Calendar</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white mb-3">Action/Workflow</span>
                            <p className="text-sm text-foreground-accent">Create and manage calendar events.</p>
                        </div>
                    </motion.div>

                    {/* Custom APIs */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center text-white mb-4">
                                <FiCode size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Custom APIs</h4>
                            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-500 text-white mb-3">Action/Workflow</span>
                            <p className="text-sm text-foreground-accent">Connect to any custom API or webhook.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Powerhouse Integrations */}
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-10">
                    <span className="text-3xl">🚀</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Powerhouse Integrations</h3>
                </div>
                <p className="text-foreground-accent text-lg mb-10">Multi-purpose integrations that work as knowledge sources, channels, AND actions</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Slack Multi */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center text-white mb-4">
                                <SiSlack size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Slack</h4>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500 text-white">Knowledge Source</span>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500 text-white">Deploy Channel</span>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500 text-white">Action/Workflow</span>
                            </div>
                            <p className="text-sm text-foreground-accent">Build knowledge base from Slack, deploy chatbot, trigger Slack actions.</p>
                        </div>
                    </motion.div>

                    {/* Google Workspace */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05, duration: 0.4 }}
                        className="group"
                    >
                        <div className="glass rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 flex items-center justify-center text-white mb-4">
                                <SiGoogle size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-2">Google Workspace</h4>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white">Knowledge Source</span>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white">Action/Workflow</span>
                            </div>
                            <p className="text-sm text-foreground-accent">Connect Google Drive, Gmail, Calendar, and Docs as knowledge sources.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Coming Soon */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-8 glass rounded-2xl border border-purple-100"
            >
                <p className="text-center text-foreground-accent">
                    <span className="font-semibold text-foreground">Coming soon:</span> Zapier, Make (Integromat), GitHub, Microsoft Teams, Stripe, Zendesk, HubSpot, and many more. Plus, custom API integrations for unlimited possibilities.
                </p>
            </motion.div>
        </Section>
    );
};

export default Integrations;
