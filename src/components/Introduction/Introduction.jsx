import React from 'react';
import introductionillustration from './introductionillustration.svg'
import './Introduction.scss';

const Introduction = () => {
	return (
  <>
    <div className="c-heroContainer">
		<section className="c-hero t-black">
			<h1 className="c-hero__title">Ultra Basic <span className="u-visuallyHidden">Coffee</span></h1>
      <div className="cup">
        <svg className="cup__text" viewBox="0 0 184 80" xmlns="http://www.w3.org/2000/svg"><path d="M15.4 79.7C6.4 79.7.6 73.5.6 65.6c0-9.4 8.5-16.2 8.5-27.5 0-4.5-1.3-8.1-1.3-13.1 0-10.7 5.9-21.1 18.9-21.1 9.7 0 14 5.7 14 12.2 0 8-8.2 12.1-8.9 19.6l-.7.1c-1.6-6.2 2.7-11.1 2.7-16.9 0-6-3.3-8.7-7.7-8.7-6.6 0-10.3 5.3-10.7 12-.3 5.2 1.2 11 1.2 16 0 11.5-8.1 17.2-8.1 26.2 0 4.8 3.2 8.2 7.9 8.2 5 0 8.4-3.2 10.3-7.1 2-4.1 2.1-9.6 7.6-11.7l.6.8c-4.5 3.4-2.3 11-5.6 17.2-2.7 5.1-8.4 7.9-13.9 7.9zm35.6-.2c-7.7 0-13.6-4.9-13.6-11.6 0-7.2 7-11.4 7.2-21.2 0-3.2-.9-6-.8-9.5.1-8.4 4.6-16.2 14.6-16.2C65.9 21 70 25.5 70 31.8c0 6.8-4.7 12.7-4.7 21.4 0 3 .6 6 .6 9.3-.2 10.1-5.8 17-14.9 17zm.2-6.2c5.8 0 7.8-6.4 7.9-12.3.1-2.8-.1-5.5-.1-7.9 0-10.3 4.3-14.8 4.3-20.1 0-3.6-2-5.8-5.5-5.8-4.8 0-6.8 4.2-6.8 9.9 0 3.2.5 6.7.5 9.5 0 10-6.5 13.6-6.6 19.7 0 3.7 2.3 7 6.3 7zm19.5 5.3l-.5-.6c3.1-2.5 5.7-6.1 7-10.5 5.2-15.1-4.1-26 7-37.7-3.2.1-7 1-9.5 2.4l-.5-.6c3.6-2.5 4.7-8.6 11.6-8 2.4-4.4.4-8.3 1.4-13.5.9-4.7 3.9-8.7 9.6-8.7 3.4 0 6.3 1.7 8.2 4.3l-.6.7c-2.8-2.8-8.3-.8-9.7 4.5-1.2 4.4.9 9.7-2.8 13.1l.1.1c5.9-2.1 12 2.7 15.7-.8 3.4-3.2.9-8.7 1.8-13.9.9-4.7 3.8-8.6 9.5-8.6 3.4 0 6.5 1.4 9 3.7l-.5 1c-3.5-2.3-9.1-.6-10.5 4.7-1.2 4.4.8 10.4-2.9 13.8l.1.1c4.8-1.7 7.4 1.5 13-.6l.5.6c-2.6 1.8-3.7 6.2-9.4 6.2-1.9 0-4.2-.5-5.8-.5 0 7.2-3 8-4.9 14.8-3.7 12.8 4.7 23.9-4 30.5-4.1 3.2-7.4 1.4-10.7 3.5l-.5-.6c3.1-2.5 5.7-6.1 7-10.5 2.5-7.2-1.5-13.7.6-22 1.6-6.4 5.5-8.4 6.7-16.4-1.6 1.2-2.3 1.8-5.3 1.8-2.2 0-4-1.1-6.2-1.1-4.3 0-7.3 2.5-8.6 8-2.5 10.5 2.9 27.5-3 34.9-5 6.3-9.6 3.8-12.9 5.9zm56.1.7c-6.7 0-11-4.4-11-10.8 0-7.6 5.8-12 5.8-21.2 0-3.9-.7-6-.7-10.4 0-10.2 5.7-15.4 13.1-15.4 4.6 0 6.8 2.1 11.1 2.1 3 0 4.3-.9 5.9-2.4l.5.6c-5.2 6.6-6.4 12.5-6.4 18.6 0 4.3.7 9.4-2.9 13.1-3.4 3.5-9.7 4.2-15.6 2-1 4.3-3.8 6.8-3.8 11.3 0 3.3 1.8 6 6.1 6 6.7 0 6.8-6.9 13.1-9.6l.4.8c-4 2.1-4 15.3-15.6 15.3zm.9-27c4.8.3 7.8-.2 9.5-3.5 1.4-2.8 1-5.7 1-8.6 0-7.6 3-11.2 6.6-13.4l-.3-.6c-6 2-7.8.3-11.3 1.8-2.9 1.3-5.4 4.1-5.4 8.7 0 2.9.9 5.1.9 8.9 0 2.4-.4 4.9-1 6.7zm31.1 27c-6.7 0-11-4.4-11-10.8 0-7.6 5.8-12 5.8-21.2 0-3.9-.7-6-.7-10.4 0-10.2 5.7-15.4 13.1-15.4 4.6 0 6.8 2.1 11.1 2.1 3 0 4.3-.9 5.9-2.4l.5.6c-5.2 6.6-6.4 12.5-6.4 18.6 0 4.3.7 9.4-2.9 13.1-3.4 3.5-9.7 4.2-15.6 2-1 4.3-3.8 6.8-3.8 11.3 0 3.3 1.8 6 6.1 6 6.7 0 6.8-6.9 13.1-9.6l.4.8c-4 2.1-4 15.3-15.6 15.3zm.9-27c4.8.3 7.8-.2 9.5-3.5 1.4-2.8 1-5.7 1-8.6 0-7.6 3-11.2 6.6-13.4l-.3-.6c-6 2-7.8.3-11.3 1.8-2.9 1.3-5.4 4.1-5.4 8.7 0 2.9.9 5.1.9 8.9 0 2.4-.4 4.9-1 6.7z" fill="#000" fill-rule="nonzero"/></svg>
      </div>
    </section>
		<section className="c-intro t-white">
			<p className="c-intro__description">An illustrated guide to the fundamentals of manually-brewed coffee.</p>
		</section>
	</div>
	<section className="c-section c-section--drip t-black">
		<div className="c-section__container c-section__container--left">
			<p className="c-section__text u-colorInverse">At a punk house in Chicago I lived in during college, coffee was a giant pot of water with an industrial dose of Cafe Bustelo that was boiled for an indeterminate amount of time. </p>
		  <p className="c-section__text u-colorInverse">It was super gross.</p>
			<p className="c-section__text u-colorInverse">But other than tasting like a campfire took a dump in a dirty lake full of sand, it was still coffee. Just coffee minus nuance.</p>
			<p className="c-section__text u-colorInverse">This is a short guide to understanding more of the nuance.</p>
		</div>
	</section>
	<section className="c-section">
			<div className="c-section__container c-section__container--center t-white">
				<p className="c-section__text c-section__text--wide">I once accidentally made a cup of Aeropress coffee at work with an intense, milk-and-honey kind of sweetness. </p>
				<p className="c-section__text c-section__text--wide">It was a kind of unexpected, aggressive natural sweetness that made me feel like I'd discovered some hidden insight into the dark side of the moon — and might never again question the hyperbolic vocabulary used to describe the terroir of carefully grown, microlots of coffee.</p>
				<p className="c-section__text c-section__text--wide">After two cups of a similar sweetness, I couldn't replicate it. But I think it did help me more viscerally understand that coffee is a crop. </p>
			</div>
	</section>
	<section className="c-section t-sand">
		<div className="c-section__container c-section__container--right t-sand">
				<p className="c-section__text c-section__text--wide">Coffee is a crop. Not entirely unlike wine. It has nuanced flavor that is dependent on many  interlated factors: from weather conditions to soil quality and even growing elevation.  </p>
				<p className="c-section__text c-section__text--wide">But before waxing too poetic about its similarity to wine, however, it should be noted that coffee is also kind of a lot like toast. It gets stale.</p>
				<p className="c-section__text c-section__text--wide">The heady aromas and complex flavor can deteriorate over time — leaving a muddier, more stale experience behind that says nothing about terroir or something else clever.  </p>
			</div>
	</section>
	<section className="c-section js-scrollSection">
			<div className="c-section__container c-section__container--full">
				<h2 className="c-section__heading">Brew Fundamentals</h2>
				<p className="c-section__text c-section__text--wide ">Easy to brew and super consistent, the French Press is very reliable. Its classNameic and well-engineered design hasn’t changed much since its invention in 1929, and it’s perfect for making multiple cups of heavy-bodied coffee in 4 minutes.</p>
			</div>
	</section>
	<section className="t-beige c-section c-section--coffeeBlobs js-scrollSection">
		<div className="c-section__container c-section__container--left">
		</div>
		<div className="c-section__container c-section__container--right">
			<h3 className="c-section__subheading">Brew Strength</h3>
			<p className="c-section__text">Easy to brew and super consistent, the French Press is very reliable. Its classNameic and well-engineered design hasn’t changed much since its invention in 1929, and it’s perfect for making multiple cups of heavy-bodied coffee in 4 minutes.</p>
		</div>
	</section>
	<section className="t-deepBlue c-section">
			<div className="c-section__container c-section__container--left">
				<h3 className="c-section__subheading u-colorInverse">Grind Size</h3>
				<p className="c-section__text u-colorInverse">Easy to brew and super consistent, the French Press is very reliable. Its classNameic and well-engineered design hasn’t changed much since its invention in 1929, and it’s perfect for making multiple cups of heavy-bodied coffee in 4 minutes.</p>
				
				<h4 className="c-section__subheading-minor u-colorInverse">Ground Peppercorns</h4>
				<p className="c-section__text u-colorInverse">Extra Course. Good for Cold Brew. </p>
				
				<h4 className="c-section__subheading-minor u-colorInverse">Sea Salt</h4>
				<p className="c-section__text u-colorInverse">Course. Good for French Press. </p>

				<h4 className="c-section__subheading-minor u-colorInverse">Sand</h4>
				<p className="c-section__text u-colorInverse">Medium Coarse to Medium Fine. Typically used in drip brewers, and in cone-shaped pourover devices.</p>

				<h4 className="c-section__subheading-minor u-colorInverse">Granulated Sugar</h4>
				<p className="c-section__text u-colorInverse">Fine to Extra Fine. Good for Espresso.</p>

				<h4 className="c-section__subheading-minor u-colorInverse">Corn Starch</h4>
				<p className="c-section__text u-colorInverse">Very fine. Used in Ibriks for Turkish coffee.</p>
			</div>
			<div className="c-section__container c-section__container--right">
			</div>
	</section>
	<section className="t-pink c-section">
			<div className="c-section__container c-section__container--left">
				<h3 className="c-section__subheading">Contact Time</h3>
				<p className="c-section__text">Easy to brew and super consistent, the French Press is very reliable. Its classNameic and well-engineered design hasn’t changed much since its invention in 1929.</p>
			</div>
	</section>
	<section className="c-section">
			<div className="c-section__container c-section__container--full">
				<h2 className="c-section__heading">Brew Methods</h2>
				<p className="c-section__text c-section__text--wide ">Easy to brew and super consistent, the French Press is very reliable. Its classNameic and well-engineered design hasn’t changed much since its invention in 1929, and it’s perfect for making multiple cups of heavy-bodied coffee in 4 minutes.</p>
				<h4 className="c-section__subheading-minor u-colorInverse">1. Grinder</h4>
				<p className="c-section__text u-colorInverse">Find a grinder with burrs, not blades. A blade grinder will unevenly cut coffee grounds — which will make it easy to over- or under-extract your coffee. </p>
			</div>
	</section>
	<section className="t-black c-section c-section--tools">
			<div className="c-section__container c-section__container--right">
				<h3 className="c-section__subheading u-colorInverse">Essential Tools</h3>
				<p className="c-section__text u-colorInverse">One thing many individuals do wax poetic about is the importance of good gear. In many ways, fundamental coffee tools — and the somewhat ritualistic process they are used in — are just as important as unspoiled coffee beans.</p>
				
				<h4 className="c-section__subheading-minor u-colorInverse">1. Grinder</h4>
				<p className="c-section__text u-colorInverse">Find a grinder with burrs, not blades. A blade grinder will unevenly cut coffee grounds — which will make it easy to over- or under-extract your coffee. </p>
				
				<h4 className="c-section__subheading-minor u-colorInverse">2. Scale</h4>
				<p className="c-section__text u-colorInverse">Find a grinder with burrs, not blades. A blade grinder will unevenly cut coffee grounds — which will make it easy to over- or under-extract your coffee.  </p>

				<h4 className="c-section__subheading-minor u-colorInverse">3. Teapot</h4>
				<p className="c-section__text u-colorInverse">Find a grinder with burrs, not blades. A blade grinder will unevenly cut coffee grounds — which will make it easy to over- or under-extract your coffee.  </p>
			</div>
	</section>
  </>
  )
}

export default Introduction;