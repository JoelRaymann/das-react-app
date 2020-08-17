import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";

import ButtonComponent from "../../components/button/button.component";
import LoaderComponent from "../../components/loader/loader.component";

import {
  selectDateList,
  selectIsFetchingDateList,
} from "../../redux/attendance/attendance.selectors";

import {
  StyledCalendarContainer,
  StyledModalFooter,
  StyledCalendar,
  StyledEditAttendanceFormContainer,
} from "./edit-attendance-form.styles";

import "react-infinite-calendar/styles.css";

function NoDateListModal(props) {
  const { onHide } = props;

  return (
    <div className="no-date-list-container">
      <Modal {...props} size="lg" centered>
        <Modal.Header>
          <Modal.Title>Sorry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            No Attendance Session was taken for this course. Please take
            attendance for this course to review and modify attendance for
            students.
          </p>
        </Modal.Body>
        <StyledModalFooter>
          <ButtonComponent
            onClick={onHide}
            type="button"
            $primaryColor="#e74c3c"
            $primaryTextColor="#ffffff"
            $secondaryColor="#ffffff"
            $secondaryTextColor="#e74c3c"
          >
            Close
          </ButtonComponent>
        </StyledModalFooter>
      </Modal>
    </div>
  );
}

function sortDateLists(a, b) {
  return a - b;
}

/**
 *
 * @param {Array<String>} dateLists
 */
function generateDisabledDateList(dateList) {
  dateList = dateList.map((dateString) => new Date(dateString));
  dateList.sort(sortDateLists);

  let disabledDateLists = [];
  const startDate = new Date(dateList[0]);
  const endDate = new Date(dateList[dateList.length - 1]);
  let dt = new Date(startDate);

  while (dt <= endDate) {
    disabledDateLists.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  disabledDateLists = disabledDateLists.filter(
    (disabledDate) =>
      !dateList.find((date) => date.getTime() === disabledDate.getTime())
  );

  return [startDate, endDate, disabledDateLists];
}

function EditAttendanceFormComponent({ course, dateList, isFetchingDateList }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const history = useHistory();

  function handleSelect(date) {
    setSelectedDate(date);
    console.log(date);
  }

  /**
   * Function to handle the date submission for editing attendance.
   */
  function HandleQueryClick() {
    alert(selectedDate);
  }
  if (isFetchingDateList || dateList === null) {
    return <LoaderComponent />;
  } else if (dateList.length === 0) {
    return (
      <div className="date-list-empty-container">
        <NoDateListModal show={true} onHide={history.goBack} />
      </div>
    );
  } else {
    const [minDate, maxDate, disabledDateLists] = generateDisabledDateList(
      dateList
    );
    setSelectedDate(minDate);
    return (
      <StyledEditAttendanceFormContainer className="edit-attendance-form-container">
        <StyledCalendarContainer>
          <StyledCalendar
            width={763}
            height={500}
            rowHeight={70}
            selected={selectedDate}
            disabledDates={disabledDateLists}
            min={minDate}
            minDate={minDate}
            maxDate={maxDate}
            max={maxDate}
            theme={{
              selectionColor: "rgb(0, 122, 255)",
              textColor: {
                default: "#333",
                active: "#FFF",
              },
              weekdayColor: "black",
              headerColor: "black",
            }}
            displayOptions={{
              showTodayHelper: false,
              showOverlay: true,
            }}
            onSelect={handleSelect}
          />
        </StyledCalendarContainer>
        <div className="edit-attendance-button-container">
          <ButtonComponent type="button" onClick={HandleQueryClick}>
            Query Date
          </ButtonComponent>
          <ButtonComponent type="button" onClick={history.goBack}>
            Go Back
          </ButtonComponent>
        </div>
      </StyledEditAttendanceFormContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dateList: selectDateList,
  isFetchingDateList: selectIsFetchingDateList,
});

export default connect(mapStateToProps)(EditAttendanceFormComponent);
