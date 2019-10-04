import React, {useState} from 'react'
import api from '../../services/api'


export default function Login({history}) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
  
      const response =  await api.post('/sessions', { email })
  
      const {_id} = response.data
  
      localStorage.setItem('user', _id);

      history.push('/dashboard')
      
    }

    return (
        <>
        <p>Ofereça spots para programadores e encontre talentos para sua empresa</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="">E-mail</label>
          <input type="text" value={email} onChange={event => setEmail(event.target.value)} id="email" placeholder="Seu melhor e-mail"/>


          <button className="btn" type="submit">Entrar</button>
        </form>
        </>
    )
}