import styled, { css } from "styled-components";

export const StyledTableRowComponent = styled.li`
  border-radius: 4px;
  margin: 1rem 1rem;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.$primaryTextColor || "#000000"};
  background-color: ${(props) => props.$primaryBgColor || "#ffffff"};
  box-shadow: 0 0 1rem 0 rgba(70, 70, 70, 0.8);
  ${(props) =>
    props.$header
      ? css`
          position: --webkit-sticky;
          position: sticky;
          top: 0;
        `
      : ""}

  div {
    text-transform: ${(props) => (props.$header ? "uppercase" : "none")};
    flex-basis: ${(props) => `${Math.round(90 / (props.$columns - 1 || 2))}%`};

    &:nth-child(1) {
      flex-basis: 10%;
    }
  }

  &:hover {
    color: ${(props) => props.$secondaryTextColor || "#ffffff"};
    background-color: ${(props) => props.$secondaryBgColor || "#23232e"};
  }

  @media all and (max-width: 767px) {
    display: ${(props) => (props.$header ? "none" : "block")};
    min-width: 350px;

    div {
      display: flex;
      padding: 0.6rem 0;

      &:before {
        content: attr(data-label);
        color: #6c7a89;
        padding-right: 10px;
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`;
