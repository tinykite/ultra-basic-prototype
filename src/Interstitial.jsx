import React, { useRef } from 'react';
import { useOnScreen } from './hooks/useOnScreen';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5vh 0;
  min-height: 20vh;

  @media (min-width: 720px) {
    min-height: 60vh;
  }
`;

const WaveBottom = styled(motion.svg)`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  background: none;
`;

const WaveTop = styled(motion.svg)`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  background: none;
`;

const Title = styled(motion.h2)`
  position: relative;
  font-family: 'Knockout 68 A', 'Knockout 68 B';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;

  @media (min-width: 720px) {
    font-size: 67.2px;
  }
`;

const Interstitial = ({ title }) => {
  const ref = useRef();
  let thresholdOptions = [];

  for (let step = 0; step <= 1; step = step + 0.005) {
    thresholdOptions.push(step);
  }

  const onScreen = useOnScreen(ref, thresholdOptions);
  const { isIntersecting } = onScreen;
  const { getThreshold } = onScreen;

  const position = useMotionValue(0);
  position.set(getThreshold);

  return (
    <Main>
      {/* <WaveTop
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fillRule="evenodd"
          d="M0 115c187.992 0 165.992-58 353.984-58 187.996 0 187.996 58 375.994 58 188.006 0 188.006-58 376.011-58 188.006 0 146.006 58 334.011 58V0H0v115z"
        ></path>
      </WaveTop> */}
      <Title>{title}</Title>
      {/* <WaveBottom
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#19224F"
          fillRule="evenodd"
          d="M0 0c187.992 0 165.992 58 353.984 58C541.98 58 541.98 0 729.978 0c188.006 0 188.006 58 376.011 58C1293.995 58 1251.995 0 1440 0v115H0V0z"
        ></path>
      </WaveBottom> */}
    </Main>
  );
};

export default Interstitial;
