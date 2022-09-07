import React from 'react'
import { Image, View } from 'react-native'
import { Props } from '../../types'
import styles from './styles'

export default ({ navigation }: Props) => {
    console.log(navigation)
    const { route: { params: { author, caption, image } } } = navigation
    return (
    <View>
        author: {author}
        caption: {caption}
        <Image source={require(`../../assets/${image}.jpg`)} />
    </View>
    )
}
