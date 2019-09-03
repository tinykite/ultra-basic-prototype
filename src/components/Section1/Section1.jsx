import React from 'react';
import './Section.scss';

const Section1 = () => {
	return (
		<section class="c-section c-section--drip t-black">
			<div class="c-section__container c-section__container--left">
				<p class="c-section__text u-colorInverse">At a punk house in Chicago I lived in during college, coffee was a giant pot of water with an industrial dose of Cafe Bustelo that was boiled for an indeterminate amount of time. </p>
			  <p class="c-section__text u-colorInverse">It was super gross.</p>
				<p class="c-section__text u-colorInverse">But other than tasting like a campfire took a dump in a dirty lake full of sand, it was still coffee. Just coffee minus nuance.</p>
				<p class="c-section__text u-colorInverse">This is a short guide to understanding more of the nuance.</p>
			</div>
			<svg class="c-section__anim c-section__anim--drips" width="56" height="273" viewBox="0 0 56 273" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path class="c-section__animDrip" d="M0 0h19v263.5a9.5 9.5 0 0 1-19 0V0z"/><path class="c-section__animDrip" d="M37 0h19v124.5a9.5 9.5 0 0 1-19 0V0z"/></g></svg>
		</section>
	)
}

export default Section1;