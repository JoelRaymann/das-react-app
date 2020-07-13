import React, { useState } from "react";

import ButtonComponent from "../../components/button/button.component";

import "./edit-attendance-form.styles.scss";

function EditAttendanceFormComponent({ dateLists }) {
  const [selectedDate, setSelectedDate] = useState(-1);

  function handleChange(event) {
    const { value } = event.target;
    setSelectedDate(value);
  }

  function handleClick() {}

  /**
   * Function to handle the date submission for editing attendance.
   *
   * @param {React.SyntheticEvent} event - The synthetic event to handle submission
   */
  function handleSubmit(event) {
    event.preventDefault();

    if (selectedDate === "-1") {
      console.log("Choose a valid date");
    } else {
      console.log(selectedDate);
    }
  }

  dateLists.unshift("-1");

  return (
    <div className="edit-attendance-form-container">
      <form onSubmit={handleSubmit} className="edit-attendance-form">
        <button
          value={selectedDate}
          onChange={handleChange}
          name="date-options"
        >
          {dateLists.map((date, index) => {
            if (index === 0) {
              return (
                <div key={date} value={date} className="option">
                  Choose a date
                </div>
              );
            } else {
              return (
                <div key={date} value={date} className="option">
                  {date}
                </div>
              );
            }
          })}
        </button>
        <ButtonComponent type="submit">Query Date</ButtonComponent>
      </form>
    </div>
  );
}

export default EditAttendanceFormComponent;
