import './Search.css';
import { useState } from 'react';

const Search = ({ displaySearchResults, handleClearResults, filteredArticles }) => {

    const [searchInput, setSearchInput] = useState('')

    const handleSearchResults = (e) => {
        e.preventDefault();
        displaySearchResults(searchInput);
    }

    return ( 
        <section className="form-section">
            <form>
                <input onChange={(e) => setSearchInput(e.target.value)} placeholder="Search by title or description" type="text" value={searchInput}></input>
                <button className="search-button" onClick={handleSearchResults}>Search</button>
            </form>
                {!!filteredArticles.length &&
                <button onClick={handleClearResults} className="show-all-button">Show All Articles</button>
                }
        </section>
     );
}
 
export default Search;