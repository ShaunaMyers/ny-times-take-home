import './Article.css';
import { Link } from 'react-router-dom';

const Article = ({ title, image }) => {
    console.log('title', title)
    return ( 
        <article>
            <Link to={`/${title}`}>
                <h2>{title}</h2>
                <img src={image}/>
            </Link>
        </article>
     );
}
 
export default Article;