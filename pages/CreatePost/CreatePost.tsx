import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { getDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { RFValue } from 'react-native-responsive-fontsize'
import DropDownPicker from 'react-native-dropdown-picker'
import style from './styles'
import { Theme } from '../../types'

export default () => {
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
        {/* <ScrollView> */}
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
        {/* </ScrollView> */}
    </View>
    <View style={styles.positionFixer} />
</View>
    )
}