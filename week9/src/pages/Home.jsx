import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { Link } from 'react-router-dom'
import '../pages/Home.css'

const Home = () => {

    const [posts, setPosts] = useState([])
    const [sort, setSort] = useState("created_at")
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchPosts = async () => {
        let query = supabase
            .from('posts')
            .select('*')
            .order(sort, { ascending: false })

        if (search) {
            query = query.ilike('title', `%${search}%`)
        }

        const { data } = await query
        setPosts(data)
        }

        fetchPosts()
    }, [sort, search])

    return (
        <div>

        <input
            placeholder="Search by title..."
            onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setSort("created_at")}>Sort by Time</button>
        <button onClick={() => setSort("upvotes")}>Sort by Upvotes</button>

        <div className="feed">
        {posts.map(post => (
            <div className="musicCard" key={post.id}>
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>

            <p>{new Date(post.created_at).toLocaleString()}</p>
            <p>👍 {post.upvotes}</p>
            </div>
        ))}
        </div>

        </div>
    )
}

export default Home