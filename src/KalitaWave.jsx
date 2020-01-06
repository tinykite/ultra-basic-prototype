import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from './hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import 'typography.css';

const ScrollContainer = styled.div`
  background: ${props => props.background};
  margin: 0 auto;
`;

const Main = styled.article`
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 720px) {
    grid-template-columns: 1fr 0.6fr;
    align-content: center; /* Important side effect utilized here: this property also prevent rows from stretching to fill available space! */
    height: 80vh;
    grid-auto-flow: dense;
    grid-column-gap: 30px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 550px 1fr;
    max-width: 900px;
    grid-column-gap: 45px;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Carmin 0.2';
  color: #19224f;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  grid-column: 1 / 1;

  @media (min-width: 320px) {
    font-size: calc(45px + 16 * ((100vw - 320px) / 320));
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 65px;
  }
`;

const Intro = styled.p`
  color: #19224f;
  font-family: input-mono, monospace;
  font-weight: 300;
  font-style: italic;
  font-size: 14px;
  grid-column: 1 / 1;
  text-align: center;
  margin-top: 20px;

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    font-size: 19px;
  }
`;

const Story = styled.p`
  color: #19224f;
  font-weight: 300;
  line-height: 1.5;
  font-size: 14px;
  grid-column: 1 / 1;
  text-align: center;
  margin-top: 12rem;

  @media (min-width: 350px) {
    margin-top: 16rem;
  }

  @media (max-width: 719px) {
    order: 1;
    grid-row: 3;
    align-self: end;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
    margin-top: 20px;
  }
`;

const Illustration = styled(motion.div)`
  width: 80%;
  position: relative;
  margin: 0 auto;
  /* align-self: start; */
  grid-column: 1 / -1;

  @media (max-width: 719px) {
    grid-row: 3;
  }

  @media (min-width: 720px) {
    height: 0; /* We don't want this container to contribute to grid row height */
    grid-column: 2 / -1;
    width: 100%;
    max-width: 283px;
    /* align-self: start; */
  }

  @media (min-width: 1010px) {
    transform: translateY(-2vw);
  }

  @media (min-width: 1100px) {
    transform: translateY(-8vh);
  }
`;

const IllustrationLayout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 720px) {
    margin: 0;
  }
`;

const Kalita = styled(motion.svg)`
  width: 100%;
  max-width: 283px;
  height: auto;
`;

const Mug = styled(motion.div)`
  border: 8px solid #1b234f;
  width: 115px;
  height: 99.2px;
  margin-left: -12px;
  margin-top: 5px;
  border-radius: 0px 0px 25% 25%;
  overflow: hidden;
  position: relative;
  display: none;

  @media (min-width: 720px) {
    display: block;
    margin-top: 30px;
    border: 10px solid #1b234f;
    margin-left: -16px;
  }

  @media (min-width: 1200px) {
    height: 124px;
    width: 144px;
    margin-left: -30px;
  }
`;

const Coffee = styled(motion.div)`
  height: 124px;
  width: 144px;
  background: #1b234f;
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
  const skewRange = ['0.7rad', '-0.6rad'];
  const skew = useTransform(position, xRange, skewRange);

  const alternateDrip = {
    play: { opacity: 1 },
    pause: { opacity: 0 },
  };

  const brew = {
    play: { translateY: '25%' },
    pause: { translateY: '100%' },
  };

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
      <ScrollContainer ref={ref} background={'#fcf1f2'}>
        <Main>
          <Title style={{ skew }}>Kalita Wave</Title>
          <Intro>
            A pourover device with a very flat bottom. Don't be weird.
            It's a good thing.
          </Intro>
          <Illustration>
            <IllustrationLayout>
              <Kalita
                xmlns="http://www.w3.org/2000/svg"
                width="350"
                height="auto"
                fill="none"
                viewBox="0 0 283 224"
              >
                <motion.path
                  animate={'play'}
                  initial={'pause'}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    repeatDelay: 4,
                    ease: 'easeInOut',
                  }}
                  variants={alternateDrip}
                  s
                  fill="#C6BAC9"
                  fillRule="evenodd"
                  d="M125 149c2.76 0 5 3.361 5 7.503v60.734c0 3.742-2.24 6.763-5 6.763s-5-3.001-5-6.763v-60.734c0-4.142 2.24-7.503 5-7.503zM139 136a5 5 0 015 4.999v40.486a4.78 4.78 0 01-5 4.509 4.77 4.77 0 01-5-4.509v-40.486a5 5 0 015-4.999z"
                  clipRule="evenodd"
                ></motion.path>
                <motion.path
                  animate={'play'}
                  initial={'pause'}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    repeatDelay: 4,
                    delay: 5,
                    ease: 'easeInOut',
                  }}
                  variants={alternateDrip}
                  fill="#C4BBC8"
                  fillRule="evenodd"
                  d="M111 105c2.76 0 5 3.361 5 7.503v60.734c0 3.742-2.24 6.763-5 6.763-1.84 0-1.84 0 0 0-2.76 0-5-3.001-5-6.763v-60.734c0-4.142 2.24-7.503 5-7.503zM153 98c2.76 0 5 3.361 5 7.503v60.734c0 3.742-2.24 6.763-5 6.763-1.84 0-1.84 0 0 0-2.76 0-5-3.001-5-6.763v-60.734c0-4.142 2.24-7.503 5-7.503z"
                  clipRule="evenodd"
                ></motion.path>
                <path
                  fill="#1B234F"
                  d="M207 149H57v10h150v-10z"
                ></path>
                <path
                  fill="#1B234F"
                  fillRule="evenodd"
                  d="M239.828 20.25L251.328 0H0l88.052 150h78.041l13.628-24h43.332L283 20.23l-43.172.02zm-22.98 95h-30.762l47.787-84.3h30.733l-47.758 84.3z"
                  clipRule="evenodd"
                ></path>
              </Kalita>
              <Mug>
                <Coffee
                  animate={isIntersecting && 'play'}
                  initial={'pause'}
                  transition={{
                    duration: 12,
                    delay: 1,
                  }}
                  variants={brew}
                />
              </Mug>
            </IllustrationLayout>
          </Illustration>
          <Story>
            The Kalita Wave is an able workhorse for individuals who
            want to drink at least a few cups of coffee. Its iconic
            shape is a touch unconventional — but with good intentions
            at heart. The flat, simple silhouette makes it easier to
            more evenly extract your coffee.
          </Story>
        </Main>
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
