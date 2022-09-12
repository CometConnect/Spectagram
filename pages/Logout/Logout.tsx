import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { Theme } from '../../types'
import style from './styles'
import { getTheme } from '../../utils'

export default () => {
    const [theme, setTheme] = useState<Theme>('light')
    let styles = new style(theme)
    useEffect(()=> {
        styles = new style(theme)
        setDoc(doc(getFirestore(), "users", getAuth().currentUser!.uid), { theme })
    }, [theme])

    useEffect(()=> {
        getTheme(getAuth().currentUser, setTheme)
    }, [])
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