"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

const projects = [
    {
        title: "Customer Churn Prediction",
        description: "A machine learning model developed to predict customer churn for a telecom company, achieving 85% accuracy and identifying key risk factors.",
        tags: ["Python", "Scikit-Learn", "XGBoost", "Flask"],
        links: { demo: "#", repo: "https://github.com/marciano-o" },
    },
    {
        title: "Real-time Crypto Sentiment",
        description: "An analytics dashboard tracking sentiment analysis of cryptocurrency discussions on Twitter/X in real-time to correlate with price movements.",
        tags: ["NLP", "Python", "Streamlit", "Docker"],
        links: { demo: "#", repo: "https://github.com/marciano-o" },
    },
    {
        title: "Sales Forecasting Engine",
        description: "Time-series forecasting module built for a retail chain to optimize inventory levels across 50+ locations, reducing stockouts by 20%.",
        tags: ["Prophet", "SQL", "Pandas", "Tableau"],
        links: { demo: "#", repo: "https://github.com/marciano-o" },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
                        <div className="h-px bg-slate-800 flex-grow" />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Folder className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-4">
                                        <Link href={project.links.repo} className="text-slate-400 hover:text-primary transition-colors">
                                            <Github className="w-5 h-5" />
                                        </Link>
                                        <Link href={project.links.demo} className="text-slate-400 hover:text-primary transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg">View Full Project Archive</Button>
                </div>
            </div>
        </section>
    );
}
