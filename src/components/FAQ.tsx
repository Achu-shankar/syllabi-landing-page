"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="">
                    <p className="hidden lg:block text-purple-600 font-semibold mb-2">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left gradient-text">Frequently Asked Questions</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
                        Ask us anything!
                    </p>
                    <a href="mailto:help@syllabi.com" className="mt-3 block text-xl lg:text-3xl gradient-text font-bold hover:opacity-80 transition-opacity text-center lg:text-left">help@syllabi.com</a>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <Disclosure>
                                {({ open }) => (
                                    <div className="glass rounded-xl overflow-hidden border border-purple-100 hover:border-purple-200 transition-all">
                                        <DisclosureButton className="flex items-center justify-between w-full px-6 py-5 text-lg text-left hover:bg-purple-50/50 transition-colors">
                                            <span className="text-lg md:text-xl font-semibold text-foreground pr-4">{faq.question}</span>
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
                                                {open ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
                                            </div>
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-6 pb-5 pt-2 text-foreground-accent">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </div>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;