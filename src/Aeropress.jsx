import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from './hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ScrollContainer = styled.div`
  height: 100vh;
  background: #19224f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled(motion.article)`
  max-width: 550px;
`;

const Title = styled(motion.h2)`
  font-family: BarbourSample-Regular;
  font-size: 80px;
  color: #ffffff;
  letter-spacing: 0.58px;
  text-transform: uppercase;
  font-weight: normal;
`;

const Intro = styled.p`
  color: #ffffff;
  font-family: input-mono, monospace;
  font-weight: 200;
  font-style: italic;
  margin-top: 30px;
  font-size: 19px;
  line-height: 1.6;
`;

const Story = styled.p`
  color: #ffffff;
  font-weight: 200;
  margin-top: 30px;
  line-height: 1.6;
`;

const Illustration = styled(motion.svg)`
  margin-left: 100px;
  height: 575px;
  width: auto;
`;

const Plunger = styled(motion.g)``;

const Aeropress = () => {
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
  const yRange = ['75px', '0px'];
  const driftRange = ['-50px', '0px'];
  const opacity = position;
  const translateY = useTransform(position, xRange, yRange);
  const driftVertical = useTransform(position, xRange, driftRange);

  return (
    <ScrollContainer ref={ref}>
      <TextContainer style={{ opacity }}>
        <Title style={{ translateY: driftVertical }}>Aeropress</Title>
        <Intro>
          The hard-bodied prodigee of a manufacturer of frisbee
          lookalikes.
        </Intro>
        <Story>
          It might not have the glamour of a Chemex. There are also a
          lot of confusingly large accessories. But take a chance on
          this tiny plastic plunger just once — and you might discover
          it can produce the most naturally sweet coffee of your
          dreams.
        </Story>
      </TextContainer>
      <Illustration
        xmlns="http://www.w3.org/2000/svg"
        width="251"
        height="575"
        viewBox="0 0 251 575"
        style={{ opacity }}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
          transform="translate(-879 -4730) translate(879 4730)"
        >
          <path
            fill="#1B234F"
            fillRule="nonzero"
            d="M1 0H251V575H1z"
          />
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M40.64 141.3H215.64V464.25H40.64z"
            opacity="0.49"
          />
          <path
            fill="#FFF"
            d="M8.19 425.87h235.59a7.1 7.1 0 017.2 7v5a7.1 7.1 0 01-7.2 7H8.19a7.11 7.11 0 01-7.21-7v-5a7.11 7.11 0 017.21-7z"
          />
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M224.14 427.87h-198a6 6 0 010-12h198a6 6 0 010 12z"
          />
          <circle
            cx="127.64"
            cy="190.5"
            r="11"
            fill="#FFF"
            fillRule="nonzero"
          />
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M128.36 300.16c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0-60.33c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11a11 11 0 00-11-11zm0 0c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11a11 11 0 00-11-11zm0 60.33c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zM40.64 140.87v275h175v-275h-175zm87 33.63c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zm0 213a16 16 0 1116-16c0 8.837-7.163 16-16 16zm.72-60.34c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16a16 16 0 01-16 16zm0-60.33c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16a16 16 0 01-16 16zm0-27c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 60.33c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm-.72 60.34a11 11 0 1011 11c0-6.075-4.925-11-11-11zm.72-120.67c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 0c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11z"
          />
          <path
            fill="#FFF"
            fillRule="nonzero"
            stroke="#FFF"
            d="M205.87 436.06H50.09a9.63 9.63 0 00-9.61 9.61v14.16a9.63 9.63 0 009.61 9.61h155.78a9.62 9.62 0 009.61-9.61v-14.16a9.62 9.62 0 00-9.61-9.61zM67.29 464.38h-17.2a4.55 4.55 0 01-4.55-4.55v-14.16a4.56 4.56 0 014.55-4.56h17.2v23.27zm23.27 0H72.35v-23.27h18.21v23.27zm23.26 0H95.61v-23.27h18.21v23.27zm23.27 0h-18.21v-23.27h18.21v23.27zm5.06 0v-23.27h18.2v23.27h-18.2zm23.26 0v-23.27h18.21v23.27h-18.21zm45-4.55a4.56 4.56 0 01-4.56 4.55h-17.17v-23.27h17.19a4.56 4.56 0 014.56 4.56l-.02 14.16z"
          />
          <rect
            width="8"
            height="60"
            x="125.14"
            y="492.37"
            fill="#BEC2CD"
            fillRule="nonzero"
            opacity="0.75"
            rx="4"
          />
          <path
            fill="#BEC2CD"
            d="M161.14 492.37a4 4 0 014 4v37a4 4 0 11-8 0v-37a4 4 0 014-4zM97.14 492.37a4 4 0 014 4v37a4 4 0 11-8 0v-37a4 4 0 014-4z"
            opacity="0.8"
          />
          <path
            fill="#BEC2CD"
            d="M177.14 492.37a4 4 0 014 4v21a4 4 0 11-8 0v-21a4 4 0 014-4zM81.14 492.37a4 4 0 014 4v21a4 4 0 11-8 0v-21a4 4 0 014-4z"
            opacity="0.5"
          />
          <path
            fill="#BEC2CD"
            d="M145.14 492.37a4 4 0 014 4v74a4 4 0 11-8 0v-74a4 4 0 014-4zM113.14 492.37a4 4 0 014 4v74a4 4 0 11-8 0v-74a4 4 0 014-4z"
            opacity="0.9"
          />
          <motion.g style={{ translateY, position }}>
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M40.64 11.65H215.64V140.87H40.64z"
              opacity="0.49"
            />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M251 6.09a5.9 5.9 0 01-1.81 4.24 6.19 6.19 0 01-4.36 1.76h-29.19V141.3h-8V12.09h-159v128.78h-8V12.09H7.17a6.09 6.09 0 01-6.17-6 5.9 5.9 0 011.81-4.24A6.23 6.23 0 017.17.09h237.66a6.09 6.09 0 016.17 6z"
            />
          </motion.g>
        </g>
      </Illustration>
    </ScrollContainer>
  );
};

export default Aeropress;
