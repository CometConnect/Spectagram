import './database'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './routes/DrawerNavigator'
export default () =>
<NavigationContainer>
    <Drawer />
</NavigationContainer>