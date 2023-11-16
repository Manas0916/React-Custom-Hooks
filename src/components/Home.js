import React from 'react';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/useLocalStorage';

const Home = () => {
  // useFetch code
    const url = "https://api.spaceflightnewsapi.net/v4/articles/?format=json";
    // const url = 'http://localhost:3500/task';
    const {data, loading, error} = useFetch(url);

    const [isDarkMode, setIsDarkMode] = useLocalStorage('dark', false);
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  return (
    <div style={{
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#333',
      padding: '20px',
      marginTop: '10px',
    }}>
      {/* useFetch code */}
      {loading && <h2>Loading....</h2>}
      {error && <h2>Error: Something went Wrong</h2>}
      <div>
        {data.map((e, i)=>{
            return <pre key={i}>{e.title}</pre>
        })}
      </div>

      {/* useLocalStorage */}
      <label>Dark Mode 
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      </label>
    </div>
  );
}

export default Home;
