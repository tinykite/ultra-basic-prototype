import React, { useRef } from 'react';
import { motion } from 'framer';
import { useOnScreen } from './hooks/useOnScreen';
import styled from 'styled-components';

const ScrollContainer = styled(motion.div)`
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`;

const Drips = styled(motion.svg)`
  position: absolute;
  top: 10px;
  right: 7%;

  @media (min-width: 720px) {
    right: 20%;
  }
`;

const Introduction = () => {
  const ref = useRef();
  const thresholdOptions = 0;
  const onScreen = useOnScreen(ref, thresholdOptions);

  const { isIntersecting } = onScreen;

  const variants = {
    play: { translateY: -10 },
    pause: { translateY: -273 },
  };

  return (
    <ScrollContainer ref={ref}>
      <article className="c-text">
        <p className="c-text__item u-colorInverse">
          At a punk house in Chicago I lived in during college, coffee
          was a giant pot of water with an industrial dose of Cafe
          Bustelo that was boiled for an indeterminate amount of time.{' '}
        </p>
        <p className="c-text__item u-colorInverse">
          It was super gross.
        </p>
        <p className="c-text__item u-colorInverse">
          But other than tasting like a campfire took a dump in a
          dirty lake full of sand, it was still coffee. Just coffee
          minus nuance.
        </p>
        <p className="c-text__item u-colorInverse">
          This is a short guide to understanding more of the nuance.
        </p>
      </article>
      <Drips
        animate={isIntersecting && 'play'}
        initial={'pause'}
        transition={{ ease: 'easeOut', duration: 8 }}
        variants={variants}
        width="56"
        height="273"
        viewBox="0 0 56 273"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#FFF" fillRule="evenodd">
          <path
            className="c-section__animDrip"
            d="M0 0h19v263.5a9.5 9.5 0 0 1-19 0V0z"
          />
          <path
            className="c-section__animDrip"
            d="M37 0h19v124.5a9.5 9.5 0 0 1-19 0V0z"
          />
        </g>
      </Drips>
    </ScrollContainer>
  );
};

export default Introduction;