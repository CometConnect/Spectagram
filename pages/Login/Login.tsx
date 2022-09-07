import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import style from './styles'
import { Theme } from '../../types'
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
            const provider = new GoogleAuthProvider()
            provider.addScope('profile')
            provider.addScope('email')
            signInWithPopup(getAuth(), provider) 
        }}>
            Sign in with Google
        </TouchableOpacity>
    </Text>
</View>
    )
}
