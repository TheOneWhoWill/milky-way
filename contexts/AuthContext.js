import '../firebase/init.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState, createContext } from 'react'

const AuthContext = createContext()
const auth = getAuth();

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true)
	const [currentUser, setCurrentuser] = useState(null)

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password)
	}

	function logout() {
		signOut(auth)
			.catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setCurrentuser(user);
			setLoading(false);
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const value = {
		currentUser,
		login,
		logout
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}