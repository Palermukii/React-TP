import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';


const Post = () => {
    const [post, setPost] = useState({});
    const [comment,setComment] = useState([]);
    const {id} = useParams();
    useEffect(()=> {
        let comentarios = JSON.parse(localStorage.getItem('comment'));
        let posteos = JSON.parse(localStorage.getItem('post'));
        if (posteos) setPost(posteos.filter(p => p.id == id)[0]);
        if (comentarios) setComment(comentarios);
    },[]);
    
    const [ver, setVer] = useState(false);
    
    
    return (
        <div>
           <div>
                <h1><u>Titulo: {post.tittle}</u></h1>
                <Markdown remarkPlugins={[remarkGfm]}>{post.article}</Markdown>
                <h4>Autor: {post.name}</h4>
           </div>
           <button onClick={()=>setVer(!ver)}>{ver? "Dejar de ver" : "Ver comentarios"}</button>
           <button><a href="/comments">Comentar</a></button>
           {ver && (
            <div>
                {comment.map((c,i)=>
                <div key={i}>
                    <h3>Usuario: {c.name}</h3>
                    <Markdown remarkPlugins={[remarkGfm]}>{c.coment}</Markdown>
                </div>
                )}
            </div>
           )}
        </div>
    );
}

export default Post;