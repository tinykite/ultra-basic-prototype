import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer";
import './Tip.scss';

function useOnScreen(ref) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
				setIntersecting(entry.isIntersecting);
				console.log("Hello world ratio");
				
      },
      {
        threshold: 0,
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

const Tip = () => {
	const ref = useRef();
	const onScreen = useOnScreen(ref);
	const variants = {
    start: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    },
    end: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    start: {
      opacity: 0,
      translateY: -30
    },
    end: {
      opacity: 1,
      translateY: 0
    }
  };
	
	return (
		<>
		<div class="c-tip t-black">
			<div class="c-tip__illustration">
			<motion.svg
        className="morph"
        viewBox="0 0 175 200"
        width="175"
        height="200"
      >
        <defs>
          <path
            id="bean"
            fill="#FFF"
            d="M17.626 18.58a77.578 77.578 0 0 1-5.742 11.528L3.369 44.12c-.505.83-1.468 1.114-2.283.67-.929-.503-1.341-1.764-.922-2.815l6.21-15.556a77.578 77.578 0 0 1 5.742-11.528L20.631.88c.505-.83 1.468-1.114 2.283-.67.929.503 1.341 1.764.922 2.815l-6.21 15.556z"
          />
          <path
            id="slash"
            d="M316.626 2358.58a77.578 77.578 0 0 1-5.742 11.528l-8.515 14.013c-.505.83-1.468 1.114-2.283.67-.929-.503-1.341-1.764-.922-2.815l6.21-15.556a77.578 77.578 0 0 1 5.742-11.528l8.515-14.013c.505-.83 1.468-1.114 2.283-.67.929.503 1.341 1.764.922 2.815l-6.21 15.556z"
          />
        </defs>
        <clipPath id="boxHalf">
          <rect width="62.5" height="125" x="12.5" y="0" />
        </clipPath>
        <clipPath id="boxQuarterTop">
          <rect width="62.5" height="62.5" x="100" y="0" />
        </clipPath>
        <clipPath id="boxQuarterBottom">
          <rect width="62.5" height="62.5" x="100" y="62.5" />
        </clipPath>
        <g clipPath="url(#boxHalf)">
          <motion.rect
            // whileHover={{ rx: 0, x: 25, y: 25 }}
            width="125"
            height="125"
            x={12.5}
            y={0}
            rx={62.5}
            fill="white"
          />
        </g>
        <g clipPath="url(#boxQuarterTop)">
          <motion.rect
            width="125"
            height="125"
            x={37.5}
            y={-62.5}
            rx={62.5}
            fill="white"
          />
        </g>
        <g clipPath="url(#boxQuarterBottom)">
          <motion.rect
            width="125"
            height="125"
            x="37.5"
            y="62.5"
            rx={62.5}
            fill="white"
          />
        </g>
        <motion.use href="#bean" x="37.5" y="150" />
        <motion.use href="#bean" x="56.25" y="150" />
        <motion.use href="#bean" x="75" y="150" />
        <motion.use href="#bean" x="93.75" y="150" />
        <motion.use href="#bean" x="112.5" y="150" />
        <motion.use href="#bean" x="131.25" y="150" />
        <motion.use href="#bean" x="20" y="150" />
      </motion.svg>
			</div>
			<article class="c-tip__text">
				<h4 class="c-tip__subHeading">Ultra Basic Tip #1</h4>
				<h3 class="c-tip__heading">Buy Coffee with a Roast Date</h3>
				<p class="c-tip__textItem">I once accidentally made a cup of Aeropress coffee at work with an intense, milk-and-honey kind of sweetness.</p>
				<p class="c-tip__textItem">It was a kind of unexpected, aggressive natural sweetness that made me feel like I'd discovered some hidden insight into the dark side of the moon — and might never again question the hyperbolic vocabulary used to describe the terroir of carefully grown, microlots of coffee.</p>
			</article>
		</div>
		<div class="c-tip t-black">
		<div class="c-tip__illustration">
		<motion.svg
        viewBox="0 0 175 300"
        width="150"
        height="270"
        style={{ overflow: "visible" }}
      >
        <motion.clipPath id="size1">
          <path d="M17.1511488,196.895073 L18.6988661,204.884891 C19.100378,206.957625 19.100378,209.042375 18.6988661,211.115109 L17.1511488,219.104927 C17.0593547,219.578798 16.2324159,219.954463 15.1893011,219.996164 C14.0012544,220.043658 12.9533993,219.644638 12.8488512,219.104927 L11.3011339,211.115109 C10.899622,209.042375 10.899622,206.957625 11.3011339,204.884891 L12.8488512,196.895073 C12.9406453,196.421202 13.7675841,196.045537 14.8106989,196.003836 C15.9987456,195.956342 17.0466007,196.355362 17.1511488,196.895073 Z" />
        </motion.clipPath>
        <clipPath id="size2">
          <path d="M43.0321994,224.413071 L41.4844822,235.73198 C41.392688,236.403297 40.5657493,236.935489 39.5226344,236.994565 C38.3345877,237.061849 37.2867326,236.49657 37.1821845,235.73198 L35.6344672,224.413071 C35.2329554,221.476698 35.2329554,218.523302 35.6344672,215.586929 L37.1821845,204.26802 C37.2739786,203.596703 38.1009174,203.064511 39.1440322,203.005435 C40.3320789,202.938151 41.379934,203.50343 41.4844822,204.26802 L43.0321994,215.586929 C43.4337113,218.523302 43.4337113,221.476698 43.0321994,224.413071 Z" />
        </clipPath>
        <clipPath id="size3">
          <path d="M67.3655328,236.318341 C67.7670446,244.091095 67.7670446,251.908905 67.3655328,259.681659 L65.8178155,289.643475 C65.7260214,291.420491 64.8990826,292.829237 63.8559678,292.985614 C62.6679211,293.163719 61.620066,291.667392 61.5155178,289.643475 L59.9678006,259.681659 C59.5662887,251.908905 59.5662887,244.091095 59.9678006,236.318341 L61.5155178,206.356525 C61.607312,204.579509 62.4342507,203.170763 63.4773656,203.014386 C64.6654123,202.836281 65.7132674,204.332608 65.8178155,206.356525 L67.3655328,236.318341 L67.3655328,236.318341 Z" />
        </clipPath>
        <clipPath id="size4">
          <path d="M91.6988661,222.620801 C92.100378,227.198089 92.100378,231.801911 91.6988661,236.379199 L90.1511488,254.02338 C90.0593547,255.069845 89.2324159,255.899439 88.1893011,255.991528 C87.0012544,256.096412 85.9533993,255.215242 85.8488512,254.02338 L84.3011339,236.379199 C83.899622,231.801911 83.899622,227.198089 84.3011339,222.620801 L85.8488512,204.97662 C85.9406453,203.930155 86.7675841,203.100561 87.8106989,203.008472 C88.9987456,202.903588 90.0466007,203.784758 90.1511488,204.97662 L91.6988661,222.620801 L91.6988661,222.620801 Z" />
        </clipPath>
        <clipPath id="size5">
          <path d="M116.032199,236.318341 C116.433711,244.091095 116.433711,251.908905 116.032199,259.681659 L114.484482,289.643475 C114.392688,291.420491 113.565749,292.829237 112.522634,292.985614 C111.334588,293.163719 110.286733,291.667392 110.182185,289.643475 L108.634467,259.681659 C108.232955,251.908905 108.232955,244.091095 108.634467,236.318341 L110.182185,206.356525 C110.273979,204.579509 111.100917,203.170763 112.144032,203.014386 C113.332079,202.836281 114.379934,204.332608 114.484482,206.356525 L116.032199,236.318341 L116.032199,236.318341 Z" />
        </clipPath>
        <clipPath id="size6">
          <path d="M140.365533,215.586929 C140.767045,218.523302 140.767045,221.476698 140.365533,224.413071 L138.817815,235.73198 C138.726021,236.403297 137.899083,236.935489 136.855968,236.994565 C135.667921,237.061849 134.620066,236.49657 134.515518,235.73198 L132.967801,224.413071 C132.566289,221.476698 132.566289,218.523302 132.967801,215.586929 L134.515518,204.26802 C134.607312,203.596703 135.434251,203.064511 136.477366,203.005435 C137.665412,202.938151 138.713267,203.50343 138.817815,204.26802 L140.365533,215.586929 L140.365533,215.586929 Z" />
        </clipPath>
        <clipPath id="size7">
          <path d="M164.698866,204.884891 C165.100378,206.957625 165.100378,209.042375 164.698866,211.115109 L163.151149,219.104927 C163.059355,219.578798 162.232416,219.954463 161.189301,219.996164 C160.001254,220.043658 158.953399,219.644638 158.848851,219.104927 L157.301134,211.115109 C156.899622,209.042375 156.899622,206.957625 157.301134,204.884891 L158.848851,196.895073 C158.940645,196.421202 159.767584,196.045537 160.810699,196.003836 C161.998746,195.956342 163.046601,196.355362 163.151149,196.895073 L164.698866,204.884891 L164.698866,204.884891 Z" />
        </clipPath>
        <motion.rect
          initial={{ opacity: 0, translateX: -10, translateY: -30 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 2 }}
          fill="#FFF"
          width="175"
          height="175"
          x="0"
          y="0"
          rx={87.5}
        />
        <motion.g variants={variants} initial="start" animate="end">
          <motion.rect
            variants={item}
            clipPath="url(#size1)"
            fill="#FFF"
            width="8"
            height="24"
            x="11"
            y="196"
          />
          <motion.rect
            variants={item}
            clipPath="url(#size2)"
            fill="#FFF"
            width="8"
            height="34"
            x="35"
            y="203"
          />
          <motion.rect
            variants={item}
            clipPath="url(#size3)"
            fill="#FFF"
            width="8"
            height="90"
            x="60"
            y="203"
            rx={4}
          />
          <motion.rect
            variants={item}
            clipPath="url(#size4)"
            fill="#FFF"
            width="8"
            height="53"
            x="84"
            y="203"
          />
          <motion.rect
            variants={item}
            clipPath="url(#size5)"
            fill="#FFF"
            width="8"
            height="90"
            x="108"
            y="203"
            rx={4}
          />
          <motion.rect
            variants={item}
            clipPath="url(#size6)"
            fill="#FFF"
            width="8"
            height="34"
            x="132"
            y="203"
            rx={4}
          />
          <motion.rect
            variants={item}
            clipPath="url(#size7)"
            fill="#FFF"
            width="8"
            height="24"
            x="157"
            y="196"
          />
        </motion.g>
      </motion.svg>
		</div>
		<article class="c-tip__text">
			<h4 class="c-tip__subHeading">Ultra Basic Tip #2</h4>
			<h3 class="c-tip__heading">Don't Let Good Coffee Go Stale</h3>
			<p class="c-tip__textItem">I once accidentally made a cup of Aeropress coffee at work with an intense, milk-and-honey kind of sweetness.</p>
			<p class="c-tip__textItem">It was a kind of unexpected, aggressive natural sweetness that made me feel like I'd discovered some hidden insight into the dark side of the moon — and might never again question the hyperbolic vocabulary used to describe the terroir of carefully grown, microlots of coffee.</p>
		</article>
	</div>
	<div class="c-tip t-black">
		<div class="c-tip__illustration">
		<motion.svg
			className="morph"
			viewBox="0 0 175 200"
			width="175"
			height="200"
		>
			<defs>
				<path
					id="bean"
					fill="#FFF"
					d="M17.626 18.58a77.578 77.578 0 0 1-5.742 11.528L3.369 44.12c-.505.83-1.468 1.114-2.283.67-.929-.503-1.341-1.764-.922-2.815l6.21-15.556a77.578 77.578 0 0 1 5.742-11.528L20.631.88c.505-.83 1.468-1.114 2.283-.67.929.503 1.341 1.764.922 2.815l-6.21 15.556z"
				/>
				<path
					id="slash"
					d="M316.626 2358.58a77.578 77.578 0 0 1-5.742 11.528l-8.515 14.013c-.505.83-1.468 1.114-2.283.67-.929-.503-1.341-1.764-.922-2.815l6.21-15.556a77.578 77.578 0 0 1 5.742-11.528l8.515-14.013c.505-.83 1.468-1.114 2.283-.67.929.503 1.341 1.764.922 2.815l-6.21 15.556z"
				/>
			</defs>
			<clipPath id="boxHalf">
				<rect width="62.5" height="125" x="12.5" y="0" />
			</clipPath>
			<clipPath id="boxQuarterTop">
				<rect width="62.5" height="62.5" x="100" y="0" />
			</clipPath>
			<clipPath id="boxQuarterBottom">
				<rect width="62.5" height="62.5" x="100" y="62.5" />
			</clipPath>
			<g clipPath="url(#boxHalf)">
				<motion.rect
					// whileHover={{ rx: 0, x: 25, y: 25 }}
					width="125"
					height="125"
					x={12.5}
					y={0}
					rx={62.5}
					fill="white"
				/>
			</g>
			<g clipPath="url(#boxQuarterTop)">
				<motion.rect
					width="125"
					height="125"
					x={37.5}
					y={-62.5}
					rx={62.5}
					fill="white"
				/>
			</g>
			<g clipPath="url(#boxQuarterBottom)">
				<motion.rect
					width="125"
					height="125"
					x="37.5"
					y="62.5"
					rx={62.5}
					fill="white"
				/>
			</g>
			<motion.use href="#bean" x="37.5" y="150" />
			<motion.use href="#bean" x="56.25" y="150" />
			<motion.use href="#bean" x="75" y="150" />
			<motion.use href="#bean" x="93.75" y="150" />
			<motion.use href="#bean" x="112.5" y="150" />
			<motion.use href="#bean" x="131.25" y="150" />
			<motion.use href="#bean" x="20" y="150" />
		</motion.svg>
		</div>
		<article class="c-tip__text">
			<h4 class="c-tip__subHeading">Ultra Basic Tip #3</h4>
			<h3 class="c-tip__heading">Good Coffee Strong Coffee</h3>
			<p class="c-tip__textItem">I once accidentally made a cup of Aeropress coffee at work with an intense, milk-and-honey kind of sweetness.</p>
			<p class="c-tip__textItem">It was a kind of unexpected, aggressive natural sweetness that made me feel like I'd discovered some hidden insight into the dark side of the moon — and might never again question the hyperbolic vocabulary used to describe the terroir of carefully grown, microlots of coffee.</p>
		</article>
	</div>
	</>
	)
}

export default Tip;