import { Text, View } from 'react-native';
import { MEALS } from '../data/DUMMY_DATA';
import { StyleSheet } from 'react-native';

function MealsOverviewScreen() {
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen</Text>
        </View>
    );
}

export default MealsOverviewScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})