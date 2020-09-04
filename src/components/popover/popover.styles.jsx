import styled from "styled-components";

export const StyledPopoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #23232e !important;
  border: 0.5px solid #141414 !important;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 0.5rem 0.1rem rgba(70, 70, 70, 0.8);
  position: absolute;
  width: 25rem;
  height: 30rem;
  right: 1rem;
  top: 4.5rem;
  z-index: 2;
`;

export const StyledPopoverList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 29rem;
  width: 100%;
`;

export const StyledPopoverHeader = styled.li`
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 12.5rem;
    background-color: #23232e;

    img {
      filter: invert(100%) sepia(7%) saturate(0%) hue-rotate(106deg)
        brightness(111%) contrast(100%);
      width: 3rem;
      height: 3rem;
      margin: 1.5rem 1.5rem;
      padding: 0 0.5rem;
      border-radius: 50%;
      border: 1px solid #141414 !important;
    }

    span {
      color: #b6b6b6 !important;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.1ch;
      font-size: 1.25rem;
    }
  }
`;

export const StyledPopoverListItem = styled.li`
  width: 100%;

  &:last-child {
    margin-top: auto;
  }
`;
