import 'react-native-gesture-handler'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TabNavigator from './TabNavigator'
import Profile from '../pages/Profile'

const Drawer = createDrawerNavigator()

export default () =>

<Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Profile" component={Profile} />
</Drawer.Navigator>