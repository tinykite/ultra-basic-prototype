import React from 'react';
import './Section4.scss';
import { motion, transform, useCycle  } from 'framer-motion';
import { callbackify } from 'util';

const Section4 = () => {
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

	return(
		<section className="section4 t-beige">
              <svg className="section4__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 74" width="1440" height="74">
      <path
        fill="#FFCEB9"
        d="M353.264 36.678C541.214 36.678 541.214 74 729.165 74c187.959 0 187.959-37.322 375.918-37.322C1293.04 36.678 1293.04 74 1481 74V0H0c110.213 24.452 227.967 36.678 353.264 36.678z"
      />
    </svg>
    <svg className="section4__illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 345 293" width="345" height="293">
      <g fill="#19224F" fillRule="evenodd" stroke="none" strokeWidth="1">
        <motion.circle animate={ "forward" } initial={"reverse"} transition={{ ease: "linear", duration: 5}}  variants={cloudMove} cx="58" cy="76" r="58" />
        <motion.circle initial={{opacity: 0, translateX: 30, translateY: -10}} animate={{opacity: 1, translateX: 0, translateY: 0}} transition={{ duration: 5}} cx="274" cy="88" r="71" />
        <motion.path animate={ "forward" } initial={"reverse"} transition={{ ease: "linear", duration: 5}}  variants={cloudMove} d="M67 0l120 .993C186.08 33.74 159.574 60 127.01 60 94.118 60 67.406 33.207 67 0z" />
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
			<div className="section4__text-box">
        <p className="section4__subtitle">Ultra Basic Tip #4</p>
			  <h2 className="section4__heading">Always Look for a Roast Date</h2>
				<p className="section4__text">Coffee is a crop. Not entirely unlike wine. It has nuanced flavor that is dependent on many  interlated factors: from weather conditions to soil quality and even growing elevation. </p>
			  <p className="section4__text">But before waxing too poetic about its similarity to wine, however, it should be noted that coffee is also kind of a lot like toast. It gets stale.</p>
				<p className="section4__text">The heady aromas and complex flavor can deteriorate over time — leaving a muddier, more stale experience behind that says nothing about terroir or something else clever.  </p>
			</div>
      <svg className="section4__wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 124" width="1440" height="124">
      <path fillRule="evenodd" d="M-8.34 0l1482 64.541v58.518H-16.808z" />
      </svg>
		</section>
	)
}

export default Section4;