import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './src/Grid';
import Item from './src/Item';

export default function App() {
  return (
    <View style={styles.container}>
      <Grid spacing={3}>
        <Item wide={6} style={{backgroundColor: 'red'}}>
          <Text>Wide=6</Text>
        </Item>
        <Item wide={6} style={{backgroundColor: 'yellow'}}>
          <Text>Wide=6</Text>
        </Item>
        <Item style={{backgroundColor: 'yellow'}}>
          <Text>Wide=12 default</Text>
        </Item>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
