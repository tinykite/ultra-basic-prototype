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
  height: 100vh;
  position: relative;
  perspective: 1000px;

  @media (min-width: 1000px) {
    min-height: 45vh;
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

const Letter = styled(motion.span)`
  transform-origin: 0 0;
  display: inline-block;
  line-height: 1em;

  &:nth-child(5),
  &:nth-child(11) {
    margin-right: 18px;
  }
`;

const Title = styled(motion.h2)`
  position: relative;
  font-family: 'Knockout 68 A', 'Knockout 68 B';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 1.125rem;
  transform-origin: 0 0;

  @media (min-width: 720px) {
    font-size: 114px;
  }
`;

const InnerTitleWrapper = styled(motion.span)`
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
`;

const Icon = styled(motion.svg)``;

// function useMousePosition() {
//   const [mousePosition, setMousePosition] = useState({
//     mouseX: 0,
//     mouseY: 0,
//   });

//   function handleMouseMove(event) {
//     setMousePosition({
//       x: event.clientX,
//       y: event.clientY,
//     });
//   }

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return mousePosition;
// }

const rotateText = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const Interstitial = ({ title }) => {
  // const { mouseX, mouseY } = useMousePosition();

  const parent = {
    start: {},
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    start: {
      scaleY: 0,
      opacity: 0,
    },
    end: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const wordGroup = title.split(/(?!$)/u);
  let letterMarkup = wordGroup.map(item => {
    return <Letter>{item}</Letter>;
  });

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
      <WaveTop
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fillRule="evenodd"
          d="M0 115c187.992 0 165.992-58 353.984-58 187.996 0 187.996 58 375.994 58 188.006 0 188.006-58 376.011-58 188.006 0 146.006 58 334.011 58V0H0v115z"
        ></path>
      </WaveTop>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 68 88"
        height="88"
        width="68"
        style={{
          scaleY: position,
          opacity: position,
        }}
      >
        <defs />
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
      <Title
        ref={ref}
        initial={{ translateY: '-12px', translateX: '3px' }}
        animate={
          isIntersecting && { translateY: '5px', translateX: '-3px' }
        }
        transition={{
          duration: 3,
          yoyo: Infinity,
          repeatDelay: 2,
        }}
        // transition={{ duration: 2, type: 'intertia', clamp: 'false' }}
      >
        <InnerTitleWrapper
          style={{ scaleY: position, opacity: position }}
          // transition={{ delay: 2, type: 'inertia', clamp: 'false' }}
          // initial={'start'}
          // variants={parent}
          // animate={isIntersecting && 'end'}
        >
          {letterMarkup}
        </InnerTitleWrapper>
      </Title>
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
    </Main>
  );
};

export default Interstitial;
