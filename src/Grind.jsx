import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from './hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Scroll } from 'framer';

const ScrollContainer = styled(motion.div)`
  background: #f6efdf;
  margin: 0 auto;
  position: relative;
`;

const Main = styled(motion.div)`
  display: grid;
  margin: 0 auto;
  width: 80%;
  padding-top: 50px;
  text-align: center;
  grid-row-gap: 24px;

  @media (min-width: 720px) {
    padding-top: 24px;
    grid-template-columns: 1fr 120px;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-column-gap: 45px;
    max-width: 800px;
    text-align: left;
    grid-row-gap: 0;
    width: 80%;
    padding: 15vh 0;
  }

  @media (min-width: 1000px) {
    width: 100%;
    grid-template-columns: 550px 135px;
    grid-column-gap: 60px;
  }
`;

const Illustration = styled(motion.div)`
  grid-column: 1 / -1;
  margin: 0 auto;

  @media (min-width: 720px) {
    height: 0;
    align-self: start;
    grid-column: 2 / -1;
    width: 100%;
    grid-row: 1;
  }
`;

const IllustrationItem = styled(motion.svg)``;

const Title = styled(motion.h2)`
  font-family: antique-olive-nord, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #394419;
  font-weight: normal;
  font-size: 24px;
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    text-align: left;
    grid-column: 1 / 1;
  }

  @media (min-width: 900px) {
    font-size: 36px;
  }
`;

const Story = styled(motion.article)`
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    grid-column: 1 / 1;
    margin-top: 20px;
  }
`;

const StoryItem = styled(motion.p)`
  line-height: 1.6;
  font-size: 14px;
  color: #394419;
  font-weight: 200;

  a:link,
  a:active,
  a:hover,
  a:visited {
    color: inherit;
    text-decoration: none;
    padding-bottom: 5px;
    border-bottom: 1px solid #ffffff;
  }

  & + & {
    margin-top: 20px;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }
`;

const Grind = () => {
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
  const opacity = position;

  return (
    <ScrollContainer>
      <Main ref={ref} style={{ opacity }}>
        <Title>2. Grind</Title>
        <Illustration>
          <IllustrationItem
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 135 227"
          >
            <g fill="#394419">
              <path
                fillRule="evenodd"
                d="M67.028 67.028V2.833L135 2.832c-1.175 35.287-30.556 63.613-66.847 64.187l-1.125.009z"
                clipRule="evenodd"
                opacity="0.666"
              ></path>
              <path
                fillRule="evenodd"
                d="M67.028 67.028V2.833L135 2.832c-1.175 35.287-30.556 63.613-66.847 64.187l-1.125.009zM67.972 67.028v64.195L0 131.224c1.175-35.287 30.556-63.613 66.847-64.187l1.125-.009z"
                clipRule="evenodd"
              ></path>
              <path d="M135 82.133H67.028v9.643H135v-9.643zM135 102.295H67.028v9.643H135v-9.643zM135 121.581H67.028v9.643H135v-9.643z"></path>
              <path
                fillRule="evenodd"
                d="M49.563 75.052V.472h9.44v74.58h-9.44zM.472 125.087V1.417h9.44v123.67H.473zM33.986 95.35V29.266h9.44V95.35h-9.44zM17.937 123.671V57.587h9.44v66.084h-9.44z"
                clipRule="evenodd"
              ></path>
              <path d="M75.147 126.503h-9.063v65.836h9.063v-65.836zM111.399 128.259h-9.063v64.08h9.063v-64.08zM93.273 128.259H84.21v98.314h9.063v-98.314z"></path>
            </g>
          </IllustrationItem>
        </Illustration>
        <Story>
          <StoryItem>
            Many guides share the same seemingly immutable tips about
            how to grind coffee:
          </StoryItem>
          <StoryItem>
            Using a <em>whirly boi</em> (or blade grinder) on your
            beans is garbage. The Baratza Encore is lovely. You'll
            make more flavorful coffee if you avoid pre-ground beans —
            as well as coffee labeled without an obvious roast date.
          </StoryItem>
          <StoryItem>
            It's all great. It also feels like your nutritionist
            telling you that sugar is inflammatory.
          </StoryItem>
          <StoryItem>
            How do you improve upon bad coffee? According to Counter
            Culture, by making frequent and tiny adjustments to your
            grind based off of taste.
          </StoryItem>
          <StoryItem>
            <strong>
              If your mouth feels dry with an ashy aftertaste,
            </strong>{' '}
            you’re likely grinding too fine.
          </StoryItem>
          <StoryItem>
            <strong>
              If the coffee tastes weak, sour, or a little papery,
            </strong>{' '}
            you may be grinding too coarse.
          </StoryItem>
        </Story>
      </Main>
    </ScrollContainer>
  );
};

export default Grind;
