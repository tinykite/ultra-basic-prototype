import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from './hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ScrollContainer = styled.div`
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled(motion.article)`
  max-width: 530px;
`;

const Title = styled(motion.h2)`
  font-family: 'Nostrav1.0-SettTrial';
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  font-weight: normal;
`;

const Intro = styled.p`
  color: #ffffff;
  font-family: input-mono, monospace;
  font-weight: 200;
  font-style: italic;
  margin-top: 30px;
  font-size: 18px;
  line-height: 1.6;
`;

const Story = styled.p`
  color: #ffffff;
  font-weight: 200;
  margin-top: 30px;
  line-height: 1.6;
  font-size: 16px;

  a:link,
  a:active,
  a:hover,
  a:visited {
    color: inherit;
    text-decoration: none;
    padding-bottom: 5px;
    border-bottom: 1px solid #ffffff;
  }
`;

const Illustration = styled(motion.svg)`
  margin-left: 100px;
  overflow: visible;
`;

const BottomWave = styled(motion.svg)`
  background: #ffffff;
  width: 100%;
  height: auto;
`;

const FrenchPress = () => {
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
  const yRange = ['-200px', '0px'];
  const driftRange = ['-50px', '0px'];
  const opacity = position;
  const translateY = useTransform(position, xRange, yRange);
  const driftVertical = useTransform(position, xRange, driftRange);

  return (
    <>
      <ScrollContainer ref={ref}>
        <TextContainer style={{ opacity }}>
          <Title
            style={{ translateY: driftVertical }}
            transition={{ type: 'inertia', velocity: 100 }}
          >
            French Press
          </Title>
          <Intro>
            Invented in 1929. Not a lot has changed. But who says
            that's a bad thing?
          </Intro>
          <Story>
            The French Press produces one hell of a bold, bodacious
            cup of coffee. It's your ideal match if you want intense
            body and something that mingles well with others. So go
            ahead and avoid drinking it black.
          </Story>
          <Story>
            PS: It can also be used to produce{' '}
            <a href="https://www.bonappetit.com/test-kitchen/cooking-tips/article/french-press-broth">
              intensely flavorful broth.
            </a>
          </Story>
        </TextContainer>
        <Illustration
          xmlns="http://www.w3.org/2000/svg"
          width="241"
          height="415"
          viewBox="0 0 241 415"
        >
          <motion.g style={{ translateY }}>
            <path
              fill="#7F7F7F"
              d="M190.64 308.08v25h-150v-25h59.79v-11.83h10.37v-249c-11.625-2.874-19.304-13.938-17.93-25.834C94.241 9.52 104.24.497 116.214.347c11.974-.15 22.194 8.621 23.864 20.479 1.67 11.858-5.73 23.11-17.279 26.274v249.15h9.63v11.83h58.21z"
            ></path>
          </motion.g>
          <path
            fill="#FFF"
            d="M30.15 175.25c0-32.83 34.05-54.05 86.38-54.16 49.64 0 85.41 23 85.41 54.16H30.15z"
          ></path>
          <path
            fill="#FFF"
            d="M240.63 200.32h-38.69v-24.75l-1.19-10-200.28.5 29.42 37.31v199c0 6.627 5.373 12 12 12h148c6.627 0 12-5.373 12-12V335H241l-.37-134.68zm-50.69-24.75v24.75h-18.57v-24.76l18.57.01zM42 212.32h18.47v140.85H41.9V218.6l.14.17-.04-6.45zm34.49 0h78.9v140.85H76.47l.02-140.85zm94.9 140.85V212.32h18.57v140.85h-18.57zm-16-177.61v24.76H76.47v-24.78l78.92.02zm-94.9 0v24.78H40.23l-20.56-24.81 40.82.03zM201.94 323V212.32H229V323h-27.06z"
          ></path>
        </Illustration>
      </ScrollContainer>
      <BottomWave
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="115"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
          d="M1440 0v114.084C1289.964 106.687 1277.001 57 1102.99 57c-188.006 0-188.006 58-376.012 58-187.998 0-187.998-58-375.994-58C171.722 57 163.385 109.738 0 114.636V0h1440z"
        ></path>
      </BottomWave>
    </>
  );
};

export default FrenchPress;
