import ContactUsScreen from '../form/screens/ContactUsScreen';
import MainScreen from '../main/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Linking from './LinkingConfiguration'
// import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
	Home: { foo: string; onBar: () => void } | undefined;
	ContactUsScreen: undefined;
};

// const RootStack = createStackNavigator<RootStackParamList>();

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const Stack = createNativeStackNavigator<RootStackParamList>();

function NavigatorContainer() {

	return (
		<NavigationContainer linking={Linking}>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={MainScreen} />
				<Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default NavigatorContainer;
