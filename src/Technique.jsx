import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 60vh;

  @media (min-width: 1000px) {
    min-height: 45vh;
  }
`;

const Title = styled.h2`
  font-family: 'Knockout 68 A', 'Knockout 68 B';
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 1.75rem;

  @media (min-width: 720px) {
    font-size: 114px;
  }
`;

const WaveBottom = styled(motion.svg)`
  width: 100%;
  height: auto;
`;

const Technique = () => {
  return (
    <>
      <Main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="88"
          viewBox="0 0 68 88"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="8"
          >
            <path d="M23 26v58h22V26H23z"></path>
            <path d="M4 4v80h41V4H4z"></path>
            <path strokeLinecap="square" d="M23 58H4"></path>
            <path d="M4 4v80h60V4H4z"></path>
          </g>
        </svg>
        <Title>Ultra Basic Technique</Title>
      </Main>
      <WaveBottom
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#000000"
          fillRule="evenodd"
          d="M0 0c187.992 0 165.992 58 353.984 58C541.98 58 541.98 0 729.978 0c188.006 0 188.006 58 376.011 58C1293.995 58 1251.995 0 1440 0v115H0V0z"
        ></path>
      </WaveBottom>
    </>
  );
};

export default Technique;
