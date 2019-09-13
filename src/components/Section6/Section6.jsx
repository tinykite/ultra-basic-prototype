import React from 'react';
import './Section6.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section6 = () => {
	const [ref, inView, entry] = useInView({
    threshold: 0,
	})
	
	return(
		<>
		<div className="section6" ref={ref}>
		<svg className="section6__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 259" width="1440" height="259">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M1438.706 4997.733c-278.964-35.946-457.536-35.946-535.715 0-117.268 53.918-99.512 98.657-152.381 98.657s-74.089-43.356-88.495-68.89c-3.719-6.592-37.001-50.52-88.681-64.68-65.13-17.843-156.303-3.614-218.766 21.8C216.98 5040.639 98.053 5168 0 5168v-259h1440l-1.294 88.733z"
        transform="translate(0 -4909)"
      />
    </svg>
		<div className="section5__text-box">
		<h2 className="section6__sectionHeading">Brew Methods</h2>
		<div className="section6__text-box">
		<p>And how to choose, from basic to ultra specific and more text here and more text and maybe a personal anecdote</p>
		</div>
		</div>
		</div>
		</>
	)
}

export default Section6;