import React from "react";

import "./form-input.styles.scss";

function formInputIconClass(length) {
  return length ? "form-input-icon focus" : "form-input-icon";
}

function formContainerClass(length) {
  return length ? "form-input-container focus" : "form-input-container";
}

function formLabelClass(length) {
  return length ? "form-input-label shrink" : "form-input-label";
}

function FormInputComponent({
  handleChange,
  label,
  iconPath,
  ...otherFormInputProps
}) {
  return (
    <div className={`${formContainerClass(otherFormInputProps.value.length)}`}>
      {iconPath ? (
        <img
          src={iconPath}
          alt="icon"
          className={`${formInputIconClass(otherFormInputProps.value.length)}`}
        />
      ) : (
        ""
      )}
      <input
        className="form-input"
        onChange={handleChange}
        {...otherFormInputProps}
      />
      {label ? (
        <label
          className={`${formLabelClass(otherFormInputProps.value.length)}`}
        >
          {label}
        </label>
      ) : (
        ""
      )}
    </div>
  );
}

export default FormInputComponent;
