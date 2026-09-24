import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FolderGit2 } from "lucide-react";
import CountUp from "react-countup";

const stats = [
    {
        icon: Briefcase,
        value: "6+",
        label: "Months MERN Training",
    },
    {
        icon: GraduationCap,
        value: "1",
        label: "React Internship",
    },
    {
        icon: FolderGit2,
        value: "4+",
        label: "Projects Built",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="py-28 bg-transparent dark:bg-slate-900 glass-card"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <p className="text-blue-600 font-medium mb-3">
                        ABOUT ME
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Building modern web experiences
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative">
                            <div className="aspect-square rounded-[40px] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100">
                                <img
                                    src="/profile.jpg"
                                    alt="Abdu Razik"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-5 left-6 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-lg">
                                <p className="text-sm font-medium">
                                    MERN Stack Developer
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Hi, I'm Abdu Razik 👋
                        </h3>

                        <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                            <p>
                                I am a BSc Computer Science graduate with
                                hands-on experience in modern web
                                development using the MERN Stack.
                            </p>

                            <p>
                                After completing my degree, I pursued
                                dedicated MERN Stack training where I
                                built full-stack applications using
                                React, Node.js, Express.js and MongoDB.
                            </p>

                            <p>
                                Currently working as a React Intern,
                                contributing to real-world projects
                                including the Ground Water Department
                                website for the Government of Kerala.
                            </p>

                            <p>
                                I enjoy creating responsive user
                                interfaces, integrating APIs and
                                building scalable web applications
                                that solve practical problems.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Statistics */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                                whileHover={{
                                    y: -5,
                                }}
                                className="
                                    bg-slate-50
                                    border
                                    border-slate-200
                                    rounded-[28px]
                                    p-8
                                    transition-all
                                "
                            >
                                <Icon
                                    size={32}
                                    className="text-blue-600 mb-4"
                                />

                                <h4 className="text-4xl font-bold mb-2">
                                    6+
                                </h4>

                                <p className="text-slate-600">
                                    {item.label}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default About;