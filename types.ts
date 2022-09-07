import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import { Post } from "./temp_posts";

export type View = StyleProp<ViewStyle>
export type Text = StyleProp<TextStyle>
export type Image = StyleProp<ImageStyle>
export const rem = 16
export type Theme = 'light' | 'dark'

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
    addListener(type: any, callback: any): void
    canGoBack(): void
    closeDrawer(): void
    dispatch(thunk: any): void
    getId(): void
    getParent(id: any): void
    getState(): void
    goBack(): void
    isFocused(): void
    jumpTo(): void
    navigate(route: string, params: Object): void
    openDrawer(): void
    pop(): void
    popToTop(): void
    push(): void
    removeListener(type: any, callback: any): void
    replace(): void
    reset(): void
    setOptions(options: any): void
    setParams(): void
    toggleDrawer(): void
}