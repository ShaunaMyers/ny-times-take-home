import './Articles.css';
import ArticleView from "../ArticleView/ArticleView"
import FeatureArticle from '../FeatureArticle/FeatureArticle';
import { Route, Link } from 'react-router-dom';


const Articles= ({ articles }) => {

    // const featuredArticle = articles[0];

    const allArticles = articles.map(article => {
        return <ArticleView key={article.title} title={article.title} image={article.multimedia[2].url}/>
    })


    return ( 
        <section className="all-articles">
            <article className="feature-article">
                {/* <FeatureArticle article={featuredArticle}/> */}
            </article>
            <article className="right-articles">
                {allArticles}
            </article>
        </section>
     );
}
 
export default Articles;