import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ type, value, onChange, onBlur, onFocus, placeHolder }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeHolder}
      />
    </div>

  )
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => console.warn('you did not add onChange property')
}


export default InputField;
