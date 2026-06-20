from pathlib import Path

content = '''"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-purple-500/20 py-12">
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-700/20 rounded-full blur-[150px]" />
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-700/10 rounded-full blur-[120px]" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-3">AKSHEN</h2>
                        <p className="text-purple-400 font-medium">AI/ML Developer</p>
                        <p className="text-zinc-400 mt-4 leading-7">
                            Building intelligent systems,
                            <br />
                            LLM applications and scalable
                            <br />
                            AI solutions.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-green-300 text-sm">Available for Opportunities</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
                        <div className="space-y-3">
                            <Link href="#home"><p className="hover:text-purple-400 transition">Home</p></Link>
                            <Link href="#about"><p className="hover:text-purple-400 transition">About</p></Link>
                            <Link href="#skills"><p className="hover:text-purple-400 transition">Skills</p></Link>
                            <Link href="#experience"><p className="hover:text-purple-400 transition">Experience</p></Link>
                            <Link href="#projects"><p className="hover:text-purple-400 transition">Projects</p></Link>
                            <Link href="#contact"><p className="hover:text-purple-400 transition">Contact</p></Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-5">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-zinc-900 border border-purple-500/20 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition">
                                <Image src="/linkedin-logo.svg" alt="LinkedIn" width={24} height={24} />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-zinc-900 border border-purple-500/20 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition">
                                <Image src="/github-logo.svg" alt="GitHub" width={24} height={24} />
                            </a>
                            <a href="https://wa.me/918531899895" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-zinc-900 border border-purple-500/20 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition">
                                <Image src="/whatsapp-logo.svg" alt="WhatsApp" width={24} height={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-purple-500/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-zinc-500 text-sm">© 2026 Akshen S. Built with Next.js • TypeScript • TailwindCSS</p>
                    <button onClick={scrollTop} className="mt-5 md:mt-0 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition">
                        <ChevronUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
'''

Path('app/components/Footer.tsx').write_text(content)
print('Footer.tsx overwritten successfully')
