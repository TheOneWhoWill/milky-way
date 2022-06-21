import { auth } from "./init";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

function loginUser(email, password) {
	return signInWithEmailAndPassword(auth, email, password);
}

function createUser(email, password) {
	//
}

function logOut() {
	signOut(auth)
	console.log(auth.currentUser)
}

const currentUser = auth.currentUser;

export { loginUser, createUser, currentUser, logOut }