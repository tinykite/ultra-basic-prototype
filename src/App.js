import React from 'react';
import './index.scss';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Interstitial from './components/Interstitial/Interstitial';
import Tip from './components/Tip/Tip';

function App() {
	return (
		<>
			<Hero />
			<Introduction />
			<Interstitial Title={"Ultra Basic Advice"} Description={"Because everyone needs to start somewhere. These are the tips I wish I always had."}/>
			<Tip />
			<Interstitial Title={"Ultra Basic Tools"} Description={"Basic but beautiful methods of making coffee by hand."}/>
		</>
	)
}

export default App;