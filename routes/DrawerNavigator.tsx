import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { User, getAuth } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Theme } from '../types'

import Profile from '../pages/Profile'
import StackNavigator from './StackNavigator'
import Login from '../pages/Login'
import Loading from '../pages/Loading'
import Logout from '../pages/Logout'
import CustomDrawer from '../components/CustomDrawer'
import { getTheme } from '../utils'

const Drawer = createDrawerNavigator()

export default () => {
    const [user, setUser] = useState<User | null>(null)
    const [theme, setTheme] = useState<Theme>('light')
    getAuth().onAuthStateChanged(user=> {
        console.log(user?.uid || null)
        getTheme(user, setTheme)
        setUser(user)
    })
    
    return (
<Drawer.Navigator useLegacyImplementation
    drawerContent={(props)=> <CustomDrawer {...props} theme={theme} />}
>
    <Drawer.Screen name="Loading" component={Loading} options={{ unmountOnBlur: true }} />
    <Drawer.Screen name="Logout" component={Logout} options={{ unmountOnBlur: true }} />
    <Drawer.Screen name="Login" component={Login} options={{ unmountOnBlur: true }} />
    { user ? <Drawer.Screen name="Home" component={StackNavigator} options={{ unmountOnBlur: true }} /> : null }
    { user ? <Drawer.Screen name="Profile" component={Profile} options={{ unmountOnBlur: true }} /> : null }
</Drawer.Navigator>
    )
}