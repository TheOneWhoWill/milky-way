import { auth } from "../firebase/init";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState, createContext } from 'react';

const AuthContext = createContext()
const navigation = useNavigation();

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
		console.log(auth.currentUser)
	}

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setCurrentuser(user);
			setLoading(false);

			if(user) {
				navigation.navigate('Home');
			} else {
				navigation.navigate('Welcome');
			}
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