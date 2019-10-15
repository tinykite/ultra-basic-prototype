import React from 'react';
import './index.scss';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section6 from './components/Section6/Section6';
import Aeropress from './components/Aeropress/Aeropress';
import KalitaWave from './components/KalitaWave/KalitaWave';
import FrenchPress from './components/FrenchPress/FrenchPress';

function App() {
	return (
		<div className="App">
			<Hero />
			<Introduction />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section6 />
			<Aeropress />
			<KalitaWave />
			<FrenchPress />
		</div>
	)
}

export default App;