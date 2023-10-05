import './App.css'
import { useState, useEffect } from 'react';
// Cambiar variables posteos y post


function App() {
  const [post, setPost] = useState([]);
  const [busqueda, setBusqueda] = useState();
  const [buscado, setBuscado] = useState([]);
  useEffect(()=> {
    let posteos = JSON.parse(localStorage.getItem('post'));
    if (posteos)  { setPost(posteos); 
    setBuscado(posteos);   }
  },[])

const onChange = (e) => {
  setBusqueda(e.target.value);
  let array = post.filter((item) => {
  let s1 = item.tittle.toLowerCase();
  let s2 = e.target.value.toLowerCase();
  if (s1.startsWith(s2)) return s1;
  else return 0;
});
setBuscado(array);
  
}

return (
  <div className='Home'>
    <div className='Header'>
      <button className='botonHeader'><a href="/">Home</a></button>
      <button className='botonHeader'><a href="/newpost">New Post</a></button>
      <button className='botonHeader'><a target="_blank" href="http://www.tecnica35.com.ar/">About us</a></button>
    </div>
    <br />
    <input type="text" value={busqueda} onChange={onChange}/>
    <h1>Bienvenido al blog.</h1>
      <div className='Posts'>
        {buscado.map((p) => 
        <a href={`/post/${p.id}`} key={p.id}>
          <div className='Post' >
            <h2><u>Titulo: {p.tittle}</u></h2>
            <h3>Hecho por: {p.name}</h3>
          </div> 
      </a>)}
    </div>
  </div>
)
}

export default App
