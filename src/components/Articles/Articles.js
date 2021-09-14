import ArticleView from "../ArticleView/ArticleView"


const Articles= ({ articles }) => {

    const allArticles = articles.map(article => {
        return <ArticleView key={article.title} title={article.title}/>
    })

    return ( 
        <>
            {allArticles}
        </>
     );
}
 
export default Articles;