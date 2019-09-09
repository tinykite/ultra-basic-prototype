import React from 'react';
import './Section4.scss';

const Section4 = () => {
	return(
		<section className="section4 t-beige">
              <svg className="section4__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 74" width="1440" height="74">
      <path
        fill="#FFCEB9"
        d="M353.264 36.678C541.214 36.678 541.214 74 729.165 74c187.959 0 187.959-37.322 375.918-37.322C1293.04 36.678 1293.04 74 1481 74V0H0c110.213 24.452 227.967 36.678 353.264 36.678z"
      />
    </svg>
			    <svg className="section4__illustration"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 278 225" width="278" height="225"
    >
      <defs>
        <path id="a" d="M0 0h80v40c0 22.091-17.909 40-40 40S0 62.091 0 40V0z" />
      </defs>
      <g fill="none">
        <path
          stroke="#19224F"
          strokeWidth="6"
          d="M241.572 3.075h-52.417l-10.677 12.689-3.225 3.832L162.201 221h90.926l21.715-17.318-18.758-175.15-14.512-25.457zm.428.041L259 219"
        />
        <path fill="#19224F" d="M164 182h91l-4.5-65-42.87 27-39.05-27z" />
        <path
          stroke="#19224F"
          strokeDasharray="8,12"
          strokeLinecap="square"
          strokeWidth="6"
          d="M238.5 27.59h-61.742"
        />
        <g transform="translate(25 144)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            fill="#19224F"
            d="M12.231 68.003L78.5 3l.72 37.008c.423 21.66-16.795 39.563-38.456 39.985-.255.005-.51.007-.764.007H17.133a7 7 0 01-4.902-11.997z"
            mask="url(#b)"
          />
        </g>
        <path
          stroke="#19224F"
          strokeWidth="6"
          d="M28 202v-34h-8c-9.389 0-17 7.611-17 17s7.611 17 17 17h8zm0-54v48c0 14.36 11.64 26 26 26h22c14.36 0 26-11.64 26-26v-48H28z"
        />
      </g>
    </svg>
			<div class="section4__text-box">
        <p className="section4__subtitle">Ultra Basic Tip #4</p>
			  <h2 className="section4__heading">Always Look for a Roast Date</h2>
				<p className="section4__text">Coffee is a crop. Not entirely unlike wine. It has nuanced flavor that is dependent on many  interlated factors: from weather conditions to soil quality and even growing elevation. </p>
			  <p className="section4__text">But before waxing too poetic about its similarity to wine, however, it should be noted that coffee is also kind of a lot like toast. It gets stale.</p>
				<p className="section4__text">The heady aromas and complex flavor can deteriorate over time — leaving a muddier, more stale experience behind that says nothing about terroir or something else clever.  </p>
			</div>
      <svg class="section4__wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 124" width="1440" height="124">
      <path fillRule="evenodd" d="M-8.34 0l1482 64.541v58.518H-16.808z" />
      </svg>
		</section>
	)
}

export default Section4;