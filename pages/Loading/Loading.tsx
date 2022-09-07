import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { getAuth } from 'firebase/auth'
import { Props } from '../../types'
import styles from './styles'

const Loading: FC<Props> = ({ navigation }) => {
    useEffect(()=> {
        getAuth().onAuthStateChanged(user=> {
            if (user) navigation.navigate('Home', {})
            else navigation.navigate('Login', {})
        })
    }, [])
    return (
<View style={styles.container}>
    <Text style={styles.text}>
        Loading
    </Text>
</View>
    )
}

export default Loading