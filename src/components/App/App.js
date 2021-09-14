import './App.css';
import { useState, useEffect } from 'react';
import AllArticles from '../AllArticles/AllArticles';
import ArticleView from '../ArticleView/ArticleView';
import Search from '../Search/Search';
import { Route } from 'react-router-dom';
// import { getArticles } from '../../apiCalls';
import { sampleArticles } from '../../sampleArticleData';
// import FeatureArticle from '../FeatureArticle/FeatureArticle';

function App() {

  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    setArticles(sampleArticles.results)
    // setFeatureArticle(sampleArticles.results[0])
    // getArticles()
    //   .then(data => setArticles(data.results))
    //   .catch(error => console.log(error.message))
  }, [])

  const displaySearchResults = (searchInput) => {
    let foundArticles = []
    const foundByTitle = articles.filter(article => article.title.toLowerCase().split(' ').includes(searchInput.toLowerCase()))
    foundByTitle.length && foundArticles.push(...foundByTitle)
    const foundByAbstract = articles.filter(article => article.abstract.toLowerCase().split(' ').includes(searchInput.toLowerCase()))
    if (foundByAbstract.length) {
      foundByAbstract.forEach(article => {
        !foundArticles.includes(article) && foundArticles.push(article);
      })
    }
    setFilteredArticles(foundArticles);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Happnins'</h1>
      </header>
      {!articles.length && <p>Loading...</p>}
      <Route exact path="/" render={() => {
        return (
          <main>
            <Search displaySearchResults={displaySearchResults}/>
            {!filteredArticles.length ?
              <AllArticles articles={articles}/> :
              <AllArticles articles={filteredArticles}/>
            }
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
