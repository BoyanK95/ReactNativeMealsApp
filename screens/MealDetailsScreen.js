import { Text, View, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/DUMMY_DATA';
import MealDetails from '../components/MealDetails';

function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
            <Text>Ingiridients</Text>
            {selectedMeal.ingredients.map(ingredient => {
                console.log(ingredient);
                <Text key={ingredient}>{ingredient}</Text>
            } )}
            <Text>Steps</Text>
            {selectedMeal.steps.map(step => {
                console.log(step);
                <Text key={step}>{step}</Text>
            })}
        </View>
    );
}

export default MealDetailsScreen;


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
})