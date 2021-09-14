const FeatureArticle = ({ articles }) => {

    const featuredArticle = articles[0];
    // const { article = {} } = props.article;
    console.log('article in feature', featuredArticle);
    return ( 
        <section>
            {/* <h2>hi</h2> */}
            <h2>{featuredArticle.title}</h2>
            {/* <img src={url}/> */}
        </section>
     );
}
 
export default FeatureArticle;