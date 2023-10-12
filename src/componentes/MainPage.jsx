import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MainPage(props) {
    const {admin} = props;
    const [post, setPost] = useState([]);
    const [busqueda, setBusqueda] = useState();
    const [buscado, setBuscado] = useState([]);
  
  
    useEffect(()=> {
      let posteos = JSON.parse(localStorage.getItem('post'));
      if (posteos)  { setPost(posteos); 
      setBuscado(posteos);   }
    },[])
    
    const handleClick = (e) => {
      const index = e.target.id;
      console.log(index, typeof index);
      console.log(post.filter(p => p.id != index));
      const updatedPosts = post.filter(p => p.id != index);
      setPost(updatedPosts);
      setBuscado(updatedPosts);
      localStorage.setItem('post', JSON.stringify(updatedPosts));
    };

    const onChange = (e) => {
      setBusqueda(e.target.value);
      let array = post.filter((item) => {
        let s1 = item.tittle.toLowerCase();
        let s2 = e.target.value.toLowerCase();
        if (s1.startsWith(s2)) return s1;
        else return 0;
      })
    setBuscado(array);
    }

  return (
    <div className='Home'>
      <div className='Header'>
        <button className='botonHeader'><Link to="/">Home</Link></button>
        <button className='botonHeader'><Link to="/newpost">New Post</Link></button>
        <button className='botonHeader'><Link target="_blank" to="https://youtu.be/SIaFtAKnqBU?si=WKWWpEAL6vLIyWXM&t=2">About us</Link></button>
      </div>
      <br />
      <input type="text" value={busqueda} onChange={onChange} placeholder='Busca un blog'/>
      <h1>Bienvenido al blog.</h1>
      <div className='Posts'>
        {buscado.map((p) => 
          <div  key={p.id}>
            <a href={`/post/${p.id}`} >
              <div className='Post'>
              <h2><u>Titulo: {p.tittle}</u></h2>
              <h3>Hecho por: {p.name}</h3>
              </div>
            </a>
            {admin && <button id={p.id} onClick={handleClick}>Borrar</button>}
          </div> 
        )}
      </div>
    </div>

  )
}

export default MainPage;
