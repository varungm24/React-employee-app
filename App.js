import Home from './screens/Home'
import Profile from './screens/Profile'
import { StyleSheet, Text, View } from 'react-native'
import CreateEmployee from './screens/createEmployee'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const myOptions = {
  title: 'Ninja Squad',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#006aff',
  },
}
function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen
          name="Create"
          component={CreateEmployee}
          options={{ ...myOptions, title: 'Create Shinobi' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ ...myOptions, title: 'Profile' }}
        />
      </Stack.Navigator>
    </View>
  )
}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
})
