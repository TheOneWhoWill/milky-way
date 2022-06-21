import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { StyleSheet, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';

function Welcome({ navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { login, currentUser } = useAuth();

	if(currentUser) {
		navigation.navigate('Home')
	}

	function handleLogin() {
		login(username, password)
			.catch(() => {
				alert("Failed to Log in. Please check your email or password.")
			})
	}

	return (
		<View style={styles.container}>
			<View style={styles.authOptions}>
				<Text style={styles.loginText}>Log in</Text>
				<TextInput style={styles.input} placeholder="Email Address" onChangeText={text => setUsername(text)} />
				<TextInput style={styles.input} placeholder="Password" autoComplete='password' secureTextEntry={true} onChangeText={text => setPassword(text)} />
				<TouchableOpacity style={styles.loginBtn} activeOpacity={0.6} onPressOut={handleLogin}>
					<Text style={styles.loginBtnText}>Submit</Text>
				</TouchableOpacity>
				<Text style={styles.registerLink}>New to Milky Way? <Text style={styles.underline}>Register</Text></Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { 
		flex: 1,
		padding: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: '#2F2D2E',
	},
	authOptions: {
		width: 350,
		padding: 20,
		borderRadius: 14,
		backgroundColor: "#046295",
	},
	loginText: {
		fontSize: 24,
		color: "#FFF",
		letterSpacing: 2,
		fontWeight: "800"
	},
	input: {
		height: 50,
		color: "#FFF",
		fontSize: 15,
		marginTop: 15,
		paddingLeft: 10,
		borderRadius: 10,
		backgroundColor: "#06517A"
	},
	loginBtn: {
		height: 50,
		marginTop: 15,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#008AC9"
	},
	loginBtnText: {
		fontSize: 23,
		color: "#fff",
		fontWeight: "500",
	},
	registerLink: {
		color: "#fff",
		marginTop: 10
	},
	underline: {
		textDecorationLine: "underline",
		textDecorationColor: "#fff"
	}
});

export default Welcome;