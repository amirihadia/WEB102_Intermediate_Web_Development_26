import './App.css';
import { useRoutes, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostPage from './pages/PostPage'

const App = () => {

  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/new", element: <CreatePost /> },
    { path: "/edit/:id", element: <EditPost /> },
    { path: "/post/:id", element: <PostPage /> }
  ])

  return (
    <div className="App">
      <div className="header">
        <h1>🎵 MusicHub</h1>

        <Link to="/"><button>Home</button></Link>
        <Link to="/new"><button>Create Post</button></Link>
      </div>

      {element}
    </div>
  )
}

export default App