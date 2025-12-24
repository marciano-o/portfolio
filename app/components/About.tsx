"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
                        <div className="h-px bg-slate-800 flex-grow" />
                    </div>

                    <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                        <p>
                            I am a passionate Data Scientist and Analyst with a strong focus on deriving actionable insights from complex datasets. My journey in tech started with a curiosity for patterns and statistics, which quickly turned into a career of solving business problems through data.
                        </p>
                        <p>
                            With an interest in learning machine learning, statistical analysis, and data visualization, I strive to bridge the gap between raw data and strategic decision-making. I believe in reproducible research, clear communication of findings, and ethical data practices.
                        </p>
                        <p>
                            When I'm not crunching numbers, you can find me exploring new AI advancements.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
