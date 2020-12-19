import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
  },
  errorText: {
    fontSize: 10,
    color: COLORS.error,
  },
});

export default styles;
