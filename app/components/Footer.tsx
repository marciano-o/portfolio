"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-secondary/30 relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">


                <div className="flex items-center gap-6">
                    <Link href="https://github.com/marciano-o" className="text-slate-400 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/daniel-m-89a539352/" className="text-slate-400 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="https://x.com/marciano_ow" className="text-slate-400 hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
