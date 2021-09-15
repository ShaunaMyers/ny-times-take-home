import './App.css';
import { useState, useEffect } from 'react';
import AllArticles from '../AllArticles/AllArticles';
import ArticleView from '../ArticleView/ArticleView';
import Search from '../Search/Search';
import { Route, Link } from 'react-router-dom';
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
      {!articles.length && <p>Loading...</p>}
      <Route exact path="/" render={() => {
        return (
          <>
          <header className="App-header">
            <h1>Your Happnins'</h1>
          </header>
          <main>
            <Search displaySearchResults={displaySearchResults}/>
            {!filteredArticles.length ?
              <AllArticles articles={articles}/> :
              <AllArticles articles={filteredArticles}/>
            }
          </main>
          </>
        )
      }}/>
      <Route exact path="/:title" render={({ match }) => {
          const selectedTitle = match.params.title
          const foundArticle = articles.find(article => article.title === selectedTitle)
          return (
            <section>
              <header className="article-view-header">
                <h1>Your Happnins'</h1>
                <Link to="/" className="return-home-link">
                  <button className="return-home-button">Return Home</button>
                </Link>
              </header>
                <ArticleView article={foundArticle}/>
            </section>
          )
      }}/>
    </div>
  );
}

export default App;
