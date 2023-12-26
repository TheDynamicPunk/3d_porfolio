import { motion } from 'framer-motion'
import React from 'react'
import Tilt from 'react-parallax-tilt'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ServiceCard = ({index, title, icon}) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img src={icon} alt={title}
              className='w-16 h-16 object-contain' />
              <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
              </h3>
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Experienced Software Engineer specializing in Java Spring Boot, Kafka, and NodeJS with a proven track record in developing high-performance, scalable solutions. Currently excelling as a Software Engineer at Target Corporation, leading a significant project to replace Broadcom CA Identity Management, resulting in substantial cost savings. Demonstrates a commitment to innovation, evidenced by pioneering a cross-team talk show, DevHacks, to foster knowledge sharing. Skilled in full-stack development and recognized for engineering impactful solutions during a tenure at Paisabazaar.com. Committed to pushing the boundaries of technology for optimal business outcomes.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index= {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')