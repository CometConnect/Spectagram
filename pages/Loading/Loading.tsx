import React, { FC, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getAuth } from 'firebase/auth'
import { Props, Theme } from '../../types'
import style from './styles'

const Loading: FC<Props> = ({ navigation }) => {
    useEffect(()=> {
        getAuth().onAuthStateChanged(user=> {
            if (user) navigation.navigate('Home', {})
            else navigation.navigate('Login', {})
        })
    }, [])
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
        Loading
    </Text>
</View>
    )
}

export default Loading