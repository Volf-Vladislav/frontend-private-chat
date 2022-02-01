import React from 'react'
import { StyleSheet, StatusBar, View } from 'react-native'

import Navigation from './public/Navigation'


export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Navigation />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#0f0f0f',
    height: '100%',
  }
})
