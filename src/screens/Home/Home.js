import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SafeAreaView, FlatList} from 'react-native';
import {RestaurantCard, VSpace} from '../../components';
import styles from './Home.style';

const Home = ({restaurantList, navigation}) => {
  const renderCards = ({item}) => {
    return (
      <RestaurantCard
        id={item.id}
        name={item.name}
        imageSource={item.imageSource}
        price={item.averagePriceForTwo}
        city={item.city}
        rating={item.rating}
        onClick={() => {
          navigation.navigate('Restaurant Details', {item});
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <VSpace height={20} />
      <FlatList
        contentContainerStyle={{paddingBottom: 20}}
        data={restaurantList}
        renderItem={renderCards}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

Home.propTypes = {
  restaurantList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  restaurantList: state.restaurant.list,
});

export default connect(mapStateToProps)(Home);
