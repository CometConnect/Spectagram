import { Image, rem, Text, View } from "../../types"

export default {
    container: {
        flex: 1,
        backgroundColor: '#303030',
        justifyContent: 'center',
        alignItems: 'center'
    },
    droidSafeArea: {},
    appTitle: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 2 * rem
    },
    appIcon: {
        marginRight: 2 * rem
    },
    iconImage: {
        width: 50,
        height: 50
    },
    appTitleTextContainer: {
        marginBottom: 1 * rem
    },
    appTitleText: {
        color: 'white',
        fontSize: 2 * rem,
        textAlign: 'center'
    },
    fieldsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    previewImage: {
        width: 400,
        height: 300,
        borderRadius: 2 * rem
    },
    dropDownContainerStyle: {
        height: 40,
        borderRadius: 20,
    },
    dropDownStyle: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 1 * rem
    },
    dropDownItemStyle: {
        justifyContent: 'flex-start'
    },
    dropDownDownStyle: {
        backgroundColor: '#2a2a2a'
    },
    dropDownLabelStyle: {
        color: 'white',
        paddingLeft: 2 * rem,
        paddingRight: 2 * rem,
        paddingTop: 0.5 * rem,
        paddingBottom: 0.5 * rem,
        textAlign: 'center'
    },
    dropDownAcrossStyle: {
        color: 'white'
    },
    inputFont: {
        marginTop: 5 * rem,
        borderRadius: 1 * rem,
        backgroundColor: '#151515',
        paddingTop: 0.5 * rem,
        paddingBottom: 0.5 * rem,
        paddingLeft: 1 * rem,
        paddingRight: 1 * rem,
        borderWidth: 0,
        color: 'white',
        textAlign: 'center'
    },
    positionFixer: {
        marginTop: 15 * rem
    },
} as {
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
}