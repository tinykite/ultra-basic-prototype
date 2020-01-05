import React from 'react';
import './index.scss';
import Hero from './Hero';
import Introduction from './Introduction';
import Interstitial from './Interstitial';
import Aeropress from './Aeropress';
import KalitaWave from './KalitaWave';
import FrenchPress from './FrenchPress';
import Technique from './Technique';

function App() {
  return (
    <>
      <Hero />
      <Introduction />
      <Interstitial title="Ultra Basic Tools" />
      <Aeropress
        title="Aeropress"
        fontStack="Barbour"
        background="#19224f"
      />
      <KalitaWave />
      <FrenchPress />
      <Technique />
    </>
  );
}

export default App;
