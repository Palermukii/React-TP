import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import MainPage from './componentes/MainPage';
import NewPost from './componentes/NewPost';
import Admin from './componentes/Admin';
import Post from './componentes/Post';

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage admin={admin} />} />
        <Route path="/post/:id" element={<Post/>} />
        <Route
          path="/admin"
          element={<Admin admin={admin} setAdmin={setAdmin} />}
        />
        <Route path="/newpost" element={<NewPost/>} />
      </Routes>
    </div>
  );
}
export default App;

