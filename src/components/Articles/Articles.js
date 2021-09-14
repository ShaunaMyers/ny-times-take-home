import './Articles.css';
import ArticleView from "../ArticleView/ArticleView"
// import FeatureArticle from '../FeatureArticle/FeatureArticle';


const Articles= ({ articles }) => {

    console.log('articles', articles)
    console.log('index zero', articles[0])

    const allArticles = articles.map(article => {
        return <ArticleView key={article.title} title={article.title} image={article.multimedia[2].url}/>
    })


    return ( 
        <section className="all-articles">
            <article className="feature-article">
                {/* <FeatureArticle article={articles[0]}/> */}
            </article>
            <article className="right-articles">
                {allArticles}
            </article>
        </section>
     );
}
 
export default Articles;