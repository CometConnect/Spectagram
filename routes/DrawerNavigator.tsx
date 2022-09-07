import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { User, getAuth } from 'firebase/auth'

import Profile from '../pages/Profile'
import StackNavigator from './StackNavigator'
import Login from '../pages/Login'
import Loading from '../pages/Loading'
import Logout from '../pages/Logout'

const Drawer = createDrawerNavigator()

export default () => {
    const [user, setUser] = useState<User | null>(null)
    getAuth().onAuthStateChanged(setUser)
    
    return (
<Drawer.Navigator useLegacyImplementation>
    <Drawer.Screen name="Loading" component={Loading} />
    { user
        ? <Drawer.Screen name="Logout" component={Logout} />
        : <Drawer.Screen name="Login" component={Login} />
    }
    <Drawer.Screen name="Home" component={StackNavigator} />
    { user ? <Drawer.Screen name="Profile" component={Profile} /> : null }
</Drawer.Navigator>
    )
}