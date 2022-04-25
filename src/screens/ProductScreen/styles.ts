import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        padding: 10,
        backgroundColor: 'white',
    },
    title: {},
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 15,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    desc: {
        marginVertical: 10,
        lineHeight: 19,
    },

});

export default  styles;