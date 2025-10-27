import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiBook, FiGithub } from 'react-icons/fi';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-20 md:pb-32 pt-32 md:pt-40 px-5 overflow-hidden bg-white"
        >
            {/* Subtle mesh grid background */}
            <div className="absolute inset-0 -z-10 w-full h-full">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>

            {/* Floating gradient orbs with slower animation */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow"></div>
            <div className="absolute top-40 -right-20 w-[400px] h-[400px] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow" style={{animationDelay: '2s', animationDuration: '9s'}}></div>
            <div className="absolute -bottom-20 left-1/4 w-[450px] h-[450px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float-slow" style={{animationDelay: '1s', animationDuration: '11s'}}></div>

            <div className="relative text-center z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl md:leading-tight font-bold max-w-lg md:max-w-3xl mx-auto mb-6">
                    <span className="block text-foreground mb-2">{heroDetails.heading.split(' ').slice(0, 3).join(' ')}</span>
                    <span className="block gradient-text">{heroDetails.heading.split(' ').slice(3).join(' ')}</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-foreground-accent max-w-2xl mx-auto leading-relaxed">{heroDetails.subheading}</p>
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-fit mx-auto">
                    <Link href="/docs/getting-started" className="group relative flex items-center gap-2 bg-gradient-to-r from-purple-600 via-orange-500 to-blue-600 hover:from-purple-700 hover:via-orange-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105">
                        <FiBook size={20} />
                        Get Started
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </Link>
                    <Link href="https://github.com/Achu-shankar/Syllabi/tree/main" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white px-8 py-4 rounded-full font-semibold text-foreground hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg">
                        <FiGithub size={20} />
                        View on GitHub
                    </Link>
                </div>
                <div className="relative mt-16 md:mt-20 mx-auto max-w-4xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-orange-400 to-blue-500 rounded-3xl blur-3xl opacity-15"></div>
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={1200}
                        height={600}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority={true}
                        unoptimized={true}
                        alt="Syllabi Dashboard Mockup"
                        className='relative z-10 rounded-2xl border-4 border-white/20 shadow-2xl'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
