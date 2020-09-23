import React from 'react';
import { View } from 'react-native';

const Item = ({ children, style }) => {
  return (
    <View style={style}>
      {children}
    </View>
  )
};

export default Item;