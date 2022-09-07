import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Post } from '../../temp_posts'
import { nav } from '../../types'
import styles from './styles'

export default ({ item: { author, caption, image }, navigation: { navigate } }: { item: Post, navigation: nav }) => 

<View style={styles.container}>
    <TouchableOpacity
        style={styles.cardContainer}
        onPress={()=> navigate('Post', { author, caption, image })}
    >
        <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
                <Image source={require('../../assets/profile_img.png')} style={styles.profileImage} />
            </View>
            <View style={styles.authorNameContainer}><Text style={styles.authorNameText}>{ author }</Text></View>
            <Image source={require(`../../assets/${image}.jpg`)} style={styles.postImage} />
            <View style={styles.captionContainer}><Text style={styles.captionText}>{ caption }</Text></View>
            <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                    <Ionicons name="heart" size={RFValue(30)} color="white" />
                    <Text style={styles.likeText}>12k</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
</View>