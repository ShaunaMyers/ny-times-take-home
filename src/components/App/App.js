import './App.css';
import { useState, useEffect } from 'react';
import AllArticles from '../AllArticles/AllArticles';
import ArticleView from '../ArticleView/ArticleView';
import Search from '../Search/Search';
import Error from '../Error/Error';
import { Route, NavLink } from 'react-router-dom';
import { getArticles } from '../../apiCalls';

function App() {

  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchMessage, setSearchMessage] = useState('')
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    getArticles()
      .then(data => setArticles(data.results))
      .catch(() => setError('Oops, problem loading articles. Please refresh the page.'))
  }, [])

  const displaySearchResults = (searchInput) => {
    setSearchMessage('');
    let foundArticles = []

    const foundByTitle = articles.filter(article => article.title.toLowerCase().split(' ').includes(searchInput.toLowerCase()))
    foundByTitle.length && foundArticles.push(...foundByTitle)

    const foundByAbstract = articles.filter(article => article.abstract.toLowerCase().split(' ').includes(searchInput.toLowerCase()))

    if (foundByAbstract.length) {
      foundByAbstract.forEach(article => {
        !foundArticles.includes(article) && foundArticles.push(article);
      })
    }
    if (!foundArticles.length) {
      setSearchMessage('No results match your search. Please try again.')
    } else {
      setFilteredArticles(foundArticles);
    }
  }

  const handleClearResults = () => {
    setFilteredArticles([])
  }

  return (
    <div className="App">
      <Route exact path="/" render={() => {
        return (
          <>
          <header>
            <h1>Your Happnins'</h1>
          </header>
          <main>
            {searchMessage && <p className="search-message">{searchMessage}</p>}
            {error ?
            <Error error={error}/> :
            <Search displaySearchResults={displaySearchResults} handleClearResults={handleClearResults} filteredArticles={filteredArticles}/>
            }
            {!filteredArticles.length ?
              <section className="main-article-section">
                <AllArticles articles={articles}/>
              </section> :
              <AllArticles articles={filteredArticles}/>
            }
            {!articles.length && 
            !error && <p className="loading-message">Loading...</p>
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
                <NavLink to="/" className="details-header-link">
                  <h1>Your Happnins'</h1>
                </NavLink>
                <NavLink to="/" className="return-home-navlink">
                  <button className="return-home-button">Return Home</button>
                </NavLink>
              </header>
                <ArticleView article={foundArticle}/>
            </section>
          )
      }}/>
    </div>
  );
}

export default App;
