import './Error.css';

const Error = ({ error }) => {
    return ( 
        <article>
            <p className="error-message">{error}</p>
        </article>
     );
}
 
export default Error;