import React, { useState } from 'react'
import { SafeAreaView, Text, Alert, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'

import styles from './book.scss'
import api from '../../services/api'

export default function Book({ navigation }) {

    const [date, setDate] = useState('')
    const spotID = navigation.getParam('id')
    
    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user')

        console.log(user_id);
        console.log(spotID);
        
        const teste = await api.post(`/spots/${spotID}/bookings`, {
            date
        }, {
            headers: {user_id}
        })

        console.log(teste);

        Alert.alert('Solicitação de reserva enviada.');

        navigation.navigate('List');
    }   

    function handleCancel() {
        navigation.navigate('List');
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data você quer reservar?"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="words"
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
