import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import style from './Button.style';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Button = ({
  label,
  onClick,
  disabled,
  customButtonStyle,
  customButtonTextStyle,
  mode,
}) => {
  if (mode === 'text') {
    return (
      <TouchableWithoutFeedback
        onPress={onClick}
        style={[style.textButton, customButtonStyle]}>
        <Text>{label}</Text>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableOpacity
      onPress={onClick}
      style={
        disabled
          ? [style.button, style.disabled]
          : [style.button, customButtonStyle]
      }
      disabled={disabled}
      activeOpacity={0.8}>
      <Text style={[style.buttonText, customButtonTextStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  customButtonStyle: PropTypes.shape({}),
  customButtonTextStyle: PropTypes.shape({}),
  mode: PropTypes.oneOf(['default', 'text']),
};

Button.defaultProps = {
  disabled: false,
  customButtonStyle: {},
  customButtonTextStyle: {},
  mode: 'default',
};

export default Button;
