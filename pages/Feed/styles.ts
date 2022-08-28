import { Platform, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Image, Text, View } from '../../types'

export default {
    container: {
        flex: 1,
        backgroundColor: '#303030',
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
        flex: 0.07,
        flexDirection: 'row',
    },
    appIcon: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: 'center',
    },
    appTitleText: {
        color: 'white',
        fontSize: RFValue(28),
    },
    cardContainer: {
        flex: 0.85,
    },
} as {
    container: View
    droidSafeArea: View
    appTitle: View
    appIcon: View
    iconImage: Image
    appTitleTextContainer: View
    appTitleText: Text
    cardContainer: View
}