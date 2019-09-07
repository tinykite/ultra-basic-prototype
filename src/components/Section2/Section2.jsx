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

	const wave = {
		forwards: { translateX: -30, translateY: -15, scale: 1.25, rotate: 8 },
		backwards: { translateX: -10, translateY: -70, scale: 1, rotate: 0 }
	}

	return (
		<section className="section2">
      <motion.svg className="section2__wave" ref={ref} animate={inView && "forwards" } initial={"backwards"} transition={{ yoyo: Infinity, ease: "easeOut", duration: 6}}  variants={wave}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 2753 177" width="2753" height="177"
    >
      <defs>
        <clipPath>
          <path
            d="M2722-719c-78.52 91.58-156.93 117.57-190 126-65.24 16.63-149.34 14.62-178 14-87-1.88-90.73-11.37-203-18-84.17-5-127.39-7.28-183 1-62.4 9.29-58.9 18.93-147 36-53.65 10.4-103.94 19.84-171 18-35.62-1-78.09-1.77-129-17-98.88-29.58-97.44-73.43-162-81-74.68-8.75-82.59 49.23-202 59-28.64 2.34-80.16 3.26-126 2-30.11-.83-48.73-2.32-54-2.8-42.13-3.79-65.68-10.28-149-15.2-84.17-5-127.39-7.28-183 1-62.4 9.29-58.9 18.93-147 36-53.65 10.4-103.94 19.84-171 18-37.37-1-78-2.14-129-17-56.23-16.38-72.87-34.25-123-43-43.32-7.56-80.31-2.84-104 2l-2-119z"
            className="cls-1"
          />
        </clipPath>
        <clipPath>
          <path d="M-31-719h2753v646H-31z" className="cls-1" />
        </clipPath>
      </defs>
      <path
        fill="#000"
        d="M2753 0c-78.52 91.58-156.93 117.57-190 126-65.24 16.63-149.34 14.62-178 14-87-1.88-90.73-11.37-203-18-84.17-5-127.39-7.28-183 1-62.4 9.29-58.9 18.93-147 36-53.65 10.4-103.94 19.84-171 18-35.62-1-78.09-1.77-129-17-98.88-29.58-97.44-73.43-162-81-74.68-8.75-82.59 49.23-202 59-28.64 2.34-80.16 3.26-126 2-30.11-.83-48.73-2.32-54-2.8-42.13-3.79-65.68-10.28-149-15.2-84.17-5-127.39-7.28-183 1-62.4 9.29-58.9 18.93-147 36-53.65 10.4-103.94 19.84-171 18-37.37-1-78-2.14-129-17-56.23-16.38-72.87-34.25-123-43-43.32-7.56-80.31-2.84-104 2L0 0z"
      />
    </motion.svg>
			<motion.svg className="section2__illustration coffee-particles" xmlns="http://www.w3.org/2000/svg" width="124" height="346" viewBox="0 0 124 346">
		  <g className="cofeee-particles__bits" fill="#19224F" fill-rule="evenodd">
		    <path className="top" d="M0 0h121c-6.538 26.958-31.144 47-60.5 47S6.538 26.958 0 0z"/>
		    <circle className="middle" cx="62" cy="140" r="62"/>
				<path className="bottomLeft" d="M51.596 242v103.924C23.1 345.924 0 322.66 0 293.962 0 265.264 23.1 242 51.596 242z"/>
			  <path className="bottomTopRight"  d="M72.05 242.183h51.962c0 28.496-23.264 51.596-51.962 51.596v-51.596z"/>
			  <path className="bottomBottomRight" d="M72.05 345.74v-51.595c28.698 0 51.962 23.1 51.962 51.596H72.05z"/>
			</g>
		  </motion.svg>
			<motion.div ref={ref} className="section2__text" transition={{duration: 10}}
      variants={variants}>
				<div class="section2__text-box">
				  <p className="section2__text">I once accidentally made a cup of Aeropress coffee at work with an intense, milk-and-honey kind of sweetness. </p>
			    <p className="section2__text">It was a kind of unexpected, aggressive natural sweetness that made me feel like I'd discovered some hidden insight into the dark side of the moon — and might never again question the hyperbolic vocabulary used to describe the terroir of carefully grown, microlots of coffee.</p>
				  <p className="section2__text">After two cups of a similar sweetness, I couldn't replicate it. But I think it did help me more viscerally understand coffee.</p>
				</div>
			</motion.div>
		</section>
	)
}

export default Section2;