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
  padding: 8vh 0;

  @media (min-width: 720px) {
    padding: 14vh 0;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Knockout 68 A', 'Knockout 68 B';
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 1.125rem;

  @media (min-width: 720px) {
    font-size: 110px;
  }
`;

const Icon = styled(motion.svg)`
  width: 40px;
  height: auto;

  @media (min-width: 720px) {
    width: 68px;
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

  const parallax = useTransform(position, latest => latest * 1.25);

  const xRange = [0, 1];
  const driftRange = ['40%', '0%'];
  const driftUp = useTransform(parallax, xRange, driftRange, {
    clamp: false,
  });

  return (
    <Main ref={ref}>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 68 88"
        height="88"
        width="68"
        style={{ opacity: position, translateY: driftUp }}
      >
        <motion.g
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth="8"
        >
          <motion.path d="M4 4h60v80H4z" pathOffset="0 1" />
          <motion.path d="M45 0v88" />
          <motion.path d="M23 22v66" />
          <motion.path d="M27 58H0" />
          <motion.path d="M49 26H19" />
        </motion.g>
      </Icon>
      <Title style={{ opacity: position, translateY: driftUp }}>
        {title}
      </Title>
    </Main>
  );
};

export default Interstitial;
