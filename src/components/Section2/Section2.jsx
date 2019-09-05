import React from 'react';
import './Section2.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section2 = () => {	
  const [ref, inView, entry] = useInView({
    threshold: 0.25,
  })

	const variants = {
		play: { opacity: 1 },
		pause: { opacity: 0}
	}

	return (
		<section className="section2">
			<motion.svg className="section2__illustration coffee-particles" xmlns="http://www.w3.org/2000/svg" width="124" height="346" viewBox="0 0 124 346">
		  <g className="cofeee-particles__bits" fill="#19224F" fill-rule="evenodd">
		    <path className="top" d="M0 0h121c-6.538 26.958-31.144 47-60.5 47S6.538 26.958 0 0z"/>
		    <circle className="middle" cx="62" cy="140" r="62"/>
				<path className="bottomLeft" d="M51.596 242v103.924C23.1 345.924 0 322.66 0 293.962 0 265.264 23.1 242 51.596 242z"/>
			  <path className="bottomTopRight"  d="M72.05 242.183h51.962c0 28.496-23.264 51.596-51.962 51.596v-51.596z"/>
			  <path className="bottomBottomRight" d="M72.05 345.74v-51.595c28.698 0 51.962 23.1 51.962 51.596H72.05z"/>
			</g>
		  </motion.svg>
			<motion.div ref={ref} className="section2__text" animate={inView && "play" } initial={"pause"} transition={{duration: 10}}
      variants={variants}>
				<p className="">I once accidentally made a cup of Aeropress coffee at work with an intense, milk-and-honey kind of sweetness. </p>
			  <p className="">It was a kind of unexpected, aggressive natural sweetness that made me feel like I'd discovered some hidden insight into the dark side of the moon — and might never again question the hyperbolic vocabulary used to describe the terroir of carefully grown, microlots of coffee.</p>
				<p className="">After two cups of a similar sweetness, I couldn't replicate it. But I think it did help me more viscerally understand coffee.</p>
			</motion.div>
		</section>
	)
}

export default Section2;