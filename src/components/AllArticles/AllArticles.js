import './AllArticles.css';
import Article from '../Article/Article';
import FeatureArticle from '../FeatureArticle/FeatureArticle';

const AllArticles= ({ articles }) => {

    const allArticles = articles.slice(1).map(article => {
        return <Article key={article.title} title={article.title} image={article.multimedia[2].url}/>
    })


    return ( 
        <section className="all-articles">
                <FeatureArticle article={articles[0]}/>
            <article className="right-articles">
                {allArticles}
            </article>
        </section>
     );
}
 
export default AllArticles;