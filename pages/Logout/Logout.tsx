import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getAuth } from 'firebase/auth'
import { Theme } from '../../types'
import style from './styles'

export default () => {
    const [theme, setTheme] = useState<Theme>('light')
    let styles = new style(theme)
    useEffect(()=> {
        styles = new style(theme)
    }, [theme])
    return (
<View style={styles.container}>
    <TouchableOpacity onPress={()=> setTheme(theme === 'light' ? 'dark' : 'light')} style={styles.theme}>
        Change Theme
    </TouchableOpacity>
    <Text style={styles.text}>
        <TouchableOpacity onPress={()=> {
            getAuth().signOut()
        }}>
            Logout
        </TouchableOpacity>
    </Text>
</View>
    )
}