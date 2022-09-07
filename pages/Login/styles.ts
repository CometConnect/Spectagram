import { Text, Theme, View } from "../../types"

export default class style {
    container: View
    text: Text
    theme: View
    
    constructor(theme: Theme) {
        this.container = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme === 'light' ? 'white' : '#303030'
        }
        this.text = {
            color: theme === 'light' ? 'black' : 'white'
        }
        this.theme = {
            position: 'absolute',
            top: 0,
            left: 0
        }
    }
}