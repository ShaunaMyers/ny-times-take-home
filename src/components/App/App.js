import './App.css';
import { useState, useEffect } from 'react';
import Articles from '../Articles/Articles';
// import { getArticles } from '../../apiCalls';
import { sampleArticles } from '../../sampleArticleData';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(sampleArticles.results)
    // setFeatureArticle(sampleArticles.results[0])
    // getArticles()
    //   .then(data => setArticles(data.results))
    //   .catch(error => console.log(error.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Happnins'</h1>
      </header>
      <main>
        <Articles articles={articles}/>
      </main>
    </div>
  );
}

export default App;
