import styled from "styled-components";
import InfiniteCalendar from "react-infinite-calendar";
import { ModalFooter } from "react-bootstrap";

export const StyledCalendarContainer = styled.div`
  padding: 7.5px 0 7.5px 7.5px;
  border-radius: 4px;
  background-color: black;
  box-shadow: 0 0.1rem 0.5rem 0.5rem rgba(70, 70, 70, 0.8);
`;

export const StyledEditAttendanceFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  .edit-attendance-button-container {
    margin: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledCalendar = styled(InfiniteCalendar)`
  .Cal__MonthList__root {
    &::-webkit-scrollbar {
      width: 7.5px;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: black;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #007aff;
      border-radius: 8px;
    }
  }

  .Cal__Day__root.Cal__Day__disabled {
    opacity: 0.45;
  }

  .Cal__Day__root.Cal__Day__enabled {
    font-weight: 600;
  }
`;

export const StyledModalFooter = styled(ModalFooter)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
