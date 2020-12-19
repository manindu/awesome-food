import React from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {PlaceInfoBlock, BulletPoint} from '../../components';
import styles from './RestaurantDetails.style';

const RestaurantDetails = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PlaceInfoBlock
          image={item.imageSource}
          name={item.name}
          open={item.open}
          address={item.address}
          rating={item.rating}
        />
        <View style={styles.infoContainer}>
          <View style={styles.additional}>
            {item.additionalInformation.map((info) => (
              <BulletPoint key={info} text={info} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetails;
