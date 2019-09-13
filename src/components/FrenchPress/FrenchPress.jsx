import React from 'react';
import './FrenchPress.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FrenchPress = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

	return (
		<section className="FrenchPress t-black" ref={ref}>
			<div className="FrenchPress__text-box">
				<h2 className="FrenchPress__heading">French Press</h2>
				<p className="FrenchPress__text">One thing many individuals do wax poetic about is the importance of good gear. In many ways, fundamental coffee tools — and the somewhat ritualistic process they are used in — are just as important as unspoiled coffee beans.</p>
			</div>
      <svg className="FrenchPress__illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 414" height="414" width="246">
      <g fill="#FFF" fillRule="evenodd">
        <path
          d="M168 414h14V165h-14zM64 414h14V165H64z"
          transform="translate(-890 -7440) translate(890 7440)"
        />
        <path
          d="M48 414h150c6.075 0 11-4.925 11-11H37c0 6.075 4.925 11 11 11zM197 324h49v-11h-49zM0 173l37.96 42v-14.622L21.348 182.51H65V173z"
          transform="translate(-890 -7440) translate(890 7440)"
        />
        <path
          d="M64 179.465H17.408l19.027 20.468V210L3 173h61z"
          transform="translate(-890 -7440) translate(890 7440)"
        />
        <path
          d="M37 212h209v-11H37z"
          transform="translate(-890 -7440) translate(890 7440)"
        />
        <path
          d="M235 324h11V201h-11z"
          transform="translate(-890 -7440) translate(890 7440)"
        />
        <motion.g className="u-opacity50" animate={{translateY: 25, opacity: 1}} initial={{translateY: -40, opacity: 0}} transition={{ease: "anticipate", flip: Infinity, duration: 10}}>
        <path
          d="M71.583 279h11V43h-11z"
          transform="translate(-890 -7440) translate(890 7440) translate(47)"
        />
        <path
          d="M61.583 279h32v-14h-32zM100.587 23.843c0 13.168-10.653 23.844-23.794 23.844C63.653 47.687 53 37.01 53 23.843 53 10.675 63.652 0 76.793 0c13.14 0 23.794 10.675 23.794 23.843"
          transform="translate(-890 -7440) translate(890 7440) translate(47)"
        />
        <path
          d="M0 303.52h152.439v-25.056H0z"
          transform="translate(-890 -7440) translate(890 7440) translate(47)"
        />
        </motion.g>
        <path
          d="M208.53 180.416H36.742c.32-27.709 38.656-54.152 85.894-54.152 47.238 0 85.574 26.443 85.894 54.152M198.045 408.342h10.485V180.416h-10.485zM36.886 408.342h10.486V199.814H36.886z"
          transform="translate(-890 -7440) translate(890 7440)"
        />
        <path
          d="M38 362h165v41H38z"
          transform="translate(-890 -7440) translate(890 7440)"
        />
      </g>
    </svg>
		</section>
	)
}

export default FrenchPress;