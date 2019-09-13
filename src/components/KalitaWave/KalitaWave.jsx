import React from 'react';
import './KalitaWave.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const KalitaWave = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  })
  
	return (
		<section className="KalitaWave t-lightPink" ref={ref}>
			<div className="KalitaWave__text-box">
				<h2 className="KalitaWave__heading">Kalita Wave</h2>
				<p className="KalitaWave__text">One thing many individuals do wax poetic about is the importance of good gear. In many ways, fundamental coffee tools — and the somewhat ritualistic process they are used in — are just as important as unspoiled coffee beans.</p>
			</div>
      <svg className="KalitaWave__illustration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313 365" height="365" width="313">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-879 -6699)"
      >
        <path
          stroke="#19224F"
          strokeWidth="11"
          d="M1136.305 6727l-57.862 102h46.252l57.862-102h-46.252z"
        />
        <path fill="#19224F" d="M903 6855.5H1130V6866.5H903z" />
        <path
          fill="#19224F"
          d="M1054.40755 6699.5L1149 6860.5 879 6860.5 970.573 6699.5z"
          transform="rotate(-180 1014 6780)"
        />
        <path
          stroke="#19224F"
          strokeWidth="11"
          d="M945.5 6942v82.5c0 17.95 14.55 32.5 32.5 32.5h69c17.95 0 32.5-14.55 32.5-32.5V6942h-134z"
        />
        <path
          fill="#19224F"
          stroke="#19224F"
          strokeWidth="11"
          d="M946.595 7028c1.276 16.781 15.297 30 32.405 30h68c17.108 0 31.129-13.219 32.405-30h-132.81z"
        />
        <path className="u-rounded" fill="#19224F" d="M1016 6860.5H1027V6921.5H1016z" stroke-linecap="round" />
        <path className="u-rounded" fill="#19224F" d="M1031 6836.5H1042V6897.5H1031z" stroke-linecap="round" />
      </g>
    </svg>
      <div className="KalitaWave__waveBox">
      <svg className="KalitaWave__waveBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 186" width="1440" height="186">
      <path
        fill="#FCF1F2"
        fillRule="evenodd"
        d="M1474 7357.5c-187.947 0-192.427-93-380.374-93-187.95 0-177.173 48.71-365.126 48.71-187.96 0-194.62-84.806-382.58-84.806-187.96 0-187.96 57.903-375.92 57.903V7171.5h1481.01l22.99 186z"
        transform="translate(0 -7171)"
      />
    </svg>
      </div>
		</section>
	)
}

export default KalitaWave;