import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export type View = StyleProp<ViewStyle>
export type Text = StyleProp<TextStyle>
export type Image = StyleProp<ImageStyle>
export const rem = 16