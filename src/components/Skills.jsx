import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiPython, SiC, SiFlask, SiFirebase, SiGithub,
  SiCanva, SiFigma, SiMongodb, SiMysql, SiGit, SiTensorflow, SiPytorch, SiOpencv, SiOpenjdk
} from 'react-icons/si'
import { RiFileExcel2Fill, RiFileWord2Fill, RiFilePpt2Fill } from 'react-icons/ri'
import { SectionHeading } from './SectionHeading'
import { SkillMarquee } from './SkillMarquee'
import './Skills.css'

export function Skills() {
  const skills = [
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C', icon: SiC, color: '#A8B9CC' },
    { name: 'Flask', icon: SiFlask, color: '#ffffff' }, // Flask is white/black
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Github', icon: SiGithub, color: '#ffffff' },
    { name: 'Word', icon: RiFileWord2Fill, color: '#2B579A' },
    { name: 'PowerPoint', icon: RiFilePpt2Fill, color: '#D24726' },
    { name: 'Excel', icon: RiFileExcel2Fill, color: '#217346' },
    { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ]

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C', icon: SiC, color: '#A8B9CC' },
        { name: 'Java', icon: SiOpenjdk, color: '#007396' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Flask', icon: SiFlask, color: '#ffffff' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Github', icon: SiGithub, color: '#ffffff' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
        { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
      ]
    }
  ]

  return (
    <section className="section skills-section" id="skills">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <SectionHeading
          title="Top Skills"
          eyebrow="Expertise"
        />
      </div>

      <div className="skills-grid-container">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card-wrapper"
            style={{ '--skill-color': skill.color }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <div className="skill-card-content">
              <skill.icon className="skill-icon" style={{ color: skill.color }} />
              <span className="skill-name">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vertical Marquee Section */}
      <div className="skills-marquee-section" style={{ marginTop: '80px' }}>
        <div className="skills-grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <SkillMarquee category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
