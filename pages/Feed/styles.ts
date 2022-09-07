import { Platform, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Image, rem, Text, Theme, View } from '../../types'

export default class style {
    container: View
    droidSafeArea: View
    appTitle: View
    appIcon: View
    iconImage: Image
    appTitleTextContainer: View
    appTitleText: Text
    cardContainer: View
    flatlist: View
    theme: View

    constructor(theme: Theme) {
        this.container = {
            flex: 1,
            backgroundColor: theme === 'light' ? 'white' : '#303030',
            alignItems: 'center',
        }
        this.droidSafeArea = {
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
        }
        this.appTitle = {
            flex: 0.07,
            flexDirection: 'row',
            width: '40%',
        }
        this.appIcon = {
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
        }
        this.iconImage = {
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
        }
        this.appTitleTextContainer = {
            flex: 0.8,
            justifyContent: 'center',
        }
        this.appTitleText = {
            color: theme === 'light' ? 'black' : 'white',
            fontSize: RFValue(28),
        }
        this.cardContainer = {
            flex: 0.85,
            justifyContent: 'center',
            alignItems: 'center',
        }
        this.flatlist = {
            marginTop: 2*rem,
            width: '100%',
        }
        this.theme = {
            position: 'absolute',
            top: 0,
            left: 0
        }
    }
}