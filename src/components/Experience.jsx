import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "React Intern",
    company: "KINFRA, Calicut",
    period: "2026 - Present",
    description:
      "Working on modern React applications and contributing to real-world projects. Developed responsive interfaces, integrated APIs and improved user experiences.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "API Integration",
    ],
  },

  {
    icon: Code2,
    title: "Government Project",
    company: "Ground Water Department, Kerala",
    period: "2026",
    description:
      "Contributed to the development of the Ground Water Department website. Worked on responsive layouts, multilingual support, dynamic content rendering and UI improvements.",
    technologies: [
      "React",
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind",
    ],
  },

  {
    icon: GraduationCap,
    title: "MERN Stack Training",
    company: "Professional Training",
    period: "2025 - 2026",
    description:
      "Completed hands-on MERN Stack training and built full-stack applications including authentication systems, CRUD operations and REST APIs.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 font-medium mb-3">
            EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Professional Journey
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            A journey through learning, building projects
            and gaining real-world development experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-slate-200 -translate-x-1/2" />

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`relative mb-16 flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                <div className="w-full md:w-[45%]">

                  {/* Card */}
                  <div
                    className="
                    bg-white
                    border
                    border-slate-200
                    rounded-[32px]
                    p-8
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                  >

                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="
                        h-12
                        w-12
                        rounded-2xl
                        bg-blue-50
                        flex
                        items-center
                        justify-center
                      "
                      >
                        <Icon
                          size={24}
                          className="text-blue-600"
                        />
                      </div>

                      <div>
                        <h3 className="font-bold text-xl">
                          {item.title}
                        </h3>

                        <p className="text-slate-500 text-sm">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                      inline-block
                      px-4
                      py-1.5
                      rounded-full
                      bg-slate-100
                      text-sm
                      text-slate-600
                      mb-5
                    "
                    >
                      {item.period}
                    </span>

                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          bg-blue-50
                          text-blue-700
                        "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className="
                  hidden
                  md:flex
                  absolute
                  left-1/2
                  top-10
                  -translate-x-1/2
                  h-5
                  w-5
                  rounded-full
                  bg-blue-600
                  border-4
                  border-white
                "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;