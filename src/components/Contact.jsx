import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "razikabdu442@gmail.com",
    link: "mailto:yourmail@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9745512414",
    link: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Calicut, Kerala",
    link: "#",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 glass-card dark:bg-slate-900"
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
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let's Work Together
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            Interested in working together or discussing
            a project? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">

          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.link}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                block
                bg-slate-50
                border
                border-slate-200
                rounded-[30px]
                p-8
                text-center
              "
              >
                <Icon
                  size={34}
                  className="mx-auto text-blue-600 mb-4"
                />

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-2">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Card */}
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
          className="
            rounded-[40px]
            bg-slate-50
            border
            border-slate-200
            p-10
            text-center
          "
        >
          <h3 className="text-3xl font-bold mb-4">
            Available for Opportunities
          </h3>

          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            MERN Stack Developer passionate about
            building modern, scalable and responsive
            web applications.
          </p>

          <div className="flex justify-center gap-5">

            <a
              href="mailto:yourmail@gmail.com"
              className="
                px-6
                py-3
                rounded-full
                bg-black
                text-white
              "
            >
              Send Email
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-3
                rounded-full
                border
                border-slate-300
              "
            >
              View GitHub
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-8">

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={26} />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;