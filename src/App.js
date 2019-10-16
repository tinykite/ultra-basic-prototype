import React from 'react';
import './index.scss';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Interstitial from './components/Interstitial/Interstitial';

function App() {
	return (
		<>
			<Hero />
			<Introduction />
			<Interstitial Title={"Ultra Basic Advice"} Description={"Because everyone needs to start somewhere. These are the tips I wish I always had."}/>
		</>
	)
}

export default App;