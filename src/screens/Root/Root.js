import React from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Feathericons from 'react-native-vector-icons/Feather';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Home from '../Home';
import HomeStack from '../HomeStack';
import Profile from '../Profile';
import {COLORS} from '../../utils/constants';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Root = ({signedIn}) => {
  return signedIn ? (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Feathericons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.primaryGreen,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const mapStateToProps = ({user}) => ({
  signedIn: user.signedIn,
});

export default connect(mapStateToProps)(Root);
