import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Ground Water Department Website",
    subtitle: "Government of Kerala Project",
    image: "/projects/groundwater.png",

    description:
      "Developed responsive user interfaces for the Ground Water Department website. Implemented multilingual support, dynamic content rendering, search functionality and modern UI components.",

    technologies: [
      "React",
      "Tailwind",
      "Laravel",
      "PHP",
      "MySQL",
    ],

    github: "#",
    live: "https://groundwater.niveosys.org",

    featured: true,
  },

  {
    title: "NotesFlow",
    subtitle: "MERN Stack Notes Application",
    image: "/projects/notesflow.png",

    description:
      "Full-stack notes application with JWT authentication, protected routes, CRUD operations and MongoDB integration.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    github: "#",
    live: "#",
  },

  {
    title: "ExpenseFlow",
    subtitle: "React + FastAPI Expense Tracker",
    image: "/projects/expenseflow.png",

    description:
      "Expense management platform with budgeting features, analytics dashboard and REST API integration.",

    technologies: [
      "React",
      "FastAPI",
      "Python",
      "SQLite",
    ],

    github: "#",
    live: "#",
  },

  {
    title: "Edu-Mood",
    subtitle: "AI Based Student Monitoring System",
    image: "/projects/edumood.png",

    description:
      "Final year project focused on emotion analysis, student engagement monitoring and attendance tracking using AI techniques.",

    technologies: [
      "Flutter",
      "Django",
      "Python",
      "AI",
    ],

    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 glass-card dark:bg-slate-950"
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
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Things I've Built
          </h2>

          <p className="mt-5 text-slate-500 dark:text-slate-300 max-w-2xl mx-auto">
            A collection of projects that helped me
            strengthen my frontend and full-stack
            development skills.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <motion.div
              key={project.title}
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
              mb-12
              overflow-hidden
              rounded-[40px]
              border
              border-slate-200
              bg-slate-50
            "
            >
              <div className="grid lg:grid-cols-2">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    hover:scale-105
                  "
                  />
                </div>

                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <span className="text-blue-600 font-medium">
                    {project.subtitle}
                  </span>

                  <h3 className="text-4xl font-bold mt-3 mb-6">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-white
                        dark:bg-slate-900
                        border
                        border-slate-200
                        text-sm
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      bg-black
                      text-white
                    "
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      border
                    "
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                rounded-[32px]
                overflow-hidden
                border
                border-slate-200
                bg-white
                shadow-sm
              "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  h-60
                  w-full
                  object-cover
                "
                />

                <div className="p-8">
                  <span className="text-blue-600 text-sm font-medium">
                    {project.subtitle}
                  </span>

                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-600">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                        px-3
                        py-1
                        rounded-full
                        bg-slate-100
                        text-sm
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;