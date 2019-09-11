import React from 'react';
import './Section1.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section1 = () => {
	const [ref, inView, entry] = useInView({
    threshold: 0,
	})

	const variants = {
		play: { translateY: 0 },
		pause: { translateY: -273}
	}

	return (
		<section className="c-section1 c-section1--drip t-black">
			<div className="c-section1__container c-section1__container--left">
				<p className="c-section1__text u-colorInverse">At a punk house in Chicago I lived in during college, coffee was a giant pot of water with an industrial dose of Cafe Bustelo that was boiled for an indeterminate amount of time. </p>
			  <p className="c-section1__text u-colorInverse">It was super gross.</p>
				<p className="c-section1__text u-colorInverse">But other than tasting like a campfire took a dump in a dirty lake full of sand, it was still coffee. Just coffee minus nuance.</p>
				<p className="c-section1__text u-colorInverse">This is a short guide to understanding more of the nuance.</p>
			</div>
			<motion.svg className="c-section1__anim c-section1__anim--drips" ref={ref} animate={inView && "play" } initial={"pause"} transition={{ ease: "easeOut", duration: 8}} variants={variants} width="56" height="273" viewBox="0 0 56 273" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path className="c-section__animDrip" d="M0 0h19v263.5a9.5 9.5 0 0 1-19 0V0z"/><path className="c-section__animDrip" d="M37 0h19v124.5a9.5 9.5 0 0 1-19 0V0z"/></g></motion.svg>
	  </section>
	)
}

export default Section1;