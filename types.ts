import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import { Post } from "./temp_posts";

export type View = StyleProp<ViewStyle>
export type Text = StyleProp<TextStyle>
export type Image = StyleProp<ImageStyle>
export const rem = 16

export interface Props {
    navigation: nav
}
export type State = {}
export interface nav {
    navigation: {}
    route:      {
        key:    string
        name:   string
        params: Post
    },
    navigate(route: string, params: Object): void
}