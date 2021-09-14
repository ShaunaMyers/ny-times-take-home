import './App.css';
import { useState, useEffect } from 'react';
import Articles from '../Articles/Articles';
import { getArticles } from '../../apiCalls';
import { sampleArticles } from '../../sampleArticleData';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(sampleArticles.results)
    // getArticles()
    //   .then(data => setArticles(data.results))
    //   .catch(error => console.log(error.message))
  }, [articles])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Happnins'</h1>
        <Articles articles={articles}/>
      </header>
    </div>
  );
}

export default App;
