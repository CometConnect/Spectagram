import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import post from '../../temp_posts'
import PostCard from '../../components/PostCard'
import { Props, Theme } from '../../types'
import style from './styles'

export default ({ navigation }: Props) => {
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