import { Text, View } from 'react-native';

function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;

    return (
        <View>
            {/* <Image /> */}
            <Text>Title {mealId}</Text>
            <View>
                <Text>Details</Text>
            </View>
        </View>
    );
}

export default MealDetailsScreen;
