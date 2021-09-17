const FeatureArticle = ({ article }) => {
    
    return ( 
        <section>
            <h2>{article && article.title}</h2>
            <img src={article && article.multimedia[0].url}/>
        </section>
     );
}
 
export default FeatureArticle;