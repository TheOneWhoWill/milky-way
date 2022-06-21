import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
	return (
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{headerTitleAlign: 'center'}}
				>
					<Stack.Screen
						name="Welcome"
						component={Welcome}
						options={{
							title: "Welcome",
							headerStyle: {
								backgroundColor: "#1d201f",
							},
							headerTitleStyle: {
								color: "#D1DEDE",
								fontWeight: "500",
								alignSelf: 'center'
							},
						}}
					/>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{title: "Home"}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
	);
}

export default App