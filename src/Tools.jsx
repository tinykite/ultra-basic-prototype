import React, { useRef } from 'react';
import { useOnScreen } from './hooks/useOnScreen';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 60vh;

  @media (min-width: 1000px) {
    min-height: 45vh;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Knockout 68 A', 'Knockout 68 B';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 1.75rem;

  @media (min-width: 720px) {
    font-size: 114px;
  }
`;

const WaveBottom = styled(motion.svg)`
  width: 100%;
  height: auto;
`;

const WaveTop = styled(motion.svg)`
  width: 100%;
  height: auto;
`;

const Tools = () => {
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
  const xRange = [0, 1];
  const driftRange = ['-50px', '0px'];
  const opacity = position;
  const driftRight = useTransform(position, xRange, driftRange);

  const pathLength = useTransform(position, [0, 0.9], [0, 1]);

  return (
    <>
      <WaveTop
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fillRule="evenodd"
          d="M0 115c187.992 0 165.992-58 353.984-58 187.996 0 187.996 58 375.994 58 188.006 0 188.006-58 376.011-58 188.006 0 146.006 58 334.011 58V0H0v115z"
        ></path>
      </WaveTop>
      <Main ref={ref}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 68 88"
          height="88"
          width="68"
          style={{ opacity }}
        >
          <defs />
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="8"
          >
            <motion.path
              style={{ pathLength }}
              d="M4 4h60v80H4z"
              pathOffset="0 1"
            />
            <motion.path style={{ pathLength }} d="M45 0v88" />
            <motion.path style={{ pathLength }} d="M23 22v66" />
            <motion.path style={{ pathLength }} d="M27 58H0" />
            <motion.path style={{ pathLength }} d="M49 26H19" />
          </g>
        </motion.svg>
        <Title style={{ opacity }}>Ultra Basic Tools</Title>
      </Main>
      <WaveBottom
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#19224F"
          fillRule="evenodd"
          d="M0 0c187.992 0 165.992 58 353.984 58C541.98 58 541.98 0 729.978 0c188.006 0 188.006 58 376.011 58C1293.995 58 1251.995 0 1440 0v115H0V0z"
        ></path>
      </WaveBottom>
    </>
  );
};

export default Tools;
