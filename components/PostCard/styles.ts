import { Image, rem, Text, View } from "../../types"

export default {
    container: {
        backgroundColor: '#151515',
        borderRadius: 2 * rem,
        padding: '1rem',
        width: '90%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {},
    authorContainer: {
        alignItems: 'center'
    },
    authorImageContainer: {},
    profileImage: {
        width: '50px',
        height: '50px',
        borderRadius: 2 * rem,
    },
    authorNameContainer: {},
    authorNameText: {
        color: 'white',
        textAlign: 'center'
    },
    postImage: {
        width: '10rem',
        height: '10rem',
    },
    captionContainer: {
        marginTop: rem
    },
    captionText: {
        color: 'white',
        textAlign: 'center',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
    },
    actionContainer: {
        backgroundColor: '#a83c32',
        borderRadius: rem,
        width: '40%'
    },
    likeButton: {
        alignSelf: 'center',
    },
    likeText: {
        color: 'white',
        textAlign: 'center',
    }
} as {
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
}