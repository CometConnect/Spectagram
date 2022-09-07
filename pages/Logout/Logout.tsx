import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getAuth } from 'firebase/auth'
import styles from './styles'

export default () =>
<View style={styles.container}>
    <Text style={styles.text}>
        <TouchableOpacity onPress={()=> {
            getAuth().signOut()
        }}>
            Logout
        </TouchableOpacity>
    </Text>
</View>