/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC<unknown> = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={homeStyles.container}>
      <><View >
        <Text style={homeStyles.header}>Top Tech</Text>
        <Text style={homeStyles.wordContent}>Check out the latest Apple news</Text>
        <Button title='Show News' onPress={() => {
          navigation.navigate('News');
        } } />
      </View></>
    </SafeAreaView>
  );
};

const homeStyles = StyleSheet.create({

  container: {
    alignItems: 'center',
    flex: 1,
    // justifyContent: 'center',

    marginTop: 100,
    // width: '100%',
  },
  header: {
    alignItems: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    // justifyContent: 'center',
    // marginTop: 100,
    paddingBottom: 20,
    width: '90%',
  },
  wordContent: {
    fontSize: 20,
    paddingBottom: 20,
  },

});
export default HomeScreen;
