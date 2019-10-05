import React, {useEffect, useState} from 'react'
import {View,Text, FlatList, TouchableOpacity, Image} from 'react-native'
import {withNavigation} from 'react-navigation'

import styles from './componente.scss'
import api from '../services/api'

function SpotList({tech, navigation}) {

    const [spots, setSpots] = useState([])

    useEffect(() => {

        async function loadSpots() {
            const response = await api.get('/spots', {
                params: {tech}
            })

           setSpots(response.data)

           console.log(response.data);
        }

        loadSpots()

    }, [])

    function handleNavigate(id) {
        navigation.navigate('Book', {id})
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>

            <FlatList 
            data={spots}
            style={styles.list}
            keyExtractor={spot => spot._id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (

                <View style={styles.listItem}>
                    <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url.replace('localhost:3333', '8cacb6ab.ngrok.io') }}></Image>
                    <Text style={styles.company}>{item.company}</Text>
                    <Text style={styles.price}>{item.price ? `R$${item.price}` : 'GRATUITO'}</Text>
                    <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
                        <Text style={styles.buttonText}>Solicitar reserva</Text>
                    </TouchableOpacity>
                </View>

            )}

            />

        </View>
    )
}

export default withNavigation(SpotList);