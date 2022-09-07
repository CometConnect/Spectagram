import { Image, rem, Text, Theme, View } from "../../types"

export default class style {
    container: View
    droidSafeArea: View
    appTitle: View
    appIcon: View
    iconImage: Image
    appTitleTextContainer: View
    appTitleText: Text
    fieldsContainer: View
    previewImage: Image
    dropDownContainer: View
    dropDownContainerStyle: View
    dropDownStyle: View
    dropDownItemStyle: Text
    dropDownDownStyle: View
    dropDownLabelStyle: Text
    dropDownAcrossStyle: Text
    inputFont: View | Text
    positionFixer: View
    theme: View

    constructor(theme: Theme) {
        this.container = {
            flex: 1,
            backgroundColor: theme === 'light' ? 'white' : '#303030',
            justifyContent: 'center',
            alignItems: 'center'
        }
        this.droidSafeArea = {},
        this.appTitle = {
            flex: 1,
            flexDirection: 'row',
            marginTop: 2 * rem
        }
        this.appIcon = {
            marginRight: 2 * rem
        }
        this.iconImage = {
            width: 50,
            height: 50
        }
        this.appTitleTextContainer = {
            marginBottom: 1 * rem
        }
        this.appTitleText = {
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 2 * rem,
            textAlign: 'center'
        },
        this.fieldsContainer = {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
        this.previewImage = {
            width: 400,
            height: 300,
            borderRadius: 2 * rem
        }
        this.dropDownContainerStyle = {
            height: 40,
            borderRadius: 20,
        }
        this.dropDownStyle = {
            backgroundColor: 'transparent',
            borderColor: theme === 'light' ? 'black' : 'white',
            borderWidth: 2,
            borderRadius: 1 * rem
        }
        this.dropDownItemStyle = {
            justifyContent: 'flex-start'
        }
        this.dropDownDownStyle = {
            backgroundColor: '#2a2a2a'
        }
        this.dropDownLabelStyle = {
            color: theme === 'light' ? 'black' : 'white',
            paddingLeft: 2 * rem,
            paddingRight: 2 * rem,
            paddingTop: 0.5 * rem,
            paddingBottom: 0.5 * rem,
            textAlign: 'center'
        }
        this.dropDownAcrossStyle = {
            color: theme === 'light' ? 'black' : 'white',
        }
        this.inputFont = {
            marginTop: 5 * rem,
            borderRadius: 1 * rem,
            backgroundColor: theme === 'light' ? '#919191' : '#151515',
            paddingTop: 0.5 * rem,
            paddingBottom: 0.5 * rem,
            paddingLeft: 1 * rem,
            paddingRight: 1 * rem,
            borderWidth: 0,
            textAlign: 'center'
        }
        this.positionFixer = {
            marginTop: 15 * rem
        }
        this.theme = {
            position: 'absolute',
            top: 0,
            left: 0
        }
    }
}