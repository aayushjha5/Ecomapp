import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {

    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();
    console.log(route.params);

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
                from ₹{product.price}
                {product.oldPrice && <Text style={styles.oldPrice}>₹{product.oldPrice}</Text>}
            </Text>

            {/* Desc */}
            <Text style={styles.desc}>{product.description}</Text>

            {/* Quantity */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            {/* Buttons */}
            <Button
                text={'Add To Cart'}
                onPress={() => { console.warn('Buy Now') }}
                containerStyles={{ backgroundColor: '#e3c905' }}
            />
            <Button text={'Buy Now'} onPress={() => { console.warn('Buy Now') }} />

        </ScrollView>
    )
}

export default ProductScreen;