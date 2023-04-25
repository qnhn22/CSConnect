import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   let fetchPosts;
  //   if (sortedByTime) {
  //     fetchPosts = async () => {
  //       const { data, error } = await supabase.from("Posts")
  //         .select()
  //         .order("created_at", { ascending: false });

  //       setPosts(data);
  //     }
  //   } else {
  //     fetchPosts = async () => {
  //       const { data, error } = await supabase.from("Posts")
  //         .select()
  //         .order("num_likes", { ascending: false });

  //       setPosts(data);
  //     }
  //   }
  //   fetchPosts();
  // }, [posts])

  return (
    <div className="App">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className='outlet'>
        <Outlet context={[searchInput, setSearchInput]} />
      </div>
    </div>
  )
}

export default App
