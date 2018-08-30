import React from 'react';
import cx from 'classnames';

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div>
      <input {...input} type={type} autoFocus={props.autoFocus} />
      <label>{label}</label>
      {meta.error &&
        meta.touched &&
        !meta.active && <div className="feedback-text error-text">{meta.error}</div>}
    </div>
  );
};
