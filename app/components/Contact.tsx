"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <span className="text-primary font-medium mb-4 block">What's Next?</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a href="mailto:daniel.mcnfg@gmail.com">
                        <Button size="lg" className="px-8 h-16 text-lg gap-3">
                            <Mail className="w-5 h-5" />
                            Say Hello
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
