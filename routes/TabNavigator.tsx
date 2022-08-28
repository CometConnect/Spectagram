import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Feed from '../pages/Feed'
import CreatePost from '../pages/CreatePost'

const Tab = createMaterialBottomTabNavigator()

export default () =>

<Tab.Navigator
    defaultScreenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
            let iconName = 'blank';
            const list = { Feed: 'book', CreatePost: 'create' }
            Object.entries(list).forEach(([ routeName, icon ]) => {
                if (route.name === routeName) iconName = focused ? icon : `${icon}-outline`
            })

            return <Ionicons name={iconName} size={50} color={color} />
        }
    })}
>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="CreatePost" component={CreatePost} />
</Tab.Navigator>