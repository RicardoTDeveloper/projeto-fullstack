import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import socketIoClient from 'socket.io-client'
import api from '../../services/api'

import './style.css'

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => {

        const user_id = localStorage.getItem('user')
        const socket = socketIoClient('http://localhost:3333', {
            query: {user_id},
        });

        socket.on('booking_request', data => {
            console.log(data);
        })
       
    }, []);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard', {
                headers: {user_id}
            }) 

            setSpots(response.data)
            // console.log(response.data)
        }   

        loadSpots()

    }, [])

    return (
        <>
        
        <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>

                     <header style={{ backgroundImage: `url(${spot.thumbnail})` }} />
                     <strong>{spot.company}</strong>
                     <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>

                </li>
            ))}
        </ul>

        <Link to="/new">
            <button className="btn">Cadastrar novo spot</button>
        </Link>

        </>
    )
}