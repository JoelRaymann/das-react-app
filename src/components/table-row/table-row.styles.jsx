import styled, { css } from "styled-components";

export const StyledTableRowComponent = styled.li`
  border-radius: 4px;
  border-collapse: collapse;
  margin: 3px 3px;
  padding: 15px 15px;
  display: flex;
  font-weight: 500;
  border-bottom: 1px solid #dddddd;
  // justify-content: space-between;
  color: ${(props) => props.$primaryTextColor || "#000000"};
  background-color: ${(props) => props.$primaryBgColor || "#ffffff"};
  // box-shadow: 0 0 1rem 0 rgba(70, 70, 70, 0.8);
  ${(props) =>
    props.$header
      ? css`
          position: --webkit-sticky;
          position: sticky;
          top: 0;
          font-weight: 700;
        `
      : ""}

  div {
    text-transform: ${(props) => (props.$header ? "uppercase" : "none")};
    flex-basis: ${(props) => `${Math.round(90 / (props.$columns - 1 || 2))}%`};

    ${(props) =>
      props.$ignoreFirstColumnCompression
        ? ""
        : css`
            &:nth-child(1) {
              flex-basis: 10%;
            }
          `}
  }

  &:hover {
    // color: ${(props) => props.$secondaryTextColor || "#ffffff"};
    color: #fff;
    background-color: ${(props) => props.$secondaryBgColor || "#23232e"};
  }

  @media all and (max-width: 767px) {
    display: ${(props) => (props.$header ? "none" : "block")};
    min-width: 10px;
    text-align: justify;

    div {
      display: flexbox;
      padding: 0.6rem 0;
      letter-spacing: 1px;

      &:before {
        content: attr(data-label);
        color: #6c7a89;
        padding-left: 5px;
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`;
