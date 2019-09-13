import React from 'react';
import './Section3.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section3 = () => {	
  const [ref, inView, entry] = useInView({
    threshold: 0
	})

	const list = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
        type: "inertia", 
        velocity: 150,
      }
    }
  }

  const cloudMove = {
		forward: { translateX: 0, translateY: 0, opacity: 1 },
		reverse: { translateX: -20, translateY: -20, opacity: 0 }
	}
  
  const items = {
    visible: { opacity: 0.5, transition: { flip: Infinity, duration: 5}},
    hidden: { opacity: 0},
	}
	
	const wave = {
		forwards: { translateX: -30, translateY: 0, scale: 1.25, rotate: 6 },
		backwards: { translateY: -60, translateX: -10 }
	}

	const fadeIn = {
		in: { opacity: 1, translateX: 0, translateY: 0 },
		out: {opacity: 0, translateX: 30, translateY: -10}
	}

	const visible = {
		in: { opacity: 1 },
		out: {opacity: 0 }
	}

	const driftLeft = {
		in: { translateX: 0 },
		out: { translateX: 10 }
	}

	const driftRight = {
		in: { translateX: 0 },
		out: { translateX: -10 }
	}

	return (
		<section className="section3 t-lightPink" ref={ref}>
		<motion.svg className="section3__wave" ref={ref} animate={ inView && "forwards" } initial={"backwards"} transition={{ ease: "linear", duration: 5}}  variants={wave}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 2753 177" width="2753" height="177"
    >
      <path
        fill="#fff"
        d="M2753 0c-78.52 91.58-156.93 117.57-190 126-65.24 16.63-149.34 14.62-178 14-87-1.88-90.73-11.37-203-18-84.17-5-127.39-7.28-183 1-62.4 9.29-58.9 18.93-147 36-53.65 10.4-103.94 19.84-171 18-35.62-1-78.09-1.77-129-17-98.88-29.58-97.44-73.43-162-81-74.68-8.75-82.59 49.23-202 59-28.64 2.34-80.16 3.26-126 2-30.11-.83-48.73-2.32-54-2.8-42.13-3.79-65.68-10.28-149-15.2-84.17-5-127.39-7.28-183 1-62.4 9.29-58.9 18.93-147 36-53.65 10.4-103.94 19.84-171 18-37.37-1-78-2.14-129-17-56.23-16.38-72.87-34.25-123-43-43.32-7.56-80.31-2.84-104 2L0 0z"
      />
    </motion.svg>
		<svg className="section3__illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 345 293" width="345" height="293">
      <g fill="#19224F" fillRule="evenodd" stroke="none" strokeWidth="1">
        <motion.circle ref={ref} animate={ inView && "forward" } initial={"reverse"} transition={{ ease: "linear", duration: 5}}  variants={cloudMove} cx="58" cy="76" r="58" />
				<motion.circle initial={"out"} animate={inView && "in"} transition={{ duration: 5}} cx="274" cy="88" r="71" variants={fadeIn} />
        <motion.path ref={ref} animate={ inView && "forward" } initial={"reverse"} transition={{ ease: "linear", duration: 5}}  variants={cloudMove} d="M67 0l120 .993C186.08 33.74 159.574 60 127.01 60 94.118 60 67.406 33.207 67 0z" />
        <motion.g className="rect-group" initial="hidden" animate="visible" variants={list}>
        <motion.path variants={items} className="rect-2" d="M203 203L211 203 211 219 203 219z" />
        <motion.path variants={items} className="rect-3" d="M203 203L211 203 211 219 203 219z" />
        <motion.path variants={items} className="rect-4" d="M222 181L230 181 230 199 222 199z" />
        <motion.path variants={items} className="rect-5" d="M238 181L246 181 246 211 238 211z" />
        <motion.path variants={items} className="rect-6" d="M254 181L262 181 262 261 254 261z" />
        <motion.path variants={items} className="rect-7" d="M254 272L262 272 262 288 254 288z" />
        <motion.path variants={items} className="rect-8" d="M270 181H278V241H270z" />
        <motion.path variants={items} className="rect-9" d="M286 181L294 181 294 263 286 263z" />
        <motion.path variants={items} className="rect-10" d="M286 277L294 277 294 293 286 293z" />
        <motion.path variants={items} className="rect-11" d="M302 181L310 181 310 226 302 226z" />
        <motion.path variants={items} className="rect-12" d="M318 181L326 181 326 210 318 210z" />
        <motion.path variants={items} className="rect-13" d="M318 224L326 224 326 240 318 240z" />
        </motion.g>
      </g>
    </svg>      
			<motion.div className="section3__text-box" ref={ref} animate={ inView && "in" } initial={"out"} variants={visible} transition={{duration: 5}} >
        <motion.p className="section2__subtitle" ref={ref} animate={inView && "in"} initial={"out"} variants={driftLeft} transition={{ duration: 5}}>Ultra Basic Tip #2</motion.p>
        <motion.h2 className="section3__heading" ref={ref} animate={inView && "in"} initial={"out"} variants={driftRight} transition={{ duration: 5}}>Coffee is a Crop</motion.h2>
				<p className="section3__text">Not entirely unlike wine. It has nuanced flavor that is dependent on many  interlated factors: from weather conditions to soil quality and even growing elevation. </p>
			  <p className="section3__text">But before waxing too poetic about its similarity to wine, however, it should be noted that coffee is also kind of a lot like toast. It gets stale.</p>
				<p className="section3__text">The heady aromas and complex flavor can deteriorate over time — leaving a muddier, more stale experience behind that says nothing about terroir or something else clever.  </p>
			</motion.div>
		</section>
	)
}

export default Section3;