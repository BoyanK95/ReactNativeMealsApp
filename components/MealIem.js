import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation()

    function selectMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: id
        })
    }


    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>  pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}
            >
                <View>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}min.</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 7,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    innerContainer: {
        borderRadius: 7,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    },
});
