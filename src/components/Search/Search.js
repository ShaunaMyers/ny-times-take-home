import './Search.css';
import { useState } from 'react';

const Search = () => {

    const [searchInput, setSearchInput] = useState('')


    return ( 
        <section>
            <form>
                <input onChange={(e) => setSearchInput(e.target.value)} placeholder="Search by title or description" type="text" value={searchInput}></input>
                <button>Search</button>
            </form>
        </section>
     );
}
 
export default Search;