import { keyframes } from "styled-components";

export const alignTopAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
`

export const alignRightAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translateX(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
`