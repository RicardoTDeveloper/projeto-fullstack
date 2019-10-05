
import React, {useState, useEffect} from 'react'
import {SafeAreaView, ScrollView, Image , AsyncStorage} from 'react-native'

import styles from './list.scss'
import logo from '../../assets/logo.png'
import SpotList from '../../components/SpotList'


export default function List(){

    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim())
            setTechs(techsArray)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo}></Image>
            
            <ScrollView>
            {techs.map(tech => <SpotList key={tech} tech={tech}></SpotList>)}
            </ScrollView>
           
        </SafeAreaView>
    );

}
