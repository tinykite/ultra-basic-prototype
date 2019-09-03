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
  </>
  )
}

export default Introduction;