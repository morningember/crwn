import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC2wPd2eYsh9LeMmwbfE82BB-Ob-nBe5fI",
    authDomain: "crown-pjt.firebaseapp.com",
    projectId: "crown-pjt",
    storageBucket: "crown-pjt.firebasestorage.app",
    messagingSenderId: "214275900586",
    appId: "1:214275900586:web:fe75f77765933c392cfcd3",
    measurementId: "G-KPR32QHTZC"
};

const app = initializeApp(config)
export const auth = getAuth(app)
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => signInWithPopup(auth, provider)

