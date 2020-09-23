import React from 'react';
import { StyleSheet, View } from 'react-native';
import Item from './Item';

const Grid = ({ spacing = 1, style, children }) => {
  return (
    <View style={[style, styles.container]}>
      {React.Children.map(children, child => {
        if (child.type !== Item) return;

        return React.cloneElement(child, {
          style: { ...child.props.style, padding: spacing * 8 },
        });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Grid;