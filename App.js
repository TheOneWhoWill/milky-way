import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
//import { auth } from './firebase/init';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

let welcomeOptions = {
	title: "Welcome",
	headerStyle: {
		backgroundColor: "#1d201f",
	},
	headerTitleStyle: {
		color: "#D1DEDE",
		fontWeight: "500",
		alignSelf: 'center'
	},
}

function App() {
	const { currentUser } = useAuth();

	return (
		<>
			{currentUser ? (
				<Stack.Navigator
					screenOptions={{headerShown: false}}
				>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{title: "Home"}}
					/>
				</Stack.Navigator>
			) : (
				<Stack.Navigator>
					<Stack.Screen
						name="Welcome"
						component={Welcome}
						options={welcomeOptions}
					/>
				</Stack.Navigator>
			)}
		</>
	);
}

export default <NavigationContainer><AuthProvider><App /></AuthProvider></NavigationContainer>