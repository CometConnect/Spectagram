import { Image, rem, Text, Theme, View } from "../../types"

export default class style {
    container: View
    cardContainer: View
    authorContainer: View
    authorImageContainer: View
    profileImage: Image
    authorNameContainer: View
    authorNameText: Text
    postImage: Image
    captionContainer: View
    captionText: Text
    actionContainer: View
    likeButton: View
    likeText: Text

    constructor(theme: Theme) {
        this.container = {
            backgroundColor: theme === 'light' ? '#8c8c8c' : '#151515',
            borderRadius: 2 * rem,
            padding: '1rem',
            flex: 1,
        }
        this.cardContainer = {}
        this.authorContainer = {
            alignItems: 'center'
        }
        this.authorImageContainer = {}
        this.profileImage = {
            width: '50px',
            height: '50px',
            borderRadius: 2 * rem,
        }
        this.authorNameContainer = {}
        this.authorNameText = {
            color: theme === 'light' ? 'black' : 'white',
            textAlign: 'center'
        }
        this.postImage = {
            width: '10rem',
            height: '10rem',
        }
        this.captionContainer = {
            marginTop: rem
        }
        this.captionText = {
            color: theme === 'light' ? 'black' : 'white',
            textAlign: 'center',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
        }
        this.actionContainer = {
            backgroundColor: '#a83c32',
            borderRadius: rem,
            width: '40%'
        }
        this.likeButton = {
            alignSelf: 'center',
        }
        this.likeText = {
            color: theme === 'light' ? 'black' : 'white',
            textAlign: 'center',
        }
    }
}