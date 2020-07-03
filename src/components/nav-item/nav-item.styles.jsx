import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { hexToFilter } from "../../utils/icon-color-converter";

export const NavItemLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.$primaryBgColor || "#23232e"};
  text-decoration: none;
  transition: 200ms ease all;

  img {
    ${(props) => hexToFilter(props.$primaryIconColor || "#ffffff").filter}
    width: 2rem;
    margin: 0 1rem;

    ${(props) =>
      props.$disableIconPopover
        ? null
        : css`
            & + span {
              position: absolute;
              color: transparent;
            }
          `}

  }

  span {
    color: ${(props) => props.$primaryLinkColor || "#b6b6b6"};
    text-overflow: clip;
    font-size: 1.15rem;
    margin: 0 1.15rem;
  }

  &:hover {
    background-color: ${(props) => props.$secondaryBgColor || "#141414"};
    /* border-radius: 8px; */

    img {
      ${(props) => hexToFilter(props.$secondaryIconColor || "#007aff").filter}
      animation: ${(props) =>
        props.$iconAnimation || "enlarge"} 1s linear infinite;

      & + span {
        position: relative;
        color: ${(props) => props.$secondaryLinkColor || "#ececec"};
      }
    }

    span {
      color: ${(props) => props.$secondaryLinkColor || "#ececec"};
    }
  }

  @keyframes enlarge {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }


  @keyframes rotate {
  0% {
    transform: scale(1) rotate(0deg);
  }

  50% {
    transform: scale(1.1) rotate(45deg);
  }

  100% {
    transform: scale(1) rotate(90deg);
  }
`;
