import React from 'react';
import { View } from 'react-native';

const Item = ({ children, style }) => {
  return (
    <View style={style}>
      {children}
    </View>
  )
};

Item.defaultProps = {
  wide: 12,
};

export default Item;