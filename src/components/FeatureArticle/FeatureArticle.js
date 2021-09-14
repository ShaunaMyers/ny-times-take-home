const FeatureArticle = (props) => {

    const { title = '' } = props.article;
    const { url = ''} = props.multimedia[2];

    return ( 
        <section>
            <h2>{title}</h2>
            <img src={url}/>
        </section>
     );
}
 
export default FeatureArticle;