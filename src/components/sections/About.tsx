//src/components/sections/About.tsx
'use client';
import { motion } from 'framer-motion';
import { EDUCATION, PERSONAL_INFO } from '../../lib/constants';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            About Me
          </h2>
          
          <div className="text-base md:text-lg text-gray-600 leading-relaxed space-y-4 md:space-y-6 mb-8 md:mb-12">
            <p>
              I'm a passionate full-stack developer and recent graduate with a BSc (Hons) in 
              Software Engineering with Multimedia from Limkokwing University. My education 
              has provided me with a strong foundation in both technical software development 
              and creative multimedia design.
            </p>
            
            <p>
              I specialize in creating modern, responsive web applications using technologies 
              like React, Next.js, TypeScript, and Node.js. My multimedia background gives me 
              a unique perspective on user experience design and interface aesthetics.
            </p>
            
            <p>
              I'm passionate about building products that solve real-world problems and 
              provide exceptional user experiences. When I'm not coding, you can find me 
              exploring new technologies, contributing to open-source projects, or working 
              on personal projects that challenge my skills.
            </p>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-12"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Education</h3>
            {EDUCATION.map((edu, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                <p className="text-base md:text-lg text-primary-600 mb-2">{edu.institution}</p>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{edu.period} • {edu.location}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-3 md:mb-4">
                  {edu.courses.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-2 md:px-3 py-1 bg-white text-gray-700 rounded-full text-xs md:text-sm border border-gray-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 md:p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600 text-sm md:text-base">Projects Completed</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 md:p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600 text-sm md:text-base">Technologies Mastered</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 md:p-6 bg-gray-50 rounded-lg"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm md:text-base">Passionate Developer</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}