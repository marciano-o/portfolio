"use client";

import { motion } from "framer-motion";

const skills = {
    "Data Science": ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch"],
    "Analysis & Viz": ["SQL", "Tableau", "Power BI", "Matplotlib", "Seaborn", "Excel"],
    "Tools & Platforms": ["Jupyter", "Git", "Docker", "AWS SageMaker", "Spark", "Airflow"],
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-center mb-4">Technical Skills</h2>
                    <p className="text-slate-400 text-center max-w-2xl mx-auto">
                        A curated list of technologies I work with to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {(Object.keys(skills) as Array<keyof typeof skills>).map((category, index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary/50 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills[category].map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-3 py-1.5 bg-background/50 text-slate-300 text-sm rounded-md border border-white/5 hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
