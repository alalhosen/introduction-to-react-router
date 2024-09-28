
const Post = ({post}) => {
    const {id, title}=post;
    return (
        <div>
            <h4>Post of Id:{id}</h4>
            <p>{title}</p>
        </div>
    );
};

export default Post;