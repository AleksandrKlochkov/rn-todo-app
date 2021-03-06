import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'

export default function App() {
  return (
    <View>
      <Navbar title='Todo App!' />
      <View>
        <AddTodo style={styles.container}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
})