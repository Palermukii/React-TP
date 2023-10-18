import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewPost.css';

const Admin = props => {
    const { admin, setAdmin } = props;
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (password === "123") { 
            setAdmin(true);
        }
    }

    return (
        <div>
            {admin ? (
                <div className='Home'>
                   <div className='Header'>
        <button className='botonHeader'><Link className='Anchor' to="/">Home</Link></button>
        <button className='botonHeader'><Link className='Anchor' to="/newpost">New Post</Link></button>
        <button className='botonHeader'><Link className='Anchor' target="_blank" to="https://youtu.be/SIaFtAKnqBU?si=WKWWpEAL6vLIyWXM&t=2">About us</Link></button>
      </div>
                    <h1>Ya sos admin</h1>
                </div>
            ) : (
                <div className='home'>
                    <div className='home2'>
                    <h2 id='inciaSesion'>Inicia sesión como admin</h2>
                    <img className='incognito' src="https://sandstormit.com/wp-content/uploads/2021/06/incognito-2231825_960_720-1.png" alt="Incognito" />
                    </div>
                    <form onSubmit={handleSubmit} className='Form'>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Contraseña'
                        />
                        <button className='publicar' type='submit'>Ingresar</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Admin;