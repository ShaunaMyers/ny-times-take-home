import './Article.css';
import { NavLink } from 'react-router-dom';

const Article = ({ title, image }) => {
    return ( 
        <article>
            <NavLink to={`/${title}`} className="single-article">
                <img src={image} alt="caption here"/>
                <div className="single-article-title">
                    <h2>{title}</h2>
                </div>
            </NavLink>
        </article>
     );
}
 
export default Article;