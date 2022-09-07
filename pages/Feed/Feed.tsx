import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { getDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import post from '../../temp_posts'
import PostCard from '../../components/PostCard'
import { Props, Theme } from '../../types'
import style from './styles'

export default ({ navigation }: Props) => {
    const [theme, setTheme] = useState<Theme>('light')
    let styles = new style(theme)
    useEffect(()=> {
        styles = new style(theme)
        setDoc(doc(getFirestore(), "users", getAuth().currentUser!.uid), { theme })
    }, [theme])

    async function getTheme(): Promise<Theme> {
        const docSnap = await getDoc(doc(getFirestore(), "users", getAuth().currentUser!.uid))
        if (!docSnap.exists()) return 'light' // default
        return docSnap.data().theme as Theme
    }

    useEffect(()=> {
        getTheme().then(res=> setTheme(res))
    }, [])
    return (
<View style={styles.container}>
<TouchableOpacity onPress={()=> setTheme(theme === 'light' ? 'dark' : 'light')} style={styles.theme}>
        Change Theme
    </TouchableOpacity>
    <SafeAreaView style={styles.droidSafeArea} />
    <View style={styles.appTitle}>
        <View style={styles.appIcon}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.iconImage}
            />
        </View>
        <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
        </View>
    </View>
    <View style={styles.cardContainer}>
        <FlatList
            style={styles.flatlist}
            keyExtractor={(_, i)=> i.toString()}
            data={post}
            renderItem={({ item })=> <PostCard item={item} navigation={navigation} theme={theme} />}
        />
    </View>
</View>
    )
}