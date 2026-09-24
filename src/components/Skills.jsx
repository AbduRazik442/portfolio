import { motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiFastapi,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-50 glass-card dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 font-medium mb-3">
            SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technologies I Work With
          </h2>

          <p className="text-slate-500 dark:text-white mt-5 max-w-2xl mx-auto">
            My core technology stack for building
            modern web applications and full-stack
            solutions.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
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
                delay: categoryIndex * 0.1,
              }}
            >
              <h3 className="text-2xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

                {category.skills.map(
                  (skill, index) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{
                          y: -6,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                        bg-white
                        border
                        border-slate-200
                        rounded-[28px]
                        p-6
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-4
                        shadow-sm
                        hover:shadow-xl
                        transition-all
                      "
                      >
                        <Icon
                          size={42}
                          className="text-slate-800"
                        />

                        <p className="font-medium text-center">
                          {skill.name}
                        </p>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
          mt-20
          rounded-[36px]
          bg-white
          border
          border-slate-200
          p-10
          text-center
        "
        >
          <h3 className="text-3xl font-bold mb-4">
            Always Learning 🚀
          </h3>

          <p className="text-slate-600 max-w-3xl mx-auto">
            I continuously improve my skills by
            building real-world projects, exploring
            new technologies and contributing to
            modern web applications.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;