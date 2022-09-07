import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Profile from '../pages/Profile'
import StackNavigator from './StackNavigator'

const Drawer = createDrawerNavigator()

export default () =>

<Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name="Home" component={StackNavigator} />
    <Drawer.Screen name="Profile" component={Profile} />
</Drawer.Navigator>