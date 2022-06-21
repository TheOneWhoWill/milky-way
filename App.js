import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import { currentUser } from './firebase/functions';
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
	return (
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{headerTitleAlign: 'center'}}
				>
					{currentUser ? 
						<Stack.Screen
							name="Home"
							component={Home}
							options={{title: "Home"}}
						/>
						: 
						<Stack.Screen
							name="Welcome"
							component={Welcome}
							options={welcomeOptions}
						/>
					}
				</Stack.Navigator>
			</NavigationContainer>
	);
}

export default App