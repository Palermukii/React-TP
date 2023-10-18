import '../App.css'
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';


const NewPost = () => {
const [name, setName] = useState("");
const [tittle, setTittle] = useState("");
const [article, setArticle] = useState("");
const [post, setPost] = useState([]);


useEffect(()=> {
  let posteos = JSON.parse(localStorage.getItem('post'));
  if (posteos) setPost(posteos);
},[])

const handleSubmit = (e) => {
    e.preventDefault();
    const newPosts = [{ name, tittle, article, id: Math.floor(Math.random() * 100000000)}, ...post];
    setPost(newPosts);
    console.log(newPosts);
    localStorage.setItem('post', JSON.stringify(newPosts));
    setTittle('');
    setArticle('');
    setName('');
  };


  return (
    <div className='NewPost'>
      <div className='Header'>
        <button className='botonHeader'><Link className='Anchor' to="/">Home</Link></button>
        <button className='botonHeader'><Link className='Anchor' to="/newpost">New Post</Link></button>
        <button className='botonHeader'><Link className='Anchor' target="_blank" to="https://youtu.be/SIaFtAKnqBU?si=WKWWpEAL6vLIyWXM&t=2">About us</Link></button>
      </div>
      <div>
      <h1>¡Crea tu propio Post!</h1>
    <form onSubmit={handleSubmit} className="Form">
      <input className='input' 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <input className='input'
        type="text"
        value={tittle}
        id="titulo"
        onChange={(e) => setTittle(e.target.value)}

        placeholder="Título"
      />
      <textarea value={article} id="Articulo" cols="40" rows="10" onChange={(e) => setArticle(e.target.value)}></textarea>
      <button className="publicar" type='submit'>Publicar</button>
    </form>

    
  </div>
    </div>
);
};

export default NewPost;
