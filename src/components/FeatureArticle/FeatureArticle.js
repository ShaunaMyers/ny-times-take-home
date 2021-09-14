const FeatureArticle = (props) => {

    const { article = {} } = props;

    return ( 
        <section>
            <h2>{article.title}</h2>
        </section>
     );
}
 
export default FeatureArticle;