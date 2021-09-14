import './Article.css';
import { Link } from 'react-router-dom';

const Article = ({ title, image }) => {
    return ( 
        <article>
            <Link to={`/${title}`} className="single-article">
                <img src={image}/>
                <div className="single-article-title">
                    <h2>{title}</h2>
                </div>
            </Link>
        </article>
     );
}
 
export default Article;