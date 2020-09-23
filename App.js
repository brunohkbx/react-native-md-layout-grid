import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './src/Grid';
import Item from './src/Item';

export default function App() {
  return (
    <View style={styles.container}>
      <Grid spacing={3}>
        <Item>
          <View style={{backgroundColor: 'yellow'}}>
            <Text>A</Text>
          </View>
        </Item>
        <Item style={{backgroundColor: 'yellow'}}>
          <Text>B</Text>
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
