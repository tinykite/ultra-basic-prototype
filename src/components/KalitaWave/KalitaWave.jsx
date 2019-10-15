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
      <svg className="KalitaWave__illustration"
      xmlns="http://www.w3.org/2000/svg"
      width="301"
      height="351"
      viewBox="0 0 301 351"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          fill="#FDF1F2"
          fillRule="nonzero"
          d="M0.05 0.74H300.05V350.74H0.05z"
          transform="translate(-849 -5703) translate(849 5703)"
        />
        <g transform="translate(-849 -5703) translate(849 5703) translate(8 2)">
          <path
            stroke="#1B234F"
            strokeWidth="11"
            d="M76 232.42v78.82a31 31 0 0031.05 31H173a31 31 0 0031.05-31v-78.82H76z"
          />
          <path
            fill="#1B234F"
            stroke="#1B234F"
            strokeWidth="11"
            d="M77.09 314.58c1.25 16.19 14.762 28.682 31 28.66h65c16.236.017 29.745-12.473 31-28.66h-127z"
          />
          <path
            fill="#8D86A0"
            d="M139.35 128.79c2.76 0 5 3.36 5 7.5V197c0 3.74-2.24 6.76-5 6.76s-5-3-5-6.76v-60.71c0-4.14 2.24-7.5 5-7.5zM153.71 129.19a5 5 0 015 5v40.49a4.78 4.78 0 01-5 4.51 4.77 4.77 0 01-5-4.51v-40.49a5 5 0 015-5z"
            opacity="0.5"
          />
          <path
            fill="#1B234F"
            fillRule="nonzero"
            d="M55.79 149.99H205.79V159.99H55.79z"
          />
          <path
            fill="#1B234F"
            d="M240.42 20.3L251.93.05H.38l88.13 150h78.11l13.64-24h43.37l60-105.77-43.21.02zm-23 95h-30.79L234.46 31h30.76l-47.8 84.3z"
          />
        </g>
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