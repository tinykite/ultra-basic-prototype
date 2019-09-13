import React from 'react';
import './Section4.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section4 = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

  const wave = {
		forwards: { translateX: -30, translateY: 0, scale: 1.25},
		backwards: { translateY: -40, translateX: -10 }
	}
  
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
		<section className="section4">
      <motion.svg ref={ref} animate={ inView && "forwards" } initial={"backwards"} transition={{ease: "linear", duration: 5}} variants={wave} className="section4__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 74" width="1440" height="74">
      <path
        fill="#FCF1F2"
        d="M353.264 36.678C541.214 36.678 541.214 74 729.165 74c187.959 0 187.959-37.322 375.918-37.322C1293.04 36.678 1293.04 74 1481 74V0H0c110.213 24.452 227.967 36.678 353.264 36.678z"
      />
    </motion.svg>
    <svg className="section4__illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263 255" width="263" height="255">
      <g
        fill="none"
        fillRule="evenodd"
        transform="translate(-245 -4022) translate(245 4022)"
      >
        <g fill="#FFF">
          <path
            d="M0 55h103c-5.58 22.945-26.52 40-51.5 40S5.58 77.945 0 55zM1 0h103c-5.58 22.945-26.52 40-51.5 40S6.58 22.945 1 0z"
            transform="translate(155 6)"
          />
        </g>
        <path fill="#FFF" d="M0 0h111v111H0z" />
        <path fill="#000" d="M20 19h72v72H20z" />
        <path fill="#FFF" d="M0 0h111v111H0z" transform="translate(152 144)" />
        <path fill="#000" d="M20 19h72v72H20z" transform="translate(152 144)" />
        <path fill="#FFF" d="M186 175h46v46h-46z" />
        <circle cx="53.5" cy="201.5" r="53.5" fill="#FFF" />
        <path fill="#FFF" d="M56.5 55L80 76H33zM56.5 27L80 48H33z" />
      </g>
    </svg>
			<div className="section4__text-box">
        <p className="section4__subtitle">Ultra Basic Tip #4</p>
			  <h2 className="section4__heading">A Few Tools Make Everything Better</h2>
				<p className="section4__text">It has nuanced flavor that is dependent on many  interlated factors: from weather conditions to soil quality and even growing elevation. </p>
			  <p className="section4__text">But before waxing too poetic about its similarity to wine, however, it should be noted that coffee is also kind of a lot like toast. It gets stale.</p>
				<p className="section4__text">The heady aromas and complex flavor can deteriorate over time — leaving a muddier, more stale experience behind that says nothing about terroir or something else clever.  </p>
			</div>
		</section>
	)
}

export default Section4;