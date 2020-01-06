import React, { useRef } from 'react';
import { motion } from 'framer';
import { useOnScreen } from './hooks/useOnScreen';
import styled from 'styled-components';

const WaveBottom = styled(motion.svg)`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  background: #fff;
`;

const ScrollContainer = styled(motion.div)`
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 720px) {
    padding: 5vh 0;
  }

  @media (min-width: 720px) {
    height: 100vh;
  }
`;

const Illustration = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 52px;

  @media (min-width: 720px) {
    height: 50px;
    width: auto;
  }
`;

const Story = styled(motion.article)`
  width: 80%;
  max-width: 550px;
  position: relative;
  padding-top: 50px;

  @media (min-width: 720px) {
    padding-top: 100px;
  }
`;

const StoryItem = styled(motion.p)`
  color: #ffffff;
  font-size: 14px;

  & + & {
    margin-top: 20px;
  }

  @media (min-width: 720px) {
    font-size: 17px;
  }
`;

const Drips = styled(motion.svg)`
  position: absolute;
  top: 10px;
  right: 7%;
  width: 40px;
  height: auto;

  @media (min-width: 720px) {
    right: 20%;
    width: 52px;
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
    <>
      <ScrollContainer ref={ref}>
        <Story>
          <Illustration
            xmlns="http://www.w3.org/2000/svg"
            viewport="0 0 44 104"
            fill="none"
          >
            <g
              fill="#fff"
              fillRule="evenodd"
              clip-path="url(#clip0)"
              clipRule="evenodd"
            >
              <path d="M19.401 14.495L32.358 1.131C33.232.23 34.954.01 36.202.643c1.096.555 1.483 1.6.918 2.477l-9.528 14.795c-2.472 3.838-5.405 7.511-8.766 10.978L5.87 42.257c-.875.903-2.597 1.122-3.845.49-1.096-.556-1.483-1.6-.918-2.478l9.528-14.795c2.472-3.838 5.406-7.512 8.766-10.979z"></path>
              <path d="M18.826 14.495L5.87 1.131C4.995.23 3.273.01 2.025.643c-1.096.555-1.483 1.6-.918 2.477l9.528 14.795c2.472 3.838 5.406 7.511 8.766 10.978l12.956 13.364c.875.903 2.597 1.122 3.845.49 1.096-.556 1.483-1.6.918-2.478l-9.528-14.795c-2.472-3.838-5.405-7.512-8.766-10.979zm66.575 0L98.358 1.131c.875-.902 2.597-1.121 3.845-.488 1.096.555 1.483 1.6.918 2.477l-9.528 14.795c-2.472 3.838-5.406 7.511-8.766 10.978L71.87 42.257c-.875.903-2.597 1.122-3.845.49-1.096-.556-1.483-1.6-.918-2.478l9.528-14.795c2.472-3.838 5.406-7.512 8.766-10.979z"></path>
              <path d="M84.826 14.495L71.87 1.131C70.995.23 69.273.01 68.025.643c-1.096.555-1.483 1.6-.918 2.477l9.528 14.795c2.472 3.838 5.406 7.511 8.766 10.978l12.956 13.364c.875.903 2.597 1.122 3.845.49 1.096-.556 1.483-1.6.918-2.478l-9.528-14.795c-2.472-3.838-5.406-7.512-8.766-10.979z"></path>
              <path d="M52.401 14.495L65.358 1.131C66.232.23 67.954.01 69.202.643c1.096.555 1.483 1.6.918 2.477l-9.528 14.795c-2.472 3.838-5.405 7.511-8.767 10.978L38.87 42.257c-.875.903-2.597 1.122-3.845.49-1.096-.556-1.483-1.6-.918-2.478l9.528-14.795c2.472-3.838 5.406-7.512 8.767-10.979z"></path>
              <path d="M51.826 14.495c3.36 3.467 6.294 7.141 8.766 10.98l9.528 14.794c.565.878.178 1.922-.918 2.477-1.248.633-2.97.414-3.845-.489L52.401 28.893c-3.36-3.467-6.294-7.14-8.766-10.978L34.107 3.12c-.565-.878-.178-1.922.918-2.477 1.248-.633 2.97-.414 3.845.488l12.956 13.365z"></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path fill="#fff" d="M0 0h104v44H0z"></path>
              </clipPath>
            </defs>
          </Illustration>
          <StoryItem>
            At a punk house in Chicago I lived in during college,
            coffee was a giant pot of water with an industrial dose of
            Cafe Bustelo that was boiled for an indeterminate amount
            of time.{' '}
          </StoryItem>
          <StoryItem>It was super gross.</StoryItem>
          <StoryItem>
            But other than tasting like a campfire took a dump in a
            dirty lake full of sand, it was still coffee. Just coffee
            minus nuance.
          </StoryItem>
          <StoryItem>
            This is a short guide to understanding more of the nuance.
          </StoryItem>
        </Story>
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
        <WaveBottom
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 115"
        >
          <path
            fillRule="evenodd"
            d="M0 115c187.992 0 165.992-58 353.984-58 187.996 0 187.996 58 375.994 58 188.006 0 188.006-58 376.011-58 188.006 0 146.006 58 334.011 58V0H0v115z"
          ></path>
        </WaveBottom>
      </ScrollContainer>
    </>
  );
};

export default Introduction;
