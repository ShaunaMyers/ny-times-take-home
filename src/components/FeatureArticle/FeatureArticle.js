import './FeatureArticle.css'

const FeatureArticle = ({ article }) => {

    const formatDate = () => {
        const separateDate = article.published_date.split('T')
        const splitDate = separateDate[0].split('-')
        return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
    }
    
    return ( 
        <>
        {article &&
        <section className="feature-article-section">
            <h2>{article.title}</h2>
            <img src={article.multimedia[0].url} alt="caption here"/>
            <div className="full-article-view">
                <p className="small-details">{article.byline}</p>
                <p className="small-details">{formatDate()}</p>
                <p className="feature-abstract">{article.abstract}</p>
                <p className="small-details">Read full article <a href={article.url}>here</a></p>
                </div>
        </section>
        }
        </>
     );
}
 
export default FeatureArticle;