import React, { useState, useMemo } from 'react'
import api from '../../services/api'


import camera from '../../assets/camera.svg'
import './style.css'

export default function New({ history }) {
    const [thumbnail, setThumnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    
    const [previewimg, setPreviewimg] = useState('');
    
    // Image tratamento
    const preview = useMemo(() => {

        return previewimg ? URL.createObjectURL(previewimg) : null;

    }, [previewimg])


    function handleImageChange(imageaqui) {

        setPreviewimg(imageaqui)

        let file = imageaqui;
        let reader = new FileReader();
        reader.readAsDataURL(file);

       reader.onloadend = function () {
        setThumnail(reader.result)
        
        }

      }

    async function handleSubmit(event) {
        event.preventDefault();

        // const data = new FormData();
        const user_id = localStorage.getItem('user')

        // data.append('thumbnail', thumbnail)
        // data.append('company', company)
        // data.append('techs', techs)
        // data.append('price', price)

        await api.post('/spots', {
            thumbnail: thumbnail,
            company: company,
            techs: techs,
            price: price,
        }, {
            headers: { user_id }
        })

        history.push('/dashboard')

    }

    return (
        <form onSubmit={handleSubmit}>

            <label id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}  >
                <input type="file" onChange={event => handleImageChange(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input
                type="text"
                placeholder="Nome da empresa"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgulas)</span></label>
            <input
                type="text"
                placeholder="Exemplo: NodeJS, ReactJS"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">VALOR DA DIARIA * <span>(em branco para GRATUITO)</span></label>
            <input
                type="text"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>

        </form>
    )
}