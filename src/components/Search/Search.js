import './Search.css';
import { useState } from 'react';

const Search = ({ displaySearchResults, handleClearResults, filteredArticles }) => {

    const [searchInput, setSearchInput] = useState('')

    const handleSearchResults = (e) => {
        e.preventDefault();
        displaySearchResults(searchInput);
    }

    return ( 
        <section>
            <form>
                <input onChange={(e) => setSearchInput(e.target.value)} placeholder="Search by title or description" type="text" value={searchInput}></input>
                <button onClick={handleSearchResults}>Search</button>
                {!!filteredArticles.length &&
                    <button onClick={handleClearResults}>Show All Articles</button>
                }
            </form>
        </section>
     );
}
 
export default Search;