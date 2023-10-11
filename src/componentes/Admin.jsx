import React, { useState } from 'react'
import MainPage from 'MainPage';

export const Admin = props => {
    const {admin} = props;
    const [password, setPaswword] = useState('');

    const Confirmar = (e) => {
        e.preventDeFault();
        if(password == 123) {
            setAdmin(true);

        }
    }

  return (
    <div>

        <h2>Inicia sesion</h2>

        <form action="submit">
            <input type="password" onChange={(e) => setPaswword(password)} value={password} id="" placeholder='Contraseña'/>
            <button className="" type='submit'>Ingresar</button>
        </form>
    </div>
  )
}
