import './Search.css';
import { useState } from 'react';

const Search = ({ displaySearchResults }) => {

    const [searchInput, setSearchInput] = useState('')


    return ( 
        <section>
            <form>
                <input onChange={(e) => setSearchInput(e.target.value)} placeholder="Search by title or description" type="text" value={searchInput}></input>
                <button onClick={() => displaySearchResults(searchInput)}>Search</button>
            </form>
        </section>
     );
}
 
export default Search;