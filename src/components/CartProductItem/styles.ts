import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    title: {
        fontSize: 18,
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 15,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    quantityContainer: {
        margin: 5,
    }
});

export default styles;