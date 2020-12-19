import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
import styles from './RestaurantCard.style';
import {COLORS} from '../../utils/constants';

const RestaurantCard = ({imageSource, name, price, city, rating, onClick}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <React.Fragment>
        <Image style={styles.image} source={{uri: imageSource}} />
        <View style={styles.information}>
          <View style={styles.nameAndPrice}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>Avg. cost for two LKR {price}</Text>
          </View>
          <View style={styles.nameAndPrice}>
            <Text style={styles.name}>{city}</Text>
            <View style={styles.rating}>
              <Materialicons name="star" color={COLORS.yellow} />
              <Text>{rating}</Text>
            </View>
          </View>
        </View>
      </React.Fragment>
    </TouchableOpacity>
  );
};

RestaurantCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RestaurantCard;
