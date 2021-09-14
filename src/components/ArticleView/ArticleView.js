const ArticleView = (props) => {

    const { article = {} } = props

    console.log('artice view', article)
    return ( 
        <article>
            <h3>{article.title}</h3>
            <img src={article.multimedia[2].url}/>
        </article>
     );
}
 
export default ArticleView;