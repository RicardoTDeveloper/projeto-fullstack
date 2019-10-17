import React from 'react'
import { View,Text, TouchableOpacity, AsyncStorage } from 'react-native'
import { withNavigation } from 'react-navigation'

import styles from './button.scss'

function Logout({ navigation }) {

    async function Sair() {

        await AsyncStorage.setItem('user', '')

        navigation.navigate('Login')
    }

    return (

        <View>
          <TouchableOpacity onPress={Sair} style={styles.button}>
            <Text style={styles.buttonText}>
                Logout
            </Text> 
          </TouchableOpacity>
        </View>
    )
}

export default withNavigation(Logout);