import './AllArticles.css';
import Article from '../Article/Article';
import ArticleView from '../ArticleView/ArticleView';
// import FeatureArticle from '../FeatureArticle/FeatureArticle';
// import { Route } from 'react-router-dom';


const AllArticles= ({ articles }) => {

    // const featuredArticle = articles[0];

    console.log('articles in all', articles)

    const allArticles = articles.map(article => {
        return <Article key={article.title} title={article.title} image={article.multimedia[2].url}/>
    })


    return ( 
        <section className="all-articles">
            <article className="right-articles">
                {allArticles}
            </article>
        </section>
     );
}
 
export default AllArticles;