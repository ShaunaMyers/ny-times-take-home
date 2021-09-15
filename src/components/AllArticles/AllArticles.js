import './AllArticles.css';
import Article from '../Article/Article';

const AllArticles= ({ articles }) => {

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