import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, Text} from 'react-native';
import styles from './Input.style';

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  onBlur,
  error,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  error: '',
};

export default Input;
