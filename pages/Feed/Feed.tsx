import React from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import post from '../../temp_posts'
import PostCard from '../../components/PostCard'
import { Props } from '../../types'

export default ({ navigation }: Props) =>

<View style={styles.container}>
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
            keyExtractor={(_, i)=> i.toString()}
            data={post}
            renderItem={({ item })=> <PostCard item={item} navigation={navigation} />}
        />
    </View>
</View>