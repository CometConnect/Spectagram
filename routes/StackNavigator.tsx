import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TabNavigator from './TabNavigator'
import Post from '../pages/Post'

const Stack = createStackNavigator()

export default () =>

<Stack.Navigator
    initialRouteName='Home'
    screenOptions={{ headerShown: false }}
>
    <Stack.Screen name="Home" component={TabNavigator} />
    <Stack.Screen name="Post" component={Post} />
</Stack.Navigator>