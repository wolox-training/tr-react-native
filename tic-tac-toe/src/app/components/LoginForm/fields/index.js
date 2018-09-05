import React from 'react';

const getValidityClassName = meta => {
  if (meta.asyncValidating) {
    return 'async-validating';
  }
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'invalid';
  }
  if (meta.touched && meta.valid) {
    return 'valid';
  }
};

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div className={getValidityClassName(meta)}>
      <input {...input} type={type} />
      <label>{label}</label>
      {meta.error &&
        meta.touched &&
        !meta.active && <div className="feedback-text error-text">{meta.error}</div>}
    </div>
  );
};
