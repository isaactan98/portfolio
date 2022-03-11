import firebase from "firebase/compat/app";
export default function ({ redirect }) {
    firebase.auth().onAuthStateChanged((user) => {
        setTimeout(() => {
            if (!user) {
                return redirect({ name: "admin-login" });
            }
        }, 3000)
    })
}