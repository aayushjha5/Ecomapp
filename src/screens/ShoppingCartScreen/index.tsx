import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import products from '../../data/cart';
import { useNavigation } from '@react-navigation/native';

const ShoppingCartScreen = () => {
const navigation = useNavigation();

const onCheckout = () => {
    navigation.navigate('Address');
}


    // calculating total price
    const totalPrice = products.reduce((summedPrice, product) =>
        summedPrice + product.item.price * product.quantity
        , 0);


    return (
        <View style={styles.page} >
            {/* subtotal and checkout  */}
            <View>
                <Text style={styles.subtotalText}>Subtotal ({products.length} items):
                    <Text style={styles.subtotalAmount}> ₹{totalPrice.toFixed(2)}</Text>
                </Text>
                <Button
                    text="Proceed to Checkout"
                    onPress= {onCheckout}
                    containerStyles={{ backgroundColor: '#e3b024' }} />
            </View>

            {/* Render Product Items  */}
            <FlatList
                data={products}
                renderItem={
                    ({ item }) =>
                        //    render product item
                        <CartProductItem cartItem={item} />
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    subtotalText: {
        fontSize: 15,
    },
    subtotalAmount: {
        color: '#e47911',
        fontWeight: 'bold',
    },
});

export default ShoppingCartScreen;
