
import React, {useState, useEffect} from 'react'
import {SafeAreaView, ScrollView, Image , AsyncStorage} from 'react-native'

import styles from './list.scss'
import logo from '../../assets/logo.png'
import SpotList from '../../components/SpotList'
import Logout from '../../components/ButtonLogoff'

export default function List(){

    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.logo} source={logo}></Image>
            
            {techs.map(tech => <SpotList key={tech} tech={tech}></SpotList>)}

            <Logout></Logout>

           
        </ScrollView>
    );

}
