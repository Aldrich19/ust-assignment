import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const HomeButton: React.FC<unknown> = () => {
  const navigation = useNavigation();

  return (
    <MaterialIcons name="home" onpress={navigation.navigate('Home')} />

  );
};

export default HomeButton;
