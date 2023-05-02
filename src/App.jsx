import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { supabase } from './client';



function App() {
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortedByTime, setSortedByTime] = useState(true);

  useEffect(() => {
    let fetchPosts;
    if (sortedByTime) {
      fetchPosts = async () => {
        const { data, error } = await supabase.from("Posts")
          .select()
          .order("created_at", { ascending: false });

        setPosts(data);
      }
    } else {
      fetchPosts = async () => {
        const { data, error } = await supabase.from("Posts")
          .select()
          .order("num_likes", { ascending: false });

        setPosts(data);
      }
    }
    fetchPosts();
  }, [posts])

  return (
    <div className="App">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className='outlet'>
        <Outlet context={[searchInput, posts, sortedByTime, setSortedByTime]} />
      </div>
    </div>
  )
}

export default App
