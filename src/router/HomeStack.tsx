import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string,
  setSearchValue: () => void;
}

const HeaderComponent = ({searchValue,setSearchValue}:HeaderComponentProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#22e3dd' }}>
      <View style={{ margin: 10, backgroundColor: 'white', padding: 5,flexDirection: 'row', alignItems: 'center', borderRadius: 5, borderColor: 'black'}}>
        <Feather name='search' size={20} />
        <TextInput style={{ height: 40, marginLeft: 10 }} placeholder="Search..." value={searchValue} onChangeText={setSearchValue} />
      </View>
    </SafeAreaView>
  )
}

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator screenOptions={{
      header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
    }}>
      <Stack.Screen 
       name="HomeScreen"
        options={{ title: 'Home' }} 
        >{() => <HomeScreen searchValue={searchValue}/>}</Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  )
}

export default HomeStack;