import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Feed from '../pages/Feed'
import CreatePost from '../pages/CreatePost'

const Tab = createBottomTabNavigator()

export default () =>

<Tab.Navigator
    screenOptions={({ route }: { route: any }) => ({
        tabBarIcon: ({ focused, color, size }: { focused: boolean, color: any, size: any }) => {
            let iconName = 'blank';
            const list = { Feed: 'book', CreatePost: 'create' }
            Object.entries(list).forEach(([ routeName, icon ]) => {
                if (route.name === routeName) iconName = focused ? icon : `${icon}-outline`
            })

            return <Ionicons name={iconName} size={size} color={color} />
        }
    })}
>
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="CreatePost" component={CreatePost} />
</Tab.Navigator>