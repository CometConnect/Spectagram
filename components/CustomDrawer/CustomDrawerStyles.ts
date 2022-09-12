import { Text, Theme, View } from "../../types";

export default class style {
    container: View
    content: View | Text

    constructor(theme: Theme) {
        this.container = {
            backgroundColor: theme === 'light' ? "white" : "#606060"
        }
        this.content = {
            marginVertical: 5,
            backgroundColor: theme === 'light' ? "#909090" : "#303030",
            color: theme === 'light' ? "white" : "black"
        }
    }
}