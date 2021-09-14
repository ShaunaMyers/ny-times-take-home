import './ArticleView.css'

const ArticleView = (props) => {

    const { article = {} } = props

    console.log('artice view', article)
    return ( 
        <article className="detailed-article-view">
            <div className="left-article-view">
                <img src={article.multimedia[4].url}/>
            </div>
            <div className="right-article-view">
                <h3>{article.title}</h3>
            </div>
        </article>
     );
}
 
export default ArticleView;