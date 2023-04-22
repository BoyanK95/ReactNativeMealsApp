import { FlatList, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/DUMMY_DATA';
import { StyleSheet } from 'react-native';
import MealItem from '../components/MealIem';
import { useLayoutEffect } from 'react';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity
        };

        return <MealItem {...mealItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});
