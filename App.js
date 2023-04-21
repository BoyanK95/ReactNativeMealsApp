import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: '#3a2215' },
                        headerTintColor: 'white',
                        contentStyle: { backgroundColor: '#5c3b20r25' }
                    }}
                >
                    <Stack.Screen
                        name='MealsCategories'
                        component={CategoriesScreen}
                        options={{
                            title: 'All Categories',
                            headerStyle: { backgroundColor: '#3a2215' },
                            headerTintColor: 'white',
                            contentStyle: { backgroundColor: '#5c3b20r25' }
                        }}
                    />
                    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {}
});
