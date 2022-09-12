import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { getDoc, doc, getFirestore, setDoc, getDocs, query, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import PostCard from '../../components/PostCard'
import { Post, PostSnippet, Props, Theme } from '../../types'
import style from './styles'
import { getTheme } from '../../utils'

export default ({ navigation }: Props) => {
    const [theme, setTheme] = useState<Theme>('light')
    const [posts, setPosts] = useState<Post[]>([])
    let styles = new style(theme)

    useEffect(()=> {
        styles = new style(theme)
    }, [theme])

    useEffect(()=> {
        getTheme(getAuth().currentUser, setTheme)

        // fetch Posts
        const copy = [...posts]
        getDocs(query(collection(getFirestore(), "posts")))
        .then(dbPosts=> {
            dbPosts.forEach(doc=> {
                const data = doc.data() as PostSnippet
                copy.push({ id: doc.id, ...data })
            })
        })
        .finally(()=> {
            setPosts(copy)
        })
    }, [])

    return (
<View style={styles.container}>
    <TouchableOpacity onPress={()=> {
        setDoc(doc(getFirestore(), "users", getAuth().currentUser!.uid), { theme: theme === 'light' ? 'dark': 'light' })
        setTheme(theme === 'light' ? 'dark' : 'light')
    }} style={styles.theme}>
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
            keyExtractor={post=> post.id}
            data={posts}
            renderItem={({ item })=> <PostCard item={item} navigation={navigation} theme={theme} />}
        />
    </View>
</View>
    )
}