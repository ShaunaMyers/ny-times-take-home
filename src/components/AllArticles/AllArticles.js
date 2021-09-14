import './AllArticles.css';
import Article from "../Article/Article"
// import FeatureArticle from '../FeatureArticle/FeatureArticle';
import { Route, Link } from 'react-router-dom';


const AllArticles= ({ articles }) => {

    // const featuredArticle = articles[0];

    const allArticles = articles.map(article => {
        return <Article key={article.title} title={article.title} image={article.multimedia[2].url}/>
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
 
export default AllArticles;