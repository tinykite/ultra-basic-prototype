import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from './hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ScrollContainer = styled.div`
  height: 85vh;
  background: #fcf1f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled(motion.article)`
  max-width: 530px;
`;

const Title = styled(motion.h2)`
  font-family: 'Carmin0.1-Extrabold';
  font-size: 65px;
  color: #19224f;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  font-weight: normal;
`;

const Intro = styled.p`
  color: #19224f;
  font-family: input-mono, monospace;
  font-weight: 300;
  font-style: italic;
  margin-top: 30px;
  font-size: 18px;
  line-height: 1.6;
`;

const Story = styled.p`
  color: #19224f;
  font-weight: 300;
  margin-top: 30px;
  line-height: 1.6;
  font-size: 16px;
`;

const Illustration = styled(motion.svg)`
  margin-left: 100px;
`;

const TopWave = styled(motion.svg)`
  background: #fcf1f2;
`;

const BottomWave = styled(motion.svg)`
  background: #000000;
`;

const KalitaWave = () => {
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
    <>
      <TopWave
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 283"
      >
        <path
          fill="#19224F"
          fillRule="evenodd"
          d="M1440 0v57.015h-316.267c-187.95 0-187.95 58.016-375.903 58.016-187.96 0-187.96-58.015-375.92-58.015C199.959 57.016 151 249.493 0 282.279V0h1440z"
        ></path>
      </TopWave>
      <ScrollContainer ref={ref}>
        <TextContainer style={{ opacity }}>
          <Title
            style={{ translateY: driftVertical }}
            transition={{ type: 'inertia', velocity: 100 }}
          >
            Kalita Wave
          </Title>
          <Intro>
            A pourover device with a very flat bottom. Don't be weird.
            It's a good thing.
          </Intro>
          <Story>
            The Kalita Wave is an able workhorse for individuals who
            want to drink at least a few cups of coffee. Its iconic
            shape is a touch unconventional — but with good intentions
            at heart. The flat, simple silhouette makes it easier to
            more evenly extract your coffee.
          </Story>
        </TextContainer>
        <Illustration
          xmlns="http://www.w3.org/2000/svg"
          width="301"
          height="351"
          viewBox="0 0 301 351"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeWidth="1"
          >
            <path
              fill="#FDF1F2"
              fillRule="nonzero"
              d="M0.05 0.74H300.05V350.74H0.05z"
              transform="translate(-849 -5703) translate(849 5703)"
            />
            <g transform="translate(-849 -5703) translate(849 5703) translate(8 2)">
              <path
                stroke="#1B234F"
                strokeWidth="11"
                d="M76 232.42v78.82a31 31 0 0031.05 31H173a31 31 0 0031.05-31v-78.82H76z"
              />
              <path
                fill="#1B234F"
                stroke="#1B234F"
                strokeWidth="11"
                d="M77.09 314.58c1.25 16.19 14.762 28.682 31 28.66h65c16.236.017 29.745-12.473 31-28.66h-127z"
              />
              <path
                fill="#8D86A0"
                d="M139.35 128.79c2.76 0 5 3.36 5 7.5V197c0 3.74-2.24 6.76-5 6.76s-5-3-5-6.76v-60.71c0-4.14 2.24-7.5 5-7.5zM153.71 129.19a5 5 0 015 5v40.49a4.78 4.78 0 01-5 4.51 4.77 4.77 0 01-5-4.51v-40.49a5 5 0 015-5z"
                opacity="0.5"
              />
              <path
                fill="#1B234F"
                fillRule="nonzero"
                d="M55.79 149.99H205.79V159.99H55.79z"
              />
              <path
                fill="#1B234F"
                d="M240.42 20.3L251.93.05H.38l88.13 150h78.11l13.64-24h43.37l60-105.77-43.21.02zm-23 95h-30.79L234.46 31h30.76l-47.8 84.3z"
              />
            </g>
          </g>
        </Illustration>
      </ScrollContainer>
      <BottomWave
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 245"
      >
        <path
          fill="#FCF1F2"
          fillRule="evenodd"
          d="M1440 0v244.365C1311.896 220.007 1287.48 125 1123.626 125c-187.95 0-177.173 65.47-365.126 65.47-187.96 0-194.62-113.986-382.58-113.986-187.96 0-187.96 77.827-375.92 77.827V0h1440z"
        ></path>
      </BottomWave>
    </>
  );
};

export default KalitaWave;
