import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import styles from './styles'

export default () =>
<View style={styles.container}>
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