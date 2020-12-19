import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './BulletPoint.style';

const BulletPoint = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bullet} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

BulletPoint.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BulletPoint;
