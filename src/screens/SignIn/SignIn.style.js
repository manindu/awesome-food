import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  container: {
    paddingTop: 90,
    width: '90%',
    flex: 1,
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    marginTop: 40,
  },
});

export default styles;
