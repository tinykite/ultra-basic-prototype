import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer";

// From the Use Hooks Website
// https://usehooks.com/useOnScreen

// Also available as a Node Module
// https://github.com/thebuilder/react-intersection-observer

function useOnScreen(ref) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
				setIntersecting(entry.isIntersecting);
				console.log("Look, I'm being observed!");
				
      },
      {
        threshold: [0]
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

const Introduction = () => {
	const ref = useRef();
	const onScreen = useOnScreen(ref);
	const variants = {
		play: { translateY: -10 },
		pause: { translateY: -273 }
	}

	return (
		<div className="t-black c-story c-story--introduction" ref={ref}>
			<article className="c-text c-text--introduction">
				<p className="c-text__item u-colorInverse">At a punk house in Chicago I lived in during college, coffee was a giant pot of water with an industrial dose of Cafe Bustelo that was boiled for an indeterminate amount of time. </p>
			  <p className="c-text__item u-colorInverse">It was super gross.</p>
				<p className="c-text__item u-colorInverse">But other than tasting like a campfire took a dump in a dirty lake full of sand, it was still coffee. Just coffee minus nuance.</p>
				<p className="c-text__item u-colorInverse">This is a short guide to understanding more of the nuance.</p>
			</article>
			<motion.svg className="c-story__drips" animate={onScreen && "play" } initial={"pause"} transition={{ ease: "easeOut", duration: 8}} variants={variants} width="56" height="273" viewBox="0 0 56 273" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path className="c-section__animDrip" d="M0 0h19v263.5a9.5 9.5 0 0 1-19 0V0z"/><path className="c-section__animDrip" d="M37 0h19v124.5a9.5 9.5 0 0 1-19 0V0z"/></g></motion.svg>
			</div>
	)
}

export default Introduction;