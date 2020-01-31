import React from 'react';
import './index.scss';
import Hero from './Hero';
import Introduction from './Introduction';
import Interstitial from './Interstitial';
import Aeropress from './Aeropress';
import KalitaWave from './KalitaWave';
import FrenchPress from './FrenchPress';
import Strength from './Strength';
import Grind from './Grind';
import Time from './Time';
import Tips from './Tips';

function App() {
  return (
    <>
      <Hero />
      <Introduction />
      <Interstitial title="Brew Methods" />
      <Aeropress
        title="Aeropress"
        fontStack="Barbour"
        background="#19224f"
      />
      <KalitaWave />
      <FrenchPress />
      <Interstitial title="Extraction 101" />
      <Strength />
      <Grind />
      <Time />
      <Interstitial title="Ultra Basic Next Steps" />
      <Tips />
    </>
  );
}

export default App;
