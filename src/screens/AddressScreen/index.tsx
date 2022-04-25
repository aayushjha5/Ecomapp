import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';

// returns an array containing country along with their country-code
const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, SetAddressError] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    // on checkout errors
    const onCheckout = () => {

        if (addressError) {
            Alert.alert('Fix all field erros before checkout');
            return;
        }
        if (!fullname) {
            Alert.alert('Please fill in the fullname field');
            return;
        }
        if (!phone) {
            Alert.alert('Please enter full phone name');
            return;
        }
        if (!city) {
            Alert.alert('Please enter City name');
            return;
        }
        if (!state) {
            Alert.alert('Please enter State name');
            return;
        }
    }

    // validate the address
    const validateAddress = () => {
        if (address.length < 3) {
            SetAddressError('Address is too short');
        }
    }


    return (
        <KeyboardAvoidingView 
         behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS ==='ios' ? 10 : 0}>
            <ScrollView style={styles.root}>
                {/* dropdown having country names */}
                <View style={styles.row}>
                    <Picker onValueChange={setCountry} selectedValue={country}>
                        {countries.map(country => (
                            <Picker.Item value={country.code} label={country.name} />
                        ))}
                    </Picker>
                </View>

                {/* full name */}
                <View style={styles.row}>
                    <Text style={styles.label}>Full name </Text>
                    <TextInput value={fullname} onChangeText={setFullname} style={styles.input} placeholder="First and Last Name" />

                </View>

                {/* phone number */}
                <View style={styles.row}>
                    <Text style={styles.label}>Phone number </Text>
                    <TextInput value={phone} style={styles.input} placeholder="Enter Phone number" maxLength={10} keyboardType={'phone-pad'} onChangeText={setPhone} />
                </View>

                {/* Address */}
                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput value={address}
                        onEndEditing={validateAddress}
                        onChangeText={(text) => {
                            setAddress(text);
                            SetAddressError('')
                        }}
                        style={styles.input} placeholder="Apt, Street address " />
                    {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
                </View>

                {/* city */}
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput value={city} onChangeText={setCity} style={styles.input} placeholder="City" />
                </View>

                {/* State */}
                <View style={styles.row}>
                    <Text style={styles.label}>State</Text>
                    <TextInput value={state} onChangeText={setState} style={styles.input} placeholder="State" />
                </View>

                {/* Checkout button */}
                <Button text='Checkout' onPress={onCheckout} />
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export default AddressScreen;