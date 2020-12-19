import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
  },
  image: {
    width: '100%',
    aspectRatio: 1.8,
    borderRadius: 0,
  },
  statusRow: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  nameBlock: {
    width: '90%',
    height: '10%',
    marginBottom: 10,
    marginTop: 10,
  },
  nameText: {
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 9,
  },
  statusText: {
    color: COLORS.primaryGreen,
  },
  closedStatusText: {
    color: 'red',
  },
  buttonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default styles;
