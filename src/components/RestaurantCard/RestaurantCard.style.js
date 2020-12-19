import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginRight: 10,
  },
  information: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
  },
  nameAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 12,
    color: COLORS.primaryGreen,
  },
  description: {
    height: 50,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
