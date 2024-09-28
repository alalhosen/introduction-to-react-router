
const Post = ({post}) => {
    const {id, title}=post;
    const userStyle = {
        border: '3px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div>
            <h4>Post of Id:{id}</h4>
            <p>{title}</p>
        </div>
    );
};

export default Post;