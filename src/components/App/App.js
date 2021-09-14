import './App.css';
import { useState, useEffect } from 'react';
import AllArticles from '../AllArticles/AllArticles';
import ArticleView from '../ArticleView/ArticleView';
import { Route } from 'react-router-dom';
// import { getArticles } from '../../apiCalls';
import { sampleArticles } from '../../sampleArticleData';
// import FeatureArticle from '../FeatureArticle/FeatureArticle';

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
      {!articles.length && <p>Loading...</p>}
      <Route exact path="/" render={() => {
        return (
          <main>
            <AllArticles articles={articles}/>
            {/* <FeatureArticle articles={articles}/> */}
          </main>
        )
      }}/>
      <Route exact path="/:title" render={({ match }) => {
          console.log('here')
          const selectedTitle = match.params.title
          console.log('selected title', selectedTitle)
          const foundArticle = articles.find(article => article.title === selectedTitle)
          console.log('found article', foundArticle)
          return (
              <ArticleView article={foundArticle}/>
          )
      }}/>
    </div>
  );
}

export default App;
