import React from 'react'
import {View, KeyboardAvoidingView, Platform ,Image ,Text, TextInput, TouchableOpacity} from 'react-native'

import logo from '../../assets/logo.png'
import styles from './login.scss';

export default function Login(){

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
                />
                
                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                style={styles.input}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )

}

