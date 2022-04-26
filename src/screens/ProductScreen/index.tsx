import { Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from './styles';
// import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { useRoute } from '@react-navigation/native';
import { Product, CartProduct } from '../../models';
import { DataStore , Auth} from 'aws-amplify';

const ProductScreen = () => {
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();

    useEffect(() => {
        if (!route.params?.id) {
            return;
        }
        DataStore.query(Product, route.params?.id).then(setProduct)
    }, []);

    useEffect(() => {
        if (product?.options) {
            setSelectedOption(product.options[0]);
        }
    }, [product]);
    
    const onAddToCart = async () => {
        const userData = await Auth.currentAuthenticatedUser();
        if(!product || !userData) {
            return;
        }

        const newCartProduct = new CartProduct({
            userSub: userData.attributes.sub,
            quantity,
            option: selectedOption || null,
            productID: product.id,
        });
        DataStore.save(newCartProduct);
    };

    if (!product) {
        return <ActivityIndicator />
    }
    return (
        <ScrollView style={styles.root}>
            {/* Title */}
            <Text style={styles.title}>{product.title}</Text>

            {/* Image Caraousel */}
            <ImageCarousel images={product.images} />

            {/* Option Selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
            >
                {product.options.map(option => (
                    <Picker.Item label={option} value={option} />))}
            </Picker>

            {/* Price */}
            <Text style={styles.price}>
                from ₹{product.price.toFixed(2)}
                {product.oldPrice && <Text style={styles.oldPrice}>₹{product.oldPrice.toFixed(2)}</Text>}
            </Text>

            {/* Desc */}
            <Text style={styles.desc}>{product.description}</Text>

            {/* Quantity */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            {/* Buttons */}
            <Button
                text={'Add To Cart'}
                onPress={onAddToCart}
                containerStyles={{ backgroundColor: '#e3c905' }}
            />
            <Button text={'Buy Now'} onPress={() => { console.warn('Buy Now') }} />

        </ScrollView>
    )
}

export default ProductScreen;