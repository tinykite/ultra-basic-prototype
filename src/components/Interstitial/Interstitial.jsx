import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer";
import './Interstitial.scss';

const Interstitial = ({Title, Description}) => {
return (
	<div className="c-interstitial l-wave">
	  <h2 className="c-interstitial__heading">{Title}</h2>
	  <p className="c-interstitial__text">{Description}</p>
	</div>
)
}

export default Interstitial;