import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
  },
  infoContainer: {
    marginTop: 40,
    width: '90%',
    alignItems: 'center',
  },
});

export default styles;
