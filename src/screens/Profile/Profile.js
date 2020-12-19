import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../components';
import {signOut} from '../../state/user/user.actions';
import styles from './Profile.style';

const Profile = ({user, signOutUser}) => {
  const onClickSignOut = () => {
    signOutUser();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.infoContainer}>
        <Text>
          {user.firstName} {user.lastName}
        </Text>
        <Text>{user.email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Sign Out" onClick={onClickSignOut} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {signOutUser: signOut})(Profile);
