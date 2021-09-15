import './ArticleView.css'

const ArticleView = ({ article }) => {

    const formatDate = () => {
        const separateDate = article.published_date.split('T')
        const splitDate = separateDate[0].split('-')
        return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
    }

    console.log('artice view', article)
    return ( 
        <article className="detailed-article-view">
            <div className="left-article-view">
                <img src={article.multimedia[0].url} alt="caption here"/>
            </div>
            <div className="right-article-view">
                <h3>{article.title}</h3>
                <p className="small-details">{article.byline}</p>
                <p className="small-details">{formatDate()}</p>
                <p>{article.abstract}</p>
                <p className="small-details">Read full article <a href={article.url}>here</a></p>
            </div>
        </article>
     );
}
 
export default ArticleView;