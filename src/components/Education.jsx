import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    degree: "BSc Computer Science",
    institution: "MES Arts & Science College",
    board: "University of Calicut",
    period: "2022 - 2025",
    description:
      "Completed Bachelor of Science in Computer Science with focus on programming, databases, web development and software engineering.",
  },

  {
    icon: BookOpen,
    degree: "Higher Secondary Education",
    institution: "Farook Higher Secondary School",
    board: "State Board",
    period: "2020 - 2022",
    description:
      "Studied Computer Science stream and built a strong foundation in mathematics and computing.",
  },

  {
    icon: School,
    degree: "Secondary School Education",
    institution: "Al Haramain English School",
    board: "SSLC",
    period: "2020",
    description:
      "Completed secondary education and developed early interest in technology and software development.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

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
            EDUCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Academic Journey
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            My educational background and learning path
            that helped shape my development career.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-200 hidden md:block"></div>

          <div className="space-y-10">

            {educationData.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >

                  {/* Timeline Dot */}
                  <div
                    className="
                    hidden md:flex
                    absolute
                    left-0
                    top-8
                    h-12
                    w-12
                    rounded-full
                    bg-white
                    border
                    border-slate-200
                    items-center
                    justify-center
                  "
                  >
                    <Icon
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="
                    md:ml-20
                    bg-white
                    border
                    border-slate-200
                    rounded-[32px]
                    p-8
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                  "
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                      <div>
                        <h3 className="text-2xl font-bold">
                          {item.degree}
                        </h3>

                        <p className="text-slate-600 mt-1">
                          {item.institution}
                        </p>

                        <p className="text-slate-500 text-sm">
                          {item.board}
                        </p>
                      </div>

                      <span
                        className="
                        inline-flex
                        px-4
                        py-2
                        rounded-full
                        bg-blue-50
                        text-blue-700
                        text-sm
                        font-medium
                      "
                      >
                        {item.period}
                      </span>

                    </div>

                    <p className="text-slate-600 mt-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;