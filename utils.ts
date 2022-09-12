import { User } from "firebase/auth"
import { getDoc, doc, getFirestore } from "firebase/firestore"
import { Theme } from "./types"

export function getTheme(user: User | null, setTheme: Function): void {
    getDoc(doc(getFirestore(), "users", user?.uid || 'qwerty'))
    .then(docSnap=> {
        if(!docSnap.exists()) setTheme('light')
        else setTheme(docSnap.data().theme as Theme)
    })
}