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
			<Interstitial Title={"Ultra Basic Advice"} Description={"All the random tips you need to start making better coffee. (But seriously, emphasis on basic.)"}/>
		</>
	)
}

export default App;