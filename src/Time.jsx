import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from './hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Scroll } from 'framer';

const WaveTop = styled(motion.svg)`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  background: #f6efdf;
`;

const BottomWave = styled(motion.svg)`
  background: #ffffff;
  width: 100%;
  height: auto;
  margin-top: 24px;
`;

const ScrollContainer = styled(motion.div)`
  background: #394419;
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
    grid-template-columns: 100px 1fr;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-column-gap: 45px;
    max-width: 800px;
    text-align: left;
    grid-row-gap: 0;
    width: 80%;
    padding-top: 20vh;
  }

  @media (min-width: 1000px) {
    width: 100%;
    grid-template-columns: 135px 550px;
    grid-column-gap: 60px;
  }
`;

const Illustration = styled(motion.div)`
  grid-column: 1 / -1;
  margin: 0 auto;

  @media (min-width: 720px) {
    height: 0;
    align-self: start;
    grid-column: 1 / 1;
    width: 100%;
  }
`;

const IllustrationItem = styled(motion.svg)``;

const Title = styled(motion.h2)`
  font-family: antique-olive-nord, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  grid-column: 1 / -1;
  order: -1;

  @media (min-width: 720px) {
    text-align: left;
    grid-column: 2 / -1;
    order: 0;
  }

  @media (min-width: 900px) {
    font-size: 36px;
  }
`;

const Story = styled(motion.article)`
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    grid-column: 2 / -1;
    margin-top: 20px;
  }
`;

const StoryItem = styled(motion.p)`
  line-height: 1.6;
  font-size: 14px;
  color: #ffffff;
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

const Time = () => {
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
      <WaveTop
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#394419"
          fillRule="evenodd"
          d="M0 0c187.992 0 165.992 58 353.984 58C541.98 58 541.98 0 729.978 0c188.006 0 188.006 58 376.011 58C1293.995 58 1251.995 0 1440 0v115H0V0z"
        ></path>
      </WaveTop>
      <Main ref={ref} style={{ opacity }}>
        <Illustration>
          <IllustrationItem
            viewBox="0 0 135 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M125.559 50.979L71.7483 50.979V60.4196L125.559 60.4196V50.979Z"
              fill="white"
            />
            <path
              d="M53.8112 50.979L0 50.979L0 60.4196L53.8112 60.4196V50.979Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M87.3252 0.472015L87.3252 42.0105H78.8287V0.472015L87.3252 0.472015Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M106.364 87.7972L106.364 129.336H97.5524V87.7972H106.364Z"
              fill="white"
            />
            <path
              d="M121.783 103.951H82.1329V113.182H121.783V103.951Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M134.528 66.5559V111.871H126.031L126.031 66.5559H134.528Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M71.7483 53.8112L71.7483 111.399H63.2517L63.2517 53.8112H71.7483Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M71.7483 0.944031L71.7483 58.5314H63.2517L63.2517 0.944031L71.7483 0.944031Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M134.528 122.255V216.661H126.031V122.255H134.528Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M118.007 121.783V188.811H109.51V121.783H118.007Z"
              fill="white"
            />
          </IllustrationItem>
        </Illustration>
        <Title>3. Time</Title>
        <Story>
          <StoryItem>
            In high school I thought that strong coffee was the kind
            of thing that punched you in the face and made you speak
            like a Hemingway novel.
          </StoryItem>
          <StoryItem>
            And to credit my heart-on-sleeve teenage self, it does
            heavily influence our perception of flavor. But the term
            doesn't accurately qualify how aggressively macho (or even
            how long) something was brewed.{' '}
          </StoryItem>
          <StoryItem>
            Strength is predominantly determined, before brewing, by
            the ratio of coffee to hot water that you use: and for
            adequately "strong" coffee, coffee educators typically
            recommend staying between 1:15 and 1:17.
          </StoryItem>
          <StoryItem>
            <em>
              For 8oz of coffee (using a 1:15 ratio), that means a
              dose of approximately ~15 grams of beans.
            </em>
          </StoryItem>
        </Story>
      </Main>
      <BottomWave
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="115"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#394419"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
          d="M1440 0v114.084C1289.964 106.687 1277.001 57 1102.99 57c-188.006 0-188.006 58-376.012 58-187.998 0-187.998-58-375.994-58C171.722 57 163.385 109.738 0 114.636V0h1440z"
        ></path>
      </BottomWave>
    </ScrollContainer>
  );
};

// const Technique = () => {
//   return (
//     <ScrollContainer background={'#000'}>
//       <Main>
//         {/* <Illustration>{illustration}</Illustration> */}
//         <Title>Strength</Title>
//         <Story>
//           <StoryItem>
//             In high school I thought that strong coffee was the kind
//             of thing that punched you in the face and made you speak
//             like a Hemingway novel.
//           </StoryItem>
//           <StoryItem>
//             And to credit my heart-on-sleeve teenage self, it does
//             heavily influence our perception of flavor. But the term
//             doesn't accurately qualify how aggressively macho (or even
//             how long) something was brewed.{' '}
//           </StoryItem>
//           <StoryItem>
//             Strength is predominantly determined, before brewing, by
//             the ratio of coffee to hot water that you use: and for
//             adequately "strong" coffee, coffee educators typically
//             recommend staying between 1:15 and 1:17.
//           </StoryItem>
//           <StoryItem>
//             For 8oz of coffee (using a 1:15 ratio), that means a dose
//             of approximately ~15 grams of beans.
//           </StoryItem>
//         </Story>
//       </Main>
//     </ScrollContainer>
//   );
// };

export default Time;
