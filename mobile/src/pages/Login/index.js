import React, {useState, useEffect} from 'react'
import {View, KeyboardAvoidingView, AsyncStorage ,Image ,Text, TextInput, TouchableOpacity} from 'react-native'

import api from '../../services/api';

import logo from '../../assets/logo.png'
import styles from './login.scss';

export default function Login({ navigation }){

    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('List')
            }
        })
    }, []);

    async function handleSubmit() {
        // email, techs

        const response = await api.post('/sessions', {
            email
        })

        const {_id} = response.data

        await AsyncStorage.setItem('user', _id)
        await AsyncStorage.setItem('techs', techs)

        navigation.navigate('List');

    }
    
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo}></Image>
            
            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL *</Text>
                <TextInput 
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                />
                
                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                style={styles.input}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={techs}
                onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )

}

