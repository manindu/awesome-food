import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';

const VSpace = ({height}) => {
  return <View style={{height}} />;
};

VSpace.propTypes = {
  height: PropTypes.number,
};

VSpace.defaultProps = {
  height: 10,
};

export default VSpace;
