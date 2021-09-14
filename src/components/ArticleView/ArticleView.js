import './ArticleView.css'

const ArticleView = (props) => {

    const { article = {} } = props

    console.log('artice view', article)
    return ( 
        <article className="detailed-article-view">
            <div className="left-article-view">
                <img src={article.multimedia[0].url}/>
            </div>
            <div className="right-article-view">
                <h3>{article.title}</h3>
                <p className="small-details">{article.byline}</p>
                <p className="small-details">{article.published_date}</p>
                <p>{article.abstract}</p>
                <p className="small-details">Read full article <a href={article.url}>here</a></p>
            </div>
        </article>
     );
}
 
export default ArticleView;