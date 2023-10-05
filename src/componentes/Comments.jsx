import React, { useState, useEffect } from "react";
import './NewPost.css'

const Comments = () => {
    const [name, setName] = useState("");
    const [coment, setComent] = useState("");
    const [comment,setComment] = useState([]);

    useEffect(()=> {
        let comentarios = JSON.parse(localStorage.getItem('comment'));
        if (comentarios) setComment(comentarios);
      },[])
      
      const handleSubmit = (e) => {
          e.preventDefault();
          const newComment = [{ name,coment}, ...comment];
          setComment(newComment);
          console.log(newComment);
          localStorage.setItem('comment', JSON.stringify(newComment));
          setComent('');
          setName('');
        };

        return (
            <div className='NewPost'>
                <div className='Header'>
                    <button className='botonHeader'><a href="/">Home</a></button>
                    <button className='botonHeader'><a href="/newpost">New Post</a></button>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="Form">
                        <input type="text" placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <textarea value={coment} cols="40" rows="10" onChange={(e) => setComent(e.target.value)}></textarea>
                        <button className="publicar" type='submit'>Publicar</button>
                    </form>
                </div>
            </div>
        );

}


export default Comments;