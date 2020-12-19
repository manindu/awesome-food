import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 42,
    backgroundColor: COLORS.primaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: COLORS.lightgrey,
  },
});

export default style;
