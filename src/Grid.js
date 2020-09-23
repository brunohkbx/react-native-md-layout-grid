import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import Item from './Item';

const Grid = ({ spacing = 1, style, children }) => {
  const items = Children.toArray(children).filter(child => child.type === Item);

  return (
    <View style={[style, styles.container]}>
      {items.map(item => {
        return React.cloneElement(item, {
          style: { ...item.props.style, padding: spacing * 8, flexBasis: `${(item.props.wide / 12) * 100}%`, flexGrow: 0, maxWidth: `${(item.props.wide / 12) * 100}%`},
        });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Grid;