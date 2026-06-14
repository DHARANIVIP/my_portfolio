import { motion } from 'framer-motion'

import { SiReact, SiPython, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiGit, SiDocker, SiTensorflow, SiMongodb } from 'react-icons/si'

import { FaJava, FaAws } from 'react-icons/fa'



const icons = [

  SiReact, SiPython, SiJavascript, SiNodedotjs,

  SiHtml5, SiCss3, SiGit, SiDocker,

  SiTensorflow, SiMongodb, FaJava, FaAws

]



export function AnimatedBackground() {

  return (

    <div className="animated-background">

      <div className="bg-gradient" />

      {icons.map((Icon, index) => (

        <motion.div

          key={index}

          className="floating-icon"

          initial={{

            opacity: 0,

            x: Math.random() * window.innerWidth,

            y: Math.random() * window.innerHeight,

          }}

          animate={{

            opacity: [0.1, 0.3, 0.1],

            x: [

              Math.random() * window.innerWidth,

              Math.random() * window.innerWidth,

              Math.random() * window.innerWidth

            ],

            y: [

              Math.random() * window.innerHeight,

              Math.random() * window.innerHeight,

              Math.random() * window.innerHeight

            ],

            rotate: [0, 180, 360],

          }}

          transition={{

            duration: 20 + Math.random() * 10,

            repeat: Infinity,

            ease: "linear",

            delay: index * 2

          }}

          style={{

            position: 'absolute',

            color: 'var(--accent)',

            fontSize: `${Math.random() * 2 + 1}rem`, // Random size between 1rem and 3rem

            filter: 'blur(1px)',

            zIndex: 0

          }}

        >

          <Icon />

        </motion.div>

      ))}

    </div>

  )

}