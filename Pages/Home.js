import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { StyleSheet, View, FlatList, Button } from 'react-native';

function Home({ navigation }) {
	const { logOut } = useAuth();

	return (
		<View style={styles.container}>
			<Button title="LogOut" onPress={logOut} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { 
		flex: 1,
		padding: 0,
		height: 200,
		backgroundColor: '#8b42eb',
	}
});

export default Home