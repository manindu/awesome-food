import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text, StatusBar} from 'react-native';
import styles from './PlaceInfoBlock.style';

const PlaceInfoBlock = ({image, name, open, address, rating}) => {
  const statusStyle = [styles.statusText];
  if (!open) {
    statusStyle.push(styles.closedStatusText);
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.statusRow}>
        <Text style={statusStyle}>{open ? 'Open' : 'Closed'}</Text>
        <Text>{rating} Rating</Text>
      </View>
      <View style={styles.nameBlock}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.addressText}>{address}</Text>
      </View>
    </View>
  );
};

PlaceInfoBlock.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  open: PropTypes.bool,
  rating: PropTypes.number,
};

export default PlaceInfoBlock;
