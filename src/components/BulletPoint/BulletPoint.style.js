import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 20,
    backgroundColor: COLORS.black,
    marginRight: 5,
  },
  text: {
    fontSize: 10,
  },
});

export default styles;
