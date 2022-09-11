import React, { FC, useEffect, useState } from 'react'
import { Image, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { getDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { RFValue } from 'react-native-responsive-fontsize'
import DropDownPicker from 'react-native-dropdown-picker'
import style from './styles'
import { Post, Props, Theme } from '../../types'

type Prop = Props & Post
const CreatePost: FC<Prop> = ({ navigation }) => {
    const [caption, setCaption] = useState('')
    const [dropDownHeight, setDropDownHeight] = useState(0)
    const [open, setOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState('image_1')
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

    function generateID(passwordLength: number) {
        var numberChars = "0123456789"
        var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var lowerChars = "abcdefghijklmnopqrstuvwxyz"
        var allChars = numberChars + upperChars + lowerChars
        var randPasswordArray = Array(passwordLength)
        randPasswordArray[0] = numberChars
        randPasswordArray[1] = upperChars
        randPasswordArray[2] = lowerChars
        randPasswordArray = randPasswordArray.fill(allChars, 3)
        return shuffleArray(randPasswordArray.map(x => x[Math.floor(Math.random() * x.length)] )).join('')
    }
    
    function shuffleArray(array: any[]) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
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
            <Image source={require('../../assets/logo.png')} style={styles.iconImage} />
        </View>
        <View style={styles.appTitleTextContainer}><Text style={styles.appTitleText}>New Post</Text></View>
    </View>
    <View style={styles.fieldsContainer}>
        <Image source={require(`../../assets/${previewImage}.jpg`)} style={styles.previewImage} />
        <View style={{ height: RFValue(dropDownHeight) }}>
            <DropDownPicker
                items={[
                    { label: "Image 1", value: "image_1" },
                    { label: "Image 2", value: "image_2" },
                    { label: "Image 3", value: "image_3" },
                    { label: "Image 4", value: "image_4" },
                    { label: "Image 5", value: "image_5" },
                    { label: "Image 6", value: "image_6" },
                    { label: "Image 7", value: "image_7" },
                ]}
                value={previewImage}
                setValue={setPreviewImage}
                multiple={false}
                open={open}
                setOpen={setOpen}
                containerStyle={styles.dropDownContainerStyle}
                onOpen={()=> setDropDownHeight(170)}
                onClose={()=> setDropDownHeight(40)}
                style={styles.dropDownStyle}
                labelStyle={styles.dropDownLabelStyle}
                arrowIconStyle={styles.dropDownAcrossStyle}
                onChangeValue={item=> setPreviewImage(item?.toString() || 'image_1')}
            />
        </View>
        <TextInput
            style={styles.inputFont}
            textAlign="center"
            onChangeText={text=> setCaption(text)}
            placeholder="Caption"
            placeholderTextColor={theme === 'light' ? 'black' : 'white'}
        />
    </View>
    <View style={styles.positionFixer} />
    <TouchableOpacity onPress={()=> {
        setDoc(doc(getFirestore(), "posts", generateID(20)), {
            caption,
            previewImage,
            author: getAuth().currentUser!.displayName,
            authorUid: getAuth().currentUser!.uid,
            created_on: new Date(),
            likes: 0
        })
        navigation.navigate('Feed', {})
    }} style={styles.submit}>
        Submit
    </TouchableOpacity>
</View>
    )
}

export default CreatePost