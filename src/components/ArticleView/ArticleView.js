const ArticleView = ({ title, image }) => {
    return ( 
        <article>
            <h2>{title}</h2>
            <img src={image}/>
        </article>
     );
}
 
export default ArticleView;