import React from 'react';
import './Section3.scss';
import { motion } from 'framer-motion';

const Section3 = () => {
	return (
		<section className="section3 t-pink">
      <svg className="c-section__anim c-section__animWave"
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
        fill="#fff"
        d="M2753 0c-78.52 91.58-156.93 117.57-190 126-65.24 16.63-149.34 14.62-178 14-87-1.88-90.73-11.37-203-18-84.17-5-127.39-7.28-183 1-62.4 9.29-58.9 18.93-147 36-53.65 10.4-103.94 19.84-171 18-35.62-1-78.09-1.77-129-17-98.88-29.58-97.44-73.43-162-81-74.68-8.75-82.59 49.23-202 59-28.64 2.34-80.16 3.26-126 2-30.11-.83-48.73-2.32-54-2.8-42.13-3.79-65.68-10.28-149-15.2-84.17-5-127.39-7.28-183 1-62.4 9.29-58.9 18.93-147 36-53.65 10.4-103.94 19.84-171 18-37.37-1-78-2.14-129-17-56.23-16.38-72.87-34.25-123-43-43.32-7.56-80.31-2.84-104 2L0 0z"
      />
    </svg>
  <motion.svg animate={{ opacity: 1 }} initial={ {opacity: 0} } transition={{ duration: 5 }} className="section3__illustration" xmlns="http://www.w3.org/2000/svg" width="345" height="293" viewBox="0 0 345 293">
  <g fill="#19224F" fillRule="evenodd">
    <circle cx="274" cy="88" r="71"/>
    <circle cx="58" cy="58" r="58" transform="translate(0 18)"/>
    <path d="M67 0l120 .993C186.08 33.74 159.574 60 127.01 60 94.118 60 67.406 33.207 67 0z"/>
    <g>
      <path d="M270 181h8v60h-8z"/>
      <path d="M302 181h8v45h-8z"/>
      <path d="M238 181h8v30h-8z"/>
      <path d="M222 181h8v18h-8z"/>
      <path d="M318 181h8v29h-8z"/>
      <path d="M318 224h8v16h-8z"/>
      <path d="M203 203h8v16h-8z"/>
      <path d="M254 272h8v16h-8z"/>
      <path d="M286 277h8v16h-8z"/>
      <path d="M286 181h8v82h-8z"/>
      <path d="M254 181h8v80h-8z"/>
    </g>
  </g>
  </motion.svg>
			<motion.div animate={{ opacity: 1 }} initial={ {opacity: 0} } transition={{ duration: 5 }} class="section3__text">
				<p className="">Coffee is a crop. Not entirely unlike wine. It has nuanced flavor that is dependent on many  interlated factors: from weather conditions to soil quality and even growing elevation. </p>
			  <p className="">But before waxing too poetic about its similarity to wine, however, it should be noted that coffee is also kind of a lot like toast. It gets stale.</p>
				<p className="">The heady aromas and complex flavor can deteriorate over time — leaving a muddier, more stale experience behind that says nothing about terroir or something else clever.  </p>
			</motion.div>
		</section>
	)
}

export default Section3;