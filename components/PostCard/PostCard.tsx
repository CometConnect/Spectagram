import React from 'react'
import { Image, ListRenderItemInfo, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Post } from '../../temp_posts'
import styles from './styles'

const PostCard = ({ item: { author, caption } }: ListRenderItemInfo<Post>) => {
    return (
<View style={styles.container}>
    <View style={styles.cardContainer}>
        <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
                <Image source={require('../../assets/profile_img.png')} style={styles.profileImage} />
            </View>
            <View style={styles.authorNameContainer}><Text style={styles.authorNameText}>{ author }</Text></View>
            <Image source={require('../../assets/post.jpeg')} style={styles.postImage} />
            <View style={styles.captionContainer}><Text style={styles.captionText}>{ caption }</Text></View>
            <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                    <Ionicons name="heart" size={RFValue(30)} color="white" />
                    <Text style={styles.likeText}>12k</Text>
                </View>
            </View>
        </View>
    </View>
</View>
    )
}

export default PostCard